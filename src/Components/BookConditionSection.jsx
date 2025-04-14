import { BookDatas } from "../Api/BookDatas";
import Card from "./Card";
import { useEffect, useState } from "react";

function BookConditionSection() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      const data = await BookDatas();
      const arrData = Array.isArray(data) ? data : [data];
      setBook(arrData);
      console.log("array data: ",arrData);
      setLoading(false);
    };
    getData();
  }, []); 

  return (
    <div className="w-full h-full bg-slate-100">
      <img src="" alt="" />
      <h1>Exchange Condition</h1>
      <h3>Either one of these</h3>
      {loading ? <p>Loading books...</p> : <Card data={book} />}
    </div>
  );
}

export default BookConditionSection;
