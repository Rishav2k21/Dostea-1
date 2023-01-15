import {
  CardMedia,
  Divider,
  Button,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {aboutData} from './Data'
const arr = [1, 2, 3, 4, 5, 6, 7];
function AboutUs() {
  return (
    <>
      <Grid className="about ">
        <Grid container mt={10}>
          <Grid item lg={12}>
            <CardMedia
              component={"img"}
              src="images/about/0.jpg"
              alt="Dostea-img"
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
            <Typography>
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
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Typography variant="h4" gutterBottom mt={2} color={"#777"}>
            Why we Love Dostea ?
          </Typography>
          <Grid
              mx={"auto"}
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              lg={8}
            >
          <Carousel infiniteLoop autoPlay showArrows={false} showThumbs={false}>
            {aboutData.map((item,index)=>{
              return <> 
              <Grid container>
              <Grid item lg={6}  md={6} sm={12} xs={12}>
                <img
                  width={500}
                  height={500}
                  style={{ borderRadius: "100%" }}
                  src={item.img}
                  alt="hello"
                />
              </Grid>
              <Grid item my={'auto'} lg={6} md={6} sm={12} xs={12}>
                <h1>{item.title}</h1>
                <p>{item.Description}</p>
                <Typography mt={2} fontWeight={"bold"}>{item.menu ?<Button variant="contained" color="error">Menu</Button>:<Button variant="contained" color="success">Visit</Button> }</Typography>
              </Grid>
              </Grid>
              </>
            })}
          </Carousel>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default AboutUs;
