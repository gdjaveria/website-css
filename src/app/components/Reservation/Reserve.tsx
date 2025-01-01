
import React from 'react';
import Image from 'next/image';
import './Reserve.css'; 

const Reservation = () => {
 const hours=[
    {
        day:'monday',time:'09-22'
    },
    {
        day:'Tuesdat',time:'09-22',
    },
    {
        day:'Wednesday',time:'09-22',
    },
    {
        day:'Thursday',time:'09-22',
    },
    {
        day:'Friday',time:'09-22',
    },
    {
        day:'Saturday',time:'09-01',
    },
    {
        day:'Sunday',time:'09-23',
    },
 ];
   
    return (
        <>
        <div  id='reservation'  className='reservation-container'>
          <h1 className='reservation-title'>Make A Reservation</h1>
         <p className='reservation-description'>Lorem ipsum dolor sit amet, consectetur 
           adipiscing elit, do eiusmod tempor incididunt ut la.</p>
         <form className='reservation-form'>

        <div className='form-group'>
         <div className='form-field'>
         <label htmlFor='name'>Name</label>
        <input type='text' id='name' placeholder='Enter your name'/></div>

          <div className='form-field'>
         <label htmlFor='email'>Email</label>
        <input type='email' id='email' placeholder='Enter your email'/>
       </div>
      </div>

       <div className='form-group'>
       <div className='form-field'>
     <label htmlFor='seats'>Seats</label>
      <input type='number' id='seats' placeholder='Number of seats'/>
      </div>

      <div className='form-field'>
      <label htmlFor='date'>Date</label>
      <input type='date' id='date'/>
      </div>
      </div>     

      <div className='form-field'>
       <label htmlFor='message'>Message</label>
        <textarea  id='date' placeholder='Add a message'></textarea>  
  </div>     

  <button className='submit-button' type='submit'>Submit</button> 

</form>
</div>

<div className='opening-hours-container'>
    <div className='image-container'>
      <Image src="/shop.jpg" alt="food table"
       width={300} height={300} className='image'/>
    </div>

<div className='hours-container'>
    <h1 className='hours-title'>Opening Hours</h1>
    <ul className='hours-list'>
        {hours.map((item,index)=>(
         <li key={index} className='hours-item'>
       <span className='day'>{item.day}</span>
       <span className='time'>{item.time}</span>
</li>
        ))}
    </ul>
</div>
</div>

 </>
           
           
              
     

    );
};

export default Reservation;
