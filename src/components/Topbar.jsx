import React from 'react'
import Logo from "../assets/logo.png"

const Topbar = () => {
  return (
     <>
      <div id='logo' className="col-xl-3 col-lg-3 col-md-3 p-3  w-100 " style={{backgroundColor:"white"  }}>
                            <div>
                                <a href="index.html"><img className="logo" src={Logo}/></a>
                            </div>
                        </div>
     </>
  )
}

export default Topbar