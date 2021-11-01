import React from 'react'
import Profile from '../Profile/Profile.jsx'
import Footer from './Footer/Footer.jsx'
import Header from "./Header/Header.jsx"
import "./Home.css"

export default function Home(props) {
    return (
      <div className="home-container" id={props.id || ""}>
        <Header />
        <Profile />
        <Footer />
      </div>
    );
  }


