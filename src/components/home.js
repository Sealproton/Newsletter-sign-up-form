import mobilePic from "../illustration-sign-up-mobile.svg";
import success from "../icon-success.svg";
import desktopPic from "../illustration-sign-up-desktop.svg";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "./context";

export const Home = () => {
  const { loginPass, setLoginPass, type, setType } = useContext(UserContext);
  const [noClick, setnoClick] = useState(true);

  const handleButton = () => {
    let pass = type.includes("@") && type.includes(".com");
    if (pass) {
      setnoClick(true);
      setLoginPass(true);
    } else {
      setLoginPass(false);
      setnoClick(false);
    }
  };
  return (
    <body className="font-[Roboto] w-full h-full bg-white lg:p-8 lg:h-[80%] lg:rounded-3xl">
      <div className="  flex flex-col  h-full w-[375px] pb-5 lg:w-full lg:flex-row-reverse lg:justify-center lg:items-center lg:pb-0 lg:gap-8 ">
        <div className="flex-col bg-white w-full h-fit lg:w-1/2 lg:h-[80%]">
          <img src={mobilePic} className="w-full lg:hidden"></img>
          <img
            src={desktopPic}
            className="w-full max-lg:hidden lg:h-[550px]"
          ></img>
        </div>
        <div className=" w-full text-[#242742] pl-5 pr-5 pt-6 lg:w-1/2 ">
          <h1 className="text-[2.2rem]  font-extrabold lg:text-[3rem]">
            Stay updated!
          </h1>
          <p className="pt-3 font-semibold text-[#242742] lg:w-full">
            Join 60,000+ product managers receiving
            <br className="lg:hidden" />
            monthly updates on:
          </p>

          <div className="mt-4 font-semibold">
            <div className="flex items-center  w-[90%]">
              <img src={success} className="w-6 mr-4 mb-4" />
              <p className="text-[#242742] ">
                Product discovery and building what matters
              </p>
            </div>
            <div className="flex items-center  w-[90%] mt-1">
              <img src={success} className="w-6 mr-4 mb-4" />
              <p className="text-[#242742]">
                Mesuring to unsure updates are a success
              </p>
            </div>
            <div className="flex items-center w-[90%] mt-2">
              <img src={success} className="w-6 mr-4 " />
              <p className="text-[#242742]">And much more!</p>
            </div>
          </div>
          <form className=" flex flex-col mt-8 ">
            <div className="flex justify-between">
              <label className="text-[0.8rem] font-bold">Email address</label>
              {!(noClick || loginPass) && (
                <p className="text-[0.8rem] text-red-500">
                  valid email require
                </p>
              )}
            </div>
            <input
              type="text"
              onKeyUp={(e) => {
                setType(e.target.value);
              }}
              placeholder="email@company.com"
              className={
                !(noClick || loginPass)
                  ? "border-red-300 text-red-400 bg-red-100 mt-2 h-[3rem] w-full rounded-lg pl-5 border-[2px] border-inherit focus:outline-none focus:text-black "
                  : "mt-2 h-[3rem] w-full rounded-lg pl-5 border-[3px] border-inherit focus:outline-none"
              }
            ></input>
            <button
              type="button"
              className="h-[3rem] w-full bg-[#242742] text-white rounded-lg mt-5 text-[1.2rem]"
              onClick={() => {
                handleButton();
              }}
            >
              Sucscribe to monthly newsletter
            </button>
          </form>
        </div>
      </div>
    </body>
  );
};
