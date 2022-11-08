import { useState } from "react";

function App() {
  const [years, setYears] = useState(0);
  const [km, setKm] = useState(0);
  const [miles, setMiles] = useState(0);

  const handleOnClick = () => {
    setKm(lightYearsToKm(years));
    setMiles(milesToLightYears(years));
  };
  const lightYearsToKm = (num) => {
    let distance = 9000000000000;
    let total = num * distance;
    return total.toLocaleString("en-US", { minimumFractionDigits: 2 });
  };

  // const KmToLightYears = (num) => {
  //   let distance = 9000000000000;
  //   let total = num / distance;
  //   return total.toFixed(total.toString().split("-")[1]);
  // };
  const milesToLightYears = (num) => {
    let distance = 6000000000000;
    let total = num * distance;
    return total.toFixed(total.toString().split("-")[1]);
  };
  return (
    <div className="App bg-gray-800 flex h-screen">
      <div className="m-auto justify-center items-center bg-gray-700 px-6 py-4 rounded-md shadow-lg">
        <div>
          <div className="font-3xl text-red-400 font-bold">
            Light Years Converter
          </div>
          <div className="">
            <input
              className="px-4 my-4 rounded-full text-2xl font-thin text-white"
              placeholder="Enter Distance in Light Years"
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
          <div className="">
            <input
              className="px-4  rounded-full text-2xl font-thin text-white"
              placeholder={`...${km} km`}
              disabled
            />
          </div>
          <div className="">
            <input
              className="px-4 my-4 rounded-full text-2xl font-thin text-white"
              placeholder={`...${miles} Miles`}
              disabled
            />
          </div>
          <div className="m-auto justify-center flex">
            <button
              className="bg-green-600 rounded-lg shadow-md text-gray-200 font-bold px-4 py-2"
              onClick={() => handleOnClick()}
            >
              Calculate
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
