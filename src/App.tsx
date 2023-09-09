import React from 'react';
import twitterLogo from './images/twitter.324dwr32.png';
import githubLogo from './images/octocat.d2ggb5d9.png';
import hashnodeLogo from './images/hashnode_logo.png';
import './App.css';
import { useMsal } from '@azure/msal-react';

const loginRequest = {
  scopes: ["User.Read"]
};

const App: React.FC = () => {
  const { instance, accounts } = useMsal();

  const authenticate = () => {
    instance.loginRedirect(loginRequest).catch(e => {
      console.log(e);
    });
    
    instance.acquireTokenSilent({ ...loginRequest, account: accounts[0] }).then(response => {
      console.log("Auth response: ", response.accessToken);
    });
  }

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
          <a className="SocialLink" href="https://blog.sunilrao.in" target="_blank" rel="noopener noreferrer">
            <img src={hashnodeLogo} alt="hashnode logo"/>
          </a>        
        </div>
      </header>
      <div className="App-body">
        <div>Passionate about Systems and Artificial Intelligence.</div>
      </div>
      <button onClick={authenticate}>
        Login
      </button>
    </div>
  );
}

// App Id: 24e462d1-d621-4fdf-9bde-40f589cd9086

export default App;
