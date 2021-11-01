import React from 'react'
import './ScreenHeading.css'

const ScreenHeading = (props) => {
    return (
        <div className="heading-container">
            <div className="screen-heading">
                <span>{props.title}</span>       
            </div>
            {
                /* In this case, if there is any value that is being passed down over here, we have to display that value 
                    If there is not subheading that is passed down to this component, we have to display and empty block */
                
                (props.subHeading) ? (
                    <div className="screen-sub-heading">
                        <span>{props.subHeading}</span>
                    </div>
                ):  <div></div>                 
            }
                {/**Separotor line placed under "AboutMe" Component */}
            <div className="heading-separator">
                <div className="separator-line">
                    <div className="separator-blob">
                        <div>

                        </div>
                    </div>
                </div>
            </div>      
        </div>
    )
}
export default ScreenHeading;