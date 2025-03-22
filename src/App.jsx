import './App.css';
import discordLogo from './assets/discord-logo-white.png';
import menuIcon from './assets/menu-icon.png';
import backgroundImage from './assets/discord-background.png';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div className="logo">
          <img src={discordLogo} alt="Discord" />
        </div>
        <div className="menu-icon">
          <img src={menuIcon} alt="Menu" />
        </div>
      </nav>
      
      <div className="hero">
        <div className="hero-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.</p>
          <div className="hero-buttons">
            <button className="download-btn">Download for Mac</button>
            <button className="browser-btn">Open Discord in your browser</button>
          </div>
        </div>
        <div className="hero-image">
          <img src={backgroundImage} alt="Discord characters" />
        </div>
      </div>
    </div>
    );
}

export default App;
