import * as React from "react";
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

const currentDate = new Date().toISOString();

export const Schedule = () => {
  const scheduleData = scheduleDataConstructor(schedulerDbDataExample);
  console.log(scheduleData);
  return (
    <Scheduler data={scheduleData}>
      <ViewState currentDate={currentDate} />
      <WeekView startDayHour={7} endDayHour={22} />
      <Appointments />
    </Scheduler>
  );
};
