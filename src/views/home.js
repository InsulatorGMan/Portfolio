import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Portfolio Page</title>
        <meta property="og:title" content="Portfolio Page" />
      </Helmet>
      <div data-role="Header" className="home-navbar-container">
        <div className="home-navbar">
          <span className="card-Heading home-heading">InsulatorGMan</span>
          <div data-type="BurgerMenu" className="home-burger-menu">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 256h768v86h-768v-86zM128 554v-84h768v84h-768zM128 768v-86h768v86h-768z"></path>
            </svg>
          </div>
          <div data-type="MobileMenu" className="home-mobile-menu">
            <div className="home-container01">
              <span className="card-Heading home-heading1">Logo</span>
              <div data-type="CloseMobileMenu" className="home-close-menu">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <div className="home-links-container">
              <span className="home-link navbar-Link">About</span>
              <span className="home-link1 navbar-Link">Experience</span>
              <span className="home-link2 navbar-Link">Portofolio</span>
              <span className="navbar-Link">Contact</span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator"></div>
      <div className="home-section-separator1"></div>
      <div className="home-container02">
        <div className="home-hero">
          <div className="home-hero-text-container">
            <h1 className="home-heading2">
              InsulatorGMan, Experienced Developer &amp; Developer 
            </h1>
            <span className="home-text section-Text">
              <span>
                c. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed
                augue semper porta. Mauris massa. Vestibulum lacinia arcu eget
                nulla. Class aptent taciti sociosqu ad litora torquent per
                conubia nostra, per inceptos himenaeos.
              </span>
            </span>
            <div className="home-cta-btn-container"></div>
          </div>
          <img
            alt="image"
            src="/playground_assets/profile-1500w.png"
            className="home-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-heading-container">
          <h2 className="home-text02 section-Heading">Deliverables</h2>
          <span className="home-text03 section-Text">
            Files I send when ordered 
          </span>
        </div>
        <div className="home-cards-container">
          <div className="home-card">
            <div className="home-icon-container">
              <svg viewBox="0 0 1024 1024" className="home-icon04">
                <path d="M0 64v640h1024v-640h-1024zM960 640h-896v-512h896v512zM672 768h-320l-32 128-64 64h512l-64-64z"></path>
              </svg>
            </div>
            <div className="home-content-container">
              <span className="home-heading3 card-Heading">Development</span>
              <span className="home-text04 card-Text">
                3+ years of scripting experience with 40+ projects contributed
                to.
              </span>
            </div>
          </div>
          <div className="home-card1">
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1243.4285714285713 1024"
                className="home-icon06"
              >
                <path d="M365.714 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM329.143 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM950.857 932.571l219.429-109.714v-179.429l-219.429 93.714v195.429zM914.286 673.143l230.857-98.857-230.857-98.857-230.857 98.857zM658.286 505.714l219.429-94.286v-152l-219.429 93.714v152.571zM621.714 289.143l252-108-252-108-252 108zM1243.429 585.143v237.714c0 27.429-15.429 53.143-40.571 65.143l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-1.714-0.571-2.857-1.143-4-2.286-1.143 1.143-2.286 1.714-4 2.286l-256 128c-10.286 5.714-21.143 8-32.571 8s-22.286-2.286-32.571-8l-256-128c-25.143-12-40.571-37.714-40.571-65.143v-237.714c0-29.143 17.714-55.429 44.571-67.429l248-106.286v-228.571c0-29.143 17.714-55.429 44.571-67.429l256-109.714c9.143-4 18.857-5.714 28.571-5.714s19.429 1.714 28.571 5.714l256 109.714c26.857 12 44.571 38.286 44.571 67.429v228.571l248 106.286c27.429 12 44.571 38.286 44.571 67.429z"></path>
              </svg>
            </div>
            <div className="home-content-container1">
              <span className="home-heading4 card-Heading">3D Modeling</span>
              <span className="home-text05 card-Text">
                1+ years experience with 3D modeling and building.
              </span>
            </div>
          </div>
          <div className="home-card2">
            <div className="home-icon-container2">
              <svg viewBox="0 0 865.7188571428571 1024" className="home-icon08">
                <path d="M207.429 877.714l52-52-134.286-134.286-52 52v61.143h73.143v73.143h61.143zM506.286 347.429c0-7.429-5.143-12.571-12.571-12.571-3.429 0-6.857 1.143-9.714 4l-309.714 309.714c-2.857 2.857-4 6.286-4 9.714 0 7.429 5.143 12.571 12.571 12.571 3.429 0 6.857-1.143 9.714-4l309.714-309.714c2.857-2.857 4-6.286 4-9.714zM475.429 237.714l237.714 237.714-475.429 475.429h-237.714v-237.714zM865.714 292.571c0 19.429-8 38.286-21.143 51.429l-94.857 94.857-237.714-237.714 94.857-94.286c13.143-13.714 32-21.714 51.429-21.714s38.286 8 52 21.714l134.286 133.714c13.143 13.714 21.143 32.571 21.143 52z"></path>
              </svg>
            </div>
            <div className="home-content-container2">
              <span className="home-heading5 card-Heading">Design</span>
              <span className="home-text06">
                I have 2+ years experience with designing logos, GFX, game
                thumbnails, and styles of games.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing">
        <div className="home-heading-container1">
          <h1 className="home-text07">Pricing</h1>
        </div>
        <span className="home-text08">GFX</span>
        <div className="home-pricing-card-container">
          <div className="home-card3">
            <div className="home-card-heading">
              <span className="home-type anchor">Minimal</span>
              <span className="section-Heading">Basic</span>
            </div>
            <div className="home-card-content">
              <div className="home-feature">
                <span className="card-Text">Watermarked</span>
                <span className="home-limit">✔️</span>
              </div>
              <div className="home-feature1">
                <span className="card-Text">Low Resolution</span>
              </div>
              <div className="home-feature2">
                <span className="card-Text">Accessories</span>
                <span className="home-limit1">🚫</span>
              </div>
              <div className="home-feature3">
                <span className="card-Text">Visual Effects</span>
                <span className="home-limit2">🚫</span>
              </div>
              <button className="home-choose button anchor">100 R$</button>
            </div>
          </div>
          <div className="home-card4">
            <div className="home-card-heading1">
              <span className="home-type1 anchor">medium</span>
              <span className="section-Heading">Complex</span>
            </div>
            <div className="home-card-content1">
              <div className="home-container03">
                <span className="card-Text">Watermarked</span>
                <span className="home-text10">🚫</span>
              </div>
              <div className="home-container04">
                <span className="card-Text">Medium Resolution</span>
              </div>
              <div className="home-container05">
                <span className="card-Text">Accessories</span>
                <span className="home-text13 card-Text">2-3</span>
              </div>
              <div className="home-container06">
                <span className="card-Text">Visual Effects</span>
                <span className="home-text15 card-Text">1-2</span>
              </div>
              <button className="home-button anchor button">200 R$</button>
            </div>
          </div>
          <div className="home-card5">
            <div className="home-card-heading2">
              <span className="home-type2 anchor">Premium</span>
              <span className="section-Heading">Professional</span>
            </div>
            <div className="home-card-content2">
              <div className="home-container07">
                <span className="card-Text">Watermarked</span>
                <span className="home-text17">🚫</span>
              </div>
              <div className="home-container08">
                <span className="card-Text">High Resolution</span>
              </div>
              <div className="home-container09">
                <span className="card-Text">Accessories</span>
                <span className="home-text20 card-Text">UNLIMITED</span>
              </div>
              <div className="home-container10">
                <span className="card-Text">Visual Effects</span>
                <span className="home-text22 card-Text">UNLIMITED</span>
              </div>
              <button className="home-button1 anchor button">500-700 R$</button>
            </div>
          </div>
        </div>
        <span className="home-text23">SCRIPTING</span>
        <div className="home-pricing-card-container1">
          <div className="home-card6">
            <div className="home-card-heading3">
              <span className="home-type3 anchor">Minimal</span>
              <span className="section-Heading">Basic</span>
            </div>
            <div className="home-card-content3">
              <div className="home-feature4">
                <span className="card-Text">Days Spent</span>
                <span className="home-limit3">1-3</span>
              </div>
              <div className="home-container11">
                <span className="card-Text">Long Term Support</span>
                <span className="home-text25">🚫</span>
              </div>
              <button className="home-choose1 anchor button">500 R$</button>
            </div>
          </div>
          <div className="home-card7">
            <div className="home-card-heading4">
              <span className="home-type4 anchor">medium</span>
              <span className="section-Heading">Complex</span>
            </div>
            <div className="home-card-content4">
              <div className="home-container12">
                <span className="card-Text">Days Spent</span>
                <span className="home-text27">4-7</span>
              </div>
              <div className="home-container13">
                <span className="card-Text">Long Term Support</span>
                <span className="home-text29">🚫</span>
              </div>
              <button className="home-button2 button anchor">700 R$</button>
            </div>
          </div>
          <div className="home-card8">
            <div className="home-card-heading5">
              <span className="home-type5 anchor">Premium</span>
              <span className="section-Heading">Professional</span>
            </div>
            <div className="home-card-content5">
              <div className="home-container14">
                <span className="card-Text">Days Spent</span>
                <span className="home-text31">7-14</span>
              </div>
              <div className="home-container15">
                <span className="card-Text">Long Term Support</span>
                <span className="home-text33">✔️</span>
              </div>
              <button className="home-button3 button anchor">
                1.1K - 4.5K R$
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="home-section-separator2"></div>
      <div className="home-section-separator3"></div>
      <div className="home-section-separator4"></div>
      <div className="home-footer-container">
        <div className="home-footer">
          <div className="home-social-links">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M713.143 73.143c90.857 0 164.571 73.714 164.571 164.571v548.571c0 90.857-73.714 164.571-164.571 164.571h-107.429v-340h113.714l17.143-132.571h-130.857v-84.571c0-38.286 10.286-64 65.714-64l69.714-0.571v-118.286c-12-1.714-53.714-5.143-101.714-5.143-101.143 0-170.857 61.714-170.857 174.857v97.714h-114.286v132.571h114.286v340h-304c-90.857 0-164.571-73.714-164.571-164.571v-548.571c0-90.857 73.714-164.571 164.571-164.571h548.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon14">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
          </div>
          <div className="home-copyright-container">
            <svg viewBox="0 0 1024 1024" className="home-icon16">
              <path d="M512 854q140 0 241-101t101-241-101-241-241-101-241 101-101 241 101 241 241 101zM512 86q176 0 301 125t125 301-125 301-301 125-301-125-125-301 125-301 301-125zM506 390q-80 0-80 116v12q0 116 80 116 30 0 50-17t20-43h76q0 50-44 88-42 36-102 36-80 0-122-48t-42-132v-12q0-82 40-128 48-54 124-54 66 0 104 38 42 42 42 98h-76q0-14-6-26-10-20-14-24-20-20-50-20z"></path>
            </svg>
            <span className="anchor">Copyright, 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
