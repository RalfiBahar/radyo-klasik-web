import React from "react";
import Slider from "@mui/material/Slider";

interface ProgressBarProps {
  progress: number;
  duration: number;
  onSliderChange: (event: Event, value: number | number[]) => void;
}

const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  duration,
  onSliderChange,
}) => {
  return (
    <div className="flex flex-col items-center w-3/4 mt-4">
      {/* Slider */}
      <Slider
        value={progress}
        max={duration}
        onChange={onSliderChange}
        sx={{
          color: "white",
          "& .MuiSlider-thumb": {
            width: 12,
            height: 12,
            bgcolor: "white",
          },
          "& .MuiSlider-track": {
            bgcolor: "white",
          },
          "& .MuiSlider-rail": {
            bgcolor: "black",
          },
        }}
      />

      {/* Time Display */}
      <div className="flex justify-between w-full text-white text-base mt-4">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
