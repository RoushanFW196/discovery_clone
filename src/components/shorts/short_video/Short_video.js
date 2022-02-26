import React from 'react';
import firebase from "../../../Firebase.js";
import { useEffect, useState } from "react";

function Short_video() {
  const ref = firebase.firestore().collection("shorts");
  console.log("ref:", ref);

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  function getData() {
    ref.onSnapshot((e) => {
      const items = [];
      e.forEach((doc) => {
        items.push(doc.data());
      });
      setData(items);
      setLoader(false);
    });
  }

  useEffect(() => {
    getData();
    // console.log(data);
  }, []);
  return (
    <div>
      {loader === false &&  
        data.map((dev) => {
          return (
            <div key={dev.id}>
              <iframe width="760" height="415" src={dev.short_link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay;  encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          );
        })}
    </div>
  );
}

export default Short_video;
