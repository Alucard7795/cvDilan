import { experience } from '../data/resume';

export default function Experience() {
  return (
    <section id="experience" className="section" aria-labelledby="experience-title">
      <span className="eyebrow">Career</span>
      <div className="section-intro">
        <h2 id="experience-title">Professional experience</h2>
        <p>A progression through mobile, frontend, backend, cloud, and cross-platform product development.</p>
      </div>
      <div className="timeline">
        {experience.map((job) => (
          <article className="timeline-entry" key={`${job.company}-${job.dates}`}>
            <div className="timeline-marker" aria-hidden="true" />
            <div className="job-heading">
              <div><h3>{job.title}</h3><p className="company">{job.company}</p></div>
              <p className="dates">{job.dates}</p>
            </div>
            <ul className="responsibilities">
              {job.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <ul className="technology-list" aria-label={`Technologies used at ${job.company}`}>
              {job.technologies.map((technology) => <li key={technology}>{technology}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
