import Map from "./Map";
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
        <Map />
        <div>contact</div>
      </div>
    </div>
  );
}

export default Contact;
