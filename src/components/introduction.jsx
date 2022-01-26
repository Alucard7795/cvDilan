import React from 'react'

export const Introduction = () => {
  return (
    <div>
      <section id="colorlib-hero" className="js-fullheight" data-section="home">
        <div className="flexslider js-fullheight">
          <ul className="slides">
            <li style={{ backgroundImage: 'url(images/react.png)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1>Hi! <br />I'm Dilan</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://1drv.ms/b/s!AjF-aEP46ndQp3rcZssin7x31RP7" target="_blank" rel="noopener noreferrer">View CV<i className="icon-download4" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li style={{ backgroundImage: 'url(images/react.png)' }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner">
                      <div className="desc">
                        <h1>I love develop<br /> SOFTWARE !!</h1>
                        <p><a className="btn btn-primary btn-learn" href="https://github.com/Alucard7795?tab=repositories" target="_blank" rel="noopener noreferrer">View Projects <i className="icon-briefcase3" /></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    </div >
  )
}
