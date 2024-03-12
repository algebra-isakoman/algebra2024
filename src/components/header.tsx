import Navigation from "./navigation";

const Header = () => {
  return (
    <>
      <header className="header">
        <img
          className="header__logo"
          src="https://source.unsplash.com/random?logo"
          alt="Logo image"
        />
        <Navigation />
      </header>
    </>
  );
};
export default Header;
