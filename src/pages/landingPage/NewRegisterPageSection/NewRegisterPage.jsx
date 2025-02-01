import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";
import Swal from "sweetalert2";
import { g } from "framer-motion/client";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    first_name_parent: "",
    last_name_parent: "",
    full_name_parent: "",
    email: "",
    phone_number: "",
    phone_number_2: "",
    home_address: "",
    district: 0,
    state: 0,
    city: 0,
  });

  const [children, setChildren] = useState([
    {
      first_name: "",
      last_name: "",
      first_name_ar: "",
      last_name_ar: "",
      gender: "M",
      date_of_birth: "",
      last_school: "",
      semester_1: 0,
      semester_2: 0,
      semester_3: 0,
      is_repeated: false,
      needs_transportation: false,
      level_academic: 0,
    },
  ]);
  const [allChildren, setAllChildren] = useState([
    {
      first_name: "",
      last_name: "",
      first_name_ar: "",
      last_name_ar: "",
      gender: "M",
      date_of_birth: "",
      last_school: "",
      semester_1: 0,
      semester_2: 0,
      semester_3: 0,
      is_repeated: false,
      needs_transportation: false,
      level_academic: 0,
    },
  ]);
  const [child, setChild] = useState({
    first_name: "",
    last_name: "",
    first_name_ar: "",
    last_name_ar: "",
    gender: "M",
    date_of_birth: "",
    last_school: "",
    semester_1: 0,
    semester_2: 0,
    semester_3: 0,
    is_repeated: false,
    needs_transportation: false,
    level_academic: 0,
  });

  const handleFormOneSubmit = (values, { setSubmitting }) => {
    setFormData(() => ({
      first_name_parent: values.first_name_parent,
      last_name_parent: values.last_name_parent,
      full_name_parent: `${values.first_name_parent} ${values.last_name_parent}`,
      email: values.email,

      phone_number: values.phone_number,
      home_address: values.address,
      state: parseInt(values.state) || 0,
      city: parseInt(values.city) || 0,
      district: parseInt(values.district) || 0,
    }));
    setStep(1);
    setSubmitting(false);
    console.log("Form 1 data:", formData);
  };

  const handleFormTwoSubmit = (values) => {
    setStep(2);
  };

  const handleFormThreeSubmit = async (values, { setSubmitting }) => {
    // Here you would typically make your API call with allChildren
    setSubmitting(false);
  };

  const handleBack = () => {
    console.log("Form 1 data:", formData);
    setStep(step - 1);
  };

  const addChild = (values, index) => {
    setChild(values);
    if (index > children.length) {
      setChildren((prevChildren) => [
        ...prevChildren,
        {
          first_name: "",
          last_name: "",
          first_name_ar: "",
          last_name_ar: "",
          gender: "M",
          date_of_birth: "",
          last_school: "",
          semester_1: 0,
          semester_2: 0,
          semester_3: 0,
          is_repeated: false,
          needs_transportation: false,
        },
      ]);
    } else {
      setChildren(() => {
        const newChildren = [...children];
        newChildren[index - 1] = values;
        return newChildren;
      });
    }
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
                  initialValues={child}
                  onSubmit={handleFormTwoSubmit}
                  handleBack={handleBack}
                  addChild={addChild}
                  childrenCount={children}
                  formData={formData}
                  setChildren={setChildren}
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
                  Children={children}
                  setChildren={setChildren}
                  formData={formData}
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
