import { CardMedia, Grid, Typography, Card } from "@mui/material";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const arr = [1, 2, 3, 4, 5, 6, 7];
function Event() {
  return (
    <>
      <Typography variant="h1" textAlign={"center"}>
        Events
      </Typography>
      <Grid container>
        <Carousel
          dynamicHeight={false}
          emulateTouch
          transitionTime={1000}
          interval={2000}
          infiniteLoop
          autoPlay
          centerMode
          // centerSlidePercentage={'100%'}
          showThumbs={false}
        >
          {arr.map((value, index) => {
            return (
              <>
                <Grid key={index}>
                  <img
                    height={"700rem"}
                    src={`../images/event/slide-${value}.jpg`}
                    alt=""
                    srcset=""
                  />
                </Grid>
              </>
            );
          })}
        </Carousel>
      </Grid>
    </>
  );
}

export default Event;
