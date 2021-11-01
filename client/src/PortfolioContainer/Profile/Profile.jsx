import React from "react";
import Typical from 'react-typical' //react-typical package for words on movement style
import ScrollService from "../../Utilities/ScrollService.jsx";
import "./Profile.css";

import "owl.carousel/dist/assets/owl.carousel.css"
import "owl.carousel/dist/assets/owl.theme.default.css"

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/f0rb1dd3np0is0n">
                <i className="fab fa-facebook" title="Facebook"></i>
              </a>
              <a href="https://github.com/MuscleGeek">
                <i className="fab fa-github" title="Github"></i>
              </a>
              <a href="https://www.credly.com/users/jonathan-villalobos-mora/badges">
                <i className="fas fa-award" title="Credly"></i>
              </a>
              <a href="https://www.linkedin.com/in/jonathan-villalobos-mora/">
                <i className="fab fa-linkedin" title="LinkedIn"></i>
              </a>
              <a href="https://app.hackthebox.eu/profile/141921">
                <i className="fas fa-cube" title="Hackthebox"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello.o, I'm <span className="highlighted-text">Jonathan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev",
                    1000,
                    "FullStack Dev",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Azure Enthusiast",
                    1000,
                    "Cybersecurity Dude",
                    1000,
                  ]}
                />
              </h1>
            </span>
            <span className="profile-role-tagline">
              Love building applications with front and back end operations.
            </span> 
          </div>
          <div className="profile-options">
            <button 
              className="btn primary-btn"
              onClick ={() => ScrollService.scrollHandler.scrollToHireMe()}
            >Hire Me!</button>
            <a href="cv.pdf" download="Jonathan Villalobos.pdf">
              <button className="btn highlighted-btn">Get Resume!</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div> 
  );
}

export default Profile;
