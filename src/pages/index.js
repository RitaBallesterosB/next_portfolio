import Layout from "@/components/Layout";
import Link from "next/link";

import { skills, experiences, projects } from "@/pages/profile";

export default function Home() {
  return (
    <Layout footer={true}>
      {/* Header Card */}
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light animate__animated animate__fadeIn">
            <div className="row">
              <div className="col-md-4 text-center">
                <img
                  src="/profile_rita.jpg"
                  alt="profile Rita B"
                  className="img-fluid"
                />
              </div>
              <div className="col-md-8">
                <h1>Rita Ballesteros</h1>
                <h3>FullStack Developer</h3>
                <p>
                I am a dedicated Web Developer with hands-on experience in building dynamic websites and web applications. I have developed websites using WordPress, Elementor, and custom-built solutions from scratch. My expertise also includes front-end development with HTML, CSS, and Bootstrap, ensuring responsive and user-friendly designs. Additionally, I have worked on student-level software projects, building both the front-end and back-end using Node.js, Express, and React (Vite).
                </p>

                <p>I am experienced in developing RESTful APIs and implementing the MVC architecture in Java projects using Spring Boot, Hibernate, JWT, and MySQL. I am certified in Agile methodologies (Scrum) and proficient with Maven for dependency management, having successfully completed a booking system project. My technical skills, combined with my adaptability and knowledge of agile practices, make me a valuable asset for developing efficient, scalable, and secure web applications.</p>

                <p>Furthermore, I have training in digital marketing and a customer-centric mindset, which allows me to approach projects with a 360-degree vision. This helps me complement key design aspects that align with client goals, ensuring that both functionality and user experience contribute to the overall success of the project.</p>

                <p>I am a passionate individual who learns something new every day in the tech world and focuses on creating projects that add value to the clients I work for. I am also a committed and principled person, not only as a professional but also as an individual.</p>

                <h3 className="titular" >Hire me </h3>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Second section */}

      <section className="row">
        <div className="col-md-4 py-2">
          <div className="card bg-light animate__animated animate__fadeInLeft">
            <div className="card-body">
              <h1>Skills</h1>

              {/* Skill Progress  */}
              {skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress ">
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-8 py-2">
          {/* Experience */}
          <div className="card bg-light animate__animated animate__fadeInRight">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {/* List Item Experience */}
                {experiences.map(({ title, description, from, to }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from} {to ? `- ${to}` : "- current"}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/hireme" className="btn btn-light">
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Porfolio */}
      <section>
        <div className="row">
          <div className="col-md-12">
            <div className="card card-body bg-dark">
              <div className="row">
                <div className="col-md-12 my-2">
                  <h1 className="text-center text-light">Portfolio</h1>
                </div>
                {projects.map(({ name, description, image }, index) => (
                  <div className="col-md-4 p-2" key={index}>
                    <div className="card h-100">
                      <div className="overflow">
                        <img
                          src={`/${image}`}
                          alt="project"
                          className="card-img-top"
                        />
                      </div>
                      <div className="card-body">
                        <h3>{name}</h3>
                        <p>{description}</p>
                        <a href="/blog">Know More</a>
                      </div>
                    </div>
                  </div>
                ))}

                <div className="col-md-12 mt-4">
                  <div className="text-center">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
