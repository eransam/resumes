import React from "react";
import shape4 from "../assets/img/shape/4.png";
import shape7 from "../assets/img/shape/7.png";
import illustration3 from "../assets/img/illustration/3.png";

const BannerSlides = () => {
  return (
    <>
      <div className="swiper-slide bg-cover banner6">
        <div className="container">
          <div className="content">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h2>
                  <span>
                    Hello <img src={shape4} alt="Icon" />
                  </span>{" "}
                  <br /> I'm Eran
                </h2>
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    <span className="cd-headline clip is-full-width">
                      <span className="cd-words-wrapper">
                        <b className="is-visible">Web Developer</b>
                        <b className="is-hidden">Professional Coder</b>
                        <b className="is-hidden">UI/UX Designer</b>
                      </span>
                    </span>
                  </span>
                </h3>
                <div className="button">
                  <a className="btn btn-md circle btn-theme" href="#resume">
                    My Resume
                  </a>
                </div>
              </div>

              <div className="col-lg-6 thumb">
                <img src={illustration3} alt="Thumb" />
                <div className="shape-center">
                  <img src={shape7} alt="Thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerSlides;
