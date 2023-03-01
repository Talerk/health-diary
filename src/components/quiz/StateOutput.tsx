import React, { FC } from "react";
import { dayStatement } from "../HealthCheck";

export const StateOutput: FC<{
  chosenDay: number;
  healthState: dayStatement[];
}> = ({ chosenDay, healthState }) => {
  if (
    healthState.length !== 0 &&
    healthState[chosenDay - 1].commentary !== ""
  ) {
    return (
      <div>
        <ol>
          <li>
            Temperature:
            <p>{healthState[chosenDay - 1].temp}</p>
          </li>
          <li>
            Wake up time:
            <p>{healthState[chosenDay - 1].wakeUpTime}</p>
          </li>
          <li>
            Sleeping hours:
            <p>{healthState[chosenDay - 1].hours}</p>
          </li>
          <li>
            Your dream:
            <p>{healthState[chosenDay - 1].dream}</p>
          </li>
          <li className="list">
            Notes:
            <p>{healthState[chosenDay - 1].commentary}</p>
          </li>
        </ol>
      </div>
    );
  }
  return (
    <div>
      <h1 className="text">Your daily health state</h1>
      <p className="text">You didn't tell us about your state this day</p>
    </div>
  );
};
