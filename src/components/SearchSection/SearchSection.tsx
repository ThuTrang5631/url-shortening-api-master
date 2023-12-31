import Button from "../Button";
import SearchResultCard from "../SearchResultCard";
import CardStatistic from "../CardStatistic";
import iconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/icon-fully-customizable.svg";
import { useState } from "react";
import { shortenUrl } from "../../utils/api";
import { REGEX_URL } from "../../utils/constant";

const data = [
  {
    title: "Brand Recognition",
    src: iconBrandRecognition,
    desc: "Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.",
  },
  {
    title: "Detailed Records",
    src: iconDetailedRecords,
    desc: "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
  },
  {
    title: "Fully Customizable",
    src: iconFullyCustomizable,
    desc: "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
  },
];

interface DataProps {
  originalLink: string;
  fullShortLink: string;
}

const SearchSection = () => {
  const [url, setUrl] = useState<string>("");
  const [error, setError] = useState<string>("");
  const dataCache = sessionStorage.getItem("value");
  const [listAfterShorten, setListAfterShorten] = useState<DataProps[]>(
    JSON.parse(dataCache!) ? JSON.parse(dataCache!) : []
  );

  const handleClickShorten = async (e: any) => {
    e.preventDefault();

    if (url === "") {
      setError("Please add a link");
    } else if (!REGEX_URL.test(url)) {
      setError("URL is invalid. Please enter link another");
    } else {
      try {
        const res = await shortenUrl(url);
        const data = res.data;
        console.log("res", data);
        setListAfterShorten([
          ...listAfterShorten,
          {
            originalLink: data.long_url,
            fullShortLink: data.short_url,
          },
        ]);

        setError("");
      } catch (error) {
        console.log(error);
        setError("Please enter link another");
      }
    }
  };

  sessionStorage.setItem("value", JSON.stringify(listAfterShorten));

  const handleClickCopy = async (urlCopy: string, e: any) => {
    console.log("urlCopy", urlCopy);
    try {
      await navigator.clipboard.writeText(urlCopy);
      e.target.textContent = "Copied!";
      e.target.classList.add("copied");
    } catch (error) {
      console.log(error);
    }

    setTimeout(() => {
      e.target.classList.remove("copied");
      e.target.textContent = "Copy";
    }, 5000);
  };

  const handleClickDelete = (shortenUrlDelete: string) => {
    setListAfterShorten(
      listAfterShorten.filter((item) => item.fullShortLink !== shortenUrlDelete)
    );
  };

  console.log("listaftershorten", listAfterShorten);

  return (
    <section className="searchsection">
      <div className="flex flex-col w-full container__app">
        <form className="searchsection__form p-[20px] rounded-[8px] min-[992px]:p-[50px] ">
          <div className="searchsection__wrapinput mb-[20px] min-[992px]:mb-[0px]">
            <input
              className={`searchsection__input w-full p-[15px] rounded-[5px] min-[992px]:mb-[0px] ${
                error && "searchsection__errorinput"
              }`}
              placeholder="Shorten a link here..."
              onChange={(e) => setUrl(e.target.value.trim())}
            ></input>
            {error && <p className="searchsection__error">{error}</p>}
          </div>
          <Button
            className="searchsection__btn p-[15px]"
            onClick={(e: any) => handleClickShorten(e)}
          >
            Shorten It!
          </Button>
        </form>
      </div>
      <div className="searchsection__content container__app pb-[80px]">
        <div className="searchsection__listresult">
          {listAfterShorten.map((item, index) => {
            return (
              <SearchResultCard
                key={index}
                urlAfterCovert={item.fullShortLink}
                urlToCovert={item.originalLink}
                contentButton="Copy"
                onClick={(e: any) => handleClickCopy(item.fullShortLink, e)}
                onClickDelete={() => handleClickDelete(item.fullShortLink)}
              />
            );
          })}
        </div>
        <div className="searchsection__advanced">
          <div className="searchsection__advancedcontent flex flex-col items-center">
            <h2 className="searchsection__advancedtitle mb-[20px] text-center">
              Advanced Statistics
            </h2>
            <p className="searchsection__advanceddesc text-center">
              Track how your links are performing across the web with our
              advanced statistics dashboard.
            </p>
          </div>
          <div className="searchsection__cardstatistic flex flex-col items-center">
            {data.map((item, id: number) => {
              return (
                <CardStatistic
                  key={id}
                  title={item.title}
                  src={item.src}
                  desc={item.desc}
                ></CardStatistic>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SearchSection;
