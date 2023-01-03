import './Contact.css';
export default function Contact() {
    return (
        <>
            <h1 className='contact-header'>
                Contact Me By Filling Out The Email Form Below
            </h1>
            <div className='contactForm'>
                <form action='mailto:corbishleycollege@gmail.com' method='POST' encType='text/plain' name='EmailForm'>
                    <label for="Name" className='name-input'>Your name</label>
                    <br />
                    <input type="text" id="Name" name="Name" required className='name-textbox'></input>
                    <br />
                    <label for="Email" className='email-input'>Your email address</label>
                    <br />
                    <input type="email" id="Email" name="Email" required className='email-textbox'></input>
                    <br />
                    <label for="Message" className='msg-input'>Your message</label>
                    <br />
                    <textarea id="Message" name="Message" rows="6" maxlength="3000" required className='msg-textbox'></textarea>
                    <br />
                    <button type="submit" value="Submit" className='submit-btn'>Send</button>
                </form>
            </div>
            <p className='web-desc'>This entire website is coded in React.js and styled with traditional css</p>
            <p className='hidden-txt'>Text</p>
        </>
    );
}