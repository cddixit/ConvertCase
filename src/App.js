import "./App.css";
import PhoneNumber from "./Components/PhoneNumber";
import SimpleTabs from "./Components/SimpleTabs";

import { makeStyles } from "@material-ui/core/styles";
import { useState } from "react";
import InputOutput from "./Components/InputOutput";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    // padding: theme.spacing(2),
    textAlign: "center",
    // margin: "15px 15px 5px 10px",
    margin: "25px auto",
    width: "90%",
    height: "30vh",
    alignContent: "center"
  },
}));

function App() {
  const classes = useStyles();

  const [text, setText] = useState("");
  const [outputText, setOutputText] = useState("")

  return (
    <div className={classes.root}>
      <SimpleTabs text={text}  setOutputText={setOutputText} />
      <InputOutput text={text} setText={setText} outputText={outputText} setOutputText={setOutputText} classes={classes} />

      {/* <PhoneNumber /> 
         {/* <SimpleTabs /> */}
    </div>
  );
}

export default App;
