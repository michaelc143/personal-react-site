import './CodeTutorials.css';

export default function CodeTutorials() {
    return(
        <div className='code-tutorials-page'>
            <p>Open Source Code / Previous Projects</p>
            <table className='tutorials-table'> 
            <tr>
                <th>
                    Project Name
                </th>
                <th>
                    Link to open source
                </th>
            </tr>
            <tr>
                <td>
                    Open Source Code For This Website
                </td>
                <td>
                    <a href='https://github.com/michaelc143/personal-react-site' className='open-source-link'>Link</a>
                </td>
            </tr>
            <tr>
                <td>
                    Open Source Code For ChatGPT Chatbot site
                </td>
                <td>
                    <a href='https://github.com/michaelc143/OpenAiChatBot/tree/main' className='open-source-link'>Link</a>
                </td>
            </tr>
            <tr>
                <td>
                    Collection of Three.JS and OpenGL Animations
                </td>
                <td>
                    <a href='https://github.com/michaelc143/Computer-Graphics-Fall-2022' className='open-source-link'>Link</a>
                </td>
            </tr>
            </table>
            <p className='hidden-txt'>Hiddentext</p>
        </div>
    );
}