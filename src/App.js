import { Button } from "@mui/material";
import { Chart } from "react-google-charts";


export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7], // CSS-style declaration
];

export const options = {
  title: "My Daily Activities",
  pieHole: 0.4,
  is3D: false,
};

function App() {
  return (
    <div>
 <Button variant="text">Text</Button>
<Button variant="contained">Contained</Button>
<Button variant="outlined">Outlined</Button>
<Chart
      chartType="PieChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />

    </div>
  );
}

export default App;
