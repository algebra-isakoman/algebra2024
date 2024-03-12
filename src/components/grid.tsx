import { ReactNode } from "react";

type Props = {
  columns?: number;
  marginBottom?: number;
  children: ReactNode;
};

const Grid = ({ columns = 2, marginBottom = 0, children }: Props) => {
  return (
    <div
      style={{
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        marginBottom: marginBottom + "rem",
      }}
      className="grid"
    >
      {children}
    </div>
  );
};
export default Grid;
