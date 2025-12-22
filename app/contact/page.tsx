import Link from "next/link";
import "../styles/form.css";

const ContactPage = () => {
  return (
    <section className="about-page bg-white">
      <header className="project-hero py-[8.5rem]">
        <div className="wrapper">
          <h2 className="text-[4.8rem] font-bold text-white text-center">
            Contact
          </h2>
          <div className="breadcrumb text-center text-white text-[2rem]">
            <Link href={"/"}>Home /</Link>
            <Link href={"/contact"}> Contact</Link>
          </div>
        </div>
      </header>
      <div className="wrapper py-[5rem]">
        <h2 className="text-[2.2rem] font-bold">Let's Build Your Dream Home Together</h2>
        <p className="text-[1.8rem] font-semibold text-neutral-700">Reach out to us from our contact form and we will get back to you shortly.</p>
        <form className="contact-form form p-[2.5rem] mt-[1.2rem] shadow-md rounded-xl bg-blue-50 border border-neutral-600">
            <div className="form-row two-cols">
                <div className="form-group">
                    <label htmlFor="full-name" className="form-label">Full Name</label>
                    <input type="text" name="full-name" id="full-name" className="form-control" placeholder="Full Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="phone" className="form-label">Phone</label>
                    <input type="tel" name="phone" id="phone" className="form-control" placeholder="Phone" />
                </div>
            </div>
            <div className="form-row two-cols">
                <div className="form-group">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" name="email" id="" className="form-control" placeholder="Email" />
                </div>
                <div className="form-group">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input type="text" name="subject" id="subject" className="form-control" placeholder="Subject" />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea name="message" id="message" className="form-control" placeholder="Message" rows={3}></textarea>
                </div>
            </div>
        </form>
      </div>
    </section>
  );
};

export default ContactPage;
