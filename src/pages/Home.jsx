import { useNavigate } from "react-router-dom";

export default function Home({ language, translations }) {
  const navigate = useNavigate();

  return (
    <div className="text-center space-y-4">
      <h2 className="text-xl font-bold text-blue-700">
        {translations[language].homeHeading}
      </h2>

      <p className="text-sm text-gray-700">
        {translations[language].homeText}
      </p>

      <button
        onClick={() => navigate("/services")}
        className="bg-blue-600 text-white px-6 py-3 rounded-full"
      >
        {translations[language].servicesBtn}
      </button>
    </div>
  );
}