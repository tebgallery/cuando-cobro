import React, { useState, useEffect } from 'react';
import Timer from "./components/Timer"

const App = () => {

  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const [timeRemainingAguinaldo, setTimeRemainingAguinaldo] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentMonth = currentDate.getMonth();
      const currentYear = currentDate.getFullYear();

      const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
      const timeDifference = lastDayOfMonth.getTime() - currentDate.getTime();
      
      const midYearDate = new Date(currentYear, 5, 15);
      const midDecemberDate = new Date(currentYear, 11, 15);

      const timeDifferenceToMidYear = midYearDate.getTime() - currentDate.getTime();
      const timeDifferenceToMidDecember = midDecemberDate.getTime() - currentDate.getTime();

      const isMidYearCloser = timeDifferenceToMidYear < timeDifferenceToMidDecember;
      const timeToMidYear = isMidYearCloser ? timeDifferenceToMidYear : timeDifferenceToMidDecember;

      if (lastDayOfMonth.getDay() === 0 ) {
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 2);
      }
      else if (lastDayOfMonth.getDay() === 6) {
        lastDayOfMonth.setDate(lastDayOfMonth.getDate() - 1);
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 12;
      const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      const days2 = Math.floor(timeToMidYear / (1000 * 60 * 60 * 24));
      const hours2 = Math.floor((timeToMidYear % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + 12;
      const minutes2 = Math.floor((timeToMidYear % (1000 * 60 * 60)) / (1000 * 60));
      const seconds2 = Math.floor((timeToMidYear % (1000 * 60)) / 1000);

      setTimeRemaining({ days, hours, minutes, seconds });
      setTimeRemainingAguinaldo({ days2, hours2, minutes2, seconds2 });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const { days, hours, minutes, seconds } = timeRemaining;
  const { days2, hours2, minutes2, seconds2 } = timeRemainingAguinaldo;


  return (
    <>
    <div className='w-full bg-background-arg bg-no-repeat bg-cover min-h-screen py-4 px-4'>
    <div className="absolute inset-0 bg-black opacity-45 h-full">
    </div>
        <h1 className="relative text-center text-3xl text-white mt-2 mb-10 z-10">Cuando Cobro ?</h1>
        <div className="relative m-auto w-10/12 p-2 z-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl">
          <div className="w-full h-full p-4 flex justify-evenly">
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{days}</h2>
              <p className="text-lg text-white">Días</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{hours}</h2>
              <p className="text-lg text-white">Horas</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{minutes}</h2>
              <p className="text-lg text-white">Minutos</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{seconds}</h2>
              <p className="text-lg text-white">Segundos</p>
            </div>
          </div>
        </div>
        <h1 className="relative text-center text-3xl text-white my-10 z-10">Cuando cobro el aguinaldo?</h1>
        <div className="relative m-auto w-10/12 p-2 z-10 bg-gradient-to-r from-pink-400 to-red-500 rounded-xl">
          <div className="w-full h-full p-4 flex justify-evenly">
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{days2}</h2>
              <p className="text-lg text-white">Días</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{hours2}</h2>
              <p className="text-lg text-white">Horas</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{minutes2}</h2>
              <p className="text-lg text-white">Minutos</p>
            </div>
            <div className="flex flex-col items-center">
              <h2 className="text-8xl text-center text-white mb-5">{seconds2}</h2>
              <p className="text-lg text-white">Segundos</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
