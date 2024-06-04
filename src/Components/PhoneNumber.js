import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Slider from "./PhoneSlider";
import { Grid, Input } from "@mui/material";

function PhoneNumber() {
  const [phone, setPhone] = useState(1111111111);
  const [name, setName] = useState("")
  return (
    <>
    {/* Registration form */}
      <Grid
        container
        spacing={3}
        direction="row"
        justify="flex-start"
        alignItems="flex-start"
      >
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 25, fontWeight: 600 }}
                color="black"
                gutterBottom
              >
                First Name
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Name : {name}
              </Typography>
               <Input> </Input>
            </CardContent>
            <CardActions>
              <Button size="small">Submit</Button>
            </CardActions>
          </Card>
        </Grid>
      
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 25, fontWeight: 600 }}
                color="black"
                gutterBottom
              >
                Last Name
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Name : {name}
              </Typography>
               <Input> </Input>
            </CardContent>
            <CardActions>
              <Button size="small">Submit</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 25, fontWeight: 600 }}
                color="black"
                gutterBottom
              >
                Phone number selector
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Phone: (+42) {phone}
              </Typography>
              <Slider phone={phone} setPhone={setPhone} />
            </CardContent>
            <CardActions>
              <Button size="small">Submit</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default PhoneNumber;
