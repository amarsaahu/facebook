import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
    <div classname="leftcontainer">
    <div className="homepage">
    <div className="name-description">
      <p>Glad you are here!</p>
      <p className="name">AMARNATH SATHANI</p>
   
    </div>
    <div classname="contact-us">
      <div className="login-form">
    <input type="text" placeholder="Username" width="339px" />
    <div className="homepage1">
      <div className="pwd">
        <input type="password" placeholder="password" /></div>
    
    <span>*</span>

    </div>
    <div classname="Login-btn"> 
    <button>Log In </button>
    </div>
    

      </div>
      <div className="signup-btn">
        <button>Create new account</button>

      </div>

    </div>
    </div>
    </div>
    
    
    </>

  
  );
}

export default App;
