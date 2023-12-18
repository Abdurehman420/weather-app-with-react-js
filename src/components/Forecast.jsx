import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const day = new Date().getDay();
  const forecastDays = weekDays
    .slice(day, weekDays.length)
    .concat(weekDays.slice(0, day));
  console.log(data);

  return (
    <div className="p-5">
      <h2 className="Forecast  text-4xl font-bold    my-6 ">Daily Forecast</h2>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="daily-item flex flex-col sm:flex-row justify-between items-center bg-white my-2 rounded-xl px-1 sm:px-5 py-2 shadow-md">
                  <img
                    src={`icons/${item.weather[0].icon}.png`}
                    className="icon-small h-10  mr-1 sm:mr-5"
                    alt="weather"
                  />
                  <label className="day flex-1">{forecastDays[idx]}</label>
                  <label className="description mx-3 ">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max  text-gray-400">
                    {Math.round(item.main.temp_min)}°C &nbsp;/ &nbsp;{" "}
                    {Math.round(item.main.temp_max)}°C
                  </label>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="daily-details-grid grid-cols-1  grid p-5 gap-4 sm:grid-cols-2 ">
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Pressure
                  </label>
                  <label className="daily-details-grid-item-value">
                    {item.main.pressure} hPa
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Humidity
                  </label>
                  <label className="daily-details-grid-item-value">
                    {item.main.humidity}%
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Wind Speed
                  </label>
                  <label className="daily-details-grid-item-value">
                    {item.wind.speed}km/hr
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Clouds
                  </label>
                  <label className="daily-details-grid-item-value">
                    {item.clouds.all}
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Sea level:
                  </label>
                  <label className="daily-details-grid-item-value">
                    {item.main.sea_level} m
                  </label>
                </div>
                <div className="daily-details-grid-item">
                  <label className="daily-details-grid-item-title">
                    Feels like:
                  </label>
                  <label className="daily-details-grid-item-value">
                    {Math.round(item.main.feels_like)} °C
                  </label>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Forecast;
