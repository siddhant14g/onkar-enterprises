import React, { useState } from "react";
import { motion } from "framer-motion";

const translations = {
  en: {
    title: "Onkar Enterprises",
    about: "About Us",
    homeHeading: "Welcome to Onkar Enterprises",
    homeText:
      "We provide fast and reliable Maha E-Seva services including certificates, exam forms, and government documentation support.",
    servicesBtn: "View Services",
    search: "Search services",
    apply: "Apply",
    workingHours: "Working Hours: 9 AM - 8 PM",
  },
  mr: {
    title: "ओंकार एंटरप्रायझेस",
    about: "आमच्याबद्दल",
    homeHeading: "ओंकार एंटरप्रायझेस मध्ये स्वागत आहे",
    homeText:
      "आम्ही विविध शासकीय कागदपत्रे, परीक्षा फॉर्म आणि नोंदणी सेवा जलद आणि विश्वासार्ह पद्धतीने पुरवतो.",
    servicesBtn: "सेवा पहा",
    search: "सेवा शोधा",
    apply: "अर्ज करा",
    workingHours: "वेळ: सकाळी ९ ते रात्री ८",
  },
};

const servicesData = [
  { category: "card", en: "Ration Card Services", mr: "रेशन कार्ड संबंधित सर्व सेवा", message: "I want Ration Card Services" },
  { category: "certificate", en: "Caste Certificate", mr: "जातीचा दाखला", message: "I want to apply for Caste Certificate" },
  { category: "other", en: "Passport", mr: "पासपोर्ट", message: "I want Passport Service" },
  { category: "certificate", en: "Income Certificate", mr: "उत्पन्न दाखला", message: "I want to apply for Income Certificate" },
  { category: "other", en: "JEE Exam Form", mr: "जीईई एक्साम फॉर्म", message: "I want JEE Exam Form" },
  { category: "card", en: "PAN Card (New/Correction)", mr: "पॅन कार्ड (नवीन / दुरुस्ती)", message: "I want PAN Card Service" },
  { category: "other", en: "Driving License", mr: "ड्रायव्हिंग लायसन्स", message: "I want Driving License Service" },
  { category: "certificate", en: "Domicile Certificate", mr: "डोमासाईल", message: "I want to apply for Domicile Certificate" },
  { category: "card", en: "Aadhar Card", mr: "आधार कार्ड", message: "I want Aadhar Card Service" },
  { category: "other", en: "Affidavit / Declaration", mr: "सर्व प्रकारचे प्रतिज्ञापत्र / अफिडेविट", message: "I want Affidavit Service" },
  { category: "certificate", en: "Non Creamy Layer Certificate", mr: "नॉन क्रिमिलियर", message: "I want to apply for Non Creamy Layer Certificate" },
  { category: "card", en: "Voter ID (New/Correction)", mr: "मतदान कार्ड (नवीन / दुरुस्ती)", message: "I want Voter ID Service" },
  { category: "certificate", en: "Caste Validity", mr: "कास्ट व्हॅलिडिटी", message: "I want to apply for Caste Validity" },
  { category: "other", en: "Shop Act License", mr: "शॉप अॅक्ट", message: "I want Shop Act License" },
  { category: "card", en: "Ayushman Card", mr: "आयुष्यमान कार्ड", message: "I want Ayushman Card Service" },
  { category: "certificate", en: "Birth / Death Certificate", mr: "जन्म / मृत्यु प्रमाणपत्र", message: "I want Birth / Death Certificate" },
  { category: "other", en: "Food License", mr: "फूड लायसन्स", message: "I want Food License Service" },
  { category: "card", en: "E-Shram Card", mr: "ई-श्रम कार्ड", message: "I want E-Shram Card Service" },
  { category: "certificate", en: "Farmer Certificate", mr: "शेतकरी दाखला", message: "I want to apply for Farmer Certificate" },
  { category: "other", en: "Gazette / Rajpatra", mr: "गॅझेट / राजपत्र", message: "I want Gazette Service" },
  { category: "card", en: "Life Certificate", mr: "जीवन प्रमाणपत्र", message: "I want Life Certificate" },
  { category: "certificate", en: "EWS Certificate", mr: "स्टेट / सेंट्रल EWS दाखला", message: "I want to apply for EWS Certificate" },
  { category: "other", en: "MHT-CET Exam Form", mr: "एमएचटी-सीईटी एक्साम फॉर्म", message: "I want MHT-CET Exam Form" },
  { category: "other", en: "Police Clearance / Verification", mr: "पोलीस क्लिअरन्स / व्हेरिफिकेशन", message: "I want Police Clearance" },
  { category: "card", en: "Digital 7/12 & 8A", mr: "डिजिटल 7/12 व 8अ", message: "I want Digital 7/12 and 8A" },
  { category: "certificate", en: "Central OBC Certificate", mr: "सेंट्रल ओबीसी प्रमाणपत्र", message: "I want to apply for Central OBC Certificate" },
  { category: "other", en: "Police / Army Recruitment Form", mr: "पोलीस / आर्मी भरती फॉर्म", message: "I want Recruitment Form Service" },
  { category: "card", en: "Old 7/12 & 8A", mr: "जुने 7/12 व 8अ", message: "I want Old 7/12 and 8A" },
  { category: "certificate", en: "Caste Verification", mr: "जात पडताळणी", message: "I want Caste Verification" },
  { category: "other", en: "PF Services", mr: "PF ची सर्व कामे", message: "I want PF Services" },
  { category: "card", en: "New Ration Card", mr: "नवीन विभक्त रेशन कार्ड", message: "I want to apply for New Ration Card" },
  { category: "certificate", en: "Minority Certificate", mr: "अल्प भूधारक दाखला", message: "I want Minority Certificate" },
  { category: "other", en: "Xerox / Print", mr: "झेरॉक्स प्रिंट", message: "I want Xerox Service" },
  { category: "card", en: "Old Ferfar", mr: "जुने फेरफार (ऑनलाईन, ऑफलाईन)", message: "I want Old Ferfar Service" },
  { category: "other", en: "Stationery", mr: "स्टेशनरी", message: "I want Stationery Service" },
  { category: "certificate", en: "Residence Certificate", mr: "लोकसंख्या दाखला", message: "I want Residence Certificate" },
];

