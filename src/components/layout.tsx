import { Fragment, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <Fragment>
      <div className="layout">{children}</div>
    </Fragment>
  );
};

export default Layout;
