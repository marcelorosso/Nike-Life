import React from 'react'

const Footer = () => {
  return (
    <footer>
        {/* copyright */}
        <div className="copyright">
            <p>© 2022 Nike-Life. All rights reserved.</p>
            <span>Developed with <span className="heart">💖</span> by Marcelo Gabriel Rosso. <span className="heart">😎</span></span>
            <div className=" d-flex justify-content-center">
                <a href="https://github.com/marcelorosso/Nike-Life.git"  target="_blank"><i className="fab fa-github" alt="github"></i></a>
                <a href="https://www.linkedin.com/in/marcelo-gabriel-rosso-6797369a/" target="_blank"><i className="fab fa-linkedin-in" alt="linkedin"></i></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer