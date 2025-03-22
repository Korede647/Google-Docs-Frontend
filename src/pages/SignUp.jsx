import React from "react";

const SignUp = () => {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-10">
        <div className="flex flex-wrap flex-1 shrink gap-5 items-center self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full ">
          <h2 className="text-blue-900 font-medium text-[20px]">Create an Account</h2>
        </div>
      </div>

      <div class="grid grid-cols-1 gap-6 mb-10">
        <div id="input" className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:outline-none focus:ring-1 focus:ring-violet-300 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="First name"
            value=""
          />
          <label
            for="floating_outlined"
            class="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            First name
          </label>
        </div>

        <div id="input" className="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:outline-none focus:ring-1 focus:ring-violet-300 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="Last name"
            value=""
          />
          <label
            for="floating_outlined"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Last name
          </label>
        </div>

        <div id="input" class="relative">
          <input
            type="text"
            id="floating_outlined"
            className="block w-full text-sm h-[50px] px-4 text-slate-900 bg-white rounded-[8px] border border-violet-200 appearance-none focus:outline-none focus:ring-1 focus:ring-violet-300 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]"
            placeholder="E-mail"
            value=""
          />
          <label
            for="floating_outlined"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            E-mail
          </label>
        </div>

       
      </div>

      <div className="sm:flex sm:flex-row-reverse flex gap-4">
        <button
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-violet-500 hover:bg-violet-600 focus:bg-violet-700 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300"
          type="button"
        >
          <div className="flex gap-2 items-center">Save changes</div>
        </button>
        <button
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
          type="button"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default SignUp;
