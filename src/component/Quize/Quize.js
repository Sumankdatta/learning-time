import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Allquize from '../Allquize/Allquize';

const Quize = () => {
    const quize=useLoaderData();
    console.log(quize)
    
    return (
        <div>
            
            {
                 quize.data.questions.map(quiz=><Allquize
                 key={quiz.id}
                 quiz={quiz}
                 ></Allquize>)
               
            }
        </div>
    );
};

export default Quize;