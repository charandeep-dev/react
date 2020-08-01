import React from 'react';
import Common from './common.jsx';
import Home_ImgPath from './Images/1.png';

const Home = () => {
return (
    <> 
    <Common name="Welcome to home page" btnMessage="Get Started" btnLink="/service" imgPath={Home_ImgPath} />
    </>
)
}
export default Home;

