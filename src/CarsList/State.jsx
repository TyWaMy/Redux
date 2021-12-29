import React, { useState } from "react";
import Title from "./SearchR";
// import Search from "./Search";



const Poisk = ({ addTag }) => {
  const items = [
    { id: 0, label: "BMW" },
    { id: 1, label: "Audi" },
    { id: 2, label: "Mercedes" },
    { id: 3, label: "FORD" },
    { id: 4, label: "Mazda" },
    { id: 5, label: "Volkswagen" },
   
  ];

  const [search, setSearch] = useState("");

  const handlerInputChanger = (searchValue) => setSearch(searchValue);

  const searchItem = () => {
    if (search.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.label.toLowerCase().indexOf(search.toLowerCase()) > -1;
    });
  };

  const carlist = searchItem().map((item) => {
    const onClick = () => addTag(item.label);

    return (
      <li key={item.id} onClick={onClick}>
        {item.label}
      </li>
    );
  });

  return (
    <div>
      <Title handlerInputChanger={handlerInputChanger} />
      <div>
        <ul>{carlist}</ul>
        <div></div>
      </div>
    </div>
  );
};

export default Poisk;
