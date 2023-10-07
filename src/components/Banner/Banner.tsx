import illustrationWorking from "../../assets/illustration-working.svg";

const Banner = () => {
  return (
    <section className="banner min-[768px]:flex min-[768px]:items-center">
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
        <button className="banner__btn py-[10px] px-[20px]">Get Started</button>
      </div>
    </section>
  );
};
export default Banner;
