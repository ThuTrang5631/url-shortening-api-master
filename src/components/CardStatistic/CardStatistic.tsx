import iconBrandRecognition from "../../assets/icon-brand-recognition.svg";

interface CardStatisticProps {
  title: string;
  src: string;
  desc: string;
}

const CardStatistic = ({ title, src, desc }: CardStatisticProps) => {
  return (
    <div className="cardstatistic px-[20px] pt-[80px] pb-[20px] text-center">
      <span className="cardstatic__img">
        <img src={iconBrandRecognition} alt="icon" />
      </span>
      <h3 className="cardstatistic__title mb-[15px]">{title}</h3>
      <p className="cardstatistic__desc">{desc}</p>
    </div>
  );
};

export default CardStatistic;
