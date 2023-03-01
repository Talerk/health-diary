import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { dayStatement } from "../HealthCheck";

export const Page_2:  FC<{
  chosenDay: number;
  thisMonth: dayStatement[];
  setThisMonth: (val: dayStatement[]) => void;
}> = ({ chosenDay, thisMonth, setThisMonth }) => {

  const [inputValue, setInputValue] = useState('07:00');
  return (
    <>
      <div>
        <h2 className="title">You woke up today at</h2>
        <input style={{width: 80}} onChange={(e) => setInputValue(e.target.value)} type='time' />
      </div>
      <div className="slider__container">
          <Link className="buttons" to="/healthcheck/Page_1">
            Previous
          </Link>

          <Link onClick={e =>
              setThisMonth(
                thisMonth.map(item =>
                  item.dayOfMonth === chosenDay
                    ? {...item, wakeUpTime: inputValue} : item))} className="buttons" to="/healthcheck/Page_3">
            Next
          </Link>
      </div>
    </>
  );
};
