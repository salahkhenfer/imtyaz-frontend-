import { getFooterInfo } from "../../../API/landingPageApi/NewRegisterApi";

const getFooterData = async () => {
  const response = await getFooterInfo();
  console.log("ffff ", response);

  return response;
};

const data = getFooterData();

export const quickLinks = [
  { title: "تسجيل الدخول", link: "" },
  { title: "من نحن", link: "" },
  { title: "التوظيف", link: "" },
];

export const services = [
  { title: "أقسام الدعم المدرسي", link: "" },
  { title: "E-planet", link: "" },
  { title: "ما قبل التمدرس", link: "" },
];
