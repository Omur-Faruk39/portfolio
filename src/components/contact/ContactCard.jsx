import React, { use } from "react";

function ContactCard() {
  const [isDisabled, setIsDisabled] = React.useState(false);
  const [data, setData] = React.useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    access_key: "05aef7b9-c673-4d10-8f3e-e7db3ae68f21",
  });

  const changeHandler = (e) => {
    const { id, value } = e.target;
    setData((prev) => ({ ...prev, [id]: value }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setIsDisabled(true);
    const json = JSON.stringify(data);
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert("Message sent successfully!");
      setData({ ...data, name: "", email: "", subject: "", message: "" });
      setIsDisabled(false);
    } else {
      alert("Failed to send message. Please try again.");
      setIsDisabled(false);
    }
  };

  return (
    <form
      disabled="true"
      className=" shadow-[0_0_5px_rgba(0,0,0,0.2)] max-w-[800px] min-w-[800px] min-h-[500px] bg-white rounded-[10px]"
    >
      <div className="flex justify-center items-center mt-10 mb-10 gap-5">
        <div className="flex flex-col gap-5 w-[45%]">
          <label htmlFor="name">You Name</label>
          <input
            type="text"
            disabled={isDisabled}
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
            disabled={isDisabled}
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
        <label htmlFor="subject">Subject</label>
        <input
          id="subject"
          type="text"
          onChange={changeHandler}
          disabled={isDisabled}
          value={data.subject}
          className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] h-[40px] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)]"
        />
      </div>

      <div className="flex flex-col gap-5 w-[90%] mx-auto mb-10">
        <label htmlFor="message">Your Message</label>
        <textarea
          id="message"
          disabled={isDisabled}
          required
          onChange={changeHandler}
          rows="7"
          value={data.message}
          className="border border-solid border-[rgba(0,0,0,0.4)] rounded-[4px] w-[100%] px-2 py-2 focus:outline-none focus:border-[rgba(52,183,167,0.5)]"
        ></textarea>
      </div>

      <div className="flex justify-center items-center w-[90%] mb-10">
        <input
          disabled={isDisabled}
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
