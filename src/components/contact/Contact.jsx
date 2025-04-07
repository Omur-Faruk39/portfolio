import ContactCard from "./ContactCard";
import Map from "./Map";
import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.body.style.backgroundColor = "#F9F9F9";
    document.body.style.width = window.innerWidth + "px";
  }, []);

  return (
    <div className="mb-[138px] mt-[138px] flex flex-col items-center justify-center about-me-section bg-[#F9F9F9] w-[100%]">
      <h1 className="about-heading">Contact</h1>
      <p className="text-center opacity-70 text-[16px]">
        Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
        consectetur velit
      </p>
      <div className="grid mx-auto w-[90%] grid-cols-[35%_60%] gap-10 mt-10">
        <Map />
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
