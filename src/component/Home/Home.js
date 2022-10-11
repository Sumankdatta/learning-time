import React from 'react';
import './Home.css';
import backpic from '../../back.jpg'

const Home = () => {
    return (
       
         <div className="overlay"
        
      style={{backgroundImage: `url(${backpic})`}} >
        <h1>Start learning from <br/>the world's best institution</h1>
        </div>
      
     
      
              
   
      
    );
};

export default Home;