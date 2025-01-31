import AnswerQuestion from "./AnswerQuestion";

export function FAQSection() {
  const faqData = [
    {
      question: "كيف تضمنون سلامة ابني أثناء وجوده معكم؟",
      answer:
        "نلتزم بتطبيق أعلى معايير السلامة والأمان لضمان راحة البال لك ولابنك.",
    },
    {
      question: "هل سيشعر ابني بالراحة والانتماء؟",
      answer:
        "نحرص على خلق بيئة دافئة ومرحبة تجعل ابنك يشعر بالراحة والانتماء منذ اليوم الأول.",
    },
    {
      question: "هل سيتكيف ابني مع أصدقائه جدد",
      answer:
        "بيئتنا تساعد ابنك في اكتساب أصدقاء لديهم مهارات تساعده على الاندماج والتطور.",
    },
    {
      question: "هل سيتلقى ابني دعماً فردياً إذا احتاج لذلك؟",
      answer:
        "بالطبع، فريقنا المتخصص يقدم دعماً فردياً لكل طفل حسب احتياجاته لضمان تقدمه وتطوره الشخصي.",
    },
  ];
  return (
    <div className="flex overflow-hidden relative flex-col items-center py-28 text-right bg-white max-md:py-24">
      <div className="z-0 text-5xl text-emerald-700 max-md:max-w-full max-md:text-4xl">
        الأسئلة الشائعة
      </div>
      <div className="flex z-0 flex-wrap gap-5 justify-center items-start mt-12 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col min-w-[240px] w-[467px] max-md:max-w-full">
          {faqData.map((faq, index) => (
            <div key={index} className={index > 0 ? "mt-5" : ""}>
              <AnswerQuestion question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
