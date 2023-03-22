import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TbLocationFilled } from "react-icons/tb";
import { ImPhone } from "react-icons/im";
import { SiGithub, SiLinkedin, SiGmail, SiFacebook } from "react-icons/si";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const socialLinks = [
    {
      title: "Github",
      icon: <SiGithub />,
      link: "https://github.com/AbidHasanPiash",
    },
    {
      title: "LinkedIn",
      icon: <SiLinkedin />,
      link: "https://www.linkedin.com/in/abidhasanpiash/",
    },
    {
      title: "Gmail",
      icon: <SiGmail />,
      link: "mailto:mp.abidhasan@gmail.com",
    },
    {
      title: "Facebook",
      icon: <SiFacebook />,
      link: "https://www.facebook.com/meghpiash2",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    console.log(`Email: ${email}, Message: ${message}`);
    // code to send form data to backend or email
  };
  return (
    <div>
      <div className="flex flex-col space-y-10">
        {/* address  */}
        <div className="m-3 lg:text-lg">
          <div className="flex items-center justify-start space-x-3">
            <TbLocationFilled />
            <p>Banasree, Rampura, Dhaka-1219</p>
          </div>
          <div className="flex items-center justify-start space-x-3">
            <ImPhone />
            <Link to={"tel:01789507895"}>
              <p>01789507895</p>
            </Link>
          </div>

          <div className=" shadow-lg rounded-lg">
            <h2 className="lg:text-lg font-bold mb-4">About Me</h2>
            <p className="mb-4">
              Hi there! My name is Abid Hasan and I'm a junior frontend web
              developer. I have 1 years of experience
              working with web technologies, including [list of relevant
              technologies or frameworks you have experience with].
            </p>
            <p className="mb-4">
              I'm passionate about creating intuitive, user-friendly web
              experiences that make people's lives easier. In my free time, I
              enjoy exploring new technologies, reading tech blogs, and building
              side projects to practice my skills.
            </p>
            <p className="mb-4">
              If you'd like to learn more about my experience and skills, please
              check out my resume and portfolio at [insert links here]. I'm also
              open to new opportunities, so please don't hesitate to get in
              touch if you think we'd be a good fit!
            </p>
          </div>

          <div className="my-5 mx-2">
            <h1 className="lg:text-3xl text-xl py-4">Educational Background</h1>
            <div>
              <h1 className="lg:text-2xl text-sm">
                Bachelor of Science, Computer Science and Engineering
              </h1>
              <h2 className="lg:text-xl text-xs pt-3">
                Bangladesh Army University of Science & Technology (BAUST)
              </h2>
              <p className="lg:text-xl text-xs">November 2016 - April 2021</p>
              <ul className="list-disc ml-5 py-5 lg:text-xl text-xs">
                <li>Intensive course with core computer science topics.</li>
                <li>C, C++, Java, Data Structures, Algorithms, OOP, DBMS.</li>
                <li>Android application development.</li>
                <li>Different software design patterns.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* contact form */}
        <div>
          <h1 className="mx-3 lg:text-lg">Please send me your thought.</h1>
          <form onSubmit={handleSubmit} className="flex flex-col space-y-3 p-3">
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              className="lg:w-96 w-full h-8 bg-purple-900 bg-opacity-50 p-3 outline-none rounded focus:ring-2 ring-purple-600"
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              placeholder="Your Message"
              value={message}
              className="lg:w-96 w-full h-36 bg-purple-900 bg-opacity-50 p-3 outline-none rounded focus:ring-2 ring-purple-600"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="bg-purple-900 bg-opacity-50 mx-auto lg:mx-0 w-fit py-1 px-7 rounded-full hover:bg-opacity-100"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
        {/* social media */}
        <div className="flex flex-col items-center justify-center">
          <h1>Please checkout my Social links.</h1>
          <div className="p-3 flex space-x-5">
            {socialLinks.map((social, index) => (
              <Link to={social.link} target="_blank" key={index}>
                <div className="group lg:text-3xl text-2xl inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
                  {social.icon}
                  <span className="scale-0 text-[0px] lg:group-hover:text-2xl group-hover:scale-100 duration-200">
                    {social.title}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {/* Popup message */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-20 flex justify-center items-center`}
      >
        <div className="bg-purple-900 p-6 rounded flex flex-col items-center justify-center">
          <h2 className="text-lg font-bold mb-2">Thank you !!</h2>
          <p className="mb-4">I will contact you very soon.</p>
          <button
            onClick={() => {
              setIsOpen(!isOpen);
              setEmail("");
              setMessage("");
            }}
            className="mx-auto bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded-full"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
