import React from "react";
import { Menu, ListItem, List, Box, Drawer } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { AiOutlineClose } from "react-icons/ai";

const Drawernav = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  function handleClick(event) {
    if (anchorEl !== event.currentTarget) {
      setAnchorEl(event.currentTarget);
    }
  }

  function handleClose() {
    setAnchorEl(null);
  }

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
        backgroundColor: "transparent",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <span>DESTINATIONS</span>
        </ListItem>
        <ListItem button>
          <span>TOUR STYLES</span>
        </ListItem>
        <ListItem button>
          <span>ABOUT</span>
        </ListItem>
        <ListItem button>
          <span>EVENTS</span>
        </ListItem>
        <ListItem button>
          <span>BLOG</span>
        </ListItem>
        <ListItem button>
          <span>ENQUIRE</span>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            sx={{ color: "white", marginLeft: "20px", marginTop: "20px" }}
            onClick={toggleDrawer(anchor, true)}
          />
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      {/* <AiOutlineClose style={{color:'white',marginLeft:'400px'}} onClick={toggleDrawer("left", false)} /> */}
    </>
  );
};

export default Drawernav;
