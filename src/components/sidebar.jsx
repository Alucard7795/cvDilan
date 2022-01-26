import React from 'react'

export const Sidebar = () => {
  return (
    <div>
      <div>
        <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
        <aside id="colorlib-aside" className="border js-fullheight">
          <div className="text-center">
            <div className="author-img" style={{ backgroundImage: 'url(images/about2.png)' }} />
            <h1 id="colorlib-logo"><a href="/">Dilan Mauricio García Cuellar</a></h1>
            <span className="email"><i className="icon-mail"></i> dilan-garciac@outlook.com </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                <li><a href="#about" data-nav-section="about">About</a></li>
                {/* <li><a href="#projects" data-nav-section="projects">Projects</a></li> */}
                {/* <li><a href="#" data-nav-section="blog">Blog</a></li> */}
                <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
              </ul>
            </div>
          </nav>
          <nav id="colorlib-main-menu">
            <ul>
              {/* <li><a href="https://twitter.com/Sebas_Garcia95" target="_blank" rel="noopener noreferrer"><i className="icon-twitter2" /></a></li>
                <li><a href="https://www.instagram.com/sebasgarcia29/" target="_blank" rel="noopener noreferrer"><i className="icon-instagram" /></a></li> */}
              <li><a href="https://www.linkedin.com/in/dilan-mauricio-garcia-472aab209" target="_blank" rel="noopener noreferrer"><i className="icon-linkedin2" /></a></li>
              <li><a href="https://github.com/Alucard7795" target="_blank" rel="noopener noreferrer"><i className="icon-github"></i></a></li>
            </ul>
          </nav>
        </aside>
      </div>
    </div>
  )
}
