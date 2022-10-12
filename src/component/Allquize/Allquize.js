import React from 'react';
import './Allquize.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Allquize = ({ quiz }) => {
    console.log(quiz)
    const { question, id, options, total, name } = quiz;
    // console.log(options)
    const clickHandel =(ans)=>{
       if(quiz.correctAnswer===ans) {
        toast('Wright answer')
       }
       else{
        toast('Wrong answer')
       }
       
    }
    return (

        <div className='quiz-data'>

            <div className='question'>
                <h5>{question.slice(3, -4)}</h5>
                </div>
            <div className='display'>
                {
                    quiz.options.map(option=><p><input type="radio" id="html" name="fav_language" value="HTML" onClick={() => clickHandel(option)}></input>{option}</p>)
                }

                
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Allquize;