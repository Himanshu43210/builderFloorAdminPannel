import React from 'react'
import Navbar from './adminPages/Navbar'
import {
  AppBar,
  Toolbar,
  CssBaseline,
  makeStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";
import { Link } from "react-router-dom";
// import DrawerComponent from "./drawer";
import './../css/UserStyle.css'
import {FaClipboardList ,FaUsers ,FaCog, FaUserShield} from "react-icons/fa"


const useStyles = makeStyles((theme) => ({
  
  navlinks: { marginLeft:"0" ,margin:"auto" ,display: "flex" , paddingTop:"100px" ,},
  logo: { flexGrow: "1", cursor: "pointer" },
  link: {
    display:"flex",
    padding:"20px",
    textDecoration: "none",
    marginLeft:"0" ,margin:"auto",
    color: "black",
    fontSize: "18px",
    "&:hover": { color: "skyblue", borderBottom: "1px solid #182c4c" },
   

  },
}));
function Panel() {
const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div>
      <div className='sidebarcontainer'>
           {isMobile ? (
          <div className={classes.navlinks} id='sidebar'>
            <Link to="./adminPages/AdminDashboard.js" className={classes.link}>
            <FaClipboardList />
              <h6>Dashboard</h6>
            </Link>
            <Link to="./adminPages/UserTable.js" className={classes.link} >
              <h6>User</h6>
            </Link>
            <Link to="./adminPages/PropertyTable.js" className={classes.link}>
                <h6>property</h6>
            </Link>
            <Link to="./adminPages/MasterTable.js" className={classes.link}>
                <h6>Master</h6>
            </Link>
          </div>
        ) : (
          <div className={classes.navlinks} id='sidebar'>
           <Link to="./adminPages/AdminDashboard.js" className={classes.link} >
              <FaClipboardList color='#4677c3 ' /> &nbsp;
              <h6>Dashboard</h6>
            </Link>
            <Link to="./adminPages/UserTable.js" className={classes.link}>
            <FaUsers  color='#4677c3 '/>&nbsp;
              <h6>User</h6>
            </Link>
            <Link to="./adminPages/PropertyTable.js" className={classes.link}>
            <FaCog color='#4677c3 '/>&nbsp;
              <h6>Property</h6>
            </Link>
            <Link to="./adminPages/MasterTable.js" className={classes.link}>
            <FaUserShield color='#4677c3 '/>&nbsp;
              <h6>Master</h6>
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Panel