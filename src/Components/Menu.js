import {
  CardContent,
  CardMedia,
  Dialog,
  Divider,
  Fab,
  Grid,
  Slide,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Card } from "react-bootstrap";
import Icon from "./Icon";
import menu from "./Items";
import itemList from "./Items";
import CloseIcon from "@mui/icons-material/Close";
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import React from 'react'
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
      itemList.filter((item, index) => {
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
      <section className="menu-box">
        <h1 className="heading">Dostea Menu</h1>
        <h3 className="subheading"> Special people need something Special </h3>

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
        <Dialog fullScreen  TransitionComponent={Transition} open={show} onClose={handleClose}>
        <Fab color="success" aria-label="add" sx={{padding:'1.7rem'}} onClick={handleClose}>
        <CloseIcon />
         </Fab>
          <Divider>
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
                  <Grid item key={index} lg={4} md={6} sm={6} xs={12} mx={1}>
                    <Card>
                      <CardMedia component="img"  sx={{borderRadius:'100%',width:'50%'}} src="images/empty.png" alt="empty-plate" />
                      <CardContent>
                        <Typography
                          variant="h5"
                          fontWeight={"bold"}
                        >
                          {item.name}
                        </Typography>
                        <Typography mb={2}>
                          {item.subheading ? item.subheading : ""}
                        </Typography>
                        <Typography fontSize={20}><CurrencyRupeeIcon fontSize="small"/>{item.price}</Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </>
              );
            })}
          </Grid>
        </Dialog>
      </section>
    </>
  );
}

export default Menu;
