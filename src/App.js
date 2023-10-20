import React from "react";
import ColorPicker from "./components/ColorPicker";

const App = () => {
  const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FFFF33",
    "#FF33FF",
    "#33FFFF",
    "#FF6633",
    "#33FF66",
    "#6633FF",
    "#FF3366",
    "#66FF33",
    "#3366FF",
    "#FF9966",
    "#66FF99",
    "#9966FF",
    "#6699FF",
  ];

  return (
    <div className="app">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
