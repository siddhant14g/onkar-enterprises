export default function Services({
  language,
  translations,
  servicesData,
  search,
  setSearch,
  handleRedirect,
}) {
  const filteredServices = servicesData.filter((service) =>
    service[language].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder={translations[language].search}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-3 rounded-full shadow"
      />

      <div className="grid grid-cols-1 gap-4 mt-4">
        {filteredServices.map((service, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <h2 className="text-sm font-semibold mb-3">
              {service[language]}
            </h2>
            <button
              onClick={() => handleRedirect(service.message)}
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              {translations[language].apply}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}