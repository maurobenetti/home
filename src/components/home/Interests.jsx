import React, { useState, useEffect, Profiler } from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Card from "react-bootstrap/Card";
import CardDeck from 'react-bootstrap/CardDeck'
import Button from 'react-bootstrap/Button'
import {
    aboutHeading,
    aboutDescription,
    showInstaProfilePic,
    instaLink,
    instaUsername,
    instaQuerry,
  } from "../../editable-stuff/configurations.json";
  const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Interests = () => {
  return (
    <div id="interests" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 pb-4 text-center">Interests</h1>
            {}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                <p className="lead text-center" style={{fontSize:'28px'}}>Data Science </p>
                <img src="https://img.icons8.com/ios/72/bot.png"/>
                <p className="lead text-center">
                Every day I read or learn something new about this fascinating fields. I believed that soon, Cognitive Systems will enhance humans to the point we would be able to spend more time doing what we want and less doing repetitive tasks.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Reading</p>
                <img src="https://img.icons8.com/wired/64/000000/reading.png"/>
                <p className="lead text-center">
                I love reading, my favorite author is Wilbur Smith, I finished the Egyptian Saga and I am in the middle of the Courtney Family Saga. Other authors I enjoy reading are: Nassim Taleb, James Gleick, Ken Wilber, Eric Siegel, and Roger Lewin
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Meditation and Chi kung</p>
                <img src="https://img.icons8.com/dotty/80/000000/floating-guru.png"/>
                <p className="lead text-center">
                This is an important part of my life. I practice meditation in its many forms since I was young, and for a long time, I also practice Chi Kung. The practice of this body-mind activities brings balance and serenity to my day.
                </p>
                </div>
                <div className="col text-center">
                <p className="lead text-center" style={{fontSize:'28px'}}>Riding my bicycle</p>
                <img src="https://img.icons8.com/dotty/80/000000/cycling-mountain-bike.png"/>
                <p className="lead text-center">
                I love riding my bicycle long distances, before coming to Germany I traveled for one month in Patagonia only with my tend and my bike. In Germany I travelled the route that connects the origin of the Danube river to Black Sea. 
                </p>
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Interests;
