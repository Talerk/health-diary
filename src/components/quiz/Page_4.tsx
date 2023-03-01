import React, {FC, useState} from "react";
import { Link } from "react-router-dom";
import { dayStatement } from "../HealthCheck";

export const Page_4: FC<{
  chosenDay: number;
  thisMonth: dayStatement[];
  setThisMonth: (val: dayStatement[]) => void;
}> = ({ chosenDay, thisMonth, setThisMonth }) => {

  const [inputValue, setInputValue] = useState('');
  return (
    <>
      <div>
        <h2 className="title">What a dream did you have last night?</h2>
        <textarea className="input__area" onChange={(e) => setInputValue(e.target.value) } />
      </div>
      <div className="slider__container">
        <Link className="buttons" to="/healthcheck/Page_3">
          Previous
        </Link>

        <Link onClick={e =>
              setThisMonth(
                thisMonth.map(item =>
                  item.dayOfMonth === chosenDay
                    ? {...item, dream: inputValue} : item))} className="buttons" to="/healthcheck/Page_5">
          Next
        </Link> 
      </div>
    </>
  );
};
