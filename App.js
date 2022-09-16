import React from "react";

import ProductTable from "./Components/Table";
import Title from "./Components/Title.jsx";

const objects = [
  { id: 1, name: "Ahmed", age: 25, city: "Lahore" },
  { id: 2, name: "Ali", age: 23, city: "Lahore" },
  { id: 3, name: "Leo", age: 20, city: "Sharjah" },
  { id: 4, name: "Asif", age: 31, city: "London" },
];
const App = () => {
  return (
    <div>
      <Title />
      <ProductTable />
    </div>
  );
};

export default App;
