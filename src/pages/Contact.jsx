import React, { useEffect, useState, useRef, useCallback } from "react";

function Contact() {
  const NAME_REF = useRef(null);
  const EMAIL_REF = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    NAME_REF.current.style.color = "green";
    EMAIL_REF.current.style.fontSize = "2rem";
  }, []);

  console.log(
    `count state ${count} has been updated. So, everything on this page was recreated again`
  );

  // const complexComputeFunction = () => {
  // console.log("Comple logic........");
  // };

  const complexComputeFunction = useCallback(() => {
    console.log("Comple logic........");
  }, []);

  return (
    <>
      <div className="mt-20 container mx-auto" style={{ height: "100vh" }}>
        <form action="" className="flex flex-col mt-10">
          <label ref={NAME_REF} htmlFor="">
            Name:
          </label>
          <input type="text" />
          <label ref={EMAIL_REF} htmlFor="">
            Email:
          </label>
          <input type="email" />
          <label htmlFor="">Phone No:</label>
          <input type="number" />
          <label htmlFor="">Message</label>
          <textarea name="" id=""></textarea>
        </form>
        <button
          className="rounded bg-green-700 text-white px-4 py-2 hover:cursor-pointer font-bold hover:bg-green-600"
          onClick={() => setCount((prevalue) => prevalue + 1)}
        >
          Increase
        </button>
        <button
          onClick={complexComputeFunction}
          className="rounded m-4 bg-green-700 text-white px-4 py-2 hover:cursor-pointer font-bold 
          hover:bg-green-600"
        >
          Complex button
        </button>
      </div>
    </>
  );
}

export default Contact;
