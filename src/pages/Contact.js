import './Contact.css';
export default function Contact() {
    return (
        <>
        <h1>
            Contact Me By Filling Out The Email Form Below
        </h1>
        <div className='contactForm'>
            <form action='mailto:corbishleycollege@gmail.com' method='POST' encType='text/plain' name='EmailForm'>
            <label for="Name">Your name</label>
            <br />
            <input type="text" id="Name" name="Name" required></input>
            <br />
            <label for="Email">Your email address</label>
            <br />
            <input type="email" id="Email" name="Email" required></input>
            <br />
            <label for="Message">Your message</label>
            <br />
            <textarea id="Message" name="Message" rows="6" maxlength="3000" required></textarea>
            <br />
            <button type="submit" value="Submit">Send</button>
            </form>
        </div>
        </>
    );
}