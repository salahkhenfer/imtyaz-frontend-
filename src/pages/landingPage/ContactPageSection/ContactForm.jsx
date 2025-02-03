import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendContact } from "../../../API/landingPageApi/NewRegisterApi";
import Swal from "sweetalert2";

// Validation schema using Yup
const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .required("الاسم الكامل مطلوب")
    .min(2, "الاسم يجب أن يكون أطول من حرفين"),
  email: Yup.string()
    .email("البريد الإلكتروني غير صحيح")
    .required("البريد الإلكتروني مطلوب"),
  subject: Yup.string()
    .required("الموضوع مطلوب")
    .min(3, "الموضوع يجب أن يكون أكثر تفصيلاً"),
  message: Yup.string()
    .required("الرسالة مطلوبة")
    .min(10, "الرسالة يجب أن تكون أكثر تفصيلاً"),
});

// Custom input component
const FormInput = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <Field
        {...props}
        className="w-full px-3.5 pt-2.5 mt-2.5 text-right rounded-lg border border-emerald-700 border-solid min-h-[48px]"
      />
      <ErrorMessage
        name={props.name}
        component="div"
        className="text-red-500 text-xs mt-1 text-right"
      />
    </div>
  );
};

function ContactForm() {
  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    // This is where you would typically send the form data to a server

    const response = await sendContact(values);

    if (response) {
      Swal.fire({
        icon: "success",
        title: "تم إرسال الرسالة بنجاح",
        text: "سنقوم بالرد عليك في أقرب وقت ممكن",
        confirmButtonText: "حسنا",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "حدث خطأ",
        text: "يرجى المحاولة مرة أخرى",
        confirmButtonText: "حسنا",
      });
    }

    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        subject: "",
        message: "",
      }}
      validationSchema={ContactFormSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="flex overflow-hidden flex-col flex-1 shrink justify-center px-12 my-auto text-xs font-light text-emerald-700 basis-0 min-w-[240px] max-md:px-5 max-md:max-w-full">
          <h2 className="self-end text-3xl text-right text-emerald-700">
            تواصلو معنا
          </h2>

          <FormInput name="name" type="text" placeholder="الإسم الكامل" />

          <FormInput
            name="email"
            type="email"
            placeholder="البريد الإلكتروني"
          />

          <FormInput name="subject" type="text" placeholder="الموضوع" />

          <div className="relative mb-4">
            <Field
              as="textarea"
              name="message"
              className="overflow-hidden gap-2.5 px-3.5 pt-2.5 pb-36 mt-2.5 w-full text-right rounded-lg border border-emerald-700 border-solid min-h-[176px] min-w-[250px] max-md:pb-24 max-md:max-w-full"
              placeholder="الرسالة"
            />
            <ErrorMessage
              name="message"
              component="div"
              className="text-red-500 text-xs mt-1 text-right"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="overflow-hidden my-4 mx-auto text-center self-end px-4 mt-2.5 text-sm text-red-100 whitespace-nowrap bg-emerald-700 rounded-lg min-h-[36px] min-w-[64px] disabled:opacity-50"
          >
            إرسال
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm;
