import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    first_name_ar: "",
    last_name_ar: "",
    gender: "M",
    date_of_birth: "",
    full_name_parent: "",
    phone_number: "",
    phone_number_2: "",
    email: "",
    home_address: "",
    last_school: "",
    semester_1: 0,
    semester_2: 0,
    semester_3: 0,
    is_repeated: false,
    needs_transportation: false,
    level_academic: 0,
    district: 0,
    city: 0,
    state: 0,
  });

  const [children, setChildren] = useState([{ ...formData }]);

  const handleFormOneSubmit = (values, { setSubmitting }) => {
    console.log("Form 1 data:", values);
    setFormData((prevData) => ({
      ...prevData,
      first_name: values.firstName,
      last_name: values.lastName,
      first_name_ar: values.firstNameAr || "",
      last_name_ar: values.lastNameAr || "",
      full_name_parent: `${values.firstNameParent} ${values.lastNameParent}`,
      email: values.email,
      phone_number: values.phone,
      home_address: values.address,
    }));
    setStep(1);
    setSubmitting(false);
  };

  const handleFormTwoSubmit = (values, { setSubmitting }) => {
    setChildren((prevChildren) => {
      const updatedChildren = [...prevChildren];
      updatedChildren[updatedChildren.length - 1] = {
        ...updatedChildren[updatedChildren.length - 1],
        ...values,
      };
      return updatedChildren;
    });
    setStep(2);
    setSubmitting(false);
  };

  const handleFormThreeSubmit = async (values, { setSubmitting }) => {
    const finalFormData = {
      ...formData,
      is_repeated: values.hasRepeatedYear === "yes",
      needs_transportation: values.transportInterest === "yes",
      district: parseInt(values.district) || 0,
      city: parseInt(values.city) || 0,
      state: parseInt(values.state) || 0,
    };

    const allChildren = children.map((child) => ({
      ...child,
      ...finalFormData,
    }));

    console.log("Final form data with children:", allChildren);
    // Here you would typically make your API call with allChildren
    setSubmitting(false);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const addChild = () => {
    setChildren((prevChildren) => [
      ...prevChildren,
      {
        first_name: formData.first_name,
        last_name: formData.last_name,
        first_name_ar: formData.first_name_ar,
        last_name_ar: formData.last_name_ar,
        gender: "M",
        date_of_birth: "",
        full_name_parent: formData.full_name_parent,
        phone_number: formData.phone_number,
        phone_number_2: formData.phone_number_2,
        email: formData.email,
        home_address: formData.home_address,
        last_school: "",
        semester_1: 0,
        semester_2: 0,
        semester_3: 0,
        is_repeated: false,
        needs_transportation: false,
        level_academic: 0,
        district: 0,
        city: 0,
        state: 0,
      },
    ]);
  };

  const formVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };
  const removeChild = (index) => {
    const newChildren = [...children];
    newChildren.splice(index, 1);
    setChildren(newChildren);
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
                  initialValues={children[children.length - 1]}
                  onSubmit={handleFormTwoSubmit}
                  handleBack={handleBack}
                  addChild={addChild}
                  childrenCount={children}
                  removeChild={removeChild}
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
