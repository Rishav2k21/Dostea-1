import { CardMedia, Grid, Typography,Card  } from "@mui/material";

function Event() {
  return (
    <>
    <Typography variant="h2" gutterBottom sx={{ textAlign: "center",marginTop:'15px' }}>Coming Event</Typography>
      <Grid container minHeight={'100vh'} justifyContent={'center'}>
        <Grid item xl={6} lg={6} md={6}>
          
        </Grid>
        <Grid item xl={6} lg={6} md={6}>
          <Typography sx={{fontSize:'20px'}}>
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nisi illum perspiciatis quaerat odio vero, tenetur voluptate
            dignissimos, ipsum ex delectus provident laborum ad architecto in
            excepturi aliquam nobis quis officia! Nesciunt, eos corrupti!
            Ducimus numquam itaque pariatur laborum placeat unde est doloremque
            consectetur quis autem! Amet veniam aspernatur sed?{" "}
          </Typography>
        </Grid>
      </Grid>
    </>
  );
}

export default Event;
