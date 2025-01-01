import React, { useState } from "react";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";
import Swal from "sweetalert2";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    // Form 1 data
    firstNameParent: "",
    lastNameParent: "",
    email: "",
    phone: "",
    address: "",
    // Form 2 data
    firstName: "",
    lastName: "",
    gender: "",
    previousSchool: "",
    semester1: "",
    semester2: "",
    semester3: "",
    registrationChoice: "",
    hasRepeatedYear: "",

    // Form 3 data
    transportInterest: "",

    mathAnswer: "",
  });

  const handleFormOneSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
    setStep(1);
    setSubmitting(false);
  };

  const handleFormTwoSubmit = (values, { setSubmitting }) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));
    setStep(2);
    setSubmitting(false);
  };

  const handleFormThreeSubmit = async (values, { setSubmitting }) => {
    setFormData((prevData) => ({
      ...prevData,
      ...values,
    }));

    console.log("Form datavv:", formData);
    setSubmitting(false);
  };

  const handleBack = () => {
    setStep(0);
  };

  return (
    <div className="w-full     h-[90vh] pt-0 mt-0 ">
      <div className=" flex justify-between  h-full   ">
        <div className="bg-emerald-700 max-lg:hidden  max-lg:w-1/2 flex justify-center ">
          <RegistrationStep activeIndex={step} setActiveIndex={setStep} />
        </div>
        <div className="   overflow-y-scroll max-lg:w-full flex justify-center  w-1/2">
          {step === 0 && (
            <NewRegisterPageForm1
              setStep={setStep}
              initialValues={formData}
              onSubmit={handleFormOneSubmit}
            />
          )}
          {step === 1 && (
            <NewRegisterPageForm2
              setStep={setStep}
              initialValues={formData}
              onSubmit={handleFormTwoSubmit}
              handleBack={handleBack}
            />
          )}
          {step === 2 && (
            <NewRegisterPageForm3
              setStep={setStep}
              initialValues={formData}
              onSubmit={handleFormThreeSubmit}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default NewRegisterPage;
