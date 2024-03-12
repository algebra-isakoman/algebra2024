type Props = {
  imgUrl: string;
  text: string;
  isReversed?: boolean;
};
const Section = ({ imgUrl, text, isReversed = false }: Props) => {
  return (
    <>
      <div
        className="section"
        style={{ flexDirection: isReversed ? "row-reverse" : "row" }}
      >
        <img className="section__img" src={imgUrl} alt="Section image" />
        <p className="section__text">{text}</p>
      </div>
    </>
  );
};

export default Section;
