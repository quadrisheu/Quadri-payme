import { React, useState } from 'react'
import '../styles/Home.css'
import pic1 from '../assets/r2.png';
import lady from '../assets/lady.png';
import box1 from '../assets/r3.png';
import box1a from '../assets/r7.png';
import wave from '../assets/v21.png';
import box1b from '../assets/center1.png';
import box1c from '../assets/left1.png';
import box1d from '../assets/Ann.png';
import box1e from '../assets/G1.png';
import box1f from '../assets/G2.png';
import box1g from '../assets/G3.png';
import box1h from '../assets/G4.png';
import box1i from '../assets/Dec4.png';
import { AiFillCheckCircle } from 'react-icons/ai'
import box1j from '../assets/Dec5.png';
import man from '../assets/r1.png';
import star from '../assets/Star.png';
import arrow from '../assets/G5.png';
import ikons from '../assets/ikon.png';
import icons from '../assets/icon.png';




function Home() {
  const [drop, setDrop] = useState(false)
  const dropDown=()=>{
  setDrop((prev)=>!prev)
}

const [drop1, setDrop1] = useState(false)
  const dropDown1=()=>{
  setDrop1((prev)=>!prev)
}

const [drop2, setDrop2] = useState(false)
  const dropDown2=()=>{
  setDrop2((prev)=>!prev)
}

const [drop3, setDrop3] = useState(false)
  const dropDown3=()=>{
  setDrop3((prev)=>!prev)
}



    return(
        <div className="home-container">
          <div className="level1">
            <img src={pic1} />
          </div>
          <div className="level2">
            <div className="level2a">
              <div className="wave"><img src={wave} className='wav' /></div>
              <div className="best">
                <img src={box1a} className='you' />
                <p className='par'>Providing <br /> Best <br /> 
              <span className='web1'>WEB Services</span></p>
              <img src={box1} className='yes'/>
              </div>
              <p className='letter'>Letter of on become he tended active enable to. 
                 Vicinity relation sensible sociable surprise screened no up as.
              </p>
              <div className="explore">
                <div className="exploreB">
                  <button className='button1'>Get Started</button>
                  <button className='button2'>Explore</button>
                </div>
                <div className="leftT"><img src={box1b} className='b1b' /></div>
                
              </div>
              <div className="rightB"><img src={box1c} style={{marginTop: '-15px'}} /></div>
            </div>
            <div className="level2b">
            <img src={lady} className='woman' />
            </div>
          </div>
          <div className="level3">
            <div className="planday">
            <div className="plan planB plans">
              <img src={box1d} style={{width: '30px', height: '30px'}} /><h2>Planday</h2>
            </div>
            <h1 className="plans plane plane1">umbraco</h1>
            <h1 className="plans plane  plane2">Pearlfisher.</h1>
            <h1 className="plans plane  plane3">Brightpearl</h1>
            <div className="plan plans">
              <img src={box1d} style={{width: '30px', height: '30px'}} /><h2>Planday</h2>
            </div>
            </div>
          </div>

          <div className="level4">
            <p className='est'>Best <span className='ser'>Services</span></p>
            <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable 
              surprise screened no up as.
            </p>
            <div className="level4aa">
            <div className="level4a">
            <img src={box1e} className='one' />
            <img src={box1f} className='two' />
            </div>
            <div className="level4a">
            <img src={box1g} className='one' />
            <img src={box1h} className='two' />
            </div>
            </div>
            <div className="exploreALL">
                  <div className="boxH"><img src={box1i} className="boxHi" /></div>
                  <button className='button3'>Explore</button>
            </div>
          </div>

          <div className="level5">
          <p className='est'>Our <span className='ser'>Features</span></p>
            <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable 
              surprise screened no up as.
            </p>
            <div className="level5-mid">
            <div className="level5-card">
                <h3>Work Load</h3>
                <p className='out'>Outward clothes promise at gravity do excited. 
                  Sufficient particular impossible by reasonable 
                  oh expression is. Yet preference connection 
                  unpleasant yet melancholy but end appearance.
                </p>
                <a href="#" >Learn More</a>
              </div>
              <div className="level5-card">
                <h3>Work Load</h3>
                <p className='out'>Outward clothes promise at gravity do excited. 
                  Sufficient particular impossible by reasonable 
                  oh expression is. Yet preference connection 
                  unpleasant yet melancholy but end appearance.
                </p>
                <a href="#" >Learn More</a>
              </div>
              <div className="level5-card">
                <h3>Work Load</h3>
                <p className='out'>Outward clothes promise at gravity do excited. 
                  Sufficient particular impossible by reasonable 
                  oh expression is. Yet preference connection 
                  unpleasant yet melancholy but end appearance.
                </p>
                <a href="#" >Learn More</a>
              </div>
            </div>
            <button className='button4'>Explore</button>
          </div>

          <div className="level6 level5">
          <p className='est'>What <span className='ser'>Clients</span> Say</p>
            <p>Letter of on become he tended active enable to. Vicinity relation sensible sociable 
              surprise screened no up as.
            </p>
            <div className="level6-sub">
              <div className="guy"><img src={man} className='guy1' /></div>
              <div className="Robert">
                <div className="Johnson">
                <h3>Best Developers</h3>
                <span className='ward'>Outward clothes promise at gravity do excited. 
                  Sufficient particular impossible by reasonable oh expression is. 
                  Yet preference connection unpleasant yet melancholy but end appearance. 
                  And excellence partiality estimating terminated day everything.
                  </span>
                  <div className="stars">
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  <img src={star} />
                  </div>
                  <h5>Robert Johnson</h5>
                  <span className='at'>Director at Behance</span>
                </div>
              </div>
            </div>
            <img src={arrow} className='pointer' />
            </div>

         

          <div className="level7">
          <p className='est'>Our <span className='ser'>Pricing Plan</span></p>
      
            <div className="cardo">
              <div className="cardo-card">
                <h3>For Starter</h3>
                <h1>$59</h1>
                
                <div className='out'>
                  <ul>
                    <li><AiFillCheckCircle className='mark' />Feedback Categorization</li>
                    <li><AiFillCheckCircle className='mark' />Features prioritization</li>
                    <li><AiFillCheckCircle className='mark' />Real-time collaboration</li>
                    <li><AiFillCheckCircle className='mark' />Feedback loop notifications</li>
                    <li><AiFillCheckCircle className='mark' />Essential dev tools integrations</li>
                  </ul>
                </div>
                <button className='button5'>Request Demo</button>
               
              </div>
              <div className="cardo-card">
                <h3>For Teams</h3>
                <h1>$99</h1>
                
                <div className='out'>
                  <ul>
                    <li><AiFillCheckCircle className='mark' />Feedback Categorization</li>
                    <li><AiFillCheckCircle className='mark' />Features prioritization</li>
                    <li><AiFillCheckCircle className='mark' />Real-time collaboration</li>
                    <li><AiFillCheckCircle className='mark' />Feedback loop notifications</li>
                    <li><AiFillCheckCircle className='mark' />Essential dev tools integrations</li>
                  </ul>
                </div>
                <button className='button5'>Request Demo</button>
              </div>
              <div className="cardo-card">
                <h3>For Company</h3>
                <h1>Custom</h1>
                
                <div className='out'>
                  <ul>
                    <li><AiFillCheckCircle className='mark' />Feedback Categorization</li>
                    <li><AiFillCheckCircle className='mark' />Feedback loop notifications</li>
                    <li><AiFillCheckCircle className='mark' />Essential dev tools integrations</li>
                  </ul>
                </div>
                <button className='button5b'>Contact Us</button>
              </div>
              
            </div>
            {/* <img src={box1j} className='jay' /> */}
          </div>

          <div className="level8">
          <p className='ser'>FAQs</p>
          <div className="faqs">
          
            <div className='faq' onClick={dropDown}>
                  <div className='faq-sub'>
                   {drop ? (<img src={icons} className='icans' alt="" />):(<img src={ikons} className='ikons' alt="" />) }
                   <p className='six'>she met humoured sir breeding her. 
                      Six curiosity day assurance bed necessary.</p>
                  </div>

                  {drop &&  <div className='dropdown'>
                      <p className='sir'>Relation so in confined smallest children unpacked delicate. 
                        Why sir end believe uncivil respect. Always get adieus nature day course for common. 
                        My little garret repair to desire he esteem. 

                      </p>
                  </div>} 
              </div>

              <div className='faq' onClick={dropDown1}>
                  <div className='faq-sub'>
                  {drop1 ? (<img src={icons} className='icans' alt="" />):(<img src={ikons} className='ikons' alt="" />) }
                 
                  <p className='six'>she met humoured sir breeding her. 
                  Six curiosity day assurance bed necessary.</p>
                  </div>

                  {drop1 &&  <div className='dropdown'>
                      <p className='sir'>Relation so in confined smallest children unpacked delicate. 
                        Why sir end believe uncivil respect. Always get adieus nature day course for common. 
                        My little garret repair to desire he esteem. 

                      </p>
                  </div>} 
              </div>

              <div className='faq' onClick={dropDown2}>
                  <div className='faq-sub'>
                  {drop2 ? (<img src={icons} className='icans' alt="" />):(<img src={ikons} className='ikons' alt="" />) }
                 
                  <p className='six'>she met humoured sir breeding her. 
                  Six curiosity day assurance bed necessary.</p>
                  </div>

                  {drop2 &&  <div className='dropdown'>
                      <p className='sir'>Relation so in confined smallest children unpacked delicate. 
                        Why sir end believe uncivil respect. Always get adieus nature day course for common. 
                        My little garret repair to desire he esteem. 

                      </p>
                  </div>} 
              </div>

              <div className='faq' onClick={dropDown3}>
                  <div className='faq-sub'>
                  {drop ? (<img src={icons} className='icans' alt="" />):(<img src={ikons} className='ikons' alt="" />) }
                 
                  <p className='six'>she met humoured sir breeding her. 
                  Six curiosity day assurance bed necessary.</p>
                  </div>

                  {drop3 &&  <div className='dropdown'>
                      <p className='sir'>Relation so in confined smallest children unpacked delicate. 
                        Why sir end believe uncivil respect. Always get adieus nature day course for common. 
                        My little garret repair to desire he esteem. 

                      </p>
                  </div>} 
              </div>
            
          </div>
      
          </div>
        </div>

    )
}

export default Home