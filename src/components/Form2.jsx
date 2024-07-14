
import CoinContext from '../context/coin/CoinContext';
import { useContext, useState } from 'react';
import { SearchCoin } from '../context/CoinAction';



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
             <Typography sx={{margin:"20px 0px"}} variant='h4' align='center'>
                  Search Any Crypto Currency Here...
             </Typography>

             <TextField  fullWidth label="Search Coin Here" variant='outlined'
             onChange={(e)=> setText(e.target.value)}
             value={text}/>

            <Button fullWidth variant='contained ' 
               sx={{background:"green", marginTop:"20px", marginBottom:"40px" , color:'white'}} 
               endIcon={<SaveIcon/>}
               type="submit">Save</Button> 
      </form>
  );
};

export default Form;