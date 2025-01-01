import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import SelectField from "./SelectField";
import Button from "./Button";
import { FaUserAlt } from "react-icons/fa";

const gradeFields = [
  { name: "semester3", label: "معدل الفصل 3", placeholder: "/ 10" },
  { name: "semester2", label: "معدل الفصل 2", placeholder: "/10" },
  { name: "semester1", label: "معدل الفصل 1", placeholder: "/10" },
];

function NewRegisterPageForm2({ initialValues, handleBack, onSubmit }) {
  const validationSchema = Yup.object({
    lastName: Yup.string().required("لقب التلميذ مطلوب"),
    firstName: Yup.string().required("إسم التلميذ مطلوب"),
    gender: Yup.string().required("الجنس مطلوب"),
    previousSchool: Yup.string().required("اسم المدرسة السابقة مطلوب"),
    semester1: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    semester2: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    semester3: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    registrationChoice: Yup.string().required("الاختيار مطلوب"),
    hasRepeatedYear: Yup.string().required("الإجابة مطلوبة"),
  });

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="flex  flex-col justify-center items-center py-10 bg-white max-w-[710px] max-md:py-24">
            <div className="flex flex-col mt-2.5 max-w-full font-light w-[338px]">
              <div className="flex gap-5 justify-center items-start w-full text-right">
                <FormField
                  name="lastName"
                  label="لقب التلميذ"
                  placeholder="الورقلي"
                  error={errors.lastName}
                  touched={touched.lastName}
                />
                <FormField
                  name="firstName"
                  label="إسم التلميذ"
                  placeholder="أحمد"
                  error={errors.firstName}
                  touched={touched.firstName}
                />
              </div>

              <SelectField
                name="gender"
                label="الجنس"
                placeholder="اختر الجنس"
                error={errors.gender}
                touched={touched.gender}
                options={[
                  { value: "male", label: "ذكر" },
                  { value: "female", label: "أنثى" },
                ]}
                iconSrc={"Fa"}
              />

              <FormField
                name="previousSchool"
                label="اسم المدرسة السابقة"
                placeholder="المدرسة السابقة"
                error={errors.previousSchool}
                touched={touched.previousSchool}
                fullWidth
              />

              <div className="flex gap-5 justify-center items-start mt-2.5 w-full text-right">
                {gradeFields.map((field) => (
                  <FormField
                    key={field.name}
                    name={field.name}
                    label={field.label}
                    placeholder={field.placeholder}
                    error={errors[field.name]}
                    touched={touched[field.name]}
                    type="number"
                    min="0"
                    max="10"
                    step="0.01"
                  />
                ))}
              </div>

              <SelectField
                name="registrationChoice"
                label="أريد تسجيل إبني في :"
                placeholder="اختر اجابة"
                error={errors.registrationChoice}
                touched={touched.registrationChoice}
                options={[
                  { value: "primary", label: "الابتدائي" },
                  { value: "middle", label: "المتوسط" },
                  { value: "secondary", label: "الثانوي" },
                ]}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9"
              />

              <SelectField
                name="hasRepeatedYear"
                label="هل أعاد السنة من قبل ؟"
                placeholder="اختر اجابة"
                error={errors.hasRepeatedYear}
                touched={touched.hasRepeatedYear}
                options={[
                  { value: "yes", label: "نعم" },
                  { value: "no", label: "لا" },
                ]}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9"
              />

              <Button
                type="submit"
                variant="primary"
                className="mt-2.5"
                disabled={isSubmitting}
              >
                التالي
              </Button>
              <Button
                type="button"
                variant="outline"
                className="mt-2.5"
                onClick={handleBack} // Pass the handler correctly
              >
                الرجوع
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewRegisterPageForm2;
