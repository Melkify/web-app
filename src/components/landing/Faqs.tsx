import Accordion from "./Accordion";

const faqs = [
  {
    question: "آیا ساخت کمپین و ارسال پیام به مشتری هزینه دارد؟",
    answer: "خیر تمامی پیام‌ها در پیامرسان ارسال می‌گردد و هزینه‌ای ندارد.",
  },
  {
    question: "بازه زمانی دریافت وجه به چه صورت است؟",
    answer:
      "ما از درگاه پرداخت امن زیبال استفاده می‌کنیم و پس از دریافت وجه در کمتر از ۲ روز کاری وجه برای شما واریز می‌گردد.",
  },
  {
    question: "چگونه می‌توانم درخواست سرویس جدید را ارسال کنم؟",
    answer:
      "در صورت نیاز به سرویس جدید، می‌توانید از طریق ایمیل درخواست خود را ثبت کنید.",
  },
];

export default function Faqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative w-full overflow-hidden"
    >
      <div className="rtl mx-auto mt-16 grid w-full max-w-2xl p-4">
        {faqs.map((faq, faqIndex) => (
          <Accordion key={faqIndex} title={faq.question} content={faq.answer} />
        ))}
      </div>
    </section>
  );
}
