import logo from './logo.svg';
import './App.css';
import NewAndNotable from './components/new&notable'
import { useState } from 'react';

function App() {
  const header = {
    display: 'flex',
  }

  const headerLogo = {
    padding: '29px 140px 29px 44px',
    background: 'linear-gradient(to right,#e23826 0%,#f3701d 100%)',
  }

  const headerLogoImg = {
    width: '181px',
    height: '40px',
  }

  const headerMenuContainer = {
    marginRight: '36px',
    width: '650px',
    display: 'flex',
  }

  const headerSocial = {
    width: '150px',
    display: 'flex',
    justifyContent: 'space-between',
  }

  const sources = [
    { name: 'Library Office Security Administration', class: 'slideshow-container-item img-1'},
    { name: 'Distructing History: Things You Didn\'t Know', class: 'slideshow-container-item img-2' },
    { name: 'How The Rocky Mountains Were Discovered', class: 'slideshow-container-item img-3' },
  ]

  const sourcesItems = sources.map((item, i) => <div key={i} className={item.class}> <div className="overlay"></div> <div className="main-item-desc">{item.name}</div> </div>)

  const [authStyle, setAuthStyle] = useState({display: 'none'})
  document.addEventListener("keydown", function (event) {
    if (event.key == "z" && event.ctrlKey == true) {
      setAuthStyle({ display: 'block'})
    } else if (event.key == "x" && event.ctrlKey == true) {
      setAuthStyle({ display: 'none'})
    }
  })

  const [isAuth, setIsAuth] = useState('false')

  const checkAuth = () => {
    if (isAuth == true) {
      setIsAuth(false)
    } else setIsAuth(true)
  }

  const authProfile = {
    display: isAuth == true ? 'block' : 'none',
    position: 'absolute',
    top: '-6px',
    left: '-100px',
    color: '#f3701d',
    textDecoration: 'underline',
  }

  return (
    <>
      <header style={header}>
        <div className="header-logo" style={headerLogo}>
          <img src="https://scientia.themerex.net/wp-content/uploads/2018/01/logo-inv-retina.png" style={headerLogoImg}></img>
        </div>
        <div className="header-menu">
          <ul className="header-menu-container" style={headerMenuContainer}>
            <li><a href="#" style={authProfile}>Profile: Alnur</a></li>
            <li><input onChange={checkAuth} type="checkbox" style={authStyle}></input></li>
            <li><a href="#">Home</a></li>
            <li><a href="#">Pages</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">News</a></li>
            <li><a href="#">Spaces&Rooms</a></li>
            <li><a href="#">Store</a></li>
          </ul>
          <div className="header-social" style={headerSocial}>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><path fill-rule="evenodd" d="M63.855,127.939c-16.545-0.216-30.372-5.722-42.402-16.541C6.437,97.893-0.699,81.239,0.054,61.218C0.38,52.54,1.948,43.902,6.141,36.243c7.289-13.31,17.067-24.34,31.36-30.593c16.157-7.068,32.492-7.313,49.052-1.409c13.254,4.725,23.423,13.403,31.01,24.928c14.909,22.653,13.893,52.821-3.35,74.244c-10.775,13.387-24.475,21.235-41.277,23.903C69.806,127.813,66.589,127.764,63.855,127.939z M63.601,119.528c4.947-0.452,9.928-0.677,14.833-1.413c6.087-0.913,7.609-3.219,6.075-9.091c-2.707-10.359-5.62-20.664-8.474-30.984c-1.312-4.747-3.337-5.716-7.89-3.537c-4.024,1.925-7.992,3.982-11.872,6.183c-10.036,5.694-18.189,13.399-24.397,23.161c-1.445,2.274-1.846,4.22,0.816,5.816C42.212,115.372,52.084,119.977,63.601,119.528z M9.063,68.754c-0.757,8.225,6.624,23.528,11.212,29.18c1.763,2.171,3.325,2.443,5.117-0.097c1.957-2.776,3.928-5.62,6.337-7.982c5.167-5.065,10.226-10.387,16.07-14.567c5.278-3.773,11.462-6.343,17.416-9.072c2.084-0.955,4.256-1.409,3.961-4.163c-0.432-4.031-3.715-7.587-6.38-7.007c-4.318,0.94-8.538,2.497-12.894,3.064c-11.335,1.474-22.695,2.913-34.092,3.666C7.321,62.337,9.147,62.396,9.063,68.754z M10.714,49.581c0.049,3.143,1.421,4.282,3.985,3.922c1.508-0.212,3.009-0.486,4.519-0.701c12.832-1.828,25.668-3.633,38.497-5.486c2.66-0.384,3.611-1.692,1.987-4.212c-5.503-8.547-11.032-17.08-16.446-25.683c-1.842-2.926-3.801-3.006-6.684-1.418c-6.59,3.632-11.95,8.612-16.73,14.304C14.971,36.106,12.596,43.06,10.714,49.581z M56.314,8.165c-1.326,0.823-2.969,1.407-3.846,2.569c-0.447,0.594,0.22,2.384,0.823,3.361c5.539,8.97,11.127,17.913,16.857,26.76c0.573,0.883,2.476,1.805,3.292,1.49c9.611-3.715,18.304-8.914,25.288-16.649c1.573-1.742,1.556-3.502-0.482-4.86c-3.382-2.253-6.688-4.684-10.284-6.538C78.137,9.234,67.458,8.513,56.314,8.165z M118.759,58.107c-0.838-9.409-4.478-18.528-10.229-26.882c-1.387-2.015-2.672-2.004-4.244-0.234c-1.435,1.615-2.773,3.444-4.525,4.625c-6.777,4.567-13.754,8.836-20.526,13.411c-1.248,0.844-2.677,2.626-2.623,3.916c0.087,2.047,0.967,4.347,2.238,5.97c1.076,1.372,3.136,2.625,4.842,2.743c10.006,0.69,20.042,0.906,30.051,1.548C117.995,63.477,118.821,63.049,118.759,58.107z M84.356,70.569c3.516,13.129,6.914,25.822,10.271,38.36c0.988-0.055,1.257-0.015,1.484-0.095c0.356-0.124,0.705-0.295,1.018-0.505c11.647-7.837,17.552-19.388,20.923-32.535c0.765-2.982-1.136-4.38-3.714-4.575c-8.611-0.652-17.233-1.172-25.859-1.591C87.076,69.56,85.635,70.259,84.356,70.569z" clip-rule="evenodd" /></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" /></svg>
            </a>
            <a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
            </a>
          </div>
        </div>
      </header>
      <section className="main">
        <div className="slideshow-container">
          {sourcesItems}
          <div className="slideshow-container-btns">
            <a class="prev">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
              </svg>
            </a>
            <a class="next">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-caret-right" viewBox="0 0 16 16">
                <path d="M6 12.796V3.204L11.481 8 6 12.796zm.659.753 5.48-4.796a1 1 0 0 0 0-1.506L6.66 2.451C6.011 1.885 5 2.345 5 3.204v9.592a1 1 0 0 0 1.659.753z" />
              </svg>
            </a>
          </div>
        </div>
        <div className="main-info">
          <div className="main-search">
            <div className="main-search-input">
              <input placeholder="Search..."></input>
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
              </svg>
            </div>
          </div>
          <div className="main-hours">
            <sub>The library is open today</sub>
            <span>6:00 AM - 8:00 PM</span>
          </div>
        </div>
      </section>
      <NewAndNotable></NewAndNotable>
    </>
  );
}

export default App;