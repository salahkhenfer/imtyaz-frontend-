import { Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import * as Yup from "yup";
import Button from "./Button";
import {
  getCity,
  getState,
  getDistrict,
} from "../../../../API/landingPageApi/NewRegisterApi.js";

function NewRegisterPageForm1({ setStep, initialValues, onSubmit }) {
  const [cities, setCities] = useState([]);
  const [states, setStates] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(false);

  // Fetch states on component mount
  useEffect(() => {
    const fetchStates = async () => {
      setLoading(true);
      const data = await getState();

      console.log(data);

      setStates(data);
      setLoading(false);
    };

    fetchStates();
  }, []);

  // Fetch cities when state changes
  const fetchCities = async (stateId) => {
    setLoading(true);
    const data = await getCity(stateId);
    setCities(data);
    setLoading(false);
  };

  // Fetch districts when city changes
  const fetchDistricts = async (cityId) => {
    setLoading(true);
    const data = await getDistrict(cityId);
    setDistricts(data);
    setLoading(false);
  };

  // Validation schema
  const validationSchema = Yup.object({
    first_name_parent: Yup.string().required("الإسم الأول مطلوب"),
    last_name_parent: Yup.string().required("الإسم الثاني مطلوب"),
    email: Yup.string()
      .email("البريد الإلكتروني غير صالح")
      .required("البريد الإلكتروني مطلوب"),
    phone_number: Yup.string()
      .required("رقم الهاتف مطلوب")
      .matches(/^[0-9\s]+$/, "رقم الهاتف غير صالح"),
    phone_number_2: Yup.string().matches(/^[0-9\s]+$/, "رقم الهاتف غير صالح"),
    district: Yup.number().required("المنطقة مطلوبة"),
    city: Yup.number().required("المدينة مطلوبة"),
    state: Yup.number().required("الولاية مطلوبة"),
  });

  const formFields = [
    { name: "email", label: "البريد الإلكتروني", type: "email" },
    { name: "phone_number", label: "رقم الهاتف 1", type: "tel" },
    { name: "phone_number_2", label: "رقم الهاتف 2", type: "tel" },
  ];

  const initialFormValues = {
    first_name_parent: initialValues.first_name_parent || "",
    last_name_parent: initialValues.last_name_parent || "",
    email: initialValues.email || "",
    phone_number: initialValues.phone_number || "",
    phone_number_2: initialValues.phone_number_2 || "",
    district: initialValues.district || "",
    city: initialValues.city || "",
    state: initialValues.state || "",
  };

  const handelClick = (values) => {
    console.log("Form 1 data:", values);

    // setStep(1);
  };

  return (
    <div className="h-[90vh] placeholder:text-right">
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ errors, touched, isSubmitting, setFieldValue, values }) => (
          <Form className="flex flex-col justify-center py-10 bg-white max-w-[710px]">
            <div className="flex-1 shrink gap-2.5 self-stretch py-3.5 max-w-full text-3xl text-center text-black max-lg:text-2xl">
              مرحبا بك في مجمع الإمتياز
            </div>

            <div className="flex flex-col mt-2.5 placeholder:text-right max-w-full font-light w-[338px]">
              {/* Parent Name Fields */}
              <div className="flex gap-5 justify-center items-start w-full text-left">
                <div className="flex flex-col placeholder:text-right flex-1 shrink basis-0">
                  <Field
                    type="text"
                    id="last_name_parent"
                    name="last_name_parent"
                    placeholder="الإسم الثاني للولي"
                    className={`overflow-hidden placeholder:text-right gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
                      errors.last_name_parent && touched.last_name_parent
                        ? "border-red-500"
                        : "border-zinc-300"
                    } min-h-[35px]`}
                    aria-label="الإسم الثاني"
                  />
                  {errors.last_name_parent && touched.last_name_parent && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors.last_name_parent}
                    </div>
                  )}
                </div>
                <div className="flex flex-col flex-1 shrink justify-center basis-0">
                  <Field
                    type="text"
                    id="first_name_parent"
                    name="first_name_parent"
                    placeholder="الإسم الأول الولي"
                    className={`overflow-hidden placeholder:text-right gap-2.5 self-stretch px-3.5 py-2.5 mt-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
                      errors.first_name_parent && touched.first_name_parent
                        ? "border-red-500"
                        : "border-zinc-300"
                    } min-h-[35px]`}
                    aria-label="الإسم الأول الولي"
                  />
                  {errors.first_name_parent && touched.first_name_parent && (
                    <div className="text-right text-red-500 text-xs mt-1">
                      {errors.first_name_parent}
                    </div>
                  )}
                </div>
              </div>

              {/* Dynamic Form Fields */}
              {formFields.map((field) => (
                <div key={field.name} className="mt-2.5">
                  <Field
                    type={field.type}
                    name={field.name}
                    placeholder={field.label}
                    className={`overflow-hidden placeholder:text-right text-right gap-2.5 self-stretch px-3.5 py-2.5 w-full text-xs whitespace-nowrap rounded-lg border border-solid ${
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

              {/* State Select Field */}
              <div className="mt-2.5">
                <label className="text-right text-sm text-stone-700">
                  الولاية
                </label>
                <Field
                  as="select"
                  name="state"
                  className={`overflow-hidden gap-2.5 w-full self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.state && touched.state
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                  onChange={(e) => {
                    setFieldValue("state", e.target.value); // Update Formik state
                    fetchCities(e.target.value); // Fetch cities for the selected state
                  }}
                >
                  <option value="">اختر الولاية</option>
                  {states?.map((state) => (
                    <option key={state.id} value={state.id}>
                      {state.name}
                    </option>
                  ))}
                </Field>
                {errors.state && touched.state && (
                  <div className="text-right text-red-500 text-xs mt-1">
                    {errors.state}
                  </div>
                )}
              </div>

              {/* City Select Field */}
              <div className="mt-2.5">
                <label className="text-right text-sm text-stone-700">
                  المدينة
                </label>
                <Field
                  as="select"
                  name="city"
                  className={`overflow-hidden gap-2.5 w-full self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.city && touched.city
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                  onChange={(e) => {
                    setFieldValue("city", e.target.value); // Update Formik state
                    fetchDistricts(e.target.value); // Fetch districts for the selected city
                  }}
                >
                  <option value="">اختر المدينة</option>
                  {cities?.map((city) => (
                    <option key={city.id} value={city.id}>
                      {city.name}
                    </option>
                  ))}
                </Field>
                {errors.city && touched.city && (
                  <div className="text-right text-red-500 text-xs mt-1">
                    {errors.city}
                  </div>
                )}
              </div>

              {/* District Field */}
              <div className="mt-2.5">
                <label className="text-right text-sm text-stone-700">
                  المنطقة
                </label>
                <Field
                  as="select"
                  name="district"
                  className={`overflow-hidden gap-2.5 w-full self-stretch px-3.5 py-2.5 mt-2 text-xs rounded-lg border border-solid ${
                    errors.district && touched.district
                      ? "border-red-500"
                      : "border-zinc-300"
                  }`}
                >
                  <option value="">اختر المنطقة</option>
                  {districts?.map((district) => (
                    <option key={district.id} value={district.id}>
                      {district.name}
                    </option>
                  ))}
                </Field>
                {errors.district && touched.district && (
                  <div className="text-right text-red-500 text-xs mt-1">
                    {errors.district}
                  </div>
                )}
              </div>

              {/* Disclaimer */}
              <div className="self-start mt-2.5 text-sm text-center text-zinc-300">
                التسجيل الأولي في هذا الموقع لا يعني ضمان ابنكم لمقعد بيداغوجي
                في مجمع الامتياز التعليمي و بعد تسجيل (ابنكم | ابنتكم ) سيتم
                الاتصال بكم لتأكيد الملعلومات و إتمام خطوات التسجيل
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                variant="primary"
                className="mt-2.5"
                disabled={isSubmitting}
              >
                التالي
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default NewRegisterPageForm1;
