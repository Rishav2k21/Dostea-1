import { Opacity } from "@mui/icons-material";
import {
  Button,
  ButtonGroup,
  Grid,
  Typography,
} from "@mui/material";
import Event from "./Event";
import Review from "./Review";
import SpecialDishes from "./SpecialDishes";
function Home() {
  return (
    <>
      <section className="">
        <SpecialDishes />
        <Grid container pb={"6.25rem"} direction={"row"} justifyContent="center">
          <Grid item lg={6}>
            <img
              style={{
                backgroundColor: "transparent",
                boxShadow: "1rem 1rem 1.2rem black,-1rem -1rem 1.2rem #7B3F00",
                marginLeft: "8%",
                marginTop: "15%",
                width:'90%'
                // borderRadius:'100%'
              }}
              component={"img"}
              src="images/about/carousel/2.jpg"
              alt=""
            />
          </Grid>
          <Grid item lg={6}>
            <Typography variant="h1" style={{ padding: "17rem 0 0.5rem 1.875rem" }}>
              Order Now
            </Typography>
            <Typography style={{ fontSize: "1.6rem", padding: "0 0 0 1.875rem" }}>
              Lorem ipsum dolor sit amet ciosam veniam quidem dignissimos, minus
              rem reprehenderit facilis esse <br /> earum ea placeat officia
              inventore iusto aperiam. Numquam tempora facilis eum <br /> olores
              deleniti eius neque deserunt facere soluta. Ullam neque voluptate
              eius voluptas animi. Sequi eveniet et voluptatum dolore officia!
            </Typography>
            <ButtonGroup style={{ marginTop: "1.5625rem" }}>
              <Button
                color="error"
                style={{ marginRight: "2rem", marginLeft: "1.7rem"  , boxShadow: "0.625rem 0.625rem 0.625rem black,-0.625rem -0.625rem 0.625rem #7B3F00" }}
                variant="contained"
                size="large"
              >
                Order Online
              </Button>
              <Button color="success" variant="contained" size="large"  style={{  boxShadow: "1rem 1rem 1.2rem black,-1rem -1rem 1.2rem #7B3F00"}}>
                Visit Us
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>

        <Event />
        <Review />
      </section>
    </>
  );
}

export default Home;
