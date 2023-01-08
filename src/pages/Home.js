import './Home.css';

export default function Home() {
  return (
    <>
      <img src='https://avatars.githubusercontent.com/u/79810775?v=4' alt="Picture of me"></img>
      <div className="resume">
        <header>
          <h1>Michael Corbishley</h1>
          <h2>Computer Science Student</h2>
          <ul className='contact-info'>
            <li>Email: corbishleymichael1@gmail.com</li>
            <li>Phone: (925) - 872 - 8478</li>
            <li>
              <a href='https://www.linkedin.com/in/michael-corbishley/' target='_blank'>
                <button className='linkedin-btn'>LinkedIn</button>
              </a>
            </li>
          </ul>
        </header>
        <main>
          <section>
            <h2 className='education'>Education</h2>
            <h4>Pursuing B.S. in Computer Science</h4>
            <p>University of Wisconsin - Madison C/o 2024</p>
          </section>

          <section>
            <h2 className='coursework'>Relevant Coursework</h2>
            <ul className='courses'>
              <li>Computer Engineering & Memory Management</li>
              <li>Introduction To Algorithms</li>
              <li>Linear Algebra</li>
              <li>Discrete Math</li>
              <li>Introduction To Aritificial Intelligence</li>
              <li>Computer Graphics</li>
              <li>Java Programming (I - III)</li>
            </ul>
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
            <table className='langs'>
              <tr>
                <th>Proficient</th>
                <th></th>
                <th>Experienced</th>
              </tr>
              <tr>
                <td>Java, React.js, HTML/CSS</td>
                <td></td>
                <td></td>
                <td>Python, C</td>
              </tr>
            </table>
            <br />
          </section>
        </main>
      </div>
      <p className='web-desc'>This entire website is coded in React.js and styled with traditional css</p>
      <p className='hidden-txt'>Text</p>
    </>
  );
}