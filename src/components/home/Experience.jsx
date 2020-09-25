import React, { useState, useEffect, Profiler } from "react";
import Boeing from "../../editable-stuff/boeing.jpg";
import Dell from "../../editable-stuff/dell-logo.png"
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Experience = () => {
return (
    <div id="experience" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Some of my experiences</h1>
            {/* <h1 className="display-4 pb-5">Experience</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-center" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Dell}
                        alt="dell technologies logo"
                        width="420"
                        height="170"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Implementation Manager 3G and 4G Technologies  
                        <br/>
                        2014 - 2016
                    </p>
                    {/* <h3>Dell Technologies</h3> */}
                </div>
                <div className="col text-center">
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Boeing}
                        alt="boeing logo"
                        width="300"
                        height="220"
                    />
                    <br/>
                    <br/>
                    <p className="lead text-center" style={{fontSize:'22px'}}>
                        Group Leader, Argentina, Mexico, Guatemala, Costa Rica, El Salvador, Brazil  
                        <br/>
                        1996 to 2005
                    </p>
                    {/* <h3>Boeing</h3> */}
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;