import { CardMedia, Grid, Typography, Button, Card } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { specialdishes } from "./Data";
import { useNavigate } from "react-router-dom";
// import "./slider.css";

function SpecialDishes() {
  const navigate = useNavigate();
  return (
    <>
      <Typography
        sx={{
          textAlign: "center",
          paddingBottom: "1.875rem",
          margin: "1.2rem 0 0 0 ",
        }}
        variant="h2"
      >
        Our Special Dishes
      </Typography>
      <Grid>
        <Carousel infiniteLoop autoPlay centerMode showThumbs={false}>
          {specialdishes.map((dish, index) => {
            return (
              <>
                <Grid key={index} container direction={"row"} justifyContent={'center'}>
                  <Grid item lg={6}>
                    <img width="100%" src={dish.img} style={{boxShadow: "1rem 1rem 1.2rem black,-1rem -1rem 1.2rem #7B3F00"}} alt="" srcset="" />
                  </Grid>
                  <Grid item lg={6} my={'auto'}>
                    <Typography variant="h2">{dish.heading}</Typography>
                    <Typography px={2} pb={3} typography='h6'>{dish.content}</Typography>
                    <Button variant="contained" onClick={()=>{navigate('/menu')}} color="error" style={{boxShadow: "0.625rem 0.625rem 0.625rem black,-0.625rem -0.625rem 0.625rem #7B3F00" }}><Typography variant="h5">View Menu</Typography></Button>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Carousel>
      </Grid>
    </>
  );
}

export default SpecialDishes;
