import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    firstNameParent: "",
    lastNameParent: "",
    email: "",
    phone: "",
    address: "",
    firstName: "",
    lastName: "",
    gender: "",
    previousSchool: "",
    semester1: "",
    semester2: "",
    semester3: "",
    registrationChoice: "",
    hasRepeatedYear: "",
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
    console.log("Form data:", formData);
    setSubmitting(false);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <div className="w-full h-[90vh] pt-0 mt-0">
      <div className="flex justify-between h-full">
        <div className="bg-emerald-700 max-lg:hidden w-1/2 flex justify-center">
          <RegistrationStep activeIndex={step} setActiveIndex={setStep} />
        </div>
        <div className="overflow-y-scroll max-lg:w-full flex justify-center w-1/2">
          <AnimatePresence mode="wait">
            {step === 0 && (
              <motion.div
                key="form1"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <NewRegisterPageForm1
                  setStep={setStep}
                  initialValues={formData}
                  onSubmit={handleFormOneSubmit}
                />
              </motion.div>
            )}
            {step === 1 && (
              <motion.div
                key="form2"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <NewRegisterPageForm2
                  setStep={setStep}
                  initialValues={formData}
                  onSubmit={handleFormTwoSubmit}
                  handleBack={handleBack}
                />
              </motion.div>
            )}
            {step === 2 && (
              <motion.div
                key="form3"
                variants={formVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.5 }}
              >
                <NewRegisterPageForm3
                  setStep={setStep}
                  initialValues={formData}
                  onSubmit={handleFormThreeSubmit}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NewRegisterPage;
