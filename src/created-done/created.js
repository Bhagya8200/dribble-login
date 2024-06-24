import './created.css';
import shield from '../icons/shield-solid.svg';
import check from '../icons/circle-check.svg';
import card from '../icons/credit-card.svg';

function Created(){
    return(
        <div>
            <div className="created-done-page">
                <span id="created-done">CREATED DONE!</span><br/>

                <span>Welcome to Zentlement</span><br/>
                <p class="text">Start your football journey today. Complete your account and access full our services. </p>

                <img src={check} id="check-img" /><br/><br/>
                <div class="div">
                    <span>Verify Your Account</span><br/>
                    <span class="text">Complete identity verification to access all our services.</span>
                </div>

                <img src={card} id="card-img" />
                <div class="div">
                    <span>Fund Your Account</span><br/>
                    <span class="text">We suport multiple options to fund your account. Find a method that suits you the most.</span><br/>
                </div>                

                <img src={shield} id="shield-img" />
                <div class="div">
                    <span>Secure Your Account</span><br/>
                    <span class="text">Enable additional security verification to secure your account.</span><br/>
                </div>
            
                <button id="get-started-btn">GET STARTED</button><br/>
                <button id="skip-btn">Skip for now. I'll do it later!</button>
            </div>
        </div>
    )
}

export default Created;