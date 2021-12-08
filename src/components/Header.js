import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
    color: "gold",
  },
}));

function Header() {
  const classes = useStyles();
  const navigate = useNavigate();

  return (
    <AppBar color="transparent" position="static">
      <Container>
        <Toolbar>
          <Typography
            onClick={() => navigate("/home")}
            className={classes.title}
          >
            Bigtoin
          </Typography>
          <Select
            variant="outlined"
            style={{
              width: 100,
              heigh: 40,
              marginLeft: 15,
            }}
          >
            <MenuItem value={"USD"}>USD</MenuItem>
            <MenuItem value={"BAM"}>BAM</MenuItem>
          </Select>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
