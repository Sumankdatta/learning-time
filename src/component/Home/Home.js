import React from 'react';
import './Home.css';
import backpic from '../../back.jpg'
import { useLoaderData } from 'react-router-dom';
import Newhome from '../Newhome/Newhome';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes)

    return (



        <div>
            <div className="overlay"

                style={{ backgroundImage: `url(${backpic})` }} >
                <h1>Start learning from <br />the world's besinstitution</h1>

            </div>
            <div className='home'>
                
                {
                  quizes.data.map(quize=><Newhome
                  key={quize.id}
                  quize={quize}
                  ></Newhome>)  
                }
            </div>
        </div>














    );
};

export default Home;