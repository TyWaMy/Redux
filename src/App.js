import React from "react";
import "./App.css";
import Clock from "./CarsList/Clock";
import Counter from "./CarsList/counter";
import List from "./CarsList/SECYndu";
import Poisk from "./CarsList/State";

function App() {
  const [tags, _setTags] = React.useState([]);

  const addTag = (car) => {
    _setTags([{ name: car, id: new Date().getTime() }, ...tags]);
  };
  const removeAllTags = (id) => {
    _setTags(tags.filter(car=>car.id!==id));
  };

 
  return (
    <div className="App">
      <Clock offset="3600" />
      <br/>
      <Counter />
      <br />
      <List />
      <br /> 
      <Poisk addTag={addTag} />
      <br />
      <div className="col-sm-4 mb-4">
        <img src={""} alt={""} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">
            {tags.map((car) => (
              <div className="cars">
                <button type="button" className="close" onClick={() => removeAllTags(car.id)}>
                  ×
                </button>
                <p>{car.name}</p>
              </div>
            ))}
          </h5>
        </div>
      </div>
    </div>
  );
}

export default App;
