
import { FaInstagram, FaXTwitter, FaLinkedin } from "react-icons/fa6";
export default function App() {
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="container">
            <div className="logo-wrapper">
                <img
                    src="./OIP.webp"
                    alt="Chai Culture logo"
                    className="logo"
                />
            </div>

            <h1>Brew the Royal Tradition</h1>

            <p className="description">
                Chai Culture brings the timeless elegance of royal Indian households to
                a modern, premium instant chai experience.
            </p>

            <div className="launch-badge">Launching Soon</div>

            <form className="signup" onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    aria-label="Email address"
                />
                <button type="submit">Notify Me</button>
            </form>

            <div className="socials">
                <a href="#"><FaInstagram /></a>
                <a href="#"><FaXTwitter /></a>
                <a href="#"><FaLinkedin /></a>
            </div>
        </div>
    );
}
