import { education, hobbies, languages, skills } from '../data/resume';

export default function Qualifications() {
  return (
    <section id="background" className="section" aria-labelledby="background-title">
      <span className="eyebrow">Background</span>
      <div className="section-intro">
        <h2 id="background-title">Technical foundation</h2>
        <p>The tools, education, and continuous learning behind my day-to-day engineering work.</p>
      </div>
      <h3 className="subheading">Skills &amp; technologies</h3>
      <ul className="skill-list" aria-label="Skills and technologies">
        {skills.map((skill) => <li key={skill}>{skill}</li>)}
      </ul>
      <div className="background-grid">
        <div>
          <h3 className="subheading">Education</h3>
          {education.map((item) => (
            <article className="education" key={`${item.school}-${item.degree}`}>
              <h4>{item.degree}</h4>
              <p>{item.school}</p>
              <span>{item.dates}</span>
            </article>
          ))}
        </div>
        <div className="personal-details">
          <h3 className="subheading">Languages</h3>
          <dl>
            {languages.map((item) => (
              <div key={item.language}><dt>{item.language}</dt><dd>{item.level}</dd></div>
            ))}
          </dl>
          <h3 className="subheading">Continued learning</h3>
          <p>{hobbies}</p>
        </div>
      </div>
    </section>
  );
}
