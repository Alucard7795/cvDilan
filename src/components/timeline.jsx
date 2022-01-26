import React from 'react'

export const  Timeline = () => {
  return (
    <div>
      <section className="colorlib-experience" data-section="timeline">
        <div className="colorlib-narrow-content">
          <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
              <span className="heading-meta">highlights</span>
              <h2 className="colorlib-heading animate-box">Timeline</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="timeline-centered">
                <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-3">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2> Intermidiate Software Developer PersonalSoft SAS <span>2021-08-12 present</span></h2>
                      <p>
                        {'Develop, improve and test web applications with Angular and microservice on aws SDK with NodeJs for a Bank. Passionate about enhancing the user experience with a proven ability to deliver secure and reliable online banking applications for users.'}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-4">
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>Full Stack Developer Synapsys Tech S.A.S <span>2019-12-01 2021-08-11</span></h2>
                      <p>
                        {'Development of Apis, Web and Mobile Applications for IOS and Android operating systems with the React Native framework and Java Android for economic sectors such as commerce and Bank- ing.Development of Web Pages with the React JS Framework for the administration and control of applications.'}
                      </p>
                    </div>
                  </div>
                </article>
                <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                  <div className="timeline-entry-inner">
                    <div className="timeline-icon color-none">
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
