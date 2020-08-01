import React from 'react';
import Common from './common.jsx';
import About_ImgPath from './Images/2.png';

const About = () => {
return (
    <> 
    <Common name='Welcome to about page' btnMessage="Contact Now" btnLink='/contact' imgPath={About_ImgPath} />   
    </>
)
}
export default About;

