import "./App.css";
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from "react-alice-carousel";
// import { menuItems } from "./menuItem";
import Navbar from "./componant/Navbar";
import img1 from "./image/hero-img01.jpg";
import img2 from "./image/hero-img02.jpg";
import img3 from "./image/hero-img03.jpg";
import img4 from "./image/hero-img04.jpg";
import finanImg from "./image/img-financial.jpg";
import quickImg from "./image/img-quickdownload.jpg";
import downloadImg from "./icon/icon-download.svg";
import rightArrow from "./icon/icon-right-arrow.svg";
import book from "./icon/icon-ar.svg";
import form from "./icon/icon-form56.svg";
import finan from "./icon/icon-financial.svg";
import imgBg from "./image/img-bg.png";

const handleChangeImg = (e) => {
  e.preventDefault();
};

const items = [
  <img src={img1} alt="" onDragStart={handleChangeImg} />,
  <img src={img2} alt="" onDragStart={handleChangeImg} />,
  <img src={img3} alt="" onDragStart={handleChangeImg} />,
  <img src={img4} alt="" onDragStart={handleChangeImg} />,
];

function App() {
  return (
    <div className="App">
      <header className="header-container">
        <nav className="nav-information">
          <ul>
            <li className="li-1">Go to Corporate Site</li>
            <li className="li-2">IR Calendar</li>
            <li className="li-3">Information Inquiry</li>
          </ul>

          <div>
            <div className="changelanguage">
              <p className="changelanguageTH">TH</p>
            </div>

            <p className="changelanguageEN">EN</p>
          </div>
        </nav>

        <div className="navbar-menus">
          {/* <button className="dropdown-one">COMPANY INFO</button>
          <button className="dropdown-two">FINANCIAL INFO</button>
          <button className="dropdown-three">STOCK INFO</button>
          <button className="dropdown-four">SHAREHOLDER INFO</button>
          <button className="dropdown-five">CORPORATE GOVERNANCE</button>
          <button className="dropdown-six">NEWS & PUBLICATIONS</button> */}
          <Navbar />
        </div>
      </header>

      {/* <section> */}
      <div className="section-background">
        <AliceCarousel autoPlay autoPlayInterval="10000" mouseTracking>
          {items}
        </AliceCarousel>
      </div>
      <p className="section-background-paragraph">
        DESIGN HOTELS RESORTS AND LIFESTYLE BUSINESSES WHERE CUSTOMERS FEEL GOOD
      </p>

      <div className="background-btn">
        <button>READ MORE</button>
      </div>
      {/* </section> */}

      <p className="main-paragraph">VERANDA RESORT PUBLIC COMPANY LIMITED</p>
      <p className="paragraph-container">
        The Group is committed to be a leading player in the hospitality
        industry. And real estate development. Restaurant business The focus is
        on customer destinations. And create a good experience. Recognizing the
        need for customers to think about the group. Is the beginning When
        customers want to rest. Want to have a shelter or eat and dessert. In
        order for the Group Sustainable growth in this industry.
      </p>
      <div>
        <button className="btn-paragraph">GENERAL INFORMATION</button>
        <button className="btn-paragraph-two">NATURE OF BUSINESS</button>
      </div>

      <section>
        <div className="financial-container">
          <img src={finanImg} alt="" />

          <p className="financial-header">FINANCIAL HIGHLIGHTS</p>
          <p className="financial-header-two">
            Q2/2018 Earnings - Excellent performance
          </p>

          <div className="financial-block">
            <div className="block-one">
              <p className="block-head">Total Revenue</p>
              <p className="block-mid">1,352.22</p>
              <p className="block-bottom">Million Baht</p>
            </div>

            <div className="block-two">
              <p className="block-head-two">Total Asset</p>
              <p className="block-mid-two">4,878.48</p>
              <p className="block-bottom-two">Million Baht</p>
            </div>

            <div className="block-three">
              <p className="block-head-three">Net Profit</p>
              <p className="block-mid-three">144.68</p>
              <p className="block-bottom-three">Million Baht</p>
            </div>

            <div className="block-four">
              <p className="block-head-four">EBITDA</p>
              <p className="block-mid-four">337.81</p>
              <p className="block-bottom-four">Million Baht</p>
            </div>

            <button className="financial-btn">FINANCIAL HIGHLIGHTS</button>
          </div>
        </div>
      </section>

      <section>
        <div className="news">
          <p>LATEST NEWS</p>

          <div className="news-container">
            <p>June 14, 2016</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              diam sapien. Sed semper urna dictum tellus…
            </span>

            <div className="news-footer-container">
              <p>Read more</p>
              <div className="news-left"></div>
              <div className="news-footer"></div>
            </div>
          </div>

          <div className="news-container-two">
            <p>June 14, 2016</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              diam sapien. Sed semper urna dictum tellus…
            </span>

            <div className="news-footer-container">
              <p>Read more</p>
              <div className="news-left"></div>
              <div className="news-footer"></div>
            </div>
          </div>

          <div className="news-container-three">
            <p>June 14, 2016</p>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin sed
              diam sapien. Sed semper urna dictum tellus…
            </span>

            <div className="news-footer-container">
              <p>Read more</p>
              <div className="news-left"></div>
              <div className="news-footer"></div>
            </div>
          </div>

          <button>VIEW ALL</button>
        </div>
      </section>

      <section>
        <div className="quick-container">
          <img src={quickImg} alt="" />

          <p>QUICK DOWNLOAD</p>

          <div className="quick-block">
            <img src={book} alt="" />
            <p>Annual Report 2017</p>

            <div className="quick-botton">
              <img src={downloadImg} alt="" />
              <span>PDF Download</span>
            </div>
          </div>

          <div className="quick-block-two">
            <img src={form} alt="" />
            <p>Annual Report 2017</p>

            <div className="quick-botton-two">
              <img src={downloadImg} alt="" />
              <span>PDF Download</span>
            </div>
          </div>

          <div className="quick-block-three">
            <img src={finan} alt="" />
            <p>Annual Report 2017</p>

            <div className="quick-botton-three">
              <img src={downloadImg} alt="" />
              <span>PDF Download</span>
            </div>
          </div>

          <div className="quick-block-four">
            <img src={finan} alt="" />
            <p>Annual Report 2017</p>

            <div className="quick-botton-four">
              <img src={downloadImg} alt="" />
              <span>PDF Download</span>
            </div>
          </div>

          <div className="quick-btn">
            <button>
              Investor Kits
              <img src={rightArrow} alt="" />
            </button>
          </div>
        </div>
      </section>

      <section>
        <div className="contact-container">
          <img src={imgBg} alt="" />
          <p>EMAIL ALERTS</p>

          <div>
            <div className="contact-information">
              <p>
                Keep yourself up to date with all the latest announcements from
                the company.
              </p>
              <button>SUBCRIBE</button>
            </div>

            <div className="contact-underline"></div>

            <div className="contact-download">
              <p className="contact-download-p">IR CODE OF CONDUCT</p>
              <button>
                <img src={downloadImg} alt="" />
                PDF Download
              </button>
            </div>
          </div>

          <div className="contact-line"></div>

          <div className="contact-address">
            <p>IR CONTACT</p>
            <p className="contact-one">Veranda Resort Public Company Limited</p>
            <p className="contact-two">
              178/7 Ratchadapisek Road Chandrakasem, Chatuchak, Bangkok 10900
            </p>
            <p className="contact-three">Telephone: (66) 2513 3003</p>
            <button>EMAIL: IR@VRANDA.CO.TH</button>
          </div>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-line"></div>
          <p>Copyright © 2018 Veranda Resort. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
