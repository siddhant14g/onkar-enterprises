// import React, { useState } from "react";


// const translations = {
//   en: {
//     title: "Onkar Enterprises",
//     about: "About Us",
//     schemes: "New Government Schemes",
//     search: "Search services...",
//     apply: "Apply",
//     workingHours: "Working Hours: 9 AM - 8 PM",
//   },
//   mr: {
//     title: "ओंकार एंटरप्रायझेस",
//     about: "आमच्याबद्दल",
//     schemes: "नवीन शासकीय योजना",
//     search: "सेवा शोधा...",
//     apply: "अर्ज करा",
//     workingHours: "वेळ: सकाळी ९ ते रात्री ८",
//   },
// };

// const servicesData = [
//   { en: "PAN Card", mr: "पॅन कार्ड", message: "I want to get PAN Card" },
//   { en: "Income Certificate", mr: "उत्पन्न प्रमाणपत्र", message: "I want to get Income Certificate" },
//   { en: "Domicile Certificate", mr: "रहिवासी दाखला", message: "I want to get Domicile Certificate" },
//   { en: "JEE Exam Form", mr: "JEE परीक्षा फॉर्म", message: "I want to fill JEE Exam Form" },
//   { en: "CET Exam Form", mr: "CET परीक्षा फॉर्म", message: "I want to fill CET Exam Form" },
// ];

// export default function App() {
//   const [search, setSearch] = useState("");
//   const [language, setLanguage] = useState("en");
//   const [showModal, setShowModal] = useState(false);

//   const phoneNumber = "91XXXXXXXXXX"; // replace with real number

//   const handleRedirect = (message) => {
//     const url = `https://wa.me/${919112228090}?text=${encodeURIComponent(
//       message
//     )}`;
//     window.open(url, "_blank");
//   };

//   const filteredServices = servicesData.filter((service) =>
//     service[language].toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100">
      // {/* Header */}
      // <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
      //   <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl mx-auto gap-3">
      //     <div className="flex items-center justify-center md:justify-start gap-3">
      //       <img
      //         src="src/assets/new2.png"
      //         alt="Logo"
      //         className="w-10 h-10 rounded-full bg-white p-1"
      //       />
      //       <h1 className="text-xl md:text-2xl font-bold">
      //         {translations[language].title}
      //       </h1>
      //     </div>

      //     <div className="flex justify-center gap-6 text-sm md:text-base">
      //       <button
      //         onClick={() => setShowModal(true)}
      //         className="hover:underline"
      //       >
      //         {translations[language].about}
      //       </button>
      //       {/* <button className="hover:underline">
      //         {translations[language].schemes}
      //       </button> */}
      //       <a
      //         href="tel:+919112228090"
      //         className=" text-white px-4 py-3  transition text-center"
      //       >
      //         📞 Call Now
      //       </a>
      //     </div>
      //   </div>
      // </header>

      // {/* Modal */}
      // {showModal && (
      //   <div className="fixed inset-0 bg-gray-200/40 backdrop-blur-md flex items-center justify-center z-50 px-4">
      //     <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
      //       <button
      //         onClick={() => setShowModal(false)}
      //         className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
      //       >
      //         ✕
      //       </button>

      //       <div className="text-center mb-4">
      //         <h2 className="text-xl font-bold text-blue-600">
      //           {translations[language].title}
      //         </h2>
      //         <p className="text-sm text-gray-600 mt-1">
      //           Trusted Maha E-Seva Service Center
      //         </p>
      //       </div>

      //       <div className="space-y-2 text-sm text-gray-700">
      //         <p>
      //           We provide fast and reliable services for government documents,
      //           certificates, exam forms, and online registrations.
      //         </p>
      //       </div>

      //       <div className="mt-4 border-t pt-3 space-y-2 text-sm">
      //         <div>
      //           <span className="font-semibold">Phone: </span>
      //           <a
      //             href="tel:+919112228090"
      //             className="text-blue-600 hover:underline"
      //           >
      //             +91 9112228090
      //           </a>
      //         </div>
      //         <div>
      //           <span className="font-semibold">Email: </span>
      //           onkarenterprises@gmail.com
      //         </div>
      //         <div className="text-gray-500">
      //           {translations[language].workingHours}
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // )}

//       {/* Main */}
//       <main className="flex-grow p-4 md:p-6 max-w-6xl mx-auto w-full">
//         <div className="flex justify-center mb-6">
//           <button
//             onClick={() =>
//               setLanguage((prev) => (prev === "en" ? "mr" : "en"))
//             }
//             className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
//           >
//             {language === "en" ? "मराठी" : "English"}
//           </button>
//         </div>

