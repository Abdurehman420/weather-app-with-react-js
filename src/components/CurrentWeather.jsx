function CurrentWeather({ data }) {
  console.log(data);
  return (
    <div className="curWeather w-full max-w-[500px] space-y-10 mx-auto my-6 p-4 bg-slate-600 rounded-md">
      <div className="top flex justify-between ">
        <div>
          <p className="city sm:text-4xl text-white font-bold text-2xl">
            {data.city}
          </p>
          <p className="weatherDescription text-xl text-white font-medium">
            {data.weather[0].description}
          </p>
        </div>
        <img
          alt="weather"
          className="weatherIcon"
          src={`/icons/${data.weather[0].icon}.png`}
        />
      </div>
      <div className="bottom flex justify-between items-center">
        <p className="temperature flex-1 sm:text-7xl text-5xl text-white font-bold">
          {Math.round(data.main.temp)}*C
        </p>
        <div className="details flex-1 text-white font-semibold">
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Feels Like</span>
            <span className="parameter-value">
              ${Math.round(data.main.feels_like)}*C
            </span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2.06 m/s</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row flex justify-between">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurrentWeather;
