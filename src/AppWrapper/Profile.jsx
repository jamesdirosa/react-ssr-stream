import { Avatar, IconButton } from "@mui/material";
import React from "react";
import { useData } from "../Contexts/DataContext";

const Profile = () => {
  const data = useData();
  return (
    <IconButton sx={{ p: 0 }}>
      <Avatar src={data.url} />
    </IconButton>
  );
};

export default Profile;
