import './Contact.css';
export default function Contact() {
    return (
        <>
        <h1>
            Contact Me By Filling Out The Form Below
        </h1>
        <label for="Name" class="fcf-label">Your name</label>
        <br></br>
        <input type="text" id="Name" name="Name" class="fcf-form-control" required></input>
        <br></br>
        <label for="Email" class="fcf-label">Your email address</label>
        <br></br>
        <input type="email" id="Email" name="Email" class="fcf-form-control" required></input>
        <br></br>
        <label for="Message" class="fcf-label">Your message</label>
        <br></br>
        <textarea id="Message" name="Message" class="fcf-form-control" rows="6" maxlength="3000" required></textarea>
        <br></br>
        <button type="submit" id="fcf-button" class="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send</button>
        </>
    );
}