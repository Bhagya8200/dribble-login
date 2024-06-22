import './security.css';

function Security() {
    return (
      <div>
      <div className="security-page">
      <span id="security">SECURITY</span><br/>
      <span>Email verification</span><br/>
      <span id="info4">Enter the 6-digit code sent to jas***@zentactics.io</span><br/><br/>
      <label for="code">Email verification code</label>
      <input type="text" id="code" size="25"></input>
      <button id="resend-code-btn">Resend code</button>
      <button id="submit">SUBMIT</button>
      <button id="verification-text">Security verification unavailable?</button>
    </div>
    </div>
    )
}

export default Security;
