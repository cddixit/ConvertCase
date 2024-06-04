import React from 'react'
import { Paper, Grid, Input } from "@mui/material";
const InputOutput = ({text, setText, outputText, setOutputText, classes}) => {
  return (
    <div><Grid container spacing={3}>
    <Grid item xs>
      <Paper elevation={12} 
        variant="outlined"
        className={classes.paper}
        sx={{ color: "white", backgroundColor: "#010048"  }}
      >
        <Input
          required
          id="Input text"
          placeholder="Type or paste your content here"
          sx={{ color: "white", backgroundColor: "#010048",  alignContent:"center" }}
          disableUnderline
          multiline={true}
          fullWidth={true}
          onChange={(e) => {setText(e.target.value); setOutputText("")}}
        />
      </Paper>
    </Grid>
    <Grid item xs>
      <Paper
        variant="outlined"
        className={classes.paper}
        sx={{ color: "white", backgroundColor: "#010048" }}
      >
        {outputText}
      </Paper>
    </Grid>
  </Grid></div>
  )
}

export default InputOutput