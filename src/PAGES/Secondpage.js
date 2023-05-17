import React, { useContext, useEffect, useState } from 'react'
import Nav from './Nav'
import { useParams } from 'react-router-dom'
import seat from "./seat.jpg"
import Point from './Point'
import { Collapse } from '@mui/material'
import { StateContext } from './StateContext'
import Report from './Report'

const Secondpage = () => {

    const {state: {reporter}, dispatch} = useContext(StateContext);
    console.log(reporter);

    let a = useParams();
  

    const details = [
        {
            busName: "Subra roadways",
            departure: "20:35",
            duration: "10h 50m",
            arrival: "06:45",
            ratings: 4.3,
            fare: 1299,
            seats: " 10 seats available",
            ac: "AC sleeper (2 + 1)",
            droping: "Koyambedu",
            date: "31 april",
            people: 290,
            window: "2 windows",
            acOn : "ac",
            sleeper:"sleeper"
        },
        {
            busName: "NT Xpress",
            departure: "18:25",
            duration: "12h 10m",
            arrival: "07:25",
            ratings: 4.1,
            fare: 1110,
            seats: " 24 seats available",
            ac: "NON A/C sleeper (2 + 1)",
            people: 265,
            window: "8 Single",
            type: "nonAc",
            sleeper:"sleeper"
        },
        {
            busName: "National Travels CHN",
            departure: "20:25",
            duration: "11h 10m",
            arrival: "07:35",
            ratings: 4.2,
            fare: 1300,
            seats: " 20 seats available",
            ac: " A/C Sleeper (2+1)",
            people: 113,
            window: "3 single",
            acOn : "ac",
            sleeper:"sleeper"
        },
        {
            busName: "Sri Amarnath Travels",
            departure: "19:35",
            duration: "11h 30m",
            arrival: "07:05",
            ratings: 3.8,
            fare: 1199,
            seats: " 15 seats available",
            ac: " A/C Sleeper (2+1)",
            people: 116,
            window: "8 single",
            acOn : "ac",
            sleeper:"sleeper"
        },
        {
            busName: "AVK Travels",
            departure: "20:25",
            duration: "11h 30m",
            arrival: "07:15",
            ratings: 3.6,
            fare: 1099,
            seats: " 22 seats available",
            ac: " NON A/C Sleeper (2+1)",
            people: 295,
            window: "8 single",
            type: "nonAc",
            sleeper:"sleeper"
        },
        {
            busName: "(SBLT) Shri Bhagiyalakshimi Travels (MAARA)",
            departure: "19:15",
            duration: "11h 30m",
            arrival: "06:45",
            ratings: 3.7,
            fare: 1300,
            seats: " 12 seats available",
            ac: " NON A/C Sleeper (2+1)",
            people: 40,
            window: "5 single",
            type: "nonAc",
            sleeper:"sleeper"
        },
        {
            busName: "MRM Travels",
            departure: "18:50",
            duration: "12h 50m",
            arrival: "07:45",
            ratings: 2.5,
            fare: 621,
            seats: " 22 seats available",
            ac: " NON A/C Sleeper (2+1)",
            people: 7,
            type: "nonAc",
            sleeper:"sleeper"
        },
        {
            busName: "Sri SMS Travels",
            departure: "18:05",
            duration: "13h 00m",
            arrival: "07:05",
            ratings: 2.7,
            fare: 1099,
            seats: " 27 seats available",
            ac: " A/C Sleeper (2+1)",
            people: 14,
            window: "6 single",
            acOn : "ac",
            sleeper:"sleeper"
        },
        {
            busName: "Sri Renugambal Travels (SRT)",
            departure: "20:45",
            duration: "11h 45m",
            arrival: "07:30",
            ratings: 2.5,
            fare: 1300,
            seats: " 38 seats available",
            ac: " Volvo Multi-Axle A/C Semi Seater (2+2)",
            window: "18 window",
            seater:"seater"
        },
    ]

    const [state, setState] = useState(false);
    const [open, setOpen] = useState(false);


    const handleExpandClick = (index) => {
        const rows = document.querySelectorAll(".book-row-1");
        rows[index].classList.toggle("myStyle");
        setState(!state);
    }

    let [empty, setEmpty] = useState([]);

    const handleClick = function (id,index) {
        setEmpty([...empty, id])
        dispatch({type:"TASK" , payload:details[index]})   
    };
    useEffect(() => {

        const duplicateArr = empty.filter((num, index) => empty.indexOf(num) == index && empty.lastIndexOf(num) === index);
        empty = duplicateArr;

        if (empty.length > 0) {
            setOpen(true);
            dispatch({type:"MAP", payload:empty})
        }
        else {
            setOpen(false);
        }
    }, [empty])

    const isSeatSelected = (index) => {
        const duplicateArr = empty.filter((num, index) => empty.indexOf(num) == index && empty.lastIndexOf(num) === index);
        empty = duplicateArr;
        return empty.includes(index);
    }

    const maping = [
        { img: seat, id: 1 }, { img: seat, id: 2 },{ img: seat, id: 3 },{ img: seat, id: 4 },{ img: seat, id: 5 },{ img: seat, id: 6 }, { img: seat, id: 7 },{ img: seat, id: 8 },{ img: seat, id: 9 },{ img: seat, id: 10 },{ img: seat, id: 11 }, { img: seat, id: 12 },{ img: seat, id: 13 },{ img: seat, id: 14 },{ img: seat, id: 15 },
    ]
    const mapings = [
        { img: seat, id: 21 }, { img: seat, id: 22 },{ img: seat, id: 23 },{ img: seat, id: 24 },{ img: seat, id: 25 },{ img: seat, id: 26 }, { img: seat, id: 27 },{ img: seat, id: 28 },{ img: seat, id: 29 },{ img: seat, id: 30 },{ img: seat, id: 31 }, { img: seat, id: 32 },{ img: seat, id: 33 },{ img: seat, id: 34 },{ img: seat, id: 35 },
    ]

    const data = details;
    const[func,setFunc] = useState(data);
    
    let nonAc = [...details].filter((value) => {
       if(value.type == "nonAc"){
         return value.busName
       }
    })

    let ac = [...details].filter((value) => {
        if(value.acOn == "ac"){
          return value.busName
        }
     })

     let sleeper = [...details].filter((value) => {
        if(value.sleeper == "sleeper"){
          return value.busName
        }
     })

     let seater = [...details].filter((value) => {
        if(value.seater == "seater"){
          return value.busName
        }
     })

    return (
        <>

            <Nav />
            <div>
                <section className='table-section'>
                    <div className='table-conatiner'>
                        <div className='table-row'>
                            <div className='table-col'>
                                <h5 className='filter'>FILTERS</h5>
                                <div className='time'>
                                    <h5>DEPARATURE TIME</h5>
                                    <div className='time-icon'>
                                        <ul>
                                            <li>
                                                <input type='checkbox'></input>
                                                <iconify-icon icon="ep:sunrise"></iconify-icon>
                                                <label>Before 6 am</label>
                                            </li>
                                            <li>
                                                <input type='checkbox'></input>
                                                <iconify-icon icon="ph:sun-light"></iconify-icon>
                                                <label>6 am to 12 pm</label>
                                            </li>
                                            <li>
                                                <input type='checkbox'></input>
                                                <iconify-icon icon="mdi:weather-sunset"></iconify-icon>
                                                <label>12 pm to 6 pm</label>
                                            </li>
                                            <li>
                                                <input type='checkbox'></input>
                                                <iconify-icon icon="game-icons:night-sky"></iconify-icon>
                                                <label>After 6 pm</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className='time'>
                                    <h5>BUS TYPES</h5>
                                    <div className='time-icon'>
                                        <ul className='seat'>
                                            <li>
                                                <input type='checkbox' onClick={() => setFunc(seater)}></input>

                                                <label>SEATER</label>
                                            </li>
                                            <li>
                                                <input type='checkbox'  onClick={() => setFunc(sleeper)}></input>

                                                <label>SLEEPER</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' onClick={() => setFunc(ac)}></input>

                                                <label>AC</label>
                                            </li>
                                            <li>
                                                <input type='checkbox' onClick={() => setFunc(nonAc)}></input>

                                                <label>NON AC</label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                            </div>
                            <div className='table-col1'>
                                <div className='table inr-details'>
                                    <div className='buses first'><span className='span-1'>24 Buses<p className='span-2'>found</p></span><span className='span-3'>SORT BY:</span></div>
                                    <div className='second'><span className='span-4 top'>Deparature</span></div>
                                    <div className='second'><span className='span-5 top'>Duration</span></div>
                                    <div className='second'><span className='span-6 top'>Arrival</span></div>
                                    <div className='second'><span className='span-7 top'>Ratings</span></div>
                                    <div className='third'><span className='span-8 top'>Fare</span></div>
                                    <div className='third'><span className='span-9 top'>Seats Available</span></div>
                                </div>
                                {func.map((values, index) => {
                                    return (<div className='total'>
                                        <div className='book-border'>
                                            <div className='table'>
                                                <div className='first'><img></img><span className='span-1'>{values.busName}</span></div>
                                                <div className='second'><span className='span-10'>{values.departure}</span></div>
                                                <div className='second'><span className='span-11'>{values.duration}</span></div>
                                                <div className='second'><span className='span-12'>{values.arrival}</span></div>
                                                <div className='second'><span className='span-13'><iconify-icon icon="mdi:shield-star-outline"></iconify-icon>{values.ratings}</span></div>
                                                <div className='third'><span className='span-14'>INR<span>{values.fare}</span></span></div>
                                                <div className='thirdd'><span className='span-15'></span></div>
                                            </div>
                                            <div className='table'>
                                                <div className='first'><span className='span-16'>{values.ac}</span></div>
                                                <div className='second'><span className='span-17'></span></div>
                                                <div className='second'><span className='span-18'></span></div>
                                                <div className='second'><span className='span-19'>{a.id3}</span></div>
                                                <div className='second'><span className='span-20'><iconify-icon icon="ic:outline-people"></iconify-icon> {values.people}</span></div>
                                                <div className='third'><span className='span-21'></span></div>
                                                <div className='third'><span className='span-22'>{values.seats}</span></div>
                                            </div>
                                            <div className='table'>
                                                <div className='first'><span className='span-23'></span></div>
                                                <div className='second'><span className='span-24'>{a.id1}</span></div>
                                                <div className='second'><span className='span-25'></span></div>
                                                <div className='second'><span className='span-26'>{a.id2}</span></div>
                                                <div className='second'><span className='span-27'></span></div>
                                                <div className='third'><span className='span-28'></span></div>
                                                <div className='third'><span className='span-29'>{values.window}</span></div>
                                            </div>
                                            <div className='table-1'>
                                                <div className='last'>
                                                    <iconify-icon icon="tabler:device-tv-old"></iconify-icon>
                                                    <iconify-icon icon="foundation:telephone"></iconify-icon>
                                                    <iconify-icon icon="material-symbols:ev-charger-outline"></iconify-icon>
                                                    <iconify-icon icon="mdi:plus-circle-outline"></iconify-icon><span>6</span>
                                                    <span className='calendar'><iconify-icon icon="uil:calender"></iconify-icon>Change Travel Date</span>
                                                    <span className='calendar'><iconify-icon icon="fluent:vehicle-car-collision-16-filled"></iconify-icon>Live Tracking</span>
                                                </div>
                                            </div>
                                            <div className='table-2'>
                                                <button className='btn' onClick={() => handleExpandClick(index)} >{state[index] ? "HIDE SEATS" : "VIEW SEATS"}</button>
                                            </div>
                                        </div>
                                        <div className='book-row-1'>
                                            <div className='book-col-1'>
                                                <span className='book-para'>Click on an Available seat to proceed with your transaction.</span>
                                                <h4>Lower Deck</h4>
                                                <div className='book-card'>
                                                    <div className='steering'>
                                                        <iconify-icon icon="tabler:steering-wheel"></iconify-icon>
                                                    </div>
                                                    <div className='seats'>
                                                    {maping?.map((e, i) => (
                                                    <div className='seat-col'>
                                                            <div className='seat-img' key={i}>
                                                                <img onClick={() => handleClick(e.id,index)} className={isSeatSelected(e.id) ? "selected" : "unSelected"} src={e.img} alt='no image' />
                                                            </div>
                                                            </div>
                                                        ))}
                                                    
                                                    </div>

                                                </div>

                                                <h4>Upper Deck</h4>
                                                <div className='book-card'>
                                                    <div className='steering' id='steering'>

                                                    </div>
                                                    <div className='seats'>
                                                    {mapings?.map((e,i) => {
                                                        return  <div className='seat-col'>
                                                                    <div className='seat-img' key={i}>
                                                                      <img  src={e.img} onClick={() => handleClick(e.id,index)} className={isSeatSelected(e.id) ? "selected" : "unSelected"} alt='no image' />
                                                                    </div>
                                                                </div>
                                                            })}
                                                    </div>

                                                </div>

                                            </div>
                                        
                                            <div className='book-col-2'>
                                                <Collapse in={open} timeout="auto" unmountOnExit>
                                                {reporter.length === 2 ? (<Report/>) : (<Point/>) }
                                                </Collapse>
                                            </div>
                                        </div>

                                    </div>

                                    )
                                })}
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Secondpage;
// export default secondObject;