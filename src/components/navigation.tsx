import { navData } from "../data/navigation";
import { LinkType } from "../types/global";

const renderLinks = (data: LinkType[]) => {
  return data.map((link: LinkType) => {
    return (
      <>
        <a key={link.href} href={link.href}>
          {link.text}
        </a>
      </>
    );
  });
};

const Navigation = () => {
  return (
    <>
      <nav>{renderLinks(navData)}</nav>
    </>
  );
};
export default Navigation;
