import success from "../icon-success.svg";
import { UserContext } from "./context";
import { useContext } from "react";

export const Complete = () => {
  const { loginPass, setLoginPass, type, setType } = useContext(UserContext);

  return (
    <div className="font-[Roboto] flex flex-col items-center h-[100vh] w-[100vw] bg-white justify-end lg:w-[450px] lg:h-[450px] lg:rounded-3xl">
      <div className="flex flex-col h-[85%] pl-5 pt-28  lg:pt-10 lg:rounded-3xl lg:pl-10 lg:pr-10">
        <img src={success} className="w-[55px]" />
        <h1 className="text-[2.5rem]  font-bold text-[#242742] pt-5 lg:text-[3rem] lg:leading-[55px] lg:font-extrabold">
          Thanks for <br /> subscribing!
        </h1>
        <p className="text-[#242742] pt-3 w-[85%] font-bold  lg:mt-3 lg:w-[100%]">
          a confirmed email has been sent to <br />
          {type} please open it and click the botton inside to confirm your
          subscrption.
        </p>
      </div>
      <button
        className="bg-[#242742] h-[70px] w-[85%] mb-[30px] rounded-xl text-[1.2rem] text-white hover:bg-gradient-to-r from-[#df418a] to-[#e39654]"
        onClick={() => {
          setLoginPass(false);
          console.log(type);
          setType("");
        }}
      >
        Dismiss message
      </button>
    </div>
  );
};
