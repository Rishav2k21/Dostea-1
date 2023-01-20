import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  TextField,
  Typography,
  Button,
} from "@mui/material";
import {  useLocation,useNavigate } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Map from "./Map";
import { color } from "@mui/system";
import { BorderAll } from "@mui/icons-material";

function Footer() {
  const location=useLocation();
  const isActive = (history, path) => {
    if (history === path)
    return {color: '#ffff'}
    else
    return {color: '#7B3F00'}
   }
  const navigate =useNavigate()
  return (
    <>
    <section className="footer" style={{backgroundColor:"#bea895" ,color:"#7B3F00", Border:"1px solid red"}} >
      <Grid container direction={"row"} pt={3} justifyContent={"center"}>
        <Grid item pl={3} lg={4} md={4} sm={12} xs={12}>
              <Typography  variant="h4">Newsletter</Typography>
              <TextField autoFocus style={{color:"#fff"}} maxRows={1}  sx={{paddingBottom:'1rem',width:'90%'}} />
              <Button variant="contained">Subscribe</Button>
              <Typography mt={3}  variant="h4">Follow us</Typography>
              <IconButton >
                <FacebookIcon style={{fontSize:"3rem"}} color="primary" />
              </IconButton>
              <IconButton>
                <InstagramIcon style={{fontSize:"3rem"}} color="secondary" />
              </IconButton>
              <IconButton>
                <WhatsAppIcon style={{fontSize:"3rem"}} color="sucess" />
              </IconButton>
        </Grid>
        <Grid item  lg={4} md={4} sm={12} xs={12}>
          <Typography pl={3} variant="h4">Location</Typography>
          <Grid ><Map/></Grid>
        </Grid>
        <Grid item pl={3} lg={4} md={4} sm={12} xs={12}>
          <Typography variant="h4">Quick Link</Typography>
          <List>
            <ListItem>
              <Button  style={isActive(location.pathname, "/")} onClick={()=>{navigate('/')}}><Typography style={{fontSize:"1.5rem"}}>Home</Typography></Button>
            </ListItem>
            <ListItem>
              <Button style={isActive(location.pathname, "/about")} onClick={()=>{navigate('/about')}}><Typography style={{fontSize:"1.5rem"}}>About Us</Typography></Button>
            </ListItem>
            <ListItem>
              <Button style={isActive(location.pathname, "/menu")} onClick={()=>{navigate('/menu')}}><Typography style={{fontSize:"1.5rem"}}>Menu</Typography></Button>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      </section>
    </>
  );
}

export default Footer;
