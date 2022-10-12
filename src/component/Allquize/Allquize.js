import React from 'react';
import './Allquize.css';

const Allquize = ({ quiz }) => {
    console.log(quiz)
    const { question, id, options, total, name } = quiz;
    console.log(options)
    return (

        <div className='quiz-data'>

            <div className='question'><h6>Quiz no :{question.slice(3, -4)}</h6></div>
            <div className='display'>

                <div className='label'>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">{options[0]}</label>
                </div>
                <div className='label'>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">{options[1]}</label>
                </div><div className='label'>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">{options[2]}</label>
                </div><div className='label'>
                    <input type="radio" id="html" name="fav_language" value="HTML"></input>
                    <label for="html">{options[3]}</label>
                </div>
            </div>

        </div>
    );
};

export default Allquize;