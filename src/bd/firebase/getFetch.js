import { useEffect, useState } from "react";
import getFirestore from "./firebase";

const GetFetch = () => {
  const [itemBd, setItemBd] = useState([]);

  /* useEffect(() => {
    const db = getFirestore();
    const dbQuery = db.collection("productos");
    dbQuery
      .get()
      .then((data) => {
        if (data.size === 0) {
          console.log("error 400: no se han cargado datos de la bd");
        } else {
          setItemBd(
            data.docs.map((item) => ({
              idf: item.id,
              ...item.data(),
            }))
          );
        }
      })
      .catch(console.warn("error 400: fallo de carga de bd firebase"))
      .finally(itemBd);
    console.log("itemBd", itemBd);
  }, []); */
};
export default GetFetch;
