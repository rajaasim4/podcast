import React from "react";
import spring from "../../assets/form_spring.png";
const AboutForm = () => {
  return (
    <section className="my-10 py-5 relative z-10 ">
      <img src={spring} className="absolute top-1/3 left-0" alt="" />
      <h2 className="text-4xl px-4 text-center font-extrabold my-3 sm:text-3xl">
        Get in Touch
      </h2>
      <p className="text-center">Send Your message to us</p>
      <div className="h-5 w-7/12 border-b-[1px] border-[#4D4D4D] mx-auto"></div>
      <div className="w-7/12 mx-auto relative  mt-10 lg:w-11/12 ">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className="flex justify-between flex-wrap gap-y-5 md:flex-col md:items-center">
            <div className=" w-6/12 sm:w-full sm:px-3 md:w-7/12 ">
              <label htmlFor="">Full name</label>

              <input
                type="text"
                className=" w-11/12 h-[64px] sm:w-full  border-2 px-4 mt-5 block border-black rounded-md outline-none "
                placeholder="Enter the full name"
              />
            </div>
            <div className=" w-6/12 sm:w-full sm:px-3 md:w-7/12 ">
              <label htmlFor="">email</label>

              <input
                type="text"
                className=" w-11/12 h-[64px]  sm:w-full border-2 px-4 mt-5 block border-black rounded-md outline-none "
                placeholder="johndoe@gmial.com"
              />
            </div>
            <div className=" w-6/12 sm:w-full sm:px-3 md:w-7/12 ">
              <label htmlFor="">phone</label>

              <input
                type="text"
                className=" w-11/12 h-[64px]  sm:w-full border-2 px-4 mt-5 block border-black rounded-md outline-none "
                placeholder="Phone"
              />
            </div>
            <div className=" w-6/12 sm:w-full sm:px-3 md:w-7/12 ">
              <label htmlFor="">Subject</label>

              <input
                type="text"
                className=" w-11/12 h-[64px]  sm:w-full border-2 px-4 mt-5 block border-black rounded-md outline-none "
                placeholder="Subject...."
              />
            </div>
            <div className=" w-full flex flex-col   md:w-7/12 sm:w-full ">
              <label htmlFor="">message</label>

              <textarea
                name=""
                id=""
                className="w-[96%] rounded-md border-2 border-black md:w-[93%] resize-none px-4 py-5  sm:w-full "
                rows={8}
                placeholder="Enter your message"
              ></textarea>
            </div>
            <div className="w-9/12 mx-auto">
              <button className=" rounded-md text-white bg-black px-4 py-3 ">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default AboutForm;
