import React, { useState, useEffect, Profiler } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Service from "../../editable-stuff/service.jpg"
import Culture from "../../editable-stuff/culture.jpg"
import Committee from "../../editable-stuff/committee.jpg"
import Park from "../../editable-stuff/park.jpg"
import Zilker from "../../editable-stuff/zilker.jpg"
import Retreat from "../../editable-stuff/retreat.jpg"
import Sec from "../../editable-stuff/sec.jpg"
import Custodians from "../../editable-stuff/custodians.jpg"

const Leadership = () => {
    return (
        <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
          <div className="container container-fluid">
            <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                <h1 className="display-4 mb-3 text-center">Competencies</h1>
                {}
                <br/>
                <div className="row"> 
                <div className="col d-lg-inline align-self-center">
                  <p className="lead text-left">
                  Throughout my professional career, I have been grateful to have many opportunities to learn from my peers and share many experiences. My path was unconventional, from <b>Electronics</b> to <b>Telecommunications</b> then to <b>Engineering</b> and finally to <b>BI & Analytics</b>. I received formal training in <b>Situation Leadership</b>, and I have a wide variety of courses from <b>SAP</b> and <b>Microsoft</b>. Today is fair to say the only constant is change, and I believe that the most valuables skills are adaptation and constant learning.
                 </p>  
              </div>
              
                <div className="col d-lg-inline align-self-center">
                
                <Carousel>
                    <Carousel.Item>
                {/* <div className="col d-none d-lg-inline align-self-center"> */}
                  <img
                    className="rounded"
                    src={Culture}
                    alt="culture"
                    width="600"
                    height="400"
                  /> 
                  {/* <Carousel.Caption>
                    <h2>Student Engineering Council Vice President</h2>
                    <h5>Cultivated an organizational culture of inclusivity, collaboration, and ambition.</h5>
                    </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div>
                <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Service}
                    alt="service"
                    width="600"
                    height="400"
                  /> 
                  {/* <Carousel.Caption>
                <h2>Student Engineering Council Service Director</h2>
                <h5>Promoted student involvement in the community through volunteering and philanthropy.</h5>
                </Carousel.Caption> */}
                  </Carousel.Item>
                {/* </div>
                </div> */}
                {/* <div className="row"> 
                <div className="col d-none d-lg-inline align-self-center"> */}
                {/* <Carousel.Item>
                  <img
                    className="rounded"
                    src={Code}
                    alt="codeorange"
                    width="300"
                    height="475"
                  /> 
                  </Carousel.Item> */}
                {/* </div>
                </div> */}
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Sec}
                    alt="SEC"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Zilker}
                    alt="zilker"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Custodians}
                    alt="custodialappreciation"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="rounded"
                    src={Committee}
                    alt="committee"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Park}
                    alt="volunteer"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                  <Carousel.Item>
                  <img
                    className="rounded"
                    src={Retreat}
                    alt="family"
                    width="600"
                    height="400"
                  /> 
                  </Carousel.Item>
                </Carousel>
              </div>
              </div>
            </div>
          </div>
      </div>
      </div>
      );
    };

export default Leadership;