export default function App() {
  const [language, setLanguage] = useState("mr");
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  const [showAd, setShowAd] = useState(false);
  const [activeCategory, setActiveCategory] = useState("all");
  const [showFilter, setShowFilter] = useState(false);

  const phoneNumber = "919112228090";

  const handleRedirect = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  const filteredServices = servicesData.filter((service) => {
    const matchesSearch = service[language]
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || service.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">

      {/* HEADER */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center max-w-6xl mx-auto gap-3">

          <div className="flex items-center gap-3 justify-center sm:justify-start">
            <img src="/assets/new2.png" alt="Logo" className="w-10 h-10 rounded-full bg-white p-1"/>
            <h1 className="text-lg sm:text-2xl font-bold">
              {translations[language].title}
            </h1>
          </div>

          <div className="flex justify-center gap-4 text-sm sm:text-base">
            <button onClick={() => setShowModal(true)} className="hover:underline">
              {translations[language].about}
            </button>

            <a href="tel:+919112228090" className="text-white">
              📞 Call
            </a>
          </div>

        </div>
      </header>

      {/* MAIN */}
      <main className="flex-grow px-4 py-6">

        {/* LANGUAGE */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setLanguage(prev => prev === "en" ? "mr" : "en")}
            className="bg-red-600 text-white px-5 py-2 rounded-xl shadow"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>

        {/* HOME PAGE */}
        {page === "home" && (
          <div className="text-center space-y-4">
            <h2 className="text-xl font-bold text-blue-700">
              {translations[language].homeHeading}
            </h2>

            <p className="text-sm font-bold text-gray-700">
              {translations[language].homeText}
            </p>

            <button
              onClick={() => setPage("services")}
              className="bg-blue-600 text-white px-6 py-3 rounded-full shadow-md"
            >
              {translations[language].servicesBtn}
            </button>

            <div className="mt-8 flex justify-center">
              <div
                onClick={() => setShowAd(true)}
                className="w-56 sm:w-64 aspect-[3/4] cursor-pointer overflow-hidden rounded-xl shadow-lg hover:scale-105 transition"
              >
                <img src="/assets/poster.png" className="w-full h-full object-cover"/>
              </div>
            </div>
          </div>
        )}

        {/* SERVICES PAGE */}
        {page === "services" && (
          <div>

            {/* SEARCH + FILTER */}
            <div className="mb-6 flex items-center gap-2">

              <input
                type="text"
                placeholder={translations[language].search}
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                className="flex-1 px-3 py-2 rounded-xl text-sm border border-gray-300 shadow-sm"
              />

              <div className="relative">

                <button
                  onClick={()=>setShowFilter(!showFilter)}
                  className="relative bg-gray-700 text-white px-4 py-2 rounded-xl text-sm"
                >
                  {showFilter ? "▲" : "▼"} {language === "mr" ? "फिल्टर" : "Filter"}

                  {activeCategory !== "all" && (
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"/>
                  )}
                </button>

                {showFilter && (
                  <div className="absolute right-0 mt-2 bg-white shadow-xl rounded-xl w-56 sm:w-64 p-2 z-50">

                    {[
                      { key:"all", mr:"सर्व", en:"All"},
                      { key:"certificate", mr:"प्रमाणपत्र सेवा", en:"Certificate Services"},
                      { key:"card", mr:"कार्ड व परवाने", en:"Cards & Licenses"},
                      { key:"other", mr:"इतर सेवा", en:"Other Services"},
                    ].map((item)=>(
                      <button
                        key={item.key}
                        onClick={()=>{setActiveCategory(item.key);setShowFilter(false)}}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100 rounded-lg"
                      >
                        {activeCategory===item.key && (
                          <span className="w-2 h-2 bg-red-500 rounded-full"/>
                        )}
                        {language==="mr"?item.mr:item.en}
                      </button>
                    ))}

                  </div>
                )}

              </div>
            </div>

            {/* SERVICES GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredServices.map((service,index)=>(
                <div key={index} className="bg-white rounded-xl shadow p-3 sm:p-4 text-center">
                  <h2 className="text-sm sm:text-base font-semibold mb-3">
                    {service[language]}
                  </h2>

                  <button
                    onClick={()=>handleRedirect(service.message)}
                    className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    {translations[language].apply}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={()=>setPage("home")}
                className="bg-gray-600 text-white px-4 py-3 rounded-xl"
              >
                Go Back
              </button>
            </div>

          </div>
        )}

      </main>

      {/* WHATSAPP FLOAT BUTTON */}
      <div className="fixed bottom-6 right-3 sm:right-6 z-50">
        <button
          onClick={()=>handleRedirect("Hello, I need assistance")}
          className="bg-green-600 text-white px-4 py-2 sm:py-3 rounded-full shadow-lg"
        >
          💬 WhatsApp
        </button>
      </div>

      {/* AD FULLSCREEN */}
      {showAd && (
        <div
          onClick={()=>setShowAd(false)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        >
          <img src="/assets/poster.png" className="max-h-full max-w-full object-contain rounded-lg"/>
        </div>
      )}

      {/* FOOTER */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center text-xs text-gray-400">
          <p>© 2026 Onkar Enterprises</p>
          <p className="mt-1">Developed by siddhantgandhi1410@gmail.com</p>
        </div>
      </footer>

    </div>
  );
}