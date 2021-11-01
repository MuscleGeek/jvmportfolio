import React, { useState } from "react";
/*Carousel*/
import Typical from "react-typical";
import axios from "axios";
import {toast} from "react-toastify";

import "./ContactMe.css";
import Footer from "../Home/Footer/Footer.jsx";
import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading.jsx";
import ScrollService from "../../Utilities/ScrollService.jsx";
import Animations from "../../Utilities/Animations.jsx";


/**Images 4 Contact Form*/
import loadingBar from "../../../src/images/loading.gif";
import formBg from "../../../src/images/pc.gif";
/*import formBack from "../../../src/images/form-bg.jpeg"*/


export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };
  
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post('/contact', data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.error(error);
    }
    
  };
  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={['$touch hiring; echo "Get in touch!" >> hiring; 📧', 1000]} />
          </h2>{" "}
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
        <div className="back-form">
          <div className="img-back">
            <h4>Send your Email Here!</h4>
            <img src={formBg} alt="Oops!, Something went wrong!"/>
          </div>
                {/*CONTACT FORM */}
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />

            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />

            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />

            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={loadingBar} alt="image not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}


