import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../../context/Provider";
import { Button, Row } from "react-bootstrap";
import { Schedule } from "../Scheduler/Schedule";
import "./Signature.css";
import DropdownComponent from "../Dropdown/Dropdown";
import { findSchedule, getSuscribeOptions } from "../../utilities/suscribe";
import {
  SchedulerData,
  scheduleDataConstructor,
} from "../../utilities/Schedule";
import { SelectSchedule } from "../Scheduler/SelectSchedule";

export const Suscribe = () => {
  const { context } = useContext(MyContext);
  const { signature } = context;
  const options = getSuscribeOptions(signature.availableSchedules);

  const [scheduleData, setScheduleData] = useState<Array<SchedulerData>>([]);

  const handleSelectOption = (selectedOption: string) => {
    console.log("hola");
    const data = findSchedule(signature.availableSchedules, selectedOption);
    setScheduleData(scheduleDataConstructor(data!));
  };

  return (
    <body>
      <Row className="mb-2">
        <h3>{signature.name}</h3>
      </Row>
      <Row className="schedule mb-5">
        <SelectSchedule scheduleData={scheduleData} />
      </Row>
      <Row>
        <DropdownComponent
          options={options}
          onSelectOption={handleSelectOption}
        />
      </Row>
      <Row className="d-flex justify-content-end mt-4">
        <Button className="submit-btn ps-3 pe-3">Matricular</Button>
      </Row>
    </body>
  );
};
