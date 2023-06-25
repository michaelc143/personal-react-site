import './Home.css';

export default function Home() {
  return (
    <div className='homePage'>
      <img src='https://avatars.githubusercontent.com/u/79810775?v=4' alt="Picture of me"></img>
      <div className="resume">
          <h1>Michael Corbishley</h1>
          <h2>Computer Science Student</h2>
          <div className='contact-info2'>
            <a href='https://www.linkedin.com/in/michael-corbishley/' target='_blank'>
              <button className='linkedin-btn'>LinkedIn</button>
            </a>
            <a href='https://github.com/michaelc143' target='_blank'>
              <button className='github-btn'>Github</button>
            </a>
          </div>
          <div className='contact-info'>
            <p>&#x1F4E9; mcorbishley@wisc.edu</p>
          </div>
        <main>
          <section>
            <h2 className='education'>Education</h2>
            <h4>Pursuing B.S. in Computer Science</h4>
            <p>University of Wisconsin - Madison C/o 2024</p>
          </section>

          <section>
            <h2 className='coursework'>Relevant Coursework</h2>
            <div className='courses'>
              <p>Computer Engineering & Memory Management</p>
              <p>Introduction To Algorithms</p>
              <p>Linear Algebra</p>
              <p>Discrete Math</p>
              <p>Artificial Intelligence</p>
              <p>Computer Graphics</p>
              <p>Java Programming (I - III)</p>
              <p>Operating Systems</p>
              <p>Cryptography</p>
            </div>
          </section>
          
          <section>
            <h2 className='exp-header'>Experience / Projects</h2>
            <h3 className='entegral-header'>Entegral - Software Engineer Intern (Summer 2023)</h3>
            <h5 className='entegral-desc'>Incoming Software Engineer Intern for Full Stack Position at Entegral</h5>
            <h3 className='webDev-header'>WebDev UW (2020 - Current)</h3>
            <h5 className='webDev-desc'>UW-Madison student organization focused on web development</h5>
            <p className='webDev-summary'>WebHacks 2021: Tasked with creating a web application using React. <br />
              Group App Idea: Bingo game to teach Computer Science to users. <br />
              Assisted with creating bingo questions related to CS principles as well as Navbar and Leaderboard development and CSS styling</p>
          </section>
          <section>
            <h2 className='langs-header'>Skills / Languages</h2>
            <div className='langs'>
              <div className='lang-names'>
                <p>Java, JavaScript, HTML, CSS, Python, C, React, Three.JS, Git, Bash, Docker, Angular, Spring Boot, Ci/Cd Deployment</p>
              </div>
            </div>
            <br />
          </section>
        </main>
      </div>
      <p className='web-desc'>This entire website is coded in React.js and styled with traditional css</p>
      <p className='hidden-txt'>Text</p>
    </div>
  );
}