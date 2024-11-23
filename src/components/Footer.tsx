export default function Footer() {
  return (
    <footer className='footer'>
      <div className="footer__wrapper | wrapper">
        <div className="footer__links">
          <div className="footer__link | github">
            <a href="https://github.com/nativesass/nativesass">
              <i className="fa-brands fa-github" aria-hidden></i>
            </a>
            
            <a href="https://github.com/nativesass/nativesass">GitHub</a>
          </div>

          <div className="footer__link | sponsor">
            <a href="https://github.com/sponsors/filipe-2">
              <i className="fa-regular fa-heart" aria-hidden></i>
            </a>

            <a href="https://github.com/sponsors/filipe-2">Sponsor</a>
          </div>
        </div>

        <div className="footer__copyright">
          <p>Copyright &copy; 2024 | <span>Native Sass</span></p>
        </div>
      </div>
    </footer>
  );
}
