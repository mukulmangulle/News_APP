import React, { useContext, useState } from 'react';
import CoinContext from './CoinContext';
import {SearchCoin}from "./CoinAction"



const Form = () => {

   const {dispatch} =useContext(CoinContext)

  const [text, setText]=useState("")
 
   const handleSubmit= async(e)=>{
    e.preventDefault()
    const data =await SearchCoin(text);
    dispatch({
      type:'SEARCH_COINS',
      payload:data
    })

    setText('')
   };

  return (
      <form onSubmit={handleSubmit}>
             <div className='h4 text-light text-center m-4' style={{margin:"10px 0px"}}  >
                  Search Any Crypto Currency Here...
             </div>

             <input className='w-100 border:0 rounded-2'  placeholder="Search Coin Here"
             onChange={(e)=> setText(e.target.value)}
             value={text}/>

            <button className='w-100 contained border-0 rounded-2'   
               style={{background:"green", marginTop:"10px", marginBottom:"10px" , color:'white'}} 
                         type="submit">Save</button> 
      </form>
  );
};

export default Form;