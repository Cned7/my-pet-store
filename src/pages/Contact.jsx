import React from "react";

function Contact() {
  return (
    <>
      <div className="mt-20 container mx-auto" style={{ height: "100vh" }}>
        <form action="" className="flex flex-col mt-10">
          <label htmlFor="">Name:</label>
          <input type="text" />
          <label htmlFor="">Email:</label>
          <input type="email" />
          <label htmlFor="">Phone No:</label>
          <input type="number" />
          <label htmlFor="">Message</label>
          <textarea name="" id=""></textarea>
          <button></button>
        </form>
      </div>
    </>
  );
}

export default Contact;
