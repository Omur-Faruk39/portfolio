import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

function map() {
  return (
    <>
      <div className=" shadow-[0_0_5px_rgba(0,0,0,0.2)] min-w-[450px] min-h-[500px] bg-white rounded-[10px]">
        <div className="m-6">
          <div>
            <div>
              <div className="mt-10 mb-10 flex group">
                <div className="group-hover:bg-[#34b7a7] transition-all duration-[1s] w-[50px] h-[50px] bg-[#F9F9F9] rounded-full flex justify-center items-center mr-5">
                  <FontAwesomeIcon
                    className="text-[#34b7a7] group-hover:text-white transition-all duration-[1s]"
                    icon={faLocationDot}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-bold">Address</h1>
                  <p className="opacity-75 text-[15px]">
                    Ranigonj, Goraghat, Dinajpur, Bangldesh
                  </p>
                </div>
              </div>

              <div className="mt-10 mb-10 flex group">
                <div className="group-hover:bg-[#34b7a7] transition-all duration-[0.5s] w-[50px] h-[50px] bg-[#F9F9F9] rounded-full flex justify-center items-center mr-5">
                  <FontAwesomeIcon
                    className="text-[#34b7a7] group-hover:text-white transition-all duration-[0.5s]"
                    icon={faPhone}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-bold">Call Us</h1>
                  <p className="opacity-75 text-[15px]">+8801774622159</p>
                </div>
              </div>

              <div className="mt-10 mb-10 flex group">
                <div className="group-hover:bg-[#34b7a7] transition-all duration-[1s] w-[50px] h-[50px] bg-[#F9F9F9] rounded-full flex justify-center items-center mr-5">
                  <FontAwesomeIcon
                    className="text-[#34b7a7] group-hover:text-white transition-all duration-[1s]"
                    icon={faEnvelope}
                  />
                </div>
                <div>
                  <h1 className="text-[20px] font-bold">Email Us</h1>
                  <p className="opacity-75 text-[15px]">
                    omurfaruk39bd@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14428.92153719722!2d89.22085745135395!3d25.296462565914144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcc2910510bf13%3A0xd29252131889a3ae!2sRanigong%20Bazar%2C%20Ghoraghat!5e0!3m2!1sen!2sbd!4v1743699369573!5m2!1sen!2sbd"
            width="100%"
            height="300px"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default map;
