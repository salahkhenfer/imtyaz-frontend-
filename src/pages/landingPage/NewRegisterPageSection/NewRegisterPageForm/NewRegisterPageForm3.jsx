import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import QuestionInput from "./QuestionInput";
import Swal from "sweetalert2";

function NewRegisterPageForm3({
  setStep,
  initialValues,
  onSubmit,
  Children,
  setchildren,
  formData,
}) {
  const [num1] = useState(Math.floor(Math.random() * 50) + 1);
  const [num2] = useState(Math.floor(Math.random() * 50) + 1);
  const correctAnswer = num1 + num2;

  const validationSchema = Yup.object({
    needs_transportation: Yup.boolean().required("الإجابة مطلوبة"),

    math_answer: Yup.number()
      .required("الإجابة مطلوبة")
      .test(
        "correct-answer",
        "الإجابة غير صحيحة",
        (value) => value === correctAnswer
      ),
  });

  const initialFormValues = {
    needs_transportation: initialValues.needs_transportation || false,

    math_answer: "",
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      Children?.map(async (child) => {
        child.needs_transportation = values.needs_transportation === "true";
        child.status = false;
      });
      await onSubmit(Children, { setSubmitting });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "حدث خطأ",
        text: "يرجى المحاولة مرة أخرى",
        confirmButtonText: "حسنا",
      });
    }
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col justify-center items-center py-60 bg-white max-w-[710px] max-md:py-24">
            <div className="flex-1 shrink gap-2.5 self-stretch py-3.5 max-w-full text-3xl text-right text-black w-[353px]">
              مرحبا بك في مجمع الإمتياز
            </div>
            <div className="flex flex-col mt-2.5 max-w-full font-light w-[338px]">
              {/* Transportation Interest */}
              <div className="mt-2.5">
                <label
                  onClick={() => {
                    console.log(Children);
                  }}
                  className="text-right text-sm text-stone-700"
                >
                  هل أنت مهتم بالنقل المدرسي ؟
                </label>
                <Field
                  name="needs_transportation"
                  as="select"
                  className={`overflow-hidden gap-2.5 w-full self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.needs_transportation && touched.needs_transportation
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                >
                  <option value="" disabled>
                    اختر اجابة
                  </option>
                  <option value={true}>نعم</option>
                  <option value={false}>لا</option>
                </Field>
                {errors.needs_transportation &&
                  touched.needs_transportation && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors.needs_transportation}
                    </div>
                  )}
              </div>

              {/* Math Question */}
              <div className="flex flex-col mt-2.5 w-full text-right max-w-[338px]">
                <label
                  htmlFor="math_answer"
                  className="self-end text-sm text-stone-700"
                >
                  أجب عن السؤال التالي: {num1} + {num2} كم يساوي ؟
                </label>
                <Field
                  id="math_answer"
                  name="math_answer"
                  type="number"
                  className={`overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.math_answer && touched.math_answer
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                  placeholder="اكتب الإجابة"
                  aria-label="اكتب الإجابة للسؤال الرياضي"
                />
                {errors.math_answer && touched.math_answer && (
                  <div className="text-right text-red-500 text-xs mt-1">
                    {errors.math_answer}
                  </div>
                )}
              </div>

              <Button
                variant="primary"
                type="submit"
                className="mt-2.5"
                disabled={isSubmitting}
              >
                تأكيد التسجيل
              </Button>

              <Button onClick={handleBack} variant="outline" className="mt-2.5">
                الرجوع
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewRegisterPageForm3;
