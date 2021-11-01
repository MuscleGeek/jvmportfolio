<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>

-------Header imports-------
install via $npm i 
@fortawesome/fontawesome-svg-core
@fortawesome/free-brands-svg-icons
@fortawesome/free-regular-svg-icons
@fortawesome/free-solid-svg-icons
@fortawesome/react-fontawesome


//import the owl carousel css and theme
import "owl.caroulse/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.deafult.css";



-+---TEMP

 const [selectedScreen, setSelectedScreen] =  useState(0);
 const [showHeaderOptions, setShowHeaderOptions] =  useState(false);


    const updateCurrentScreen = (currentScreen) => {
        if(!currentScreen || !currentScreen.screenInView){
        return;
        let screenIndex = GET_SCREEN_INDEX(currentScreen.screenInView)
        if(screenIndex < 0)
        return
    }
    let currentScreenSubscription =  ScrollService.currentScreenBroadCaster.subscribe(updateCurrentScreen);
    
    /**When click on any name on header nav we should be able to move to specific component (Home-Name-ContactMe...) */
    const getHeaderOptions = () => {
        return (
            TOTAL_SCREENS.map((screen, i) => (
                <div className={getHeaderOptionsClass} key={screen.screen_name} onClick={() => switchScreen(i, screen)}>
                    <span>{screen.screen_name}</span>
                </div>
            ))
        )
    
    }
    /**Function to deal with the header options to craete spaces i between the screen and to make the name of the selected components
     * with different color
     */
    const getHeaderOptionsClass = (index) => {
        let classes = "header-option";
        /**So right here, if there's more than one screen displayed at a top APP navigator */
        if(index < TOTAL_SCREENS.length -1)
        classes += "header-option-separator";

        /**Space between navigations ex.:  |Home| |AboutMe| |Resume| |Testimonial| |ContactMe|*/
        if(selectedScreen === index)
        classes += "selected-header-option";
        return;
    }

    const switchScreen = (index, screen) =>{
        let screenComponent = document.getElementByI(screen.screen_name)
        if(!screenComponent) return;

        screenComponent.scrollIntoView({behavior : "smooth"});
        setSelectedScreen(index);
        setShowHeaderOptions(false);
    };

    return (
        <div>
            <div className="header-option" onClick={() => setShowHeaderOptions(showHeaderOptions)}>
                <div className="header-parent">
                    <div className="header-hamburger" onClick={() => setShowHeaderOptions(!showHeaderOptions)}>
                         {/**We are implementing how it must show up on phone or mobile platform (display menu options at left side when clicking on hamburger(dropdown)*/}
                         <FontAwesomeIcon className="header-hambuger-bars" icon={faBars}/>
                    </div>
                    <div className="header-logo">
                        <span>JONATHAN</span>
                    </div>
                    {/**If it does not exist, we are going to show up header-options  */}
                    <div className={showHeaderOptions ? "header-options show-hamburger-options": "header-options"}>
                        {getHeaderOptions()}
                    </div>
                </div>
            </div>
        </div>
    )




import React, {useState} from 'react'
import { TOTAL_SCREENS, GET_SCREEN_INDEX} from '../../../Utilities/commonUtils.jsx'
import ScrollService from '../../../Utilities/ScrollService.jsx';
import {faBars} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Header.css"
