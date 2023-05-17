import React, { useState } from 'react'
import { StateContext } from './StateContext'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useNavigate } from 'react-router-dom';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Report = () => {
 const{state: {reporter,edit,map}, dispatch} = React.useContext(StateContext);
 console.log(reporter);

 let x=[];
 x.push(reporter[0]);
 let y=[];
 y.push(reporter[1]);
 console.log(x)

 const[empty, setEmpty] = useState(false)
let navigate = useNavigate()


const [open, setOpen] = React.useState(false);

const handleClickOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
  navigate('/')
};
  return (

      <div>
      <section>
      <div className="card-container">
        <div className="card-row">
          <div className="card-col">
   <div className='card'>
    <div className="points">
      <h2 className='point'>Boarding & Dropping</h2>  <h3 className='point1'>CHANGE</h3>
    </div>
    <div className="points1">
      <h3 className='busId'>{x.map((value,index) => {
             return value.name
      })}
      </h3>
      <h3 className='time'>{x.map((value,index) => {
             return value.time
      })}</h3>
      
    </div>
    <p className="p1">{x.map((value,index) => {
             return value.para
      })}</p>
    <div className="points2">
      <h3 className='busId1'>{y.map((value,index) => {
             return value.name
      })}
      </h3>
        <h3 className='time'>{y.map((value,index) => {
             return value.time
      })}</h3>
    
    </div>
    <p className="p2">{y.map((value,index) => {
             return value.para
      })}</p>
      <hr />
      <div className="points3">
       <h3 className='busId2'>Seats</h3>  <h3 className='time1'>{map.length <= 1 ? `${map.length} seat are booked` : `${map.length} seats are booked`} </h3> 
      </div>
      <hr/>
      <h4 className="faredetails">Fare Details</h4>
          <div className = "amount">
          <h3>Amount</h3> <h3 className='amhead'>${[edit]?.map((values,index) => (values.fare * map.length))}</h3>
          
      </div>
      <p className="tax">Taxes will be calculated during payment</p>
      <h6>Show Fare Details</h6>
      <div className='gap'>
        <Button className='bdbtn' onClick={handleClickOpen}>
            proceed to book
        </Button>
      </div>
      </div>
    
      </div>
      </div>
      </div>
      </section>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"MISSION SUCCESS!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            Your Tickets are booked..
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK!</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Report