//         <div className="relative mb-8">
//           <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
//             🔍
//           </span>
//           <input
//             type="text"
//             placeholder={translations[language].search}
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//             className="w-full pl-12 pr-4 py-3 rounded-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           />
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredServices.map((service, index) => (
//             <div
//               key={index}
//               className="bg-white rounded-2xl shadow-lg p-5 text-center hover:scale-105 hover:shadow-2xl transition duration-300"
//             >
//               {/* <div className="text-3xl mb-3">📄</div> */}
//               <h2 className="text-base md:text-lg font-semibold mb-3">
//                 {service[language]}
//               </h2>
//               <button
//                 onClick={() => handleRedirect(service.message)}
//                 className="bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
//               >
//                 {translations[language].apply}
//               </button>
//             </div>
//           ))}
//         </div>
//       </main>

// {/* Floating Buttons */}
// <div className="fixed bottom-19 right-3 md:right-6 flex flex-col gap-3 z-50">
//   <button
//     onClick={() => handleRedirect("Hello, I need assistance")}
//     className="bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
//   >
//     💬 WhatsApp
//   </button>
//   {/* <a
//     href="tel:+91XXXXXXXXXX"
//     className="bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition text-center"
//   >
//     📞 Call Now
//   </a> */}
// </div>

//       {/* Footer */}
//       <footer className="bg-gray-900 text-white py-6 mt-10">
//         <div className="text-center text-sm text-gray-400">
//           <p>© 2026 Onkar Enterprises. All Rights Reserved.</p>
//           <p className="mt-1">Developed by siddhantgandhi1410@gmail.com</p>
//         </div>
//       </footer>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";

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
  { en: "Ration Card Name Update", mr: "रेशन कार्ड नाव अद्यतन", message: "I want to update Ration Card Name" },
  { en: "PAN Card", mr: "पॅन कार्ड", message: "I want to get PAN Card" },
  { en: "Income Certificate", mr: "उत्पन्न दाखला", message: "I want to get Income Certificate" },
  { en: "Domicile Certificate", mr: "रहिवासी दाखला", message: "I want to get Domicile Certificate" },
  { en: "JEE Exam Form", mr: "JEE परीक्षा फॉर्म", message: "I want to fill JEE Exam Form" },
  { en: "MHT-CET Exam Form", mr: "MHT-CET परीक्षा फॉर्म", message: "I want to fill CET Exam Form" },
];

export default function App() {
  const [language, setLanguage] = useState("en");
  const [showModal, setShowModal] = useState(false);
  const [page, setPage] = useState("home");
  const [search, setSearch] = useState("");
  // const [showIntroPopup, setShowIntroPopup] = useState(false);

  const phoneNumber = "919112228090"; // replace with real number

  // useEffect(() => {
  //   document.body.style.overflow = showIntroPopup ? "hidden" : "auto";
  // }, [showIntroPopup]);

  const handleRedirect = (message) => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };

  const filteredServices = servicesData.filter((service) =>
    service[language].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-blue-100 relative">

      {/* INTRO POPUP */}
      {/* {showIntroPopup && (
        <div
          onClick={() => setShowIntroPopup(false)}
          className="fixed inset-0 bg-gray-900/60 backdrop-blur-sm flex items-center justify-center z-[100] px-4 cursor-pointer"
        >
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-8 text-center ">
            <h1 className="text-2xl font-bold text-blue-600 mb-3">
              Onkar Enterprises
            </h1>

            <p className="text-sm text-gray-600 mb-4">
              Maha E-Seva Kendra
            </p>

            <div className="text-sm text-gray-700 space-y-1">
              <p>✔ PAN Card Services</p>
              <p>✔ Income Certificate</p>
              <p>✔ Domicile Certificate</p>
              <p>✔ JEE / CET Exam Forms</p>
              <p>✔ Government Online Services</p>
            </div>

            <p className="mt-4 text-xs text-gray-500">
              📍 Your Shop Location Here
            </p>

            <p className="mt-3 text-xs text-gray-400">
              (Tap anywhere to continue)
            </p>
          </div>
        </div>
      )} */}

      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center max-w-6xl mx-auto gap-3">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img
              src="/assets/new2.png"
              alt="Logo"
              className="w-10 h-10 rounded-full bg-white p-1"
            />
            <h1 className="text-xl md:text-2xl font-bold">
              {translations[language].title}
            </h1>
          </div>

          <div className="flex justify-center gap-6 text-sm md:text-base">
            <button
              onClick={() => setShowModal(true)}
              className="hover:underline"
            >
              {translations[language].about}
            </button>
            {/* <button className="hover:underline">
              {translations[language].schemes}
            </button> */}
            <a
              href="tel:+919112228090"
              className=" text-white px-4 py-3  transition text-center"
            >
              📞 Call Now
            </a>
          </div>
        </div>
      </header>
       {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-200/40 backdrop-blur-md flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-md rounded-3xl shadow-2xl p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <div className="text-center mb-4">
              <h2 className="text-xl font-bold text-blue-600">
                {translations[language].title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                Trusted Maha E-Seva Service Center
              </p>
            </div>

            <div className="space-y-2 text-sm text-gray-700">
              <p>
                We provide fast and reliable services for government documents,
                certificates, exam forms, and online registrations.
              </p>
            </div>

            <div className="mt-4 border-t pt-3 space-y-2 text-sm">
              <div>
                <span className="font-semibold">Phone: </span>
                <a
                  href="tel:+919112228090"
                  className="text-blue-600 hover:underline"
                >
                  +91 9112228090
                </a>
              </div>
              <div>
                <span className="font-semibold">Email: </span>
                onkarenterprises@gmail.com
              </div>
              <div>
                <span className="font-semibold">Address: Shop No 2, Onkar Enterprises, Near Bharat Petrol Pump, sadashivnagar 413111 </span>
                <a href="https://maps.app.goo.gl/gyVsEQuCy7CwcL8XA" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                   Google Maps
                </a>
              </div>
              <div className="text-gray-500">
                {translations[language].workingHours}
              </div>
            </div>
          </div>
        </div>
      )}


      {/* Main */}
      <main className="flex-grow px-4 py-6">
        <div className="flex justify-center mb-6">
          <button
            onClick={() =>
              setLanguage((prev) => (prev === "en" ? "mr" : "en"))
            }
            className="bg-red-600 text-white px-5 py-2 rounded-xl text-md shadow"
          >
            {language === "en" ? "मराठी" : "English"}
          </button>
        </div>

        {page === "home" && (
          <div className="text-center space-y-4 ">
            <h2 className="text-xl font-bold text-blue-700">
              {translations[language].homeHeading}
            </h2>
            <p className="text-sm text-gray-700">
              {translations[language].homeText}
            </p>
            <div className="text-sm text-gray-700 font-bold space-y-1">
              
              <p>✔ Income Certificate</p>
              <p>✔ Domicile Certificate</p>
              <p>✔ Ration Card Services</p>
              <p>✔ JEE / CET Exam Forms</p>
              <p>✔ Government Online Services</p>
            </div>
            <button
              onClick={() => setPage("services")}
              className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-full shadow-md"
            >
              {translations[language].servicesBtn}
            </button>
          </div>
        )}

        {page === "services" && (
          <div>
            <div className="relative mb-6">
              <input
                type="text"
                placeholder={translations[language].search}
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-4 py-3 rounded-full text-sm shadow-lg focus:outline-none focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredServices.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow p-4 text-center"
                >
                  <h2 className="text-sm font-semibold mb-3">
                    {service[language]}
                  </h2>
                  <button
                    onClick={() => handleRedirect(service.message)}
                    className=" bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
                  >
                    {translations[language].apply}
                  </button>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <button
                onClick={() => setPage("home")}
                className="bg-gray-600 text-white px-4 py-3 rounded-xl shadow-sm hover:bg-gray-700 transition"
              >
                Go Back
              </button>
            </div>
          </div>
        )}
      </main>
      {/* Floating Buttons */}
      <div className="fixed bottom-18 right-1 md:right-6 flex flex-col gap-3 z-50">
        <button
          onClick={() => handleRedirect("Hello, I need assistance")}
          className="bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-700 transition"
        >
          💬 WhatsApp
        </button>
        {/* <a
          href="tel:+91XXXXXXXXXX"
          className="bg-indigo-600 text-white px-4 py-3 rounded-full shadow-lg hover:bg-indigo-700 transition text-center"
        >
          📞 Call Now
        </a> */}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4">
        <div className="text-center text-xs text-gray-400 px-4">
          <p>© 2026 Onkar Enterprises. All Rights Reserved.</p>
          <p className="mt-1">Developed by siddhantgandhi1410@gmail.com</p>
        </div>
      </footer>
    </div>
  );
}
