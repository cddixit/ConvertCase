import { AppBar, Button, Toolbar} from '@mui/material';
import React from 'react';

const SimpleTabs = ({text, setOutputText}) => {
  console.log(text)
  const handleChange = (val) => {
    if (val['type'] === 'sentence') {
      let temp = val['text']
      temp = temp.charAt(0).toUpperCase() + temp.slice(1).toLowerCase();
      setOutputText(temp)
      console.log("In sente", temp)
    }
    if (val['type'] === 'lower') {
      let temp = val['text']
      temp = temp.toLowerCase()
       setOutputText(temp)
      
      console.log("In lower", temp)
    }
    
    if (val['type'] === 'upper') {
      let temp = val['text']
      temp = temp.toUpperCase()
       setOutputText(temp)
      console.log("In upper", temp)

    }
    
    //  return str.replace(/\w\S*/g, function(txt) {
     // return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    //});

    // capitalized case == sentence case 
    
  }
  return (
    <div>
    <AppBar position="static">
    <Toolbar variant="regular" sx={{ justifyContent: "space-between" }}>
      <Button color="inherit" onClick={(e) => handleChange({text, type: 'sentence'})}>Sentence Case</Button>
      <Button color="inherit" onClick={(e) => handleChange({text, type: 'lower'})}>Lower Case</Button>
      <Button color="inherit" onClick={(e) => handleChange({text, type: 'upper'})}>Upper Case</Button>
      <Button color="inherit">Capitalized Case</Button>
      <Button color="inherit">Alternating Case</Button>
      <Button color="inherit">Title Case</Button>
      <Button color="inherit">Inverse Case</Button>
    </Toolbar>
  </AppBar>
  </div>
  )
}

export default SimpleTabs
