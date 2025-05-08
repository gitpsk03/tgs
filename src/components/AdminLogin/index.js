import { useState } from 'react';
import { useNavigate } from "react-router";
import Context from '../../context/context';
import './index.css';

const AdminLogin = () => {
    const [isAdminLoginActive, setIsAdminLoginActive] = useState(true);
    const [adminName, setAdminName] = useState('');
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [adminConfirmPassword, setAdminConfirmPassword] = useState('');
    const navigate = useNavigate();

    const onChangeAdminName= (e) => {
        setAdminName(e.target.value);
    }
    const onChangeAdminPassword= (e) => {
        setAdminPassword(e.target.value);
    }
    const onChangeAdminEmail= (e) => {
        setAdminEmail(e.target.value);
    }
    const onChangeAdminConfirmPassword= (e) => {
        setAdminConfirmPassword(e.target.value);
    }
    const onSubmitAdminSignupForm = (e) => {
        e.preventDefault()
        const adminNameLen = adminName.length
        const adminPasswordLen = adminPassword.length
        const adminConfirmPasswordLen = adminConfirmPassword.length
        const adminEmailLen = adminEmail.length
        const signupAdminEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const signupAdminPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        const signupAdminConfirmPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        if (adminNameLen < 1 || adminEmailLen < 1 || adminPasswordLen < 1 || adminConfirmPasswordLen < 1 || !signupAdminEmail.test(adminEmail) || !signupAdminPassword.test(adminPassword) || !signupAdminConfirmPassword.test(adminConfirmPassword)) {
            alert('Please fill all fields')
            return false            
        } else if (adminPassword !== adminConfirmPassword) {
            alert('Password do not match')
        }
        else{
            alert('Signup Successful')
        }

    }


    return (
        <Context.Consumer>
            {value => {
                const {setIsLoginSuccessful} = value;
                const onSubmitLogin = (e) => {
                    e.preventDefault()
                    localStorage.setItem('isAuthenticated', 'true')
                    setIsLoginSuccessful(true)
                    alert('Login Successful')
                    navigate('/')
                }
                return(
                    <div>
                        {isAdminLoginActive ? (
                            <div className='admin-container'>
                                <h1 className='admin-heading'>Admin Login</h1>
                                <div className='admin-btn-container'>
                                    <button className='admin-select-btn' onClick={() => setIsAdminLoginActive(true)}>Login</button>
                                    <button className='admin-select-btn-2' onClick={() => setIsAdminLoginActive(false)}>Signup</button>
                                </div>
                                <form className='admin-form' onSubmit={onSubmitLogin}>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src='https://img.icons8.com/?size=100&id=12580&format=png&color=000000' alt='email img' />
                                        <input className='admin-input' type='text' placeholder='Email' />
                                    </div>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='admin-input'
                                            type='password'
                                            placeholder="Password"
                                        />
                                    </div>
                                    <button className='admin-btn'>Login</button>
                                </form>
                            </div>
                        ) : (
                            <div className='admin-container'>
                                <h1 className='admin-heading'>Admin Signup</h1>
                                <div className='admin-btn-container'>
                                    <button className='admin-select-btn-2' onClick={() => setIsAdminLoginActive(true)}>Login</button>
                                    <button className='admin-select-btn' onClick={() => setIsAdminLoginActive(false)}>Signup</button>
                                </div>
                                <form className='admin-form' onClick={onSubmitAdminSignupForm}>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src='https://img.icons8.com/?size=100&id=11730&format=png&color=000000' alt='email img' />
                                        <input className='admin-input' type='text' placeholder='Name' onChange={onChangeAdminName}/>
                                    </div>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src='https://img.icons8.com/?size=100&id=12580&format=png&color=000000' alt='email img' />
                                        <input className='admin-input' type='text' placeholder='Email' onChange={onChangeAdminEmail}/>
                                    </div>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='admin-input'
                                            type='password'
                                            placeholder="Password"
                                            onChange={onChangeAdminPassword}
                                        />
                                    </div>
                                    <div className='admin-input-container'>
                                        <img className='admin-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='admin-input'
                                            type='password'
                                            placeholder="Confirm Password"
                                            onChange={onChangeAdminConfirmPassword}
                                        />
                                    </div>
                                    <button className='admin-btn' type='submit'>Signup</button>
                                </form>
                            </div>
                        )}
                    </div>
                     );
                    }
                }
        </Context.Consumer>
    )
}

export default AdminLogin;





