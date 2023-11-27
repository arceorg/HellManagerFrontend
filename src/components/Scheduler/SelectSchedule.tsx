import React, { useContext, useEffect } from "react";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import {
  SchedulerData,
  scheduleDataConstructor,
  schedulerDbDataExample,
} from "../../utilities/Schedule";
import { MyContext } from "../../context/Provider";

const currentDate = new Date().toISOString();

export interface SelectedScheduleProps {
  scheduleData: SchedulerData[];
}

export const SelectSchedule = (props: SelectedScheduleProps) => {
  const { scheduleData } = props;

  return (
    <Scheduler data={scheduleData}>
      <ViewState currentDate={currentDate} />
      <WeekView startDayHour={6.5} endDayHour={22.5} />
      <Appointments />
    </Scheduler>
  );
};
