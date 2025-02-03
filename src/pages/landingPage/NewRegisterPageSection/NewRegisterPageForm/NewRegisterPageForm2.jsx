import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import SelectField from "./SelectField";
import Button from "./Button";
import { FaCheckDouble, FaEdit, FaTrash, FaUserAlt } from "react-icons/fa";
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
  formData,
  setChildren,
}) {
  const [currentChild, setCurrentChild] = useState(null);
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
    date_of_birth: Yup.date().required("تاريخ الميلاد مطلوب"),
    last_school: Yup.string(),
    semester_1: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10"),
    semester_2: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10"),
    semester_3: Yup.number()
      .min(0, "المعدل يجب أن يكون أكبر من 0")
      .max(10, "المعدل يجب أن يكون أقل من 10"),
    level_academic: Yup.number().required("الاختيار مطلوب"),
    is_repeated: Yup.boolean().required("الإجابة مطلوبة"),
  });

  const initialFormValues = {
    first_name: initialValues.first_name || "",
    last_name: initialValues.last_name || "",
    first_name_ar: initialValues.first_name_ar || "",
    last_name_ar: initialValues.last_name_ar || "",
    gender: initialValues.gender || "",
    date_of_birth: initialValues.date_of_birth || "",
    last_school: initialValues.last_school || "",
    semester_1: initialValues.semester_1 || "",
    semester_2: initialValues.semester_2 || "",
    semester_3: initialValues.semester_3 || "",
    level_academic: initialValues.level_academic || "",
    is_repeated: initialValues.is_repeated || false,
  };

  const handleInputChange = (e, setFieldValue) => {
    console.log(childrenCount);

    const { name, value } = e.target;

    if (name.endsWith("_ar")) {
      if (value === "" || isArabic(value)) {
        setFieldValue(name, value);
      }
    } else if (name === "first_name" || name === "last_name") {
      if (value === "" || isLatin(value)) {
        setFieldValue(name, value);
      }
    } else {
      setFieldValue(name, value);
    }
  };

  const editChild = (index, resetForm, values) => {
    Swal.fire({
      title: " هل انت متاكد من تعديل هذا الطفل؟",
      icon: "warning",
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,

      confirmButtonColor: "#005e21",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        setChildren(() => {
          const newChildren = [...childrenCount];
          newChildren[currentChild] = values;
          return newChildren;
        });

        let child = childrenCount[index];
        setCurrentChild(index);

        resetForm({
          values: {
            first_name: child.first_name,
            last_name: child.last_name,
            first_name_ar: child.first_name_ar,
            last_name_ar: child.last_name_ar,
            gender: child.gender,
            date_of_birth: child.date_of_birth,
            last_school: child.last_school,
            semester_1: child.semester_1,
            semester_2: child.semester_2,
            semester_3: child.semester_3,
            level_academic: child.level_academic,
            is_repeated: child.is_repeated,
          },
        });
        child = null;
      } else {
        return;
      }
    });
  };
  const removeChild = (index, resetForm) => {
    Swal.fire({
      title: "هل تريد حذف هذا الطفل؟",
      showCancelButton: true,
      confirmButtonText: "نعم",
      cancelButtonText: "لا  ",
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        const newChildren = [...childrenCount];
        newChildren.splice(index, 1); // Remove the child at the specified index

        // Update the children list
        setChildren(newChildren); // Assuming `setChildren` is a state setter for `childrenCount`

        // If there are no children left, reset the form to its initial empty state
        if (newChildren.length === 0) {
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
          setCurrentChild(null); // Reset the current child index
        } else {
          // If there are children left, set the form to the previous child's data
          const newIndex = index - 1 < 0 ? 0 : index - 1; // Handle edge case for the first child
          const child = newChildren[newIndex];
          setCurrentChild(newIndex);

          resetForm({
            first_name: child.first_name,
            last_name: child.last_name,
            first_name_ar: child.first_name_ar,
            last_name_ar: child.last_name_ar,
            gender: child.gender,
            date_of_birth: child.date_of_birth,
            last_school: child.last_school,
            semester_1: child.semester_1,
            semester_2: child.semester_2,
            semester_3: child.semester_3,
            level_academic: child.level_academic,
            is_repeated: child.is_repeated,
          });
        }
      }
    });
  };
  const handleClick = (values, { resetForm }) => {
    Swal.fire({
      title: "هل تريد اضافة تلميذ آخر؟",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: " اضافة ابن اخر",
      cancelButtonText: "   اكمل التسجيل",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#125200",
    }).then((result) => {
      if (result.isConfirmed) {
        addChild(values, childrenCount.length + 1);
        resetForm({
          first_name: "",
          last_name: "",
          first_name_ar: "",
          last_name_ar: "",
          gender: "",
          last_school: "",
          date_of_birth: "",
          semester_1: 0,
          semester_2: 0,
          semester_3: 0,
          level_academic: 1,
          is_repeated: false,
        });
      } else {
        addChild(values, childrenCount.length);
        onSubmit(values);
      }
    });
  };

  return (
    <div>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleClick}
      >
        {({
          errors,
          touched,
          isSubmitting,
          setFieldValue,
          values,
          resetForm,
        }) => (
          <Form className="flex flex-col pb-10 bg-white max-w-[710px] max-md:py-24">
            <div className="">
              {childrenCount?.length > 0 && (
                <div className="grid gap-4 p-4 ">
                  <h3 className="text-lg font-medium ">التلاميذ المسجلين:</h3>
                  <div dir="rtl" className="flex flex-wrap gap-2">
                    {childrenCount?.map((child, index) => (
                      <div
                        key={index}
                        className="flex bg-white p-3 rounded-md shadow-sm"
                      >
                        {childrenCount?.length === index + 1 ? (
                          <FaEdit className="cursor-pointer flex justify-center my-auto items-center ml-2 text-green-700" />
                        ) : (
                          <FaCheckDouble className=" ml-2 text-green-700 my-auto" />
                        )}
                        <div
                          className="cursor-pointer"
                          onClick={() => editChild(index, resetForm, values)}
                        >
                          تلميذ {index + 1}
                        </div>
                        {childrenCount?.length > 1 && (
                          <FaTrash
                            className="cursor-pointer mx-2 text-red-700 my-auto"
                            onClick={() => removeChild(index, resetForm)}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
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
              {/* Date of Birth Field */}
              <FormField
                name="date_of_birth"
                id="date_of_birth"
                label="تاريخ الميلاد"
                type="date"
                error={errors.date_of_birth}
                touched={touched.date_of_birth}
                onChange={(e) => setFieldValue("date_of_birth", e.target.value)}
              />
              <SelectField
                name="level_academic"
                label="أريد تسجيل إبني في :"
                placeholder="اختر اجابة"
                error={errors.level_academic}
                touched={touched.level_academic}
                options={[
                  { value: 1, label: "التحضيري " },
                  { value: 2, label: "الأولى إبتدائي" },
                  { value: 3, label: "الثانية إبتدائي" },
                  { value: 4, label: "الثالثة إبتدائي" },
                  { value: 5, label: "الرابعة إبتدائي" },
                  { value: 6, label: "الخامسة إبتدائي" },
                ]}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/70599b477f399fcc477390af3384c63649171501f88088a93d8085f83a9da9a9"
              />
              {touched.level_academic && values.level_academic > 1 && (
                <div>
                  <FormField
                    name="last_school"
                    label="اسم المدرسة السابقة"
                    placeholder="المدرسة السابقة"
                    error={errors.last_school}
                    touched={touched.last_school}
                    fullWidth
                  />
                  <div className=" flex gap-5 justify-center items-start mt-2.5 w-full text-right">
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
                </div>
              )}

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

              <Button type="submit" variant="primary" className="mt-2.5">
                {"التالي"}
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
