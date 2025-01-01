import React, { useState } from "react";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "./Button";
import QuestionInput from "./QuestionInput";
import Swal from "sweetalert2";

function NewRegisterPageForm3(
  { setStep, initialValues, onSubmit } // 1. Modify the props
) {
  const questions = [
    {
      label: "هل أنت مهتم بالنقل المدرسي ؟",
      placeholder: "اختر اجابة",
    },
  ];

  const validationSchema = Yup.object({
    transportInterest: Yup.string().required("الإجابة مطلوبة"),
    mathAnswer: Yup.number()
      .required("الإجابة مطلوبة")
      .test(
        "correct-answer",
        "الإجابة غير صحيحة",
        (value) => value === correctAnswer
      ),
  });
  const [num1, setNum1] = useState(Math.floor(Math.random() * 50) + 1);
  const [num2, setNum2] = useState(Math.floor(Math.random() * 50) + 1);

  const handleBack = () => {
    setStep(1); // 2. Update the step
  };
  // Calculate the correct answer
  const correctAnswer = num1 + num2;
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await Swal.fire({
            icon: "success",
            title: "تم تسجيل البيانات بنجاح",

            confirmButtonText: "حسنا",
          });
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex flex-col justify-center items-center py-60 bg-white max-w-[710px] max-md:py-24">
            <div className="flex-1 shrink gap-2.5 self-stretch py-3.5 max-w-full text-3xl text-right text-black w-[353px]">
              مرحبا بك في مجمع الإمتياز
            </div>
            <div className="flex flex-col mt-2.5 max-w-full font-light w-[338px]">
              {questions.map((question, index) => (
                <div key={index} className="mt-2.5">
                  <label
                    htmlFor={`question-${index}`}
                    className="text-right text-sm text-stone-700"
                  >
                    {question.label}
                  </label>
                  <Field
                    id={`question-${index}`}
                    name={index === 0 ? "transportInterest" : "schoolDiscovery"}
                    placeholder={question.placeholder}
                    as="select"
                    className={`overflow-hidden gap-2.5 w-full self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                      errors[
                        index === 0 ? "transportInterest" : "schoolDiscovery"
                      ] &&
                      touched[
                        index === 0 ? "transportInterest" : "schoolDiscovery"
                      ]
                        ? "border-red-500"
                        : "border-zinc-300"
                    }`}
                  >
                    <option value="" disabled>
                      {question.placeholder}
                    </option>
                    <option value="yes">نعم</option>
                    <option value="no">لا</option>
                  </Field>
                  {errors[
                    index === 0 ? "transportInterest" : "schoolDiscovery"
                  ] &&
                    touched[
                      index === 0 ? "transportInterest" : "schoolDiscovery"
                    ] && (
                      <div className="text-right text-red-500 text-xs mt-1">
                        {
                          errors[
                            index === 0
                              ? "transportInterest"
                              : "schoolDiscovery"
                          ]
                        }
                      </div>
                    )}
                </div>
              ))}

              <div className="flex flex-col mt-2.5 w-full text-right max-w-[338px]">
                <label
                  htmlFor="mathAnswer"
                  className="self-end text-sm text-stone-700"
                >
                  أجب عن السؤال التالي: {num1} + {num2} كم يساوي ؟
                </label>
                <Field
                  id="mathAnswer"
                  name="mathAnswer"
                  type="number"
                  className={`overflow-hidden gap-2.5 self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.mathAnswer && touched.mathAnswer
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                  placeholder="اكتب الإجابة"
                  aria-label="اكتب الإجابة للسؤال الرياضي"
                />
                {errors.mathAnswer && touched.mathAnswer && (
                  <div className="text-right text-red-500 text-xs mt-1">
                    {errors.mathAnswer}
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
