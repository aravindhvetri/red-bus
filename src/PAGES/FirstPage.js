import React, { useState } from 'react'
import Nav from './Nav'
import logo from './bus.png'
import { useNavigate } from 'react-router-dom'
import imgpromise from './promise.png'
import image from './benefits.png'
import image1 from './customer.png'
import image2 from './lowest_Fare.png'


const FirstPage = () => {
const [firstInp, setFirstInp] = useState("");
const [secondInp, setSecondInp] = useState("");
const [thirdInp, setThirdInp] = useState("");
const [emptyInp, setEmptyInp] = useState(false);

let navigate = useNavigate();
  const moveOn = () => {
    if(firstInp == "" || secondInp == "" || thirdInp == "" ){
        setEmptyInp(true);
    }
    else{
       navigate(`/home/${firstInp}/${secondInp}/${thirdInp}`);
    }
  }

 const sameInput = (e) => {
    if (e.target.name == "inp-1") {
        setFirstInp(e.target.value);
    }
   else if(e.target.name == "inp-2"){
    setSecondInp(e.target.value);
   }
   else{
    setThirdInp(e.target.value);
   }
 }

 let date=new Date();
    let year = date.getFullYear();
    let month = date.getMonth()+1;
    let dat = date.getDate();
   let currentmonth=month < 10 ? "0" + month : month;
   let currentdate=dat < 10 ? "0" + dat : dat;

    let getdate={
        date:`${year}-${currentmonth}-${currentdate}`
    }
  return (
    <>
      <Nav />
      <div className='header-section'>
        <div className='header-container'>
          <div className='header-row'>
            <div className='header-col'>
            <div className='border'>
                <iconify-icon icon="healthicons:city-outline"></iconify-icon>
                <input  name='inp-1' onChange={sameInput} placeholder='FROM'></input>
                {firstInp == "" && emptyInp && <iconify-icon className="empty" icon="material-symbols:error-rounded"></iconify-icon>}
            </div>
            <div className='border'>
                <iconify-icon icon="healthicons:city-outline"></iconify-icon>
                <input name='inp-2' onChange={sameInput} placeholder='TO'></input>
                {secondInp== "" && emptyInp && <iconify-icon icon="material-symbols:error-rounded"></iconify-icon>}
            </div>
           
            <div className='border'>
              <input name='inp-3' onChange={sameInput} className='inpDate' min={getdate.date} placeholder='Date' type='date'></input>
              {thirdInp == "" && emptyInp && <iconify-icon icon="material-symbols:error-rounded"></iconify-icon>}
            </div>
              <button onClick={() => moveOn()} className='btn'>Search Buses</button>
            </div>
          </div>
        </div>
      </div>
      <section className="about-sec">
        <div className="about-container">
            <div className='img'>
                <img src={imgpromise} ></img>
            </div>
            <div className='promise-head'>
                <h4>WE PROMISE TO DELIVER</h4>
            </div>
            <div className="about-row">
                <div className="about-col1">
                    <div className='about-icon'>
                        <img src={image}></img>
                    </div>
                    <div className='about-content'>
                      <h5>UNMATCHED BENEFITS</h5>  
                    </div>
                    <div className='about-content1'>
                        <p>We take care of your travel<br></br> beyond ticketing by providing you with <br></br>innovative and unique benefits.</p>
                    </div>
                
                </div>
                <div className="about-col1">
                    <div className='about-icon'>
                        <img src={image1}></img>
                    </div>
                    <div className='about-content'>
                      <h5>SUPERIOR CUSTOMER SERVICE</h5>  
                    </div>
                    <div className='about-content1'>
                        <p>We put our experience and relationships<br></br> to good use and are available to solve <br></br>your travel issues.</p>       </div>
                    </div>
                
                    <div className="about-col1">
                    <div className="">   
                    <div className='about-icon'>
                        <img src={image2}></img>
                    </div>
                    <div className='about-content'>
                      <h5>LOWEST PRICES</h5>  
                    </div>
                    <div className='about-content1'>
                        <p>We always give you the lowest<br></br> price with the best partner offers.</p>
                    </div>
                    </div>
                    </div>    
                
            </div>
        </div>
      </section>
      <section className='footer-section'>
                <div className='footer-container'>
                    <h2>THE NUMBERS ARE GROWING!</h2>
                    <div className='footer-row'>
                        <div className='footer-col'>
                            <h5>CUSTOMERS</h5>
                            <h1>36 M</h1>
                            <p>redBus is trusted by over 36 million happy customers globally</p>
                        </div>
                        <div className='footer-col'>
                            <h5>OPERATORS</h5>
                            <h1>3500</h1>
                            <p>network of over 3500 bus operators worldwide</p>
                        </div>
                        <div className='footer-col'>
                            <h5>BUS TICKETS</h5>
                            <h1>220+ M</h1>
                            <p>Over 220 million trips booked using redBus</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='footer-section1'>
                <div className='footer-container1'>
                    <div className='footer-row1'>
                        <div className='footer-col1 footer'>
                            <h5>About redBus</h5>
                            <p><a href="https://www.redbus.in/info/aboutus" target='blank'>About Us</a></p>
                            <p><a href="https://www.redbus.in/info/contactus" target='blank'>Contact Us</a></p>
                            <p><a href="https://www.redbus.in/" target='blank'>Mobile Version</a></p>
                            <p><a href="https://www.redbus.in/info/mobile" target='blank'>redBUS on Mobile</a></p>
                            <p><a href="https://www.redbus.in/sitemap.html" target='blank'>Sitemap</a></p>
                            <p><a href="https://www.redbus.in/info/OfferTerms" target='blank'>Offers</a></p>
                            <p><a href="https://www.redbus.in/careers/" target='blank'>Careers</a></p>
                            <p><a href="https://www.redbus.in/values" target='blank'>Values</a></p>
                        </div>
                        <div className='footer-col1 footer'>
                            <h5>Info</h5>
                            <p><a href="https://www.redbus.in/info/termscondition" target='blank'>T & C</a></p>
                            <p><a href="https://www.redbus.in/info/privacypolicy" target='blank'>Privacy Policy</a></p>
                            <p><a href="https://www.redbus.in/info/faq" target='blank'>FAQ</a></p>
                            <p><a href="http://blog.redbus.in/" target='blank'>Blog</a></p>
                            <p><a href="https://onboardvendor.redbus.in/" target='blank'>Bus Operator Registration</a></p>
                            <p><a href="https://in3.seatseller.travel/" target='blank'>Agent Registration</a></p>
                            <p><a href="https://www.icicilombard.com/" target='blank'>Insurance Partner</a></p>
                            <p><a href="https://www.redbus.in/info/useragreement" target='blank'>User Agreement</a></p>
                        </div>
                        <div className='footer-col1 footer'>
                            <h5>Global Sites</h5>
                            <p><a href="https://www.redbus.in/" target='blank'>India</a></p>
                            <p><a href="https://www.redbus.sg/" target='blank'>Singapore</a></p>
                            <p><a href="https://www.redbus.my/" target='blank'>Malasiya</a></p>
                            <p><a href="https://www.redbus.id/" target='blank'>Indonesia</a></p>
                            <p><a href="https://www.redbus.pe/" target='blank'>Peru</a></p>
                            <p><a href="https://www.redbus.co/" target='blank'>Colombia</a></p>
                        </div>
                        <div className='footer-col1 footer'>
                            <h5>Our Partners</h5>
                            <p><a href="https://www.goibibo.com/bus/" target='blank'>Goibibo</a></p>
                            <p><a href="https://www.makemytrip.com/bus-tickets/" target='blank'>Makemytrip</a></p>
                            <h5 className='space'>Other Services</h5>
                            <p><a href="https://www.redbus.in/train-tickets" target='blank'>Train Tickets</a></p>
                            <p><a href="https://www.redbus.in/bushire/" target='blank'>Bus Hire</a></p>
                            <p><a href="https://www.redbus.in/car-rental/cab-booking" target='blank'>Cab Booking</a></p>
                            <p><a href="https://www.redbus.in/tempo-traveller/" target='blank'>Tempo Traveller</a></p>
                        </div>
                        <div className='footer-col2 footer'>
                            <img src={logo}></img>
                            <p>redBus is the world's largest <b>online bus ticket booking</b> service trusted by over 25 million happy customers globally. redBus offers bus ticket booking through its website,iOS and Android mobile apps for all major routes.</p>
                            <div className='foot-icon'>
                                <div className='footer-icon'>
                                <a href="https://www.facebook.com/redBus.in/" target='blank'>
                                    <iconify-icon icon="typcn:social-facebook"></iconify-icon>
                                    </a>
                                </div>
                                <div className='footer-icon'>
                                <a href="https://twitter.com/redBus_in" target='blank'>
                                    <iconify-icon icon="mdi:twitter"></iconify-icon>
                                    </a>
                                </div>
                            </div>
                            <h6>&copy; 2023 ibibogroup All rights reserved</h6>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default FirstPage