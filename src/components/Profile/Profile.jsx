import { Avatar, Box, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import Text from "../custom/Typography/Text";
import CustomizedTypo from "../custom/Typography/CustomTypo";

const Profile = () => {
  return (
    <Paper>
      <CustomizedTypo
        primaryTextIcon={<AddLocationAltIcon />}
        primaryText="Hello"
        secondaryText="hello2"
        primaryIconSize="100px"
        secondaryTextIcon={<AddLocationAltIcon />}
        secondaryIconSize="100px"
      />
    </Paper>
  );
};

export default Profile;
