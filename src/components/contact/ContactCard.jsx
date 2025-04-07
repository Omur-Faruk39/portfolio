import React from "react";

function ContactCard() {
  const [data, setData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("Form submitted", data);
  };

  return (
    <form className=" shadow-[0_0_5px_rgba(0,0,0,0.2)] max-w-[800px] min-w-[800px] min-h-[500px] bg-white rounded-[10px]">
      <div className="flex justify-center items-center mt-10 mb-10 gap-5">
        <div className="flex flex-col gap-5 w-[45%]">
          <label htmlFor="name">You Name</label>
          <input
            type="text"
            id="name"
            onChange={changeHandler}
            value={data.name}
            required
            className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] h-[40px] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)] "
          />
        </div>
        <div className="flex flex-col gap-5 w-[45%]">
          <label htmlFor="email">You Email</label>
          <input
            type="email"
            onChange={changeHandler}
            id="email"
            required
            value={data.email}
            className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] h-[40px] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)]"
          />
        </div>
      </div>

      <div className="flex flex-col gap-5 w-[90%] mx-auto mb-10">
        <label htmlFor="subject">Your Message</label>
        <input
          id="subject"
          type="text"
          onChange={changeHandler}
          value={data.subject}
          className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] h-[40px] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)]"
        />
      </div>

      <div className="flex flex-col gap-5 w-[90%] mx-auto mb-10">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          required
          onChange={changeHandler}
          rows="7"
          value={data.message}
          className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)]"
        ></textarea>
      </div>

      <div className="flex justify-center items-center w-[90%] mb-10">
        <input
          type="submit"
          value="Send Message"
          className="px-[20px] py-[10px] rounded-full bg-[#34b7a7] text-white cursor-pointer active:bg-[#6be6d7] hover:bg-[#34b7a7] transition-all duration-[0.15s] "
          onClick={submitHandler}
        />
      </div>
    </form>
  );
}

export default ContactCard;
