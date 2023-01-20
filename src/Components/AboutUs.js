import {
  CardMedia,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography
} from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
import {aboutData} from './Data'
// import './aboutus.css'
const arr = [1, 2, 3, 4, 5, 6, 7];
function AboutUs() {
  return (
    <>
      <Grid className="about ">
        <Grid container >
          <Grid item lg={12}>
            <CardMedia
              component={"img"}
              src="images/about/abc.jpg"
              alt="Dostea-img"
              style={{width:"100%",height:"70%" }}
            />
          </Grid>
        </Grid>
        {/* Story lines */}
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          mb={5}
        >
          <Grid item lg={5} md={5} sm={12} xs={12} m={2}>
            {/* text */}
            <Typography variant="h1" className="heading">
              Our Story
            </Typography>
            <Typography fontSize={'2rem'}>
              It is surat based startup started on 15 September 2020 by 3
              friends who are tea lover so they started there own cafe franchise
              of Gujarat first eatable biscuit cup cafe. In which u drink the
              tea /hot chocolate and the cup which in we serve is eatable{" "}
              <CoffeeIcon />. We have good ambiance successfully running
              business from last 2 year.
            </Typography>
          </Grid>
          <Grid item lg={6} md={5} sm={12} xs={12} m={2}>
            {/* images */}
            <ImageList variant="woven" cols={3} gap={8}>
              {arr.map((img, index) => {
                return (
                  <ImageListItem key={img}>
                    <img
                      src={`images/about/${img}.jpg`}
                      alt="content"
                      loading="lazy"
                    />
                  </ImageListItem>
                );
              })}
            </ImageList>
          </Grid>
        </Grid>
        <Grid
          className="crosel bgimage"
          
        >
          <Typography variant="h3" textAlign={'center'} gutterBottom mt={2} color={"#777"}>
            Why we Love Dostea ?
          </Typography>
          <Grid>
        <Carousel style={{width:'100%'}} infiniteLoop autoPlay centerMode showThumbs={false}>
          {aboutData.map((data, index) => {
            return (
              <>
                <Grid container direction={"row"} justifyContent={'center'}>
                  <Grid item lg={6}>
                    <img width="1rem" src={data.img} style={{boxShadow: "1rem 1rem 1.2rem black,-1rem -1rem 1.2rem black"}} alt="" srcset="" />
                  </Grid>
                  <Grid item lg={6} my={'auto'}>
                    <Typography variant="h3">{data.title}</Typography>
                    <Typography px={2} pb={3}>{data.Description}</Typography>
                    <Button variant="contained" color="error"><Typography variant="h5">View Menu</Typography></Button>
                  </Grid>
                </Grid>
              </>
            );
          })}
        </Carousel>
      </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
