import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { dayStatement } from "../HealthCheck";

export const Page_3:  FC<{
  chosenDay: number;
  thisMonth: dayStatement[];
  setThisMonth: (val: dayStatement[]) => void;
}> = ({ chosenDay, thisMonth, setThisMonth }) => {

  const [inputValue, setInputValue] = useState(7)
  return (
    <>
      <div>
        <h2 className="title">How many hours did you sleep</h2>
        <input defaultValue={inputValue} style={{width: 80}} onChange={(e) => setInputValue(+e.target.value)} type="number" />
      </div>
      <div className="slider__container">
        <Link className="buttons" to="/healthcheck/Page_2">
          Previous
        </Link>

        <Link onClick={e =>
              setThisMonth(
                thisMonth.map(item =>
                  item.dayOfMonth === chosenDay
                    ? {...item, hours: inputValue} : item))} className="buttons" to="/healthcheck/Page_4">
          Next
        </Link> 
      </div>
    </>
  );
};
