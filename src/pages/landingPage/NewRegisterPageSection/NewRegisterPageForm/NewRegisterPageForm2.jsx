import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import SelectField from "./SelectField";
import Button from "./Button";
import { FaTrash, FaUserAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import { div } from "framer-motion/client";

const gradeFields = [
  { name: "semester_3", label: "معدل الفصل 3", placeholder: "/ 10" },
  { name: "semester_2", label: "معدل الفصل 2", placeholder: "/10" },
  { name: "semester_1", label: "معدل الفصل 1", placeholder: "/10" },
];

function NewRegisterPageForm2({
  initialValues,
  handleBack,
  onSubmit,
  addChild,
  childrenCount,
  removeChild,
}) {
  const isArabic = (text) => /^[\u0600-\u06FF\s]+$/.test(text);
  const isLatin = (text) => /^[A-Za-z\s]+$/.test(text);
  const validationSchema = Yup.object({
    last_name: Yup.string()
      .required("لقب التلميذ مطلوب")
      .test("isLatin", "يجب أن يحتوي على أحرف لاتينية فقط", isLatin),
    first_name: Yup.string()
      .required("إسم التلميذ مطلوب")
      .test("isLatin", "يجب أن يحتوي على أحرف لاتينية فقط", isLatin),
    last_name_ar: Yup.string()
      .required("لقب التلميذ بالعربية مطلوب")
      .test("isArabic", "يجب أن يحتوي على أحرف عربية فقط", isArabic),
    first_name_ar: Yup.string()
      .required("إسم التلميذ بالعربية مطلوب")
      .test("isArabic", "يجب أن يحتوي على أحرف عربية فقط", isArabic),
    gender: Yup.string().required("الجنس مطلوب"),
    last_school: Yup.string().required("اسم المدرسة السابقة مطلوب"),
    semester_1: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    semester_2: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    semester_3: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10")
      .required("المعدل مطلوب"),
    level_academic: Yup.number().required("الاختيار مطلوب"),
    is_repeated: Yup.boolean().required("الإجابة مطلوبة"),
  });

  const initialFormValues = {
    first_name: initialValues.first_name || "",
    last_name: initialValues.last_name || "",
    first_name_ar: initialValues.first_name_ar || "",
    last_name_ar: initialValues.last_name_ar || "",
    gender: initialValues.gender || "",
    last_school: initialValues.last_school || "",
    semester_1: initialValues.semester_1 || "",
    semester_2: initialValues.semester_2 || "",
    semester_3: initialValues.semester_3 || "",
    level_academic: initialValues.level_academic || "",
    is_repeated: initialValues.is_repeated || false,
  };
  // Handle real-time input validation
  const handleInputChange = (e, setFieldValue) => {
    const { name, value } = e.target;

    if (name.endsWith("_ar")) {
      // For Arabic fields
      if (value === "" || isArabic(value)) {
        setFieldValue(name, value);
      }
    } else if (name === "first_name" || name === "last_name") {
      // For Latin fields
      if (value === "" || isLatin(value)) {
        setFieldValue(name, value);
      }
    } else {
      // For other fields
      setFieldValue(name, value);
    }
  };

  const handleClick = (values, { setSubmitting, resetForm }) => {
    Swal.fire({
      title: "هل تريد اضافة تلميذ آخر؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "نعم",
      cancelButtonText: "تراجع",
    }).then((result) => {
      if (result.isConfirmed) {
        addChild(values);
        // Reset the form with empty values
        resetForm({
          values: {
            first_name: "",
            last_name: "",
            first_name_ar: "",
            last_name_ar: "",

            gender: "",
            last_school: "",
            semester_1: "",
            semester_2: "",
            semester_3: "",
            level_academic: "",
            is_repeated: false,
          },
        });
      } else {
        onSubmit(values);
      }
      setSubmitting(false);
    });
  };
  return (
    <div>
      <div className="mb-6">
        {childrenCount?.length > 1 && (
          <div className="grid gap-4 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-medium text-right mb-2">
              التلاميذ المسجلين:
            </h3>
            {childrenCount?.map((child, index) => (
              <div
                key={index}
                className="flex items-center justify-between bg-white p-3 rounded-md shadow-sm"
              >
                <button
                  type="button"
                  onClick={() => removeChild(index)}
                  className="text-red-500 hover:text-red-700 p-2"
                >
                  <FaTrash size={16} />
                </button>
                <div className="flex items-center gap-4 text-right">
                  <div className="flex items-center gap-2">
                    <FaUserAlt className="text-gray-400" />
                    <span className="font-medium">
                      {child.first_name_ar} {child.last_name_ar}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {child.level_academic === "1" && "الابتدائي"}
                    {child.level_academic === "2" && "المتوسط"}
                    {child.level_academic === "3" && "الثانوي"}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleClick}
      >
        {({ errors, touched, isSubmitting, setFieldValue }) => (
          <Form className="flex flex-col justify-center items-center py-10 bg-white max-w-[710px] max-md:py-24">
            <div className="flex flex-col mt-2.5 max-w-full font-light w-[338px]">
              {/* Latin Names */}
              <div className="flex gap-5 justify-center items-start w-full text-right">
                <FormField
                  name="last_name"
                  label="لقب التلميذ باللاتينية"
                  placeholder="Ouerghi"
                  error={errors.last_name}
                  touched={touched.last_name}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                />
                <FormField
                  name="first_name"
                  label="إسم التلميذ باللاتينية"
                  placeholder="Ahmed"
                  error={errors.first_name}
                  touched={touched.first_name}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                />
              </div>

              {/* Arabic Names */}
              <div className="flex gap-5 justify-center items-start w-full text-right">
                <FormField
                  name="last_name_ar"
                  label="لقب التلميذ بالعربية"
                  placeholder="الورقلي"
                  error={errors.last_name_ar}
                  touched={touched.last_name_ar}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                />
                <FormField
                  name="first_name_ar"
                  label="إسم التلميذ بالعربية"
                  placeholder="أحمد"
                  error={errors.first_name_ar}
                  touched={touched.first_name_ar}
                  onChange={(e) => handleInputChange(e, setFieldValue)}
                />
              </div>

              <SelectField
                name="gender"
                label="الجنس"
                placeholder="اختر الجنس"
                error={errors.gender}
                touched={touched.gender}
                options={[
                  { value: "M", label: "ذكر" },
                  { value: "F", label: "أنثى" },
                ]}
                iconSrc={"Fa"}
              />

              <FormField
                name="last_school"
                label="اسم المدرسة السابقة"
                placeholder="المدرسة السابقة"
                error={errors.last_school}
                touched={touched.last_school}
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
                name="level_academic"
                label="أريد تسجيل إبني في :"
                placeholder="اختر اجابة"
                error={errors.level_academic}
                touched={touched.level_academic}
                options={[
                  { value: "1", label: "الابتدائي" },
                  { value: "2", label: "المتوسط" },
                  { value: "3", label: "الثانوي" },
                ]}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9"
              />

              <SelectField
                name="is_repeated"
                label="هل أعاد السنة من قبل ؟"
                placeholder="اختر اجابة"
                error={errors.is_repeated}
                touched={touched.is_repeated}
                options={[
                  { value: true, label: "نعم" },
                  { value: false, label: "لا" },
                ]}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9"
              />

              <Button
                type="button"
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
                onClick={handleBack}
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
