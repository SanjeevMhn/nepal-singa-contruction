import Link from "next/link";
import "../styles/form.css";
import formHero from "../../public/form-hero.jpg";

const ContactPage = () => {
  return (
    <section className="about-page bg-blue-50">
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
        <div className="form-container grid xl:grid-cols-2 rounded-[2.2rem] overflow-hidden shadow-2xl lg:w-[80%] mt-[2rem] mx-auto  bg-white ">
          <div className="img-container h-auto hidden xl:block col-[1]">
            <img
              src={formHero.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <form className="contact-form form p-[2.5rem] my-auto w-full xl:col-[2]">
            <div className="form-title flex flex-col gap-[0.5rem]  mb-[2rem]">
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold">
                Let's Build Your Dream Home Together
              </h2>
              <p className="text-[1.4rem] md:text-[1.6rem] font-semibold text-neutral-600">
                Reach out to us from our contact form and we will get back to
                you shortly.
              </p>
              <p className="text-[1.4rem] md:text-[1.6rem] p-[1.2rem] border-2 border-amber-500 bg-amber-200 text-amber-700 rounded-xl">
                Note: 
                All the fields below are required
              </p>
            </div>

            <div className="form-row two-cols">
              <div className="form-group">
                <label htmlFor="full-name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  name="full-name"
                  id="full-name"
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="form-row two-cols">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id=""
                  className="form-control"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  rows={3}
                ></textarea>
              </div>
            </div>

            <div className="form-row justify-center">
              <button type="submit" className="btn text-white p-[1.2rem_2rem] rounded-xl bg-[var(--clr-primary)]">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
