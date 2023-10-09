interface CardStatisticProps {
  title: string;
  src: string;
  desc: string;
}

const CardStatistic = ({ title, src, desc }: CardStatisticProps) => {
  return (
    <div className="cardstatistic__wrap">
      <div className="cardstatistic px-[30px] pt-[80px] pb-[30px] text-center">
        <span className="cardstatic__img">
          <img src={src} alt="icon" />
        </span>
        <h3 className="cardstatistic__title mb-[15px]">{title}</h3>
        <p className="cardstatistic__desc">{desc}</p>
      </div>
    </div>
  );
};

export default CardStatistic;
