import React from 'react';

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
   console.log(season);
   
   
   return <div>Season Display</div>;
};

export default SeasonDisplay;