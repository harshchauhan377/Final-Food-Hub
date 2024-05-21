import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer>
    <div className="footer-container">
        <div className="logo-container">
            <img src="foodhub-logo.png" alt="" className="logo"/>
            <h4 className="logo-name">Food Hub</h4>
        </div>
        <div className="follow-div">
            <h4 className="follow-us">Follow Us</h4>
        </div>
        <div className="social-links">
            
            <a href=""><i className="fa-brands fa-instagram"></i></a>
            <a href=""><i className="fa-brands fa-facebook"></i></a>
            <a href="https://github.com/Harshban08/FrontEndFroup"><i className="fa-brands fa-github"></i></a>
            <a href=""><i className="fa-brands fa-linkedin"></i></a>
            <a href=""><i className="fa-brands fa-twitter"></i></a>
            <a href=""><i className="fa-brands fa-youtube"></i></a>
        </div>
        <div className="row">
            <div className="footer-col">
                <h4>Product</h4>
                <ul>
                    <li><a href="">Team</a></li>
                    <li><a href="">Advertising</a></li>
                    <li><a href="">Talent</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Network</h4>
                <ul>
                    <li><a href="">Teachnology</a></li>
                    <li><a href="">Science</a></li>
                    <li><a href="">Business</a></li>
                </ul>
            </div>
            <div className="footer-col">
                <h4>Company</h4>
                <ul>
                    <li><a href="">About</a></li>
                    <li><a href="">Legal</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>

    </div>
    <div className="footer-bottom">
        <p>copyright &copy;2024; Designed By <span className="Designed">G9-Group6-Batch-2022</span></p>
    </div>
</footer>
    </div>
  )
}

export default Footer