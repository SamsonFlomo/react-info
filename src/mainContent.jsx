import reactLogo from './assets/react.svg'

function MainContent () {
    return (
       <div className="main-content">
          <h1>Fun facts about React</h1>

          <ul className="facts">
            <li>Was first released in 2013</li>
            <li>Was Originally created by John Walke</li>
            <li>Has well over 200k stars on Github</li>
            <li>Maintained by meta</li>
            <li>Powers thousands of interprise apps, including  mobile apps</li>
          </ul>

          <img src={reactLogo} alt="React Logo" id="main-img"/>
       </div> 
    );
};



export default MainContent;
