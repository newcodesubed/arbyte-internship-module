import { AppBar, Toolbar, Button, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function NavBar({ auth, logout }) {
  return (
    <AppBar
      position="static"
      className="bg-gradient-to-r from-indigo-600 to-purple-600"
    >
      <Toolbar className="flex justify-between">
        <div className="flex gap-4">
          {auth.isAuthenticated && (
            <>
              <Button color="inherit" component={NavLink} to="/home">
                Home
              </Button>
              {auth.role === "admin" && (
                <Button color="inherit" component={NavLink} to="/dashboard">
                  Dashboard
                </Button>
              )}
            </>
          )}
          {!auth.isAuthenticated && (
            <>
              <Button color="inherit" component={NavLink} to="/login">
                Login
              </Button>
              <Button color="inherit" component={NavLink} to="/register">
                Register
              </Button>
            </>
          )}
        </div>
        {auth.isAuthenticated && (
          <Button
            onClick={logout}
            variant="contained"
            color="secondary"
            className="font-semibold"
          >
            Logout ({auth.role})
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
}
