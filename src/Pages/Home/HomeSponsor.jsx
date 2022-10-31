import React from "react";
import { Zoom } from "react-awesome-reveal";
const HomeSponsor = () => {
  return (
    <section className={`w-full  py-32   relative `}>
      <h2 className="text-4xl px-4 text-center font-extrabold sm:text-3xl">
        Become Our Sponsor
      </h2>
      <p className="my-10 text-center">
        Get exclusive episodes, merch and more
      </p>
      <div className="w-10/12  mx-auto flex justify-around items-center flex-wrap gap-y-10  sm:w-11/12">
        <SponsorCard title={"member"} price="9.99">
          <li>Exclusive Content</li>
          <li>5% Discount on Merch</li>
          <li>Join the Community</li>
          <li>Livestreaming Access</li>
        </SponsorCard>
        <SponsorCard title={"family"} price="14.99">
          <li>Everything in Tier 1</li>
          <li>Free tickets to Events</li>
          <li>Limited Edition Merch</li>
          <li>Promote your Product</li>
          <li>Request Topic</li>
        </SponsorCard>
        <SponsorCard title={"official"} price="25.99">
          <li>Everything in Tier 2</li>
          <li>Exclusive Badge on Livestreaming</li>
          <li>Become an Official Sponsor</li>
          <li>Early Access to All Episodes</li>
          <li>Free Stickers and Merch</li>
        </SponsorCard>
      </div>
    </section>
  );
};

const SponsorCard = (props) => {
  return (
    <>
      <Zoom cascade damping={0.5} triggerOnce={true}>
        <div className="flex  flex-col w-[385px] border py-10 justify-evenly items-center h-[600px] border-black rounded-md sm:w-full">
          <h2 className="text-4xl font-semibold ">{props.title}</h2>
          <p className="text-center">
            Lorem ipsum dolor sit amet consectet cing elit, sed do eiusmod
            tempor.
          </p>
          <span className="font-semibold">What is Included:</span>
          <ul>{props.children}</ul>

          <div className="mt-10 w-9/12 flex justify-between flex-wrap">
            <button className="px-4 py-3 bg-black text-white rounded">
              Subscribe
            </button>
            <font>
              <span className="text-bold text-[#CD4631] text-2xl">
                ${props.price}
              </span>
              <br />
              /month
            </font>
          </div>
        </div>
      </Zoom>
    </>
  );
};

export default HomeSponsor;
