import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import React from "react";

function Contact() {
  return (
    <div className="mt-[138px] flex flex-col items-center justify-center about-me-section bg-[#F9F9F9]">
      <h1 className="about-heading">Contact</h1>
      <p className="text-center opacity-70 text-[16px]">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="flex justify-center items-center gap-5 mt-10">
        <div className=" shadow-[0_0_5px_rgba(0,0,0,0.2)] min-w-[450px] min-h-[500px]">
          <div className="m-6">
            <div>
              <div>
                <FontAwesomeIcon icon={faLocationDot} />
              </div>
              <div>
                <h1>Address</h1>
                <p>Ranigonj, Goraghat, Dinajpur, Bangldesh</p>
              </div>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14428.92153719722!2d89.22085745135395!3d25.296462565914144!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcc2910510bf13%3A0xd29252131889a3ae!2sRanigong%20Bazar%2C%20Ghoraghat!5e0!3m2!1sen!2sbd!4v1743699369573!5m2!1sen!2sbd"
              width="400"
              height="300"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div>contact</div>
      </div>
    </div>
  );
}

export default Contact;
