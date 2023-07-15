import {useState} from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import {GoThreeBars} from 'react-icons/go'
import {FaRegTimesCircle} from 'react-icons/fa'



function Navbar(){
    const [mobile, setMobile]= useState(false)
    const handleMobile=()=>{
        setMobile(!mobile)
    }
    const handleClose=()=>{
        setMobile(false)
    }
    
    return(
        <div className='nav-grand'>
            
        <div className='nav-parent'>
            <div className='nav-one'>
                <h3 style={{ color: '#25A4AD'}}>Payme</h3>
            </div>
            <div className= {mobile ? 'mobile-link' : 'nav-two'}>
            <div className='nav-two-one'>
                <Link className='mie' to='/' onClick={handleClose}>Home</Link>
                <Link className='mie' to='/about' onClick={handleClose}>About</Link>
                <Link className='mee' to='/testimonials' onClick={handleClose}>Testimonials</Link>
                <Link className='mee' to='/contact' onClick={handleClose}>Contact</Link>
            </div>  
            <div className='nav-two-two'>
                <Link to='/signin' className='star1' onClick={handleClose}><button className='inn' >Sign in</button> </Link>
                <Link to='/signup'  className='star2' onClick={handleClose}><button className='innn'>Sign up</button> </Link>
            </div>
            </div>
            <div className='menu-bars menubar'>
                {mobile? <FaRegTimesCircle className='times' onClick={handleMobile}/>
                :
                <GoThreeBars className='bars' onClick={handleMobile}/>
                }
            </div>

        </div>
        </div>
       
       
    )
}

export default Navbar