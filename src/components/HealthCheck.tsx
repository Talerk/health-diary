import React, { FC, useState, useEffect } from "react";
import { Calendar } from "./Calendar";
import { MyQuiz } from "./quiz/MyQuiz";
import { StateOutput } from "./quiz/StateOutput";

export type dayStatement = {
  dayOfMonth: number;
  temp: number;
  wakeUpTime: string;
  hours: number;
  dream: string;
  commentary: string;
};

export const HealthCheck: FC<{
  month: number[];
  chosenDay: number;
  daysInMonth: number;
  choseTheDay: (val: number) => void;
}> = ({ month, chosenDay, choseTheDay, daysInMonth }) => {
  const currentMonth: dayStatement[] = [];
  for (let i = 0; i < daysInMonth; i++) {
    currentMonth.push({
      dayOfMonth: i + 1,
      temp: 0,
      wakeUpTime: "00:00",
      hours: 0,
      dream: "",
      commentary: "",
    });
  }

  const [thisMonth, setThisMonth] = useState<dayStatement[]>(currentMonth);
  const [healthState, setHealthState] = useState<dayStatement[]>([]);

  useEffect(() => {
    const date = new Date();
    const actualDate = `${date.getMonth() + 1}` + ` ${date.getFullYear()}`;   
    const lastVisitDate = localStorage.getItem('actualDate');

    if (lastVisitDate === null || lastVisitDate !== actualDate) {   // checking is this a first visit or first visit in current month
      localStorage.clear();
      localStorage.setItem('actualDate', actualDate);
    }
    const data = localStorage.getItem("indicators") || currentMonth;
    if (typeof data === "string") {
      setHealthState(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("indicators", JSON.stringify(healthState));
  }, [healthState]);

  return (
    <div>
      <Calendar month={month} chosenDay={chosenDay} choseTheDay={choseTheDay} />
      <div className="background__container">
        <div className="container">
          <MyQuiz
            chosenDay={chosenDay}
            thisMonth={thisMonth}
            setThisMonth={setThisMonth}
            healthState={healthState}
            setHealthState={setHealthState}
          />
        </div>
        <div className="container right__container">
          <StateOutput chosenDay={chosenDay} healthState={healthState} />
        </div>
      </div>
    </div>
  );
};
