import React, { useState } from 'react'
import "./account.css"

export default function Account() {
    const [isRegister, setIsRegister] = useState(false);

    const toggleForm = () => {
        setIsRegister(!isRegister);
    };
    return (
        <div className="auth-container">
            {!isRegister ? (
                <div className="login-form">
                    <h2 className='exit'>Login</h2>
                    <input className='directory' type="text" placeholder="Name" />
                    <input className='directory' type="password" placeholder="Password" />
                    <div className="buttons">
                        <button className='aud'>Login</button>
                        <button className='aud' onClick={toggleForm}>Register</button>
                    </div>
                </div>
            ) : (
                <div className="register-form">
                    <h2 className='exit'>Register</h2>
                    <input className='directory' type="text" placeholder="Name" />
                    <input className='directory' type="text" placeholder="Surname" />
                    <input className='directory' type="email" placeholder="Email" />
                    <input className='directory' type="password" placeholder="Password" />
                    <input className='directory' type="tel" placeholder="Phone Number" />
                    <div className="buttons">
                        <button className='aud' onClick={toggleForm}>Login</button>
                        <button className='aud'>Register</button>
                    </div>
                </div>
            )}
        </div>
    )
}
