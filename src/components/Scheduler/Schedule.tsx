import React, { useContext, useEffect } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  scheduleDataConstructor,
  schedulerDbDataExample,
} from "../../utilities/Schedule";
import { MyContext } from "../../context/Provider";

const currentDate = new Date().toISOString();

export const Schedule = () => {
  const scheduleData = scheduleDataConstructor(schedulerDbDataExample);

  return (
    <Scheduler data={scheduleData}>
      <ViewState currentDate={currentDate} />
      <WeekView startDayHour={6.5} endDayHour={22.5} />
      <Appointments />
    </Scheduler>
  );
};
