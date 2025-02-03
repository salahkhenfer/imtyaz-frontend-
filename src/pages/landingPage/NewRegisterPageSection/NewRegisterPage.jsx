import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NewRegisterPageForm1 from "./NewRegisterPageForm/NewRegisterPageForm1";
import NewRegisterPageForm2 from "./NewRegisterPageForm/NewRegisterPageForm2";
import NewRegisterPageForm3 from "./NewRegisterPageForm/NewRegisterPageForm3";
import RegistrationStep from "./stepsSection/RegistrationStep";
import Swal from "sweetalert2";
import { g } from "framer-motion/client";
import { NewRegister } from "../../../API/landingPageApi/NewRegisterApi";
import { useNavigate } from "react-router-dom";

function NewRegisterPage() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    status: false,
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
      status: false,
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
    try {
      // Iterate over each child in the values array
      values.forEach(async (child) => {
        // Ensure all required fields are present and correctly formatted
        const formattedChild = {
          ...child,
          // Ensure numeric fields are numbers
          semester_1: Number(child.semester_1) || 0,
          semester_2: Number(child.semester_2) || 0,
          semester_3: Number(child.semester_3) || 0,
          level_academic: Number(child.level_academic) || 0,
          // Ensure optional fields are set to empty strings if missing
          phone_number_2: child.phone_number_2 || "",
          home_address: child.home_address || "N/A", // Provide a default value if missing
          last_school: child.last_school || "N/A", // Provide a default value if missing
          // Ensure date_of_birth is valid (replace with a valid date if necessary)
          date_of_birth: child.date_of_birth || "2000-01-01", // Default date if missing
        };

        // Log the formatted child data for debugging
        console.log("Formatted Child Data:", formattedChild);

        // Make the API call with the combined formData and formatted child data
        let response = await NewRegister({ ...formData, ...formattedChild });

        // Log the API response for debugging
        console.log("API Response:", response);
        await Swal.fire({
          icon: "success",
          title: "تم التسجيل بنجاح",
          text: "سيتم التواصل معكم قريبا",
          confirmButtonText: "حسنا",
        });

        navigate("/Home");
      });

      // Set submitting to false after all API calls are initiated
      setSubmitting(false);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitting(false);
    }

    // Navigate("/Home");

    setSubmitting(false);
  };

  const handleBack = () => {
    console.log("Form 1 data:", formData);
    setStep(step - 1);
  };

  const addChild = (values, index) => {
    setChild(values);

    if (index > children.length) {
      setChildren(() => {
        const newChildren = [...children];
        newChildren[index - 2] = values;
        return newChildren;
      });

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
