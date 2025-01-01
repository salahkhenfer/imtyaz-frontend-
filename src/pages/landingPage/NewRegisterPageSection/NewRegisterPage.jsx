import React from "react";
import { FormInput } from "./FormInput";

function NewRegisterPage() {
  const formFields = [
    { label: "البريد الإلكتروني", value: "ahmed@gmail.com", type: "email" },
    { label: "رقم الهاتف 1", value: "05 55 55 55 55", type: "tel" },
    { label: "رقم الهاتف 2", value: "06 60 66 51 20", type: "tel" },
    {
      label: "العنوان",
      value: "حي النصر ، ورقلة ، ولاية ورقلة",
      type: "text",
    },
  ];
  return (
    <div>
      <form className="flex flex-col justify-center items-center py-36 bg-white max-w-[710px] max-md:py-24">
        <div className="flex-1 shrink gap-2.5 self-stretch py-3.5 max-w-full text-3xl text-right text-black w-[353px]">
          مرحبا بك في مجمع الإمتياز
        </div>
        <div className="flex flex-col mt-2.5 max-w-full font-light w-[338px]">
          <div className="flex gap-5 justify-center items-start w-full text-right">
            <div className="flex flex-col flex-1 shrink basis-0 h-[55px]">
              <label
                className="self-end text-sm text-stone-700"
                htmlFor="lastName"
              >
                الإسم الثاني
              </label>
              <input
                type="text"
                id="lastName"
                value="الورقلي"
                className="overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid border-zinc-300 min-h-[35px] text-zinc-300"
                aria-label="الإسم الثاني"
              />
            </div>
            <div className="flex flex-col flex-1 shrink justify-center basis-0">
              <label
                className="self-end text-sm text-stone-700"
                htmlFor="firstName"
              >
                الإسم الأول
              </label>
              <input
                type="text"
                id="firstName"
                value="أحمد"
                className="overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid border-zinc-300 min-h-[35px] text-zinc-300"
                aria-label="الإسم الأول"
              />
            </div>
          </div>

          {formFields.map((field) => (
            <FormInput
              key={field.label}
              label={field.label}
              value={field.value}
              type={field.type}
            />
          ))}

          <div className="self-start mt-2.5 text-sm text-center text-zinc-300">
            التسجيل الأولي في هذا الموقع لا يعني ضمان ابنكم لمقعد بيداغوجي في
            مجمع الامتياز التعليمي و بعد تسجيل (ابنكم | ابنتكم ) سيتم الاتصال
            بكم لتأكيد الملعلومات و إتمام خطوات التسجيل
          </div>
          <button
            type="submit"
            className="overflow-hidden self-stretch px-4 mt-2.5 w-full text-sm text-red-100 whitespace-nowrap bg-emerald-700 rounded-lg min-h-[36px] min-w-[64px]"
          >
            التالي
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewRegisterPage;
