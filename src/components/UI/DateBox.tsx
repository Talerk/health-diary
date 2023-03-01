import React, { FC } from "react";
import { Link } from "react-router-dom";
import classes from "./DateBox.module.css";

const grayBox = classes.date__box + " " + classes.gray__box;
const orangeBox = classes.date__box + " " + classes.orange__box;
export const currentDate = new Date().getDate();

// const handleClick = (day) => {
//   choseTheDay(day
// }

export const DateBox: FC<{
  day: number;
  chosenDay: number;
  choseTheDay: (val: number) => void;
}> = ({ day, chosenDay, choseTheDay }) => {
  return (

    <Link
      to="/healthcheck/Page_1"
      onClick={() => choseTheDay(day)}
      className={
        day <= currentDate
          ? day === chosenDay
            ? orangeBox
            : classes.date__box
          : grayBox
      }
    >
      {day}
    </Link>
  );
};
