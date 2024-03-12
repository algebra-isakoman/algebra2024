import Navigation from "./navigation";

type Props = {};

const Header = ({}: Props) => {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src="https://source.unsplash.com/random?logo"
          alt="Random logo image"
        />
        <Navigation />
      </header>
    </>
  );
};
export default Header;
