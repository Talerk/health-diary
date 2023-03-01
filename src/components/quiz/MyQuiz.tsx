import React, { FC, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Page_1 } from "./Page_1";
import { Page_2 } from "./Page_2";
import { Page_3 } from "./Page_3";
import { Page_4 } from "./Page_4";
import { Page_5 } from "./Page_5";
import "./quizStyle.css";
import { dayStatement } from "../HealthCheck";
import { currentDate } from "../UI/DateBox";

export const MyQuiz: FC<{
  thisMonth: dayStatement[];
  chosenDay: number;
  setThisMonth: (val: dayStatement[]) => void;
  healthState: dayStatement[];
  setHealthState: (val: dayStatement[]) => void;
}> = ({ thisMonth, setThisMonth, healthState, setHealthState, chosenDay }) => {
  return chosenDay < currentDate 
    ? (
    <div className="quiz__container">
      <div className="closed"></div>
    </div>
  ) : (
    <div className="quiz__container">
      <Routes>
        <Route
          path="Page_1"
          element={
            <Page_1
              chosenDay={chosenDay}
              thisMonth={thisMonth}
              setThisMonth={setThisMonth}
            />
          }
        ></Route>
        <Route
          path="Page_2"
          element={
            <Page_2
              chosenDay={chosenDay}
              thisMonth={thisMonth}
              setThisMonth={setThisMonth}
            />
          }
        ></Route>
        <Route
          path="Page_3"
          element={
            <Page_3
              chosenDay={chosenDay}
              thisMonth={thisMonth}
              setThisMonth={setThisMonth}
            />
          }
        ></Route>
        <Route
          path="Page_4"
          element={
            <Page_4
              chosenDay={chosenDay}
              thisMonth={thisMonth}
              setThisMonth={setThisMonth}
            />
          }
        ></Route>
        <Route
          path="Page_5"
          element={
            <Page_5
              chosenDay={chosenDay}
              thisMonth={thisMonth}
              setThisMonth={setThisMonth}
              healthState={healthState}
              setHealthState={setHealthState}
            />
          }
        ></Route>
      </Routes>
    </div>
  );
};
