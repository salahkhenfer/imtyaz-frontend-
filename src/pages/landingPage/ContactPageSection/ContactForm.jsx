import * as React from "react";
import FormInput from "./FormInput";

function ContactForm() {
  const formFields = [
    { id: "fullName", placeholder: "الإسم الكامل", type: "text" },
    { id: "email", placeholder: "البريد الإلكتروني", type: "email" },
    { id: "subject", placeholder: "الموضوع", type: "text" },
  ];

  return (
    <form className="flex overflow-hidden flex-col flex-1 shrink justify-center px-12 my-auto text-xs font-light text-emerald-700 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
      <h2 className="self-end text-3xl text-right text-emerald-700">
        تواصلو معنا
      </h2>

      {formFields.map((field) => (
        <FormInput
          key={field.id}
          id={field.id}
          placeholder={field.placeholder}
          type={field.type}
        />
      ))}

      <div className="relative">
        <label htmlFor="message" className="sr-only">
          الرسالة
        </label>
        <textarea
          id="message"
          className="overflow-hidden gap-2.5 px-3.5 pt-2.5 pb-36 mt-2.5 w-full text-right rounded-lg border border-emerald-700 border-solid min-h-[176px] min-w-[250px] max-md:pb-24 max-md:max-w-full"
          placeholder="الرسالة ..."
          aria-label="الرسالة"
        />
      </div>

      <button
        type="submit"
        className="overflow-hidden self-end px-4 mt-2.5 text-sm text-red-100 whitespace-nowrap bg-emerald-700 rounded-lg min-h-[36px] min-w-[64px]"
      >
        إرسال
      </button>
    </form>
  );
}

export default ContactForm;
