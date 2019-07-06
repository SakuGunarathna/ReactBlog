import React from 'react';
import Intro from './Intro';
import Header from './Header';
import Main from './main';
import Footer from './Footer';

const Home = ()=>(  //pure stateless component
    <div>
        <Header/>
        <Intro/>
        <Main/>
        <Footer/>
    </div>
);

export default Home;