import bitcoin from '../assets/bitcoin.svg';
import doge from '../assets/doge.svg';
import ethereum from '../assets/ethereum.svg';
import icon from "../assets/icon.png"

export default function Navbar() {
    return(
        <div className="nav">
            <div className="logo-container">
                <img src={icon} alt="icon" className="logo-image"/>
                <h2>CRYPTO TRACKER</h2>
            </div>
            <div className="images">
                <h6>Available currencies:</h6>
                <a href="https://bitcoin.org" target="_blank" rel="noopener noreferrer">
                    <img src={bitcoin} alt="Bitcoin" className="image" />
                </a>
                <a href="https://ethereum.org" target="_blank" rel="noopener noreferrer">
                    <img src={ethereum} alt="Ethereum" className="image" />
                </a>
                <a href="https://dogecoin.com" target="_blank" rel="noopener noreferrer">
                    <img src={doge} alt="Dogecoin" className="image" />
                </a>
            </div>

        </div>
    )
}