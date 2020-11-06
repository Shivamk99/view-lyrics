import React from 'react';
import Spinner from './img/spinner2.gif';

// eslint-disable-next-line
export default () => {  
    return(
        <div>
            <img src = {Spinner} alt = "Loading.." style={{width:'300px', margin: '60px auto', display: 'block', color: 'white'}}/> 
        </div>
    );

};