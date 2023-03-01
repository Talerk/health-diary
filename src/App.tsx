import {
  BrowserRouter,
  Route,
  Routes,
  Link
} from "react-router-dom";
import { HealthCheck } from "./components/HealthCheck";
import React, { useState } from "react";
import Welcome from "./components/Welcome";

function App() {
  const [chosenDay, setChosenDay] = useState(new Date().getDate());

  function getDaysInCurrentMonth() {
    const date = new Date();

    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  }
  const month: number[] = [];
  const days = getDaysInCurrentMonth();
  for (let i = 0; i < days; i++) {
    month[i] = i + 1;
  }

  const choseTheDay = (newChosenDay: number) => {
    setChosenDay(newChosenDay);
  };

  return (
    <BrowserRouter>
      <header>
        <div className="menu__container">
          <Link className="menu" to="/">
            HOME
          </Link>
          <Link className="menu" to="/healthcheck/Page_1">
            HEALTH
          </Link>
        </div>
      </header>

      <Routes>
        <Route
          path="/"
          element={<Welcome />}
        />
        <Route
          path="/healthcheck/*"
          element={
            <HealthCheck
              month={month}
              chosenDay={chosenDay}
              choseTheDay={choseTheDay}
              daysInMonth={month.length}
            />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
