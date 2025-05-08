import { useState} from 'react';
import { useNavigate } from "react-router";
import Context from '../../context/context';
import './index.css';

const UserLogin = () => {
    const [isLoginActive, setIsLoginActive] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();
    

    const onChangeName= (e) => {
        setName(e.target.value);
    }
    const onChangePassword= (e) => {
        setPassword(e.target.value);
    }
    const onChangeEmail= (e) => {
        setEmail(e.target.value);
    }
    const onChangeConfirmPassword= (e) => {
        setConfirmPassword(e.target.value);
    }
    const onSubmitSignupForm = (e) => {
        e.preventDefault()
        const nameLen = name.length
        const passwordLen = password.length
        const confirmPasswordLen = confirmPassword.length
        const emailLen = email.length
        const signupEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
        const signupPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        const signupConfirmPassword = /^[A-Z]{1}[a-z]+[@#$]$/
        if (nameLen < 1 || emailLen < 1 || passwordLen < 1 || confirmPasswordLen < 1 || !signupEmail.test(email) || !signupPassword.test(password) || !signupConfirmPassword.test(confirmPassword)) {
            alert('Please fill all fields')
            return false            
        } else if (password !== confirmPassword) {
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
                    const passwordLen = password.length
                    const emailLen = email.length
                    const loginEmail = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
                    const loginPassword = /^[A-Z]{1}[a-z]+[@#$]$/
                    if (emailLen < 1 || passwordLen < 1 || !loginEmail.test(email) || !loginPassword.test(password)) {
                        alert('Please fill all fields')
                        return false            
                    } else{
                        alert('Login Successful')
                    }
                    localStorage.setItem('isAuthenticated', 'true')
                    setIsLoginSuccessful(true)
                    navigate('/')
                }
                return(
                    <div>
                        {isLoginActive ? (
                            <div className='user-container'>
                                <h1 className='user-heading'>User Login</h1>
                                <div className='user-btn-container'>
                                    <button className='user-select-btn' onClick={() => setIsLoginActive(true)}>Login</button>
                                    <button className='user-select-btn-2' onClick={() => setIsLoginActive(false)}>Signup</button>
                                </div>
                                <form className='user-form' onSubmit={onSubmitLogin}>
                                    <div className='user-input-container'>
                                        <img className='user-input-img' src='https://img.icons8.com/?size=100&id=12580&format=png&color=000000' alt='email img' />
                                        <input className='user-input' type='text' placeholder='Email' value={email} onChange={onChangeEmail} />
                                    </div>
                                    <div className='user-input-container'>
                                        <img className='user-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='user-input'
                                            type='password'
                                            placeholder="Password"
                                            value={password} onChange={onChangePassword}
                                        />
                                    </div>
                                    <button className='user-btn' type='submit'>Login</button>
                                </form>
                            </div>
                        ) : (
                            <div className='user-container'>
                                <h1 className='user-heading'>User Signup</h1>
                                <div className='user-btn-container'>
                                    <button className='user-select-btn-2' onClick={() => setIsLoginActive(true)}>Login</button>
                                    <button className='user-select-btn' onClick={() => setIsLoginActive(false)}>Signup</button>
                                </div>
                                <form className='user-form' onSubmit={onSubmitSignupForm}>
                                <div className='user-input-container'>
                                        <img className='user-input-img' src='https://img.icons8.com/?size=100&id=11730&format=png&color=000000' alt='Name img' />
                                        <input className='user-input' type='text' placeholder='Name' onChange={onChangeName}/>
                                    </div>
                                    <div className='user-input-container'>
                                        <img className='user-input-img' src='https://img.icons8.com/?size=100&id=12580&format=png&color=000000' alt='email img' />
                                        <input className='user-input' type='text' placeholder='Email'  onChange={onChangeEmail}/>
                                    </div>
                                    <div className='user-input-container'>
                                        <img className='user-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='user-input'
                                            type='password'
                                            placeholder="Password"
                                            onChange={onChangePassword}
                                        />
                                    </div>
                                    <div className='user-input-container'>
                                        <img className='user-input-img' src="https://cdn-icons-png.flaticon.com/512/3064/3064155.png" alt="lock icon" />
                                        <input 
                                            className='user-input'
                                            type='password'
                                            placeholder="Confirm Password"
                                            onChange={onChangeConfirmPassword}
                                        />
                                    </div>
                                    <button className='user-btn' type='submit'>Signup</button>
                                </form>
                            </div>
                        )}
                    </div>
                )
            }}
        </Context.Consumer>
    );
}

export default UserLogin;





