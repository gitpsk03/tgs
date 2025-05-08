import {Link} from 'react-router-dom'
import './index.css'

const ContactPage = () => {
    return(
    <div className='contact-container'>
        <div className='contact-us-img'>
            <h1 className='contact-heading'>Contact Us</h1>
        </div>
        <div className='contact-bottom'>
            <div className='contact-details'>
                <p>Feel free to use the form or drop us an email.</p>
                <div className='contact-details-container'>
                    <img className='contact-icon' src='https://img.icons8.com/?size=100&id=9730&format=png&color=000000' alt='phone icon'/>
                    <p>484-324-2400</p>
                </div>
                <div className='contact-details-container'>
                    <img  className='contact-icon'src='https://img.icons8.com/?size=100&id=12623&format=png&color=000000' alt='email icon'/>
                    <p>info@thegiftshop.com</p>
                </div>
                <div className='contact-details-container'>
                    <img className='contact-icon' src='https://img.icons8.com/?size=100&id=7880&format=png&color=000000' alt='location icon'/>
                    <p>24, WeWork, Ayyappa Society, Madhapur, <br/>Hyderbad, Telangana 500081</p>
                </div>
            </div>
            <div className='contact-form'>
                <form>
                <div className='contact-form-card'>
                    <p>Name</p>
                    <div>
                        <input type='text'/>
                        <input type='text'/>
                    </div>
                </div>
                <div>
                    <p>Email</p>
                    <input type='text'/>
                </div>
                <div>
                    <p>Phone (optional)</p>
                    <input type='text'/>
                </div>
                <div>
                    <p>Message</p>
                    <input type='text' placeholder='Type your message'/>
                </div>
                <Link to='/form-details'>
                    <button className='contact-form-button'>Submit</button>
                </Link>
                </form>
            </div>
        </div>
    </div>
)
}
export default ContactPage