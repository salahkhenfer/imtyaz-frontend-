import * as React from "react";
import { FooterLinkSection } from "./FooterLinkSection";
import { socialLinks, quickLinks, services } from "./FooterData";
import LogoFooter from "../../../assets/LogoFooter.png";
export function Footer() {
  return (
    <div className="flex overflow-hidden flex-col pt-7 bg-emerald-700">
      <div className="flex flex-col items-center w-full max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-center items-center md:items-start w-full max-w-[1200px] max-md:max-w-full">
          <FooterLinkSection title="تواصلوا معنا" links={socialLinks} />
          <FooterLinkSection title="الوصول السريع" links={quickLinks} />
          <FooterLinkSection title="خدماتنا" links={services} />

          <div className="flex flex-col flex-1 shrink items-end basis-0 min-w-[240px]">
            <div className="flex gap-2.5 justify-center items-center  w-full">
              <img
                loading="lazy"
                src={LogoFooter}
                alt="Company Logo"
                className="object-contain   my-auto aspect-[0.65] w-[113px]"
              />
            </div>
            <div className="mt-5 text-sm text-right text-zinc-300">
              جميع الحقوق محفوظة 2024 ©
            </div>
            <a
              href="#"
              className="mt-5 text-sm text-right text-zinc-300"
              tabIndex="0"
            >
              شروط الخدمة
            </a>
            <a
              href="#"
              className="mt-5 text-sm text-right text-zinc-300"
              tabIndex="0"
            >
              سياسة الخصوصية
            </a>
          </div>
        </div>
      </div>
      <div className="overflow-hidden gap-2.5 self-stretch px-32 py-2.5 mt-5 w-full text-sm text-right bg-zinc-800 text-neutral-600 max-md:px-5 max-md:max-w-full">
        جميع الحقوق محفوظة © المدرسة الخاصة الامتياز
      </div>
    </div>
  );
}
