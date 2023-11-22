import { SchedulePerDay } from "./Schedule";

export const getSuscribeOptions = (availableSchedules: SchedulePerDay[][]):string[] => {
  return availableSchedules.map((availableSchedule) => {
    return `grupo ${availableSchedule[0].groupId}`;
  });
};

export const findSchedule = (availableSchedules: SchedulePerDay[][], group: string) => {
  const id = group.split(" ")[1];
  return availableSchedules.find((availableSchedule)=>{
    return availableSchedule[0].groupId === id;
  });
};