import React, { FC } from "react";
import { DateBox } from "./UI/DateBox";

export const Calendar: FC<{
  month: number[];
  chosenDay: number,
  choseTheDay: (val: number) => void;
}> = ({ month, chosenDay, choseTheDay }) => {
  
  return (
    <div className="calendar__container">
      {month.map((day: number) => (
        <DateBox chosenDay={chosenDay} choseTheDay={choseTheDay} day={day} key={day}></DateBox>
      ))}
    </div>
  );
};
