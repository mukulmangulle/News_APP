import React from 'react'
import CardContainer from './CardContainer';
import Form from './Form';


const Home = () => {
    return (
        <>
           <div id='coin' className='container  border-1 border-dark w-50 m-4 rounded-3' style={{overflow:"scroll", overflowX:"hidden"}}>
                <Form />
                <CardContainer />
                </div>
        </>
    )
}

export default Home;