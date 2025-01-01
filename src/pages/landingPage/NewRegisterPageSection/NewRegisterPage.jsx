import React, { useState } from "react";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  return (
    <div className="w-full     h-[90vh] pt-0 mt-0 ">
      <div className=" flex justify-between  h-full   ">
        <div className="bg-emerald-700  w-1/2 flex justify-center ">
          <RegistrationStep activeIndex={step} setActiveIndex={setStep} />
        </div>
        <div className="   overflow-y-scroll flex justify-center  w-1/2">
          {step === 0 && <NewRegisterPageForm1 setStep={setStep} />}
          {step === 1 && <NewRegisterPageForm2 setStep={setStep} />}
          {step === 2 && <NewRegisterPageForm3 setStep={setStep} />}
        </div>
      </div>
    </div>
  );
}

export default NewRegisterPage;
