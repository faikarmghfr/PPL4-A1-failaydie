import "../../App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Grid, Typography } from "@mui/material";
import { Button, Stack, Link } from "@mui/material";
import { textAlign } from "@mui/system";
import { Navbar } from "../../Components";

function Login() {
  return (
    <>
      <Grid
        container
        style={{
          backgroundImage: `url(/images/backgrounds.png)`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "100vh",
        }}
      >
        <Navbar />
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
          style={{ height: 600 }}
        >
          <Typography
            style={{
              fontFamily: "sans-serif",
              fontWeight: "bold",
              padding: "15% 8% 0 10%",
              fontSize: "100px",
              lineHeight: "120px",
              color: "white",
            }}
          >
            INI LOGIN
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
          <Typography
            style={{
              color: "white",
              padding: "15% 31% 0px 10%",
              fontSize: "14px",
              lineHeight: "22px",
              textAlign: "justify",
              letterSpacing: "0.1em",
            }}
          >
            PT Perusahaan Listrik Negara adalah sebuah badan usaha milik negara
            yang mengurusi semua aspek kelistrikan yang ada di Indonesia.
            Ketenagalistrikan di Indonesia dimulai pada akhir abad ke-19, ketika
            beberapa perusahaan Belanda mendirikan pembangkit listrik untuk
            keperluan sendiri.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          style={{ color: "white", padding: "2% 0 0 5%" }}
        >
          <Typography style={{ height: 5, fontSize: 18 }}>BANDUNG</Typography>
          <Typography>Pemantauan tiang listrik daerah Bandung</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          style={{ textAlign: "center", color: "white" }}
        >
          asd
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          xl={4}
          style={{ textAlign: "center", color: "white" }}
        >
          asd
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
