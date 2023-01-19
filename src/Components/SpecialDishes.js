import { CardMedia, Grid, Typography,Button, Card } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import { specialdishes } from "./Data";
import { useNavigate } from "react-router-dom";
function SpecialDishes() {
  const navigate=useNavigate()
  return (
    <>
      <Typography sx={{ textAlign: "center",paddingBottom:'1.875rem',margin:'1.2rem 0 0 0 ' }} variant="h2">
       Our Special Dishes
      </Typography>
      <Grid
        mx={"auto"}
        pb={'0.1875rem'}
        container
        direction="row"
        justifyContent={'center'}
      >
        <Carousel centerMode dynamicHeight infiniteLoop autoPlay showArrows={false} showThumbs={false}>
        {specialdishes.map((dish,index)=>{
          return(
          <Grid container>
            <Grid item xl={8} lg={8} md={12} sm={12} xs={12} >
              <Typography style={{paddingTop:'6.25rem'}} textAlign={'center'} variant="h1">{dish.heading}</Typography>
              <Typography gutterBottom pl={'0.625rem'} fontSize={'1.2rem'} pb={'1rem'}>
              {dish.content}
              </Typography>
              <Button size="large" color="error" onClick={()=>{navigate('/menu')}} variant="contained">View Menu</Button>
            </Grid>
            <Grid item xl={4} lg={4} md={12} sm={12} xs={12}>
            <Card>
                <CardMedia width={'100%'} component={'img'} src={dish.img}/>
            </Card>
            </Grid>
          </Grid>
        )})}

        </Carousel>
      </Grid>
    </>
  );
}

export default SpecialDishes;
