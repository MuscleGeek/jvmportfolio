import React, { useState, useEffect} from "react";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading.jsx";
import ScrollService from "../../Utilities/ScrollService.jsx";
import Animations from "../../Utilities/Animations.jsx";
import "./Resume.css";

const Resume = (props) => {
    /*States*/
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  /*Handle the component screen by scrolling using id*/
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);
  
    /**Reusable Minor Components */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };


  /**Static Resume DATA for the LABELS*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  /**...here we have: */
  const programmingSkillDetails = [
    { skill: "Python", ratingPercentage: 75 },
    { skill: "JavaScript", ratingPercentage: 75 },
    { skill: "React JS", ratingPercentage: 75 },
    { skill: "Express JS", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 75 },
    { skill: "MongoDB", ratingPercentage: 75 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "Cybersecurity", ratingPercentage: 75 },
    { skill: "Azure", ratingPercentage: 70 },
  ];

  const projectsDetails = [
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2020", toDate: "2021" },
      description:"A personal Portfolio website to showxase all my details and projects at one place",
      subHeading: "Technologies used: ",
    },
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A personal Portfolio website to showxase all my details and projects at one place",
      subHeading: "Technologies used: ",
    },
    {
      title: "Personal Portfolio",
      duration: { fromDate: "2020", toDate: "2021" },
      description: "A personal Portfolio website to showxase all my details and projects at one place",
      subHeading: "Technologies used: ",
    }
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
        <ResumeHeading
        heading={"Universidad Castro-Carazo, Costa Rica"}
        subHeading={"BACHELOR OF COMPUTER SCIENCE"}
        fromDate={"2012"}
        toDate={"2016"}
        />
        <ResumeHeading
        heading={"Universidad San Jose Sede Occidente, Costa Rica"}
        subHeading={"Degree Educational Sciences with Emphasis on Teaching"}
        fromDate={"2017"}
        toDate={"2019"}
        />
        <ResumeHeading
        heading={"4Geeks Academy, USA"}
        subHeading={"FullStack Development Bootcamp"}
        fromDate={"January 2021"}
        toDate={"April 2021"}
        />
    </div>,
    /**Work Experience */
    <div className="resume-screen-container" key="work-experience">
        <ResumeHeading
        heading={"Computer Science Engineer"}
        subHeading={"Full Stack Jr Developer, TI Support Engineer"}
        fromDate={"2018"}
        toDate={"present"}
        />
        <div className="experience-description">
            <span className="resume-description-text">
                Currently "Open to Work" as Jr. FullStack Development || TI
                Engineer.
            </span>
        </div>
        <div className="experience-description">
            <span className="resume-description-text">
                -MOOC Technical Support and Development and TI Support Engineer
            </span>
            <br />
            <span className="resume-description-text">
                -Corrective and preventive maintenance of computer equipment anc
                Security.
            </span>
            <br />
            <span className="resume-description-text">
                -Bartender and Customer Service and TI Support
            </span>
        </div>
    </div>,
        /**Programming Skills */
        <div
            className="resume-screen-container programming-skills-container"
            key="programming-skills"
        >
            {programmingSkillDetails.map((skill, index) => (
                <div className="skill-parent" key={index}>
                    <div className="heading-bullet"></div>
                    <span>{skill.skill}</span>
                    <div className="skill-percentage">
                        <div
                        style={{ width: skill.ratingPercentage + "%" }}
                        className="active-percentage-bar"
                        >
                        </div>
                    </div>
                </div>
            ))}
        </div>,
        /**Projects */
        <div className="resume-screen-container" key="projects">
            {projectsDetails.map((projectsDetails, index) => (
                <ResumeHeading
                key={index}
                heading={projectsDetails.title}
                subHeading={projectsDetails.subHeading}
                description={projectsDetails.description}
                fromDate={projectsDetails.duration.fromDate}
                toDate={projectsDetails.duration.toDate}
                />
            ))}
        </div>,
            /**Interests */
        <div className="resume-screen-container" key="interests">
            <ResumeHeading
            heading="Teaching"
            description="Apart from being a Tech and Dev Enthusiast, I also love to teach people what I know simply bacuase I believe in sharing"
            />
            <ResumeHeading
            heading="Gym"
            description="One of the most lovely sport and lifestyle"
            />
            <ResumeHeading
            heading="Road and Mountain Biking"
            description="My favorite sport"
            />
            <ResumeHeading 
            heading="Music" 
            description="Universal Language" 
            />
        </div>
  ];

  const handleCarousal = (index) => {
    let offSetHeight = 360;
    let newCarousalOffSet = {
        style: { transform: "translateY(" + index * offSetHeight * -1 + "px)" },
    };

    setCarousalOffSetStyle(newCarousalOffSet);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`).default}
          alt="oops!, no internet conexion"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreen = () => {
    return (
      <div
        style={carousalOffSetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };
  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);
  
  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullet-details">{getResumeScreen()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;