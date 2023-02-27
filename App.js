import './App.css';
import image from './img/chat_bot_logo.png'

function App() {

  return (
    <div className="App">
      <div className = "wrapper">
        <div className = "content">
          <div className="header">
            <div className="img">
              <img src={image} alt="" />
            </div>
            <div className="right">
              <div className="name">ChatBot</div>
              <div className="status">Active</div>  
            </div>
          </div>
          <div className="main">
            <div className="messages">
              <div className="bot-message" id='message1'></div>
              <div className="human-message" id='message2'></div>
            </div>
          </div>
        </div>
        <div className = "bottom">
          <div className="btm">
           <div className="input">
             <input type="text" id="input" placeholder= 'Enter your question'/>
             <div className="btn">
               <button><i className="fas fa-paper-plane"></i>Send</button>
             </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
