import {
  faArrowDownUpAcrossLine,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Dropdown } from "react-bootstrap";
import "./Dropdown.css";

interface DropdownComponentProps {
  options: string[];
  onSelectOption: (selectedOption: string) => void;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({
  options,
  onSelectOption,
}) => {
  return (
    <Dropdown onSelect={(selectedKey) => onSelectOption(selectedKey as string)}>
      <Dropdown.Toggle className="drop-button" id="dropdown-basic">
        Selecciona una opción{" "}
        <FontAwesomeIcon className="ms-2" icon={faCaretDown} />
      </Dropdown.Toggle>
      <Dropdown.Menu>
        {options.map((option, index) => (
          <Dropdown.Item key={index} eventKey={option}>
            <small>{option}</small>
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
