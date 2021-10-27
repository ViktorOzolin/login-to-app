import React from "react";
import {
  AppBar,
  Box,
  Toolbar,
  Typography,
  MenuItem,
  Menu,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LoginIcon from "@mui/icons-material/Login";
import { NavLink } from "react-router-dom";

const Header = ({ isAuth }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <NavLink style={{ textDecoration: "none", color: "#fff" }} to="/">
              {" "}
              Супер приложение
            </NavLink>
          </Typography>
          {isAuth ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem>
                  <NavLink style={{ textDecoration: "none" }} to="/profile">
                    Профиль
                  </NavLink>
                </MenuItem>
                <MenuItem>
                  <NavLink style={{ textDecoration: "none" }} to="/contacts">
                    Мои контакты
                  </NavLink>
                </MenuItem>
              </Menu>
            </div>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <LoginIcon />
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
