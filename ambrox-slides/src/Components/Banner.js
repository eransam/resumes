import React from "react";
import Typed from "react-typed";
import SlidesHeader from "./SlidesHeader";
import shape4 from "../assets/img/shape/4.png";
import shape7 from "../assets/img/shape/7.png";
import illustration3 from "../assets/img/illustration/3.png";

const Banner = () => {
  let textLines = [
    '<b className="is-visible">Web Developer</b>',
    '<b className="is-visible">Professional Coder</b>',
    '<b className="is-visible">UI/UX Designer</b>',
  ];

  return (
    <>
      <div className="banner-area section-area bg-cover">
        <SlidesHeader />
        <div className="container  ">
          <div className="row align-items-center vt-mt-100">
            <div className="col-lg-6">
              <div className="banner-left text-light">
                <div className="banner-text">
                  <h2>
                    {" "}
                    <span className="banner-title">
                      Hello <img src={shape4} alt="shape4" />
                    </span>{" "}
                    <br />
                    I'm Eran
                  </h2>
                  <h3>
                    <span>
                      <Typed
                        strings={textLines}
                        typeSpeed={35}
                        backSpeed={30}
                        loop
                      ></Typed>
                    </span>
                  </h3>{" "}
                  <br />
                  <button className="btn btn-md circle btn-theme effect">
                    My Resume
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="banner-right vt-md-mb-60">
                <div className="banner-image img-fluid h-auto">
                  <img src={illustration3} alt="illustration3" />
                </div>
                <div className="banner-shape img-fluid">
                  <img src={shape7} alt="shape7" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
