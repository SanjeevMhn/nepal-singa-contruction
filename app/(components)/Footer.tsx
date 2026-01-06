import Link from "next/link";
import logo from "../../public/logo.png";
const Footer = () => {
  const navlinks = [
    {
      id: 1,
      link: "/",
      name: "Home",
    },

    {
      id: 3,
      link: "projects",
      name: "Projects",
    },
    {
      id: 4,
      link: "about",
      name: "About Us",
    },
    {
      id: 5,
      link: "contact",
      name: "Contact",
    },
  ];
  return (
    <footer className="main-footer bg-neutral-800 py-[5rem]">
      <div className="wrapper text-neutral-200 grid grid-cols-1 lg:grid-cols-3 gap-y-[1.5rem] gap-x-[5rem]">
        <Link
          href={"/"}
          className="flex items-center gap-[1.2rem] col-[1] row-[1]"
        >
          <span className="icon-container w-[6.5rem] h-[6.5rem] lg:w-[10rem] lg:h-[10rem] flex lg:flex-[0_0_10rem] items-center justify-center bg-white p-[0.5rem] rounded-full">
            <img
              src={logo.src}
              alt=""
              className="w-full h-full object-contain"
            />
          </span>
          <span className="company-name text-[1.8rem] leading-8 font-bold ">
            Nepal Singa Construction
          </span>
        </Link>
        <p className="info row-[2] col-[1] text-[1.8rem] font-semibold">
          Nepal Singa Construction is a trusted residential construction company
          delivering high-quality, innovative, and reliable home-building
          solutions
        </p>
        <div className="quick-links row-[3] col-[1] lg:row-[1/span_2] lg:col-[2] flex flex-col items-center justify-center">
          <h2 className="text-[1.8rem] underline">Quick Links</h2>
          <ol className="link-list pt-[1.2rem]" type="1">
            {navlinks.map((link) => (
              <li className="link-item" key={link.id}>
                <Link href={link.link}>{link.name}</Link>
              </li>
            ))}
          </ol>
        </div>

        <div className="contact-us-list row-[4] col-[1] lg:row-[1/span_2] lg:col-[3] flex flex-col justify-center">
          <h2 className="text-[1.8rem] underline">Contact</h2>
          <ul className="contact-list pt-[1.2rem] flex flex-col gap-[1.5rem]">
            <li className="contact-item flex items-center gap-[1.5rem]">
              <span className="icon-container w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center bg-[var(--clr-primary)]">
                <svg
                  className="fill-white w-[70%] aspect-square"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M128 252.6C128 148.4 214 64 320 64C426 64 512 148.4 512 252.6C512 371.9 391.8 514.9 341.6 569.4C329.8 582.2 310.1 582.2 298.3 569.4C248.1 514.9 127.9 371.9 127.9 252.6zM320 320C355.3 320 384 291.3 384 256C384 220.7 355.3 192 320 192C284.7 192 256 220.7 256 256C256 291.3 284.7 320 320 320z" />
                </svg>
              </span>
              <span className="text text-white">Pulchowk, Lalitpur</span>
            </li>
            <li className="contact-item flex items-center gap-[1.5rem]">
              <span className="icon-container w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center bg-[var(--clr-primary)]">
                <svg
                  className="fill-white w-[70%] aspect-square"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M112 128C85.5 128 64 149.5 64 176C64 191.1 71.1 205.3 83.2 214.4L291.2 370.4C308.3 383.2 331.7 383.2 348.8 370.4L556.8 214.4C568.9 205.3 576 191.1 576 176C576 149.5 554.5 128 528 128L112 128zM64 260L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 260L377.6 408.8C343.5 434.4 296.5 434.4 262.4 408.8L64 260z" />
                </svg>
              </span>
              <span className="text text-white">nepalsinga07@gmail.com</span>
            </li>
            <li className="contact-item flex items-center gap-[1.5rem]">
              <span className="icon-container w-[2.5rem] h-[2.5rem] rounded-full flex items-center justify-center bg-[var(--clr-primary)]">
                <svg
                  className="fill-white w-[70%] aspect-square"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 640"
                >
                  <path d="M224.2 89C216.3 70.1 195.7 60.1 176.1 65.4L170.6 66.9C106 84.5 50.8 147.1 66.9 223.3C104 398.3 241.7 536 416.7 573.1C493 589.3 555.5 534 573.1 469.4L574.6 463.9C580 444.2 569.9 423.6 551.1 415.8L453.8 375.3C437.3 368.4 418.2 373.2 406.8 387.1L368.2 434.3C297.9 399.4 241.3 341 208.8 269.3L253 233.3C266.9 222 271.6 202.9 264.8 186.3L224.2 89z" />
                </svg>
              </span>
              <span className="text text-white">9851099517,</span>
              <span className="text text-white">9863791931</span>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
