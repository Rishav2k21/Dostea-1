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
    borderRadius: "100%",
  },
});
function Icon(props) {
  const { Heading} = props.item;
  const classes = useStyles();
  return (
    <>
      <Grid item lg={2} md={3} sm={4} xs={6} mx={1}>
        <Box className={classes.box}>
          <Paper minHeight={250} >
            <img className={classes.image}
              width={200}
              height={200}
              src={`images/menu/${_.lowerCase(Heading)}.jpg`}
              alt={`images/menu/${_.lowerCase(Heading)}.jg`}
            />
            <Link
              underline={"hover"}
              color="black"
              className={classes.link}
              onClick={() => {
                props.handleClick(props.id);
              }}
            >
              <Typography variant="h1" fontSize={20}>
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
