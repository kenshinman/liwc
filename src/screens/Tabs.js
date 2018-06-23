import React from "react";
import ScheduleView from "./Schedule";

const Tab1 = () => {
  return <ScheduleView day={0} />;
};
const Tab2 = () => {
  return <ScheduleView day={1} />;
};
const Tab3 = () => {
  return <ScheduleView day={2} />;
};

export { Tab1, Tab2, Tab3 };
