import * as React from "react";
import ContactForm from "./ContactForm";
import ContactImg from "../../../assets/landingPage/contactPage/contactImg.png";

function ContactPage() {
  return (
    <div className="flex overflow-hidden flex-col justify-center items-center py-24 bg-emerald-700">
      <div className="flex overflow-hidden flex-wrap flex-1 gap-5 max-w-full h-full bg-white rounded-3xl w-[1200px]">
        <div className="flex overflow-hidden flex-col min-w-[240px] w-[590px] max-md:max-w-full">
          <img
            loading="lazy"
            src={ContactImg}
            alt="Contact illustration"
            className="object-contain flex-1 w-full aspect-[1.2] max-md:max-w-full"
          />
        </div>
        <ContactForm />
      </div>
    </div>
  );
}

export default ContactPage;
