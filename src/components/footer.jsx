import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="copyright">
        <p>&copy; 2024 Nike-Life. All rights reserved.</p>
        <span>Developed with <span className="heart">&#10084;&#65039;</span> by Marcelo Gabriel Rosso</span>
        <div className="d-flex justify-content-center" style={{ marginTop: '16px' }}>
          <a href="https://github.com/marcelorosso/Nike-Life.git" target="_blank" rel="noreferrer">
            <i className="fab fa-github" alt="github"></i>
          </a>
          <a href="https://www.linkedin.com/in/marcelo-gabriel-rosso-6797369a/" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin-in" alt="linkedin"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
