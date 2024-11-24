export default function Header() {
  return (
    <header className='header'>
      <nav className="header__wrapper | wrapper">
        <div className="header__branding">
          <img className="header__logo" src="../../images/icon.png" alt="native sass logo" />

          <div className="header__title-wrapper">
            <h1>Native Sass</h1>
            <h2>Sass the React Native Way</h2>
          </div>
        </div>

        <div className="header__options">
          <a className='header__github' href="https://github.com/nativesass/nativesass">
            <i className="fa-brands fa-github" aria-hidden="true"></i>
          </a>

          <a className='header__sponsor' href="https://github.com/sponsors/filipe-2">
            <i className="fa-regular fa-heart" aria-hidden="true"></i>
          </a>

          <button className='header__theme-btn'>
            <i className="fa-regular fa-moon" aria-hidden="true"></i>
          </button>
        </div>
      </nav>
    </header >
  );
}
