import { Scheduler } from "@devexpress/dx-react-scheduler";

export interface SchedulerData {
    startDate: string,
    endDate: string,
    title: string
}

export interface SchedulePerDay {
    from: string;
    to: string;
    day: number;
    groupId: string;
  }

export const getCurrentStartWeekDate = () => {
  const hoy = new Date(); 
    
  hoy.setDate(hoy.getDate() - hoy.getDay()); 
  hoy.setHours(0, 0, 0, 0); 

  return hoy;
};


export const scheduleDataConstructor = (scheduleDbData: SchedulePerDay[]) : SchedulerData[] => {
  const currentStartWeekDate = getCurrentStartWeekDate();
  
  
  return scheduleDbData.map((schedulePerDay)=>{
    
    const startDate = new Date(currentStartWeekDate);
    startDate.setDate(startDate.getDate() + schedulePerDay.day);
    const endDate = new Date(startDate);
    const from = schedulePerDay.from.split(":");
    const to = schedulePerDay.to.split(":");

    startDate.setHours(parseInt(from[0]));
    endDate.setHours(parseInt(to[0]));
    return {
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(),
      title: schedulePerDay.groupId
    };        
  });
};

export const schedulerDbDataExample : SchedulePerDay[]= [
  {
    day: 1,
    from: "08:00",
    to: "10:00",
    groupId: "15"
  },
  {
    day: 3,
    from: "08:00",
    to: "10:00",
    groupId: "15"
  },
  {
    day: 4,
    from: "15:00",
    to: "17:00",
    groupId: "17"
  }
];
