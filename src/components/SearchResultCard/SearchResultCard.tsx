import Button from "../Button";

interface SearchResultCardProps {
  urlToCovert?: string;
  urlAfterCovert?: string;
  contentButton?: string;
  onClick: any;
  className?: string;
  onClickDelete: any;
}

const SearchResultCard = ({
  urlToCovert,
  urlAfterCovert,
  contentButton,
  onClick,
  className,
  onClickDelete,
}: SearchResultCardProps) => {
  return (
    <div className="searchresultcard py-[10px] rounded-[5px]">
      <Button onClick={onClickDelete} className="searchresultcard__delete">
        <span>x</span>
      </Button>
      <p className="searchresultcard__url px-[10px] py-[5px]">{urlToCovert}</p>
      <div className="searchresultcard__containurlresult px-[10px]">
        <p className="searchresultcard__urlresult">{urlAfterCovert}</p>
        <Button
          className={`searchresultcard__btn p-[8px] ${className}`}
          onClick={onClick}
        >
          {contentButton}
        </Button>
      </div>
    </div>
  );
};

export default SearchResultCard;
