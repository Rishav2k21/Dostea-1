import { Grid, Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import _ from "lodash";
import { makeStyles } from "@mui/styles";
const useStyles = makeStyles({
  box: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignContent: "center",
    "& > :not(style)": {
      m: 1,
    },
  },
  image: {
    borderRadius: "5%",
    opacity:'0.9',
  },
});
function Icon(props) {
  const { Heading} = props.item;
  const classes = useStyles();
  return (
    <>
      <Grid item lg={2} md={3} sm={4} xs={6} mx={1}>
        <Box className={classes.box}>
          <Paper elevation={0} sx={{backgroundColor:'transparent'}} minHeight={250} >
            <img style={{boxShadow: "0.625rem 0.625rem 0.625rem black,-0.625rem -0.625rem 0.625rem #7B3F00" }} className={classes.image}
              width={200}
              height={200}
              src={`images/menu/${_.lowerCase(Heading)}.jpg`}
              alt={`images/menu/${_.lowerCase(Heading)}.jg`}
            />
            <Link
              underline={"hover"}
              color="white"
              className={classes.link}
              onClick={() => {
                props.handleClick(props.id);
              }}
            >
              <Typography style={{fontFamily:"cursive"}} variant="h1" textAlign={'center'} fontSize={'2rem'}>
                {Heading}
              </Typography>
            </Link>
          </Paper>
        </Box>
      </Grid>
    </>
  );
}

export default Icon;
