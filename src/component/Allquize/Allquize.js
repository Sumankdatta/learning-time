import React from 'react';
import './Allquize.css';

const Allquize = ({quiz}) => {
    console.log(quiz)
    const {question,id,options,total,name}=quiz;
    return (

        <div className='quiz-data'>
            
            <p>Quiz no :{question.slice(3,-4)}</p>
            <div  className='option'>
            <p>{options}</p>
            </div>
            
        </div>
    );
};

export default Allquize;