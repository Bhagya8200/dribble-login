import "./register.css";
import google from '../icons/google.png';
import telegram from '../icons/telegram.png';

function Register(){
    return(
        <div>
            <div className="register-page">
                <div className="container">        
                    <span id="register">REGISTER</span><br/>
                    <span>Create an Account</span><br/>
                    <span id="text1">Use one of the following options to register</span><br/>
                    <button id="email-btn">Email</button>
                    <button id="phone-number-btn">Phone number</button><br/><br/>
                <div>
                    <label for="email">Email*</label><br/>
                    <input type="email" id="email" placeholder="Enter your email" required size="60"/><br/>
                    <label for="password">Password*</label><br/>
                    <input type="password" id="password" placeholder="Enter your password" required size="60"/><br/>
                    <label for="dob">Date of Birth*</label><br/>
                    <input type="date" id="dob" required/><br/>
                </div>
                <p id="text2">Please provide your date of birth so we know you are old enough to have an account.</p>
                <button id="create-account-btn">CREATE ACCOUNT</button>
                <p id="or">OR</p>
                <button id="google-btn"><img src={google} id="google-img"/> CONTINUE WITH GOOGLE</button><br/>
                <button id="telegram-btn"><img src={telegram} id="telegram-img"/> CONTINUE WITH TELEGRAM</button><br/>
                <p id="text3">By clicking Sign Up, you are agreeing to <span id="terms-of-service-text">Terms of Service</span> and are acknowledging our <span id="privacy-policy-text">Privacy Policy</span> applies.</p>
                <p id="login">Not looking for an account? <span id="login-text">Login</span></p>         
                </div>
            </div>
        </div>
    )
}

export default Register;