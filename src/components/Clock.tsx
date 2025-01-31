import React from "react";
import useClock from "../hooks/useClock";

type Props = {
  //  TODO
  label: string;
  hours: number;
  minutes: number;
  seconds: number;
};

const Clock = (props: Props) => {
  const { hours, minutes, seconds } = useClock();

  return (
    <div data-testid="clock">
      <h4 data-testid="clock-label">
        {/* Label */}
        {props.label}
      </h4>
      <span data-testid="clock-hours">
        {/* Hours */}
        {hours}
      </span>
      :
      <span data-testid="clock-minutes">
        {/* Minutes */}
        {minutes}
      </span>
      :
      <span data-testid="clock-seconds">
        {/* Seconds */}
        {seconds}
      </span>
    </div>
  );
};

export default Clock;
