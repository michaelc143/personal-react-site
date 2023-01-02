import './Home.css';
export default function Home() {
    return(
        <>
        <img src='https://avatars.githubusercontent.com/u/79810775?v=4' alt="Picture of me"></img>
        <p className='web-desc'>This entire website is coded in React.js and styled with traditional css</p>
        <div className="resume">
          <header>
            <h1>Michael Corbishley</h1>
            <h2>Computer Science Student</h2>
            <p>Email: corbishleymichael1@gmail.com</p>
            <p>Phone: (925)-872-8478</p>
          </header>
          <main>
            <section>
              <h3 className='education'>Education</h3>
              <h4>Pursuing B.S. in Computer Science</h4>
              <p>University of Wisconsin - Madison C/o 2024</p>
            </section>
            <section>
              <h3 className='langs-header'>Skills / Languages</h3>
              <ul className='langs'>
                <li>Java (Proficient)</li>
                <li>React.JS / HTML / CSS (Proficient)</li>
                <li>JavaScript (Experienced)</li>
                <li>Python (Experienced)</li>
                <li>C (Experienced)</li>
              </ul>
            </section>
            <section>
              <h3 className='exp-header'>Experience / Projects</h3>
              <h4 className='entegral-header'>Entegral - Software Engineer Intern (Summer '23)</h4>
              <h5 className='entegral-desc'>Incoming Software Engineer Intern for Full Stack Position at Entegral</h5>
              <h4 className='webDev-header'>WebDev UW (2020 - Current)</h4>
              <h5 className='webDev-desc'>UW-Madison student organization focused on web development</h5>
              <p className='webDev-summary'>WebHacks 2021: Tasked with creating a web application using React. <br />
              Group App Idea: Bingo game to teach Computer Science to users. <br />
              Assisted with creating bingo questions related to CS principles as well as Navbar and Leaderboard development and CSS styling</p>
            </section>
          </main>
        </div>
        <p className='hidden-txt'>Text</p>
        </>
    );
}