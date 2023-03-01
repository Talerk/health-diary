import React, { useState, FC, useEffect } from "react";
import { Link } from "react-router-dom";
import { dayStatement } from "../HealthCheck";

export const Page_5: FC<{chosenDay: number;
  thisMonth: dayStatement[];
  setThisMonth: (val: dayStatement[]) => void;
  setHealthState: (val: dayStatement[]) => void;
  healthState: dayStatement[];
  }> = ({chosenDay, thisMonth, setThisMonth, healthState, setHealthState
}) => {
  const [areaValue, setAreaValue] = useState('');

  return (
    <>
      <div>
        <h2 className="title">Your notes?</h2>
        <textarea
          className="input__area"
          value={areaValue}
          onChange={(e) => {
            setThisMonth(thisMonth.map(item =>
            item.dayOfMonth === chosenDay
              ? {...item, commentary: e.target.value} : item))
            setAreaValue(e.target.value);
            }}
        />
        <button
          onClick={() => {
            setHealthState(thisMonth);
            setAreaValue('');
          }}
          className="submit__btn"
        >
          Submit
        </button>
      </div>
      <div className="slider__container end">
        <Link className="buttons" to="/healthcheck/Page_4">
          Previous
        </Link>
      </div>
    </>
  );
};
