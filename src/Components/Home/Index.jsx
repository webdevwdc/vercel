import React from "react";
import { Link } from "react-router-dom";
import "./Index.scss";
import Faq from "../../ShareModules/Layout/Faq/Faq";
import AOS from 'aos';
import 'aos/dist/aos.css';
function Index() {
  AOS.init({ duration : 2000});
return (
<>
  <div className="home">
    <div className="hero-section">
      <div className="hero-section__info">
        <div className="hero-section__info-heading">
          <h2 className="hero-section__info-heading--main">
            TXN Automation
          </h2>
          <p className="hero-section__info-heading--small">Enhancing your web3 experience one block at a time</p>
        </div>

        <div className="hero-section__info-img">
          <img src="./images/homepage-demo.svg" alt="" />
        </div>
      </div>
    </div>


    <div className="product-overview section-dv shutter-white-bg-gradient">
      <div className="product-overview--row row-flex">
        <div className="row-col product-overview-info-left" data-aos="fade-up" data-aos-delay="1200">
          <div className="product-overview-info__heading">
            <h2 className="heading-content">Product Overview</h2>
          </div>
          <div className="product-overview-info__para">
            <p className="body-paragraph">For high demand releases of NFT collections, there are often gas wars due to
              sellout within a few blocks.
              There is a lack of resources for consumers within the NFT community and current solutions are pre existing
              solutions unsuccessfully trying to fit a web3 problem. TXN automates this process and serves as the one
              stop shop directed towards your NFT and web3 needs as both an investor and collector.</p>
          </div>
          <div className="product-overview-info__cta">
            <Link to="" className="primary-btn bg-blue">
            Get Started
            </Link>
          </div>
        </div>
        <div className="row-col product-overview-info-right">
          <div className="product-overview-img tar">
            <img src="./images/po.png" alt="" />
          </div>
        </div>
      </div>
    </div>


    <div className="section-dv features">
      <div className="features-heading">
        <h2 className="heading-body"  data-aos="fade-up" data-aos-delay="1200">
          Features
        </h2>
      </div>
      <div className="features-body">
        <div className="features-body__box">
          <div className="boxes-only-img-txt">
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-1.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Batch Minting</p>
              </div>
            </div>
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-2.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Gas Reducer</p>
              </div>
            </div>
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-3.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Speed Up/Cancel/Modify Transactions</p>
              </div>
            </div>
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-4.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Wallet Distributor</p>
              </div>
            </div>
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-5.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Unlimited Tasks & Wallets</p>
              </div>
            </div>
            <div className="boxes-col">
              <div className="boxes-col-img">
                <img src="./images/icons/bx-i-6.svg" alt="" />
              </div>
              <div className="boxes-col-txt">
                <p>Coming Soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="product-overview section-dv">
      <div className="product-overview--row product-overview--row-revert row-flex">
        <div className="row-col product-overview-info-right">
          <div className="product-overview-img tar">
            <img src="./images/what-to-do.png" alt="" />
          </div>
        </div>
        <div className="row-col product-overview-info-left"  data-aos="fade-up" data-aos-delay="1200">
          <div className="product-overview-info__heading">
            <h2 className="heading-content">What’s to Come</h2>
          </div>
          <div className="product-overview-info__para">
            <p className="body-paragraph">
              We know that the NFT space and web 3.0 is a quick moving space and it is crucial to continue to adapt with
              the market at all times. We strive to continue toprovide more resources to our users starting with a clean
              updated user interface. We will periodically beadding monitors and tools including market place sniping.
              <br />
              <br />
              We are also excited to announce the development of our NFT management dashboard, simplifying the
              organization process for our users regarding NFTs across all platforms and blockchains.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="center-jumbotron section-dv">
      <div className="center-jumbotron-sec"  data-aos="fade-up" data-aos-delay="1200">
      <div className="center-jumbotrol__heading">
        <div className="center-jumbotrol__heading--img">
          <img src="./images/icons/security.svg" alt="" />
        </div>
        <h2 className="heading-body">
        Emphasis on Security
        </h2>
      </div>

      <div className="center-jumbotron__body">
        <p className="body-paragraph">
          At TXN Automation, security is a #1 priority. We take extra precaution in order to guarantee that our users'
          information and digital wallets stay uncompromised.
        </p>
        <p className="gradient-font body-paragraph">
          All wallets are kept locally, encrypted with RSA and all transactions are sent locally, therefore we do
          nothave access or ways to see Keypairs.
        </p>
      </div>
      </div>
    </div>

    <Faq/>

  </div>
</>
);
}

export default Index;