import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <div class="menu-utama">
        <div class="menu">
          <Head name="HOME" />
          <Head name="PROFILE" />
          <Head name="ABOUT" />
        </div>

        {/* LOGO YANG DI ATAS */}
        <div class="photo">
          <Logo />
        </div>
      </div>

      {/* PAGE FAILAYDIE */}
      <div class="Page1">
        <Desc />
      </div>

      {/* YANG ABOUT */}
      <div class="mid">
        <About />
      </div>

      {/* FOOTER */}
      <div class="Footer">
        <center>
        <Footer/>
        </center>
      </div>
    </div>
  );
}

const Head = (props) => {
  return <p class="title">{props.name}</p>;
};

const Logo = () => {
  return <img class="logo" src="fai.jpg" alt="fai-photo"></img>;
};

const Desc = () => {
  return (
    <div>
      <p class="judul">FAILAYDIE</p>
      <p class="deskripsi">
        Company Websites means all web sites owned, operated or hosted by the
        Company or any Subsidiary or through which the Company or any Subsidiary
        conducts the Business (including those web sites operated using the
        domain names listed in Schedule 2.10(c) of the Company Disclosure
        Letter), and the underlying platforms for such web sites
      </p>
      <p class="welcome">Welcome to</p>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <p class="about">ABOUT</p>
      <p class="about-2">
        To make a good impression and invite clients to your new business, you
        better prepare a company profile and make it part of your marketing
        tool. According to the definition, a company profile is a professional
        introduction of the business which aims to inform the audience about its
        products and services. Or it is defined as the firms historical
        description, its structure, resources, the rate of performance as well
        as its reputation.
      </p>
    </div>
  );
};

const Footer = () => {
  return (
    <div>
      <img class="gambar-footer" src="fai.jpg" alt="fai-photo"></img>
      <img class="gambar-footer" src="fai2.jpg" alt="fai2-photo"></img>
      <img class="gambar-footer" src="fai3.jpg" alt="fai3-photo"></img>
      <img class="gambar-footer" src="fai4.jpg" alt="fai4-photo"></img>
      <img class="gambar-footer" src="nad.jpg" alt="nad-photo"></img>
      <img class="gambar-footer" src="saray.jpg" alt="saray-photo"></img>
    </div>
  )
}

export default App;
