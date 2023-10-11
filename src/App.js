import "./App.css";
import React from "react";
import axios from "axios";

function App() {
  const [datas, setData] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/region")
      .then((response) => setData(response.data));
  }, []);

  return (
    <div className="App">
      <header className="App-header"></header>

      {datas &&
        datas.map((data) => (
          <div key={data.id}>
            <p>{data.name}</p>
            <p>{data.createdAt}</p>
          </div>
        ))}
    </div>
  );
}

export default App;
