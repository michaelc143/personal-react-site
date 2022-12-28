import './Home.css';
export default function Home() {
    return(
        <>
        <div className='totalContainer'>
        <img src='https://avatars.githubusercontent.com/u/79810775?v=4' alt="Picture of me"></img>
       
        <p className='opening-paragraph'>Hey! My name is Michael Corbishley and I like to build stuff. I'm a third-year student at the 
        University of Wisconsin - Madison studying computer science who enjoys software
        engineering, web developement, and computer graphics.
        </p>
        <h2>
            Languages I've Studied
        </h2>
         <ul className='list-of-langs'>
            <li id='java'>
                Java
            </li>
            <li id='javaScript'> 
                Javascript
            </li>
            <li id='python'>
                Python
            </li>
            <li id='cLang'>
                C
            </li>
        </ul>
        </div>
        </>
    );
}