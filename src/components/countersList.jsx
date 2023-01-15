import React, {useState} from "react";
import Counter from "./counter";

const CountersList = ()=> {
    const [counters, setCounters] = useState([
      { id: 0, value: 0, name: "Ненужная вещь " },
      { id: 1, value: 1, name: "Ложка" },
      { id: 2, value: 2, name: "Вилка" },
      { id: 3, value: 2, name: "Тарелка" },
      { id: 4, value: 4, name: "минималиста"},
    ]);
    const handleDelete=(id)=>{
        const newCounters = counters.filter((c)=>c.id !==id);
        setCounters(newCounters);
    };
return (
  <>
    {counters.map((count) => <Counter key={count.id} onDelete={handleDelete} {...count} />)}
  </>
);
};
export default CountersList;