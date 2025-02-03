import React, { useState } from "react";
import { Tooltip } from "../../ToolComponents/Tooltip";
import { ProgressBar } from "../../ToolComponents/ProgressBar";
import { Icon } from "../../ToolComponents/Icon";
import { Spinners } from "../../ToolComponents/Spinners";
import { FileUploader } from "../../ToolComponents/FileUploader";
import { DragAndDrop } from "../../ToolComponents/DragAndDrop";
import { DatePicker } from "../../ToolComponents/DatePicker";
import { Button } from "../../UI/Button";

import "./ToolsComponents.scss";

export const ToolsComponents = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFileUpload = (file) => {
    console.log("Przesłano plik:", file);
  };

  const handleDrop = (file) => {
    console.log("Przeciągnięto i upuszczono plik:", file);
  };

  return (
    <div className="ToolsCopmonents">
      <h2>Tool Components</h2>

      <Tooltip text="To jest podpowiedź dla przycisku">
        <Button>Przycisk z podpowiedzią</Button>
      </Tooltip>
      <br />

      <ProgressBar progress={50} />

      <Spinners />

      <p>
        <Icon name="User" size={32} color="white" />
      </p>
      <p>
        <Icon name="Trash" size={32} color="white" />
      </p>

      <DatePicker onSelectDate={handleDateSelect} />
      <p>Wybrana data: {selectedDate}</p>

      <FileUploader onFileUpload={handleFileUpload} />
    <br />
    <br />
      <DragAndDrop onDrop={handleDrop}>
        <div>Przeciągnij i upuść plik tutaj</div>
      </DragAndDrop>
    </div>
  );
};
