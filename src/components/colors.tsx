type Props = {
  colors: string[];
};

const Colors = ({ colors }: Props) => {
  return (
    <>
      {colors.map((color) => {
        return (
          <div style={{ backgroundColor: color }} className="color">
            {color}
          </div>
        );
      })}
    </>
  );
};
export default Colors;
