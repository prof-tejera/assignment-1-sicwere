import React from "react";
import styled from "styled-components";

import Stopwatch from "../components/timers/Stopwatch";
import Countdown from "../components/timers/Countdown";
import XY from "../components/timers/XY";
import Tabata from "../components/timers/Tabata";

const Timers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Timer = styled.div`
  border: 1px solid gray;
  padding: 20px;
  margin: 10px;
  font-size: 1.5rem;
`;

const TimerTitle = styled.div`
  font-family: Times New Roman, serif
`;

const TimersView = () => {
  const timers = [
    { title: "Stopwatch", C: <Stopwatch endTime="15" /> },
    { title: "Countdown", C: <Countdown startTime="15" /> },
    { title: "XY", C: <XY startTime="10" rounds="3" /> },
    { title: "Tabata", C: <Tabata workTime="15" restTime="10" rounds="2" /> },
  ];

  return (
    <Timers>
      {timers.map((timer) => (
        <Timer key={`timer-${timer.title}`}>
          <TimerTitle>{timer.title}</TimerTitle>
          {timer.C}
        </Timer>
      ))}
    </Timers>
  );
};

export default TimersView;
