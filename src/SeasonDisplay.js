import './SeasonDisplay.css';
import React from 'react';


const seasonConfig = {
   summer: {
      text: 'Let\'s hit the beach!',
      iconName: 'sun',
   },
   winter: {
      text: 'Blur, it\'s chilly',
      iconName: 'snowflake',
   }
}

const getSeason = (userLatitude, month) => {
   const months = (month > 2 && month < 9)? 'April-Sept' : 'Oct-Mar';
   const hemisphere = userLatitude > 0 ? 'North' : 'South';
   
    if (months === 'April-Sept') {
       return (hemisphere === 'South') ? 'summer' : 'winter';
    } else {
       return (hemisphere === 'North') ? 'winter' : 'summer';
    }
}

const SeasonDisplay = props => {
   const month = new Date().getMonth();
   const season = getSeason(props.userLatitude, month);
   const { text, iconName } = seasonConfig[season];
   
   
   
   return (
      <div className={`season-display ${season}`}>
         <i className={`icon-left massive ${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`icon-right massive ${iconName} icon`} />
      </div>
   );
};

export default SeasonDisplay;