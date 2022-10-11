import React from 'react';
import { Link } from 'react-router-dom';
import './Newhome.css';

const Newhome = ({quize}) => {
    const {id,name,logo}=quize;
    console.log(quize)
    return (
        <div className='quize'>
           
           <img src={logo} alt="" />
           
           
            <div>
                <h5>{name}</h5>
                <button><Link to={`/quizes/${id}`}>{name}</Link></button>
            </div>
        </div>
    );
};

export default Newhome;