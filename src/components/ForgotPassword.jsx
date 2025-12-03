import React, { useContext, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { toast, Toaster } from 'react-hot-toast';

const ForgotPassword = () => {
    const { resetPassword } = useContext(AuthContext);
    const [email, setEmail] = useState(localStorage.getItem("email"));
    const handleForgot = (e) => {
        e.preventDefault();
        const emailValue = e.target.email.value;
        resetPassword(emailValue)
            .then(()=>{                
                localStorage.removeItem("email");
                setEmail("");
                toast("Reset password link sent to your email")
                window.open("https://mail.google.com/", "_blank");
                
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }
    
    return (
        <div className='mx-auto '>
            <Toaster></Toaster>
            <h1 className='text-2xl font-bold my-10 text-center '>Reset Password</h1>
            <form className='flex justify-center' onSubmit={handleForgot}>
                <fieldset className="fieldset *:w-80">
                    {/* email */}
                    <label className="label">Email</label>
                    <input name='email' value={email} type="email" className="input" placeholder="Enter your email address" required/>
                    <button type='submit' className="btn bg-accent text-base-100 mt-4">Reset Password</button>
                </fieldset>
            </form>
        </div>
    );
};

export default ForgotPassword;