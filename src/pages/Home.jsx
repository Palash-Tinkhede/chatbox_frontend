import React from "react";
import AppLayout from "../components/layout/AppLayout";
import { Box, Typography } from "@mui/material";
import { grayColor, orangeLight, orangeLightLight } from "../constants/color";
import { Search as SearchIcon } from "@mui/icons-material";

const Home = () => {
  return (
    <Box bgcolor={orangeLightLight} height={"100%"}>
      <Typography p={"3rem"} variant="h5" textAlign={"center"}>
        This is a online messaging portal in which you can send request to various peoples(by pressing on <SearchIcon/> icon), chat with them, create group of friends, manage it, see no of online persons,  and send various  types of files.

      </Typography>
    </Box>
  );
};

export default AppLayout()(Home);
