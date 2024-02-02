import React from "react";
import CircleIcon from "@mui/icons-material/Circle";

interface QuestionFieldIconProps {
  field: number;
}

export default function QuestionFieldIcon(props: QuestionFieldIconProps) {
  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <CircleIcon fontSize="large" sx={{ color: "#FF6F3A" }} />
      <div
        style={{
          position: "absolute",
          top: "44%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontSize: "1.15em",
          color: "black",
        }}>
        {props.field}
      </div>
    </div>
  );
}
