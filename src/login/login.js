import './login.css';
import google from '../icons/google.png';
import telegram from '../icons/telegram.png';

function Login(){
    return(
        <div>
            <div className="login-page">
      <span id="login">LOGIN</span><br/>
      <span>Welcome back</span><br/>
      <span id="info1">Please login to your account to continue</span><br/><br/>

      <label for="email">Email/Phone number</label><br/>
      <input type="text" id="email" placeholder="Enter your email" size="40"/><br/>
      <label for="password">Password*</label>
      <span id="fg">Forgot password?</span>
      <input type="password" id="password" placeholder="Enter your password" size="40"/><br/>

      <button id="continue">CONTINUE</button>

      <p id="or">OR</p>

      <button id="google-btn"><img src={google} id="google-img"/> CONTINUE WITH GOOGLE</button><br/>
      <button id="telegram-btn"><img src={telegram} id="telegram-img"/> CONTINUE WITH TELEGRAM</button><br/>
      <p id="info2">By clicking Sign Up, you are agreeing to <span id="terms-of-service-text">Terms of Service</span> and are acknowledging our <span id="privacy-policy-text">Privacy Policy</span> applies.</p>
      <p id="register-now">Not looking for an account? <span id="register-now-text">Register now</span></p>
    </div>
        </div>
    )
}

export default Login;