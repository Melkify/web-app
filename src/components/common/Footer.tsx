const Footer = () => {
  return (
    <footer className="rtl footer mx-auto items-center bg-neutral p-4 text-neutral-content">
      <div className="flex flex-col items-center md:justify-self-start">
        <p className="text-xl font-bold">بات‌بازار</p>
      </div>
      <div className="flex flex-row md:justify-self-end">
        <a
          referrerPolicy="origin"
          target="_blank"
          href="https://trustseal.enamad.ir/?id=503277&Code=FGBHNb1Dm7KY2mV9tGHhXljA8xiu4u4D"
        >
          <img
            referrerPolicy="origin"
            src="https://trustseal.enamad.ir/logo.aspx?id=503277&Code=FGBHNb1Dm7KY2mV9tGHhXljA8xiu4u4D"
            alt=""
            style={{ cursor: "pointer" }}
            // code="FGBHNb1Dm7KY2mV9tGHhXljA8xiu4u4D"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
