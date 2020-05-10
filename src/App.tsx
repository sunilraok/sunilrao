import React from 'react';
import twitterLogo from './images/twitter.324dwr32.png';
import githubLogo from './images/octocat.d2ggb5d9.png';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Name"> Sunil Rao </div>
        <div className="Designation"> Software Engineer at <a target="_blank" href='https://www.microsoft.com' className="Microsoft" rel="noopener noreferrer">Microsoft</a> </div>
        <div className="SocialLinks">
          <a className="SocialLink" href="https://twitter.com/sunilrao_k" target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} alt="twitter logo"/>
          </a>
          <a className="SocialLink" href="https://github.com/sunilraok" target="_blank" rel="noopener noreferrer">
            <img src={githubLogo} alt="github logo"/>
          </a>
        </div>
      </header>
      <div className="App-body">
        <div>I am passionate about Systems and Artificial Intelligence.</div>
      </div>
    </div>
  );
}

export default App;
