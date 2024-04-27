import React from "react";
import Typed from "react-typed";
import { Link } from "react-scroll";
import SocialMedia from "./SocialMedia";
import { Fade } from "react-reveal";
import shape4 from "../assets/img/shape/4.png";
import shape7 from "../assets/img/shape/7.png";
import illustration1 from "../assets/img/illustration/1.png";

const Banner = () => {
  let textLines = [
    '<b class="is-visible">Web Developer</b>',
    '<b class="is-visible">Professional Coder</b>',
    '<b class="is-visible">UI/UX Designer</b>',
  ];

  return (
    <>
      <div name="/" className="auto-height bg-fixed banner-style-one">
        <div className="container">
          <div className="double-items">
            <div className="row align-center">
              <div className="col-lg-6 info banner-left">
                <h1 className="text-invisible">WELCOME</h1>
                <h2>
                  Hey <img src={shape4} alt="Icon" /> I'm <span>eran</span>
                </h2>
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <Typed
                          strings={textLines}
                          typeSpeed={35}
                          backSpeed={30}
                          loop
                        />
                      </span>
                    </span>
                  </span>
                </h3>
                <div className="button mt-55">
                  <Link className="btn btn-md circle btn-dark" to="resume">
                    My Resume
                  </Link>
                </div>
              </div>

              <div className="col-lg-6 thumb banner-right">
                <Fade top>
                  <img src={illustration1} alt="Thumb" />
                </Fade>
                <div className="shape-center">
                  <img src={shape7} alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="personal-social">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
