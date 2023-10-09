import Button from "../Button";
import SearchResultCard from "../SearchResultCard";
import CardStatistic from "../CardStatistic";
import iconBrandRecognition from "../../assets/icon-brand-recognition.svg";
import iconDetailedRecords from "../../assets/icon-detailed-records.svg";
import iconFullyCustomizable from "../../assets/icon-fully-customizable.svg";

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

const SearchSection = () => {
  return (
    <section className="searchsection">
      <div className="flex flex-col w-full container__app">
        <form className="searchsection__form p-[20px] rounded-[8px] min-[992px]:p-[50px] ">
          <input
            className="searchsection__input p-[15px] mb-[20px] rounded-[5px] min-[992px]:mb-[0px]"
            placeholder="Shorten a link here..."
          ></input>
          <Button className="searchsection__btn p-[15px]">Shorten It!</Button>
        </form>
      </div>
      <div className="searchsection__content container__app pb-[80px]">
        <div className="searchsection__listresult">
          {/* <SearchResultCard /> */}
        </div>
        <div className="searchsection__advanced">
          <div className="searchsection__advancedcontent flex flex-col items-center">
            <h3 className="searchsection__advancedtitle mb-[20px] text-center">
              Advanced Statistics
            </h3>
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
