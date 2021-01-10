import React from "react";
import { useState } from "react";
import Grid from "@material-ui/core/Grid";
import data from "./dictionary.json";
import "./styles.css";
const numWords = 326;
export default function App() {
  const [num, setCount] = useState(0);
  return (
    <div className="App">
      <Grid
        container
        spacing={0}
        direction="column"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12}>
          <p />
          <div className="header">Words</div>
          <div className="card">
            <h1 id="word"> {data.object[num].word} </h1>
            <br />
            <h3 id="meaning"> Meaning : {data.object[num].meaning} </h3>
          </div>
          <p />
          {"     "}
          <Grid item xs={12}>
            <button
              className="button"
              onClick={() => {
                var r = Math.floor(Math.random() * numWords);
                console.log(r);
                setCount(r);
              }}
            >
              NEXT
            </button>
          </Grid>
        </Grid>
      </Grid>
      <div className="bottom">Sushmey (C) 2021</div>
    </div>
  );
}
