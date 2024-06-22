import './created.css';

function Created(){
    return(
        <div>
            <div className="created-done-page">
                <span id="created-done">CREATED DONE!</span><br/>

                <span>Welcome to Zentlement</span><br/>
                <span class="info5">Start your football journey today. Complete your account and access full our services. </span><br/>

                <i id="circle" className="icon fa-regular fa-circle-check"></i>
                <span>Verify Your Account</span><br/>
                <span class="info5">Complete identity verification to access all our services.</span>

                <i id="fund" className="icon" class="fa-solid fa-envelope-open-text"></i>
                <span>Fund Your Account</span><br/>
                <span class="info5">We suport multiple options to fund your account. Find a method that suits you the most.</span><br/>

                <i id="secure" className="icon" class="fa-solid fa-shield"></i>
                <span>Secure Your Account</span><br/>
                <span class="info5">Enable additional security verification to secure your account.</span><br/>
            
                <button id="get-started-btn">GET STARTED</button><br/>
                <button id="skip-btn">Skip for now. I'll do it later!</button>
            </div>
        </div>
    )
}

export default Created;