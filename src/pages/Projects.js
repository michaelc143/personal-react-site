import './Projects.css';

export default function Projects() {
    return(
        <div className='project-page'>
            <div className='project-body'>
                <div className='cube-animation-proj'>
                    <div className='cube-animation-info'>
                        <h3>
                            PORJECT NAME
                        </h3>
                        <p>
                            PROJECT DESCRIPTION
                        </p>
                    </div>
                    <div className='cube-animation-gif'>
                    <img src='/triangle-hw.gif' alt="Picture of me">
                    </img>
                    </div>
                </div>
            </div>
        </div>
    );
}