import React from 'react';
import './Home.css';
import backpic from '../../back.jpg'
import { useLoaderData } from 'react-router-dom';
import Newhome from '../Newhome/Newhome';

const Home = () => {
    const quizes = useLoaderData();
    console.log(quizes)

    return (



        <div className=''>
            <div className="overlay"

                style={{ backgroundImage: `url(${backpic})` }} >
                <h1>Start learning from <br />the world's best institution</h1><br/>
                <p>The world is constantly changing and growing, and so are all the wonderful things to learn in it. <br/>From changing perspectives on history and studies of people to the world of deep <br/>AI and computer science, there’s more to know than ever before.</p>

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