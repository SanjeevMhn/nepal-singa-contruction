"use client";
import Link from "next/link";
import "../styles/form.css";
import formHero from "../../public/form-hero.jpg";
import { SubmitHandler, useForm } from "react-hook-form";
import { error } from "console";

type ContactFormType = {
  full_name: string;
  phone: number;
  email: string;
  subject: string;
  body: string;
};

const ContactPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormType>();


  const handleContactForm:SubmitHandler<ContactFormType> = (data) => {
    const recipient = 'nepalsinga07@gmail.com'
    const subject = encodeURIComponent(data.subject)
    const bodyText = `${data.body}\n\n`+
      `Name: ${data.full_name}\n`+
      `Email: ${data.email}\n` +
      `Phone: ${data.phone}`;

    const encodedBody = encodeURIComponent(bodyText)

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1` +
                     `&to=${encodeURIComponent(recipient)}` +
                     `&su=${subject}`+
                     `&body=${encodedBody}`;


    let mailTo = document.createElement('a')
    mailTo.setAttribute('href', gmailUrl)
    mailTo.setAttribute('target', '_blank')
    mailTo.setAttribute('rel', 'noopener noreferrer')
    document.body.appendChild(mailTo)
    mailTo.click()
    document.body.removeChild(mailTo)
    mailTo.remove()
    reset()
  }

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
          <form onSubmit={handleSubmit(handleContactForm)} className="contact-form form p-[2.5rem] my-auto w-full xl:col-[2]">
            <div className="form-title flex flex-col gap-[0.5rem]  mb-[2rem]">
              <h2 className="text-[1.8rem] md:text-[2.4rem] font-bold">
                Let's Build Your Dream Home Together
              </h2>
              <p className="text-[1.4rem] md:text-[1.6rem] font-semibold text-neutral-600">
                Reach out to us from our contact form and we will get back to
                you shortly.
              </p>
              <p className="text-[1.4rem] md:text-[1.6rem] p-[1.2rem] border-2 border-amber-500 bg-amber-200 text-amber-700 rounded-xl">
                *Note: All the fields below are required
              </p>
            </div>

            <div className="form-row two-cols">
              <div className="form-group">
                <label htmlFor="full-name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    errors.full_name ? "border-red-700! outline-red-700!" : ""
                  }`}
                  placeholder="Full Name"
                  {...register("full_name", {
                    required: {
                      value: true,
                      message: "Full Name Required",
                    },
                    minLength: {
                      value: 2,
                      message: "Name must be greater than 2 Characters",
                    },
                  })}
                />
                {errors.full_name ? (
                  <small className="text-red-700 text-[1.5rem]">
                    {errors.full_name.message}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="form-control"
                  placeholder="Phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Phone Number Required",
                    },
                    minLength: {
                      value: 10,
                      message: "Invalid Phone Number",
                    },
                  })}
                />
                {errors.phone ? (
                  <small className="text-red-700 text-[1.5rem]">
                    {errors.phone.message}
                  </small>
                ) : null}
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  id=""
                  className="form-control"
                  placeholder="Email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email Required",
                    },
                    pattern: {
                      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                      message: "Invalid Email",
                    },
                  })}
                />
                {errors.email ? (
                  <small className="text-red-700 text-[1.5rem]">
                    {errors.email.message}
                  </small>
                ) : null}
              </div>
              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="form-control"
                  placeholder="Subject"
                  {...register("subject", {
                    required: {
                      value: true,
                      message: "Subject Required",
                    },
                  })}
                />
                {errors.subject ? (
                  <small className="text-red-700 text-[1.5rem]">
                    {errors.subject.message}
                  </small>
                ) : null}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  className="form-control"
                  placeholder="Message"
                  rows={3}
                  {...register("body", {
                    required: {
                      value: true,
                      message: "Message Required",
                    },
                  })}
                ></textarea>
                {errors.body ? (
                  <small className="text-red-700 text-[1.5rem]">
                    {errors.body.message}
                  </small>
                ) : null}
              </div>
            </div>

            <div className="form-row justify-center">
              <button
                type="submit"
                className="btn cursor-pointer text-white p-[1.2rem_2rem] rounded-xl bg-[var(--clr-primary)]"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
