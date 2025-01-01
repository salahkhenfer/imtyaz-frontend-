import React from "react";
import NewsletterImg from "../../../assets/landingPage/contactPage/NewsletterImg.png";
export default function NewsletterSection() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col justify-center items-center py-10">
      <div className="flex flex-wrap max-lg:flex-col gap-5 justify-center px-10 py-2.5 max-w-full bg-emerald-700 rounded-2xl min-h-[256px] w-[1200px] max-md:px-5">
        <div className="flex flex-1 w-full shrink my-auto basis-0">
          <img
            src={NewsletterImg}
            alt="Newsletter illustration"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="flex  text-center flex-col flex-1 shrink justify-center basis-0 min-w-[240px] max-md:max-w-full">
          <div className="flex flex-col justify-center items-end w-full max-md:max-w-full">
            <div className="text-4xl text-teal-500">
              لا تفوت جديد <span className="text-white">الإمتياز</span>
            </div>
            <div className="mt-2.5 text-sm text-white">
              بمجرد الاشتراك ، ستصلك رسائل على الايميل بأخر عروضنا
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col justify-center items-end mt-7 w-full max-md:max-w-full"
          >
            <label htmlFor="emailInput" className="text-lg text-white">
              البريد الإلكتروني
            </label>
            <div className="flex gap-3 justify-center items-center mt-2.5 text-xs whitespace-nowrap">
              <button
                type="submit"
                className="overflow-hidden self-stretch px-4 my-auto rounded-lg bg-zinc-300 min-h-[32px] min-w-[64px] text-stone-700"
              >
                اشترك
              </button>
              <input
                type="email"
                id="emailInput"
                placeholder="adnane@gmail.com"
                className="overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 my-auto font-light text-right text-teal-500 rounded-lg border border-teal-500 border-solid min-w-[240px] w-[248px]"
                dir="rtl"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
