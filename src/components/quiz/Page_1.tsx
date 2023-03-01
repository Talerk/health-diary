import React, { FC, useState } from "react";
import { Link } from "react-router-dom";
import { dayStatement } from "../HealthCheck";

export const Page_1: FC<{
  chosenDay: number;
  thisMonth: dayStatement[];
  setThisMonth: (val: dayStatement[]) => void;
}> = ({ chosenDay, thisMonth, setThisMonth }) => {
  const options = {
    first: [36, 37, 38, 39, 40, 41, 42],
    second: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
  };

  const [selectedTemp, setSelectedTemp] = useState({
    preDot: "36",
    afterDot: "6",
  });

  return (
    <>
      <div>
        <h2 className="title">Your temperature today</h2>
        <select
          onChange={e =>
            setSelectedTemp({ ...selectedTemp, preDot: e.target.value })
          }
          name="temp1"
          defaultValue={selectedTemp.preDot}
          id="temp1"
        >
          {options.first.map(el => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
        <select
          onChange={e =>
            setSelectedTemp({ ...selectedTemp, afterDot: e.target.value })
          }
          name="temp2"
          defaultValue={selectedTemp.afterDot}
          id="temp2"
        >
          {options.second.map(el => (
            <option value={el} key={el}>
              {el}
            </option>
          ))}
        </select>
      </div>
      <div className="slider__container">
        <Link onClick={() =>
              setThisMonth(
                thisMonth.map(item =>
                  item.dayOfMonth === chosenDay
                    ? {
                        ...item,
                        temp: +(
                          selectedTemp.preDot +
                          "." +
                          selectedTemp.afterDot
                        ),
                      }
                    : item
                )
              )
            } className="buttons start" to="/healthcheck/Page_2">
            Next
        </Link>
      </div>
    </>
  );
};
