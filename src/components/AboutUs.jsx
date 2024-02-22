import React from "react";
import { FaUser } from "react-icons/fa";

const BgStyle = {
  backgroundImage: "url(polygon.png)",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};

const AboutUs = () => {
  return (
    <>
      <div style={BgStyle} className="py-14">
        <div className="container min-h-[500px] relative z-10">
          <h1
            className="pt-20 tracking-wider text-4xl
         font-semibold text-white text-center"
          >
            About Us
          </h1>
          {/* card section start */}
           <div className="bg-white/80 p-10 my-10">
           <p>
            Lorem ipsum is a placeholder text commonly used to demonstrate the
            visual form of a document or a typeface without relying on
            meaningful content. Lorem ipsum may be used as a placeholder before
            the final copy is availableLorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before the final copy is availableLorem ipsum
            is a placeholder text commonly used to demonstrate the visual Lorem
            ipsum may be used as a placeholder before the final copy is
            available.
            <div className="pt-10 flex justify-center">
            <button className="flex justify-center items-center gap-2 bg-secondary text-xl
                    rounded-md duration-300
                 h-[40px] text-white px-5 py-2 hover:scale-105 ">
                    <FaUser/>
                    My Account

                </button>
            </div>
          </p>

           </div>
          {/* card section end */}
        </div>
        
      </div>
    </>
  );
};

export default AboutUs;
