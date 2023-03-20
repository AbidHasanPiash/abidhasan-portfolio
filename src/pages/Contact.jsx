import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiGmail, SiFacebook } from "react-icons/si";

export default function Contact() {
  const [isOpen, setIsOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

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
        <div className="m-3 text-right lg:text-3xl text-xl">
          <h1>Address.</h1>
          <div>
            <p>Banasree, Rampura, Dhaka</p>
          </div>
        </div>
        {/* contact form */}
        <div>
          <h1 className="mx-3 text-xl">
            Anytime, I am happy to receive your message.
          </h1>
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
              className="bg-purple-900 bg-opacity-50 w-fit py-1 px-7 rounded-full hover:bg-opacity-100"
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
            <div className="group inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
              <SiGithub size={40} />
              <span className="scale-0 text-[0px] group-hover:text-lg group-hover:scale-100 duration-200">
                Github
              </span>
            </div>
            <div className="group inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
              <SiLinkedin size={40} />
              <span className="scale-0 text-[0px] group-hover:text-lg group-hover:scale-100 duration-200">
                LinkedIn
              </span>
            </div>
            <div className="group inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
              <SiGmail size={40} />
              <span className="scale-0 text-[0px] group-hover:text-lg group-hover:scale-100 duration-200">
                Gmail
              </span>
            </div>
            <div className="group inline-flex items-center justify-center space-x-2 hover:text-purple-500 cursor-pointer">
              <SiFacebook size={40} />
              <span className="scale-0 text-[0px] group-hover:text-lg group-hover:scale-100 duration-200">
                Facebook
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* Popup message */}
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-gray-500 bg-opacity-20 flex justify-center items-center 
                    ${isOpen ? "block" : "hidden"}`}
      >
        <div className="bg-purple-900 p-6 rounded">
          <h2 className="text-lg font-bold mb-2">Thank you !!</h2>
          <p className="mb-4">I will contact you very soon.</p>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="mx-auto bg-purple-700 hover:bg-purple-800 py-2 px-4 rounded-full"
          >
            Close Popup
          </button>
        </div>
      </div>
    </div>
  );
}
