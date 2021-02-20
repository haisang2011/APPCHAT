import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import CallIcon from "@material-ui/icons/Call";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { Logo } from "../../contants/images";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    backgroundColor: "#1769aa",
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: theme.spacing(0, 1),
    // // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  },
  content: {
    // flexGrow: 1,
    // padding: theme.spacing(3),
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const menu = [
  {
    id: 1,
    name: "messages",
    icon: () => <QuestionAnswerIcon />,
    isActive: true,
  },
  {
    id: 2,
    name: "calls",
    icon: () => <CallIcon />,
    isActive: false,
  },
  {
    id: 3,
    name: "friends",
    icon: () => <SupervisorAccountIcon />,
    isActive: false,
  },
  {
    id: 4,
    name: "account",
    icon: () => <AccountCircleIcon />,
    isActive: false,
  },
];

export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <img
            src={Logo}
            alt="logo present for application"
            width={60}
            height={60}
          />
        </div>
        <Divider style={{ marginBottom: "10vh" }} />
        <List>
          {menu.map((element, index) => (
            <ListItem button key={element.id} style={{ marginBottom: "4vh" }}>
              <ListItemIcon style={{ marginLeft: "1ex" }}>
                {element.icon()}
              </ListItemIcon>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
}
