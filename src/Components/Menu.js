import {
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  Fab,
  Grid,
  Slide,
  Typography,
  Card,
} from "@mui/material";
import { useState } from "react";
import Icon from "./Icon";
import { menu } from "./Data";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import React from "react";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Menu() {
  const [dishes, setDishes] = useState([
    {
      Heading: "",
      item: [{ name: "", price: "", subheading: "" }],
    },
  ]);
  const [value] = dishes;
  const [show, setShow] = useState(false);
  function showMenu(id) {
    setDishes(
      menu.filter((item, index) => {
        return index === id;
      })
    );
    setShow(true);
  }
  function handleClose() {
    setShow(false);
  }

  return (
    <>
      <section className="home bgimage">
        <Typography
          style={{ fontFamily: "cursive", padding: "35px", marginTop: "5px" }}
          textAlign={"center"}
          variant={"h3"}
        >
          Dishes
        </Typography>

        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {menu.map((item, index) => {
            return (
              <Icon item={item} id={index} key={index} handleClick={showMenu} />
            );
          })}
        </Grid>
      </section>
      
      <Dialog
       sx={{bgcolor:'black'}}
        fullScreen
        TransitionComponent={Transition}
        open={show}
        onClose={handleClose}
      >
      <section className="dialog">
        <Fab
          style={{ width: "4rem" }}
          color="success"
          aria-label="add"
          sx={{ padding: "1.7rem" }}
          onClick={handleClose}
        >
          <CloseIcon />
        </Fab>
        <Divider >
          <Typography mt={5} component={"div"} variant={"h3"}>
            {value.Heading}
          </Typography>
        </Divider>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          {value.item.map((item, index) => {
            return (
              <>
                <Grid
                  style={{}}
                  item
                  key={index}
                  lg={4}
                  md={6}
                  sm={6}
                  xs={12}
                  mx={1}
                >
                  <Card style={{backgroundColor:'#4d2600', marginTop: "2.5rem" }}>
                    <CardMedia
                      style={{
                        boxShadow:
                          "0.625rem 0.625rem 0.625rem #8888,-0.625rem -0.625rem -0.625rem #4d0000",
                        textAlign: "center",
                        display: " block",
                        marginLeft: "auto",
                        marginRight: "auto",
                        marginTop: "20px",
                      }}
                      component="img"
                      sx={{
                        borderRadius: "100%",
                        width: "50%",
                        alignContent: "center",
                      }}
                      src="images/menu/empty.png"
                      alt="empty-plate"
                    />
                    <CardContent>
                      <Typography
                        variant="h5"
                        fontWeight={"bold"}
                        style={{ color: "#fff", textAlign: "center" }}
                      >
                        {item.name}
                      </Typography>
                      <Typography
                        mb={2}
                        style={{ color: "#fff", textAlign: "center" }}
                      >
                        {item.subheading ? item.subheading : ""}
                      </Typography>
                      <Typography
                        fontSize={"2rem"}
                        style={{ color: "green", textAlign: "center" }}
                      >
                        <CurrencyRupeeIcon
                          fontSize="medium"
                          style={{ color: "green" }}
                        />
                        {item.price}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </>
            );
          })}
        </Grid>
        </section>
      </Dialog>
    </>
  );
}

export default Menu;
