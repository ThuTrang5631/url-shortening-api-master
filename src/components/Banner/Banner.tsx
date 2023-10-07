import illustrationWorking from "../../assets/illustration-working.svg";
import Button from "../Button";

const Banner = () => {
  return (
    <section className="banner min-[768px]:flex min-[768px]:items-center mb-[40px]">
      <div className="banner__image pl-[20px] mb-[40px] min-[768px]:order-2 min-[768px]:pl-[0]">
        <img src={illustrationWorking} alt="illustration working"></img>
      </div>
      <div className="banner__content px-[20px] min-[768px]:px-[0] min-[768px]:order-1 min-[768px]:pl-[20px] min-[992px]:pl-[50px] min-[1440px]:pl-[100px]">
        <h1 className="banner__title mb-[10px]">
          More than just shorter links
        </h1>
        <p className="banner__desc mb-[20px]">
          Build your brand’s recognition and get detailed insights on how your
          links are performing.
        </p>
        <Button className="banner__btn">Get Started</Button>
      </div>
    </section>
  );
};
export default Banner;
