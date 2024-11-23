export default function Aside() {
  return (
    <aside className='aside'>
      <nav className='aside__wrapper | wrapper'>
        <ul className='aside__topics'>
          <li className='aside__topic'>
            <div className='aside__topic-title'>
              <a href="#getting-started">Getting Started</a>
            </div>

            <ul className='aside__topic-items'>
              <li className='aside__topic-item'><a href="#overview">What is NativeSass?</a></li>
              <li className='aside__topic-item'><a href="setup">Installation Setup</a></li>
            </ul>
          </li>

          <li className='aside__topic'>
            <div className='aside__topic-title'>
              <a href="#getting-started">Features</a>
            </div>

            <ul className='aside__topic-items'>
              <li className='aside__topic-item'><a href="#nesting">Nesting</a></li>
              <li className='aside__topic-item'><a href="#shared-styles">Shared Styles</a></li>
              <li className='aside__topic-item'><a href="#shorthands">Logical Properties</a></li>
              <li className='aside__topic-item'><a href="#shorthands">Shorthand Properties</a></li>
            </ul>
          </li>

          <li className='aside__topic'>
            <div className='aside__topic-title'>
              <a href="#getting-started">Mimicking</a>
            </div>

            <ul className='aside__topic-items'>
              <li className='aside__topic-item'><a href="#nesting">Mixins</a></li>
              <li className='aside__topic-item'><a href="#shared-styles">Functions</a></li>
              <li className='aside__topic-item'><a href="#shorthands">Maps</a></li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
