import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

function NewRegisterPageForm1({ setStep }) {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  };

  // Validation schema
  const validationSchema = Yup.object({
    firstName: Yup.string().required("الإسم الأول مطلوب"),
    lastName: Yup.string().required("الإسم الثاني مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9\s]+$/, "رقم الهاتف غير صالح"),
    address: Yup.string().required("العنوان مطلوب"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    // Here you can send the values to your backend
    console.log("Form values:", values);
    setSubmitting(false);
    setStep(1);
  };

  const formFields = [
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "phone", label: "رقم الهاتف 1", type: "tel" },
    { name: "address", label: "العنوان", type: "text" },
  ];

  return (
    <div className="h-[90vh] placeholder:text-right ">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, errors, touched, handleChange, isSubmitting }) => (
          <Form className="flex flex-col justify-center py-10 bg-white max-w-[710px] max-md:py-24">
            <div className="flex-1 shrink gap-2.5 self-stretch py-3.5 max-w-full text-3xl text-left text-black w-[353px]">
              مرحبا بك في مجمع الإمتياز
            </div>

            <div className="flex flex-col mt-2.5 placeholder:text-right max-w-full font-light w-[338px]">
              <div className="flex gap-5 justify-center items-start w-full text-left">
                <div className="flex flex-col  placeholder:text-right flex-1 shrink basis-0">
                  <Field
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="الإسم الثاني"
                    className={`overflow-hidden placeholder:text-right  gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
                      errors.lastName && touched.lastName
                        ? "border-red-500"
                        : "border-zinc-300"
                    } min-h-[35px]`}
                    aria-label="الإسم الثاني"
                  />
                  {errors.lastName && touched.lastName && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors.lastName}
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <Field
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="الإسم الأول"
                    className={`overflow-hidden placeholder:text-right  gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
                      errors.firstName && touched.firstName
                        ? "border-red-500"
                        : "border-zinc-300"
                    } min-h-[35px]`}
                    aria-label="الإسم الأول"
                  />
                  {errors.firstName && touched.firstName && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors.firstName}
                    </div>
                  )}
                </div>
              </div>

              {formFields.map((field) => (
                <div key={field.name} className="mt-2.5">
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className={`overflow-hidden placeholder:text-right  text-rightgap-2.5 self-stretch px-3.5 py-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
                      errors[field.name] && touched[field.name]
                        ? "border-red-500"
                        : "border-zinc-300"
                    } min-h-[35px]`}
                    aria-label={field.label}
                  />
                  {errors[field.name] && touched[field.name] && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors[field.name]}
                    </div>
                  )}
                </div>
              ))}

              <div className="self-start mt-2.5 text-sm text-center text-zinc-300">
                التسجيل الأولي في هذا الموقع لا يعني ضمان ابنكم لمقعد بيداغوجي
                في مجمع الامتياز التعليمي و بعد تسجيل (ابنكم | ابنتكم ) سيتم
                الاتصال بكم لتأكيد الملعلومات و إتمام خطوات التسجيل
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="overflow-hidden self-stretch px-4 mt-2.5 w-full text-sm text-red-100 whitespace-nowrap bg-emerald-700 rounded-lg min-h-[36px] min-w-[64px] disabled:opacity-50"
              >
                التالي
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewRegisterPageForm1;
