import React from "react";
import imageGuy from "../../../../images/notification-36.png";
import brain from "../../../../images/team-brainstorming-5-1.png";
import Image from "next/image";

function LoginCards() {
  return (
    <main className="h-[100vh] flex justify-center items-center">
      <div className="max-w-[1590px] w-[1590px] h-full">
        <div className="flex justify-between items-center">
          <div>
            <Image src={imageGuy} alt="idk" width="400" height="400"></Image>
          </div>
          <div>
            <h1 className="text-3xl flex justify-center">
              Stay Organized, Stay Connected
            </h1>
            <p className="">
              Our app integrates with Google Calendar to help you easily manage
              your schedule. <br />
              Whether it’s work, school, or play, you can sync with friends and
              never miss a beat.
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl flex">Automate Your Scheduling</h1>
            <p className="">
              Let our smart algorithms find the best times for everyone. <br />{" "}
              Set up your availability, and let the app do the hard work. <br />{" "}
              Sending out invites and reminders automatically
            </p>
          </div>

          <div>
            <Image src={brain} alt="idk" width="400" height="400"></Image>
          </div>
        </div>
      </div>
    </main>
  );
}

export default LoginCards;
