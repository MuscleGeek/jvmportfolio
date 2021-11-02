import React from 'react';
import {TOTAL_SCREENS} from '../Utilities/commonUtils.jsx'

export default function PortfolioContainer() {
                                    /**Display all the total screens availables */
    const mapAllScreens = () => {
        return (
            TOTAL_SCREENS.map((screen) => (
                (screen.component) ? 
                <screen.component 
                    screenName={screen.screen_name} 
                    key={screen.screen_name}
                    id={screen.screen_name}
                /> : (
                <div key={screen.screen_name}></div>
                )
            ))
        )
    }
    return (
        <div className="portfolio-container">{mapAllScreens()}</div>
    )
}


/* Using this, we are going to have all the screens mapped in one component and then have only that component
  rendered on app.jsx

  So in the future, we are going to have all the components stored over here. (using mapAllScreens function) */

