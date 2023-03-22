import { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export default function Slider({ children: slides}) {
  const [curr, setCurr] = useState(0);
  const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  const next = () => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  return (
    <div className="overflow-hidden relative rounded-2xl border-2 shadow-2xl shadow-purple-500">
      <div className="flex transition-transform ease-out duration-500" style={{ transform: `translateX(-${curr * 100}%)` }} >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button onClick={prev} className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white/80" >
          <AiOutlineArrowLeft size={30} />
        </button>
        <button onClick={next} className="p-1 rounded-full shadow bg-white/50 text-gray-800 hover:bg-white/80" >
          <AiOutlineArrowRight size={30} />
        </button>
      </div>

      <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              className={`
              transition-all w-3 h-3 bg-white rounded-full
              ${curr === i ? "p-2" : "bg-opacity-50"}
            `}
            />
          ))}
        </div>
      </div>
    </div>
  );
}


/*
  Source: https://gist.github.com/nimone/1fad7ac88bf2a5b07a26eb45134c76a6 
*/