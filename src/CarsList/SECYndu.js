import React,{useState, useEffect} from "react";


const List = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter => counter + 1);
    }, 1000);



    return () => {
      clearInterval(interval);
    };
  }, []);



  return <h1>{counter}</h1>;
};
  


export default List;
