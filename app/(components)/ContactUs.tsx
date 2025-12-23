import Link from "next/link"

const ContactUs = () => {
    return (
        <section className="contact-us py-[5rem]">
            <div className="wrapper grid gap-[1.5rem] md:grid-cols-2">
                <h2 className="text-white text-[3.2rem] font-bold row-[1] col-[1]">Let’s Build Your Ideas</h2>
                <p className="desc text-white text-[1.8rem] p-[0.5rem_1rem] rounded-xl border border-neutral-300 backdrop-blur-xs row-[2] col-[1]">Partner with Nepal Singa for reliable, high-quality construction in Location. Contact us today to get started!</p>

                <div className="row-[3] col-[1] md:row-[1/span_3] md:col-[2] flex items-center md:justify-end">
                    <Link href={"/contact"} className="bg-[var(--clr-primary)] text-white p-[1rem_2rem] text-[1.8rem] rounded-xl">Get in Touch</Link>
                </div>
            </div> 
        </section>
    )
}

export default ContactUs