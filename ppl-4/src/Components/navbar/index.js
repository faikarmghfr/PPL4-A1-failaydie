import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import {
  SearchSharp,
  FavoriteBorder,
  AccountCircleOutlined,
} from "@mui/icons-material";

function Navbar() {
  return (
    <Grid
      container
      style={{
        backgroundColor: "white",
        color: "black",
        width: "100vw",
        height: 45,
      }}
    >
      <Grid
        item
        xs={2}
        sm={2}
        md={2}
        lg={2}
        xl={2}
        style={{
          textAlign: "right",
          padding: "10px 6% 0px 0px",
        }}
      >
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
          }}
          >
          FP PLN
        </Link>
      </Grid>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        style={{
          padding: "10px 6% 0px 0px",
        }}
        >
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
          }}
          >
          HOME
        </Link>
      </Grid>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        style={{
          padding: "10px 6% 0px 0px",
        }}
        >
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
          }}
          >
          PROFILE
        </Link>
      </Grid>
      <Grid
        item
        xs={1}
        sm={1}
        md={1}
        lg={1}
        xl={1}
        style={{
          padding: "10px 6% 0px 0px",
        }}
        >
        <Link
          to="/about"
          style={{
            textDecoration: "none",
            color: "black",
            fontSize: "15px",
          }}
          >
          ABOUT
        </Link>
      </Grid>
      <Grid item xs={4} sm={4} md={4} lg={4} xl={4}></Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} style={{
          padding: "9px 0 0 128px",
      }}>
        <Link
          to="/about"
          style={{
            color: "black",
          }}
          >
          <SearchSharp />
        </Link>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} style={{
        padding: "9px 0 0 65px",
      }}>
        <Link
          to="/about"
          style={{
            color: "black",
          }}
        >
          <FavoriteBorder />
        </Link>
      </Grid>
      <Grid item xs={1} sm={1} md={1} lg={1} xl={1} style={{
        padding: "9px 0 0 0",
      }}>
        <Link
          to="/login"
          style={{
            color: "black",
          }}
        >
          <AccountCircleOutlined />
        </Link>
      </Grid>
    </Grid>
  );
}

export default Navbar;
