import React from "react";
import { useState, useEffect } from "react";
import Draggable from "react-draggable";
import {useMediaQuery} from "@mui/material";
import Loader from "./components/Loader/Loader";

import {
  Avatar,
  Box,
  Card,
  CardHeader,
  Button,
  Typography,
  IconButton,
  Grid,
  Paper,
} from "@mui/material";

import {
  GitHub,
  LinkedIn,
  MailOutline,
  Description,
} from "@mui/icons-material";
import "./global.css";
import ChangeTextComponent from "./change-text";
import { motion, useSpring } from "framer-motion";

function App() {
    
  const circleButtonStyle = {
    borderRadius: "50%",
    width: "20px",
    height: "20px",
    margin: "0 5px",
  };
  const socialButtonStyle = {
    borderRadius: "50%",
    width: "50px",
    height: "50px",
    margin: "0 5px",
  };
  const backgroundImage = `linear-gradient(
    rgba(255, 255, 255, 0.4), 
    rgba(255, 255, 255, 0.4)
  ), url(./asset/background-image.jpeg)`;

  const [activeTab, setActiveTab] = useState("profile");
  const [position, setPosition] = useState({x:0, y:0});

  const tabs = [
    { label: "Profile", value: "profile" },
    { label: "Projects", value: "projects" },
    { label: "Contact", value: "contact" },
  ];

  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  useEffect(() => {
    if (isSmallScreen) {
      setPosition()
    }
  })
const handleDrag = (_, data) => {
  const maxY = -155;
  const newY = Math.max(data.y, maxY);

  setPosition({ x: data.x, y: newY });
};

  const [loading, setLoading] = useState(true);

  const handleLoadingFinish = () => {
    setLoading(false);
  };

  if (loading) {
    return <Loader onFinish={handleLoadingFinish} duration={2025} />;
  }

  return (
    <motion.div>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          minHeight: "100vh",
          background: backgroundImage,
          backgroundSize: "cover",
          padding: "50px",
        }}
      >
        <Draggable handle=".draggable-header" position={isSmallScreen? {x:0, y:0} : position} onStop={handleDrag} disabled={isSmallScreen}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card
              sx={{
                width: { sm: "500px" },
                height: "auto",
                borderRadius: "8px",
                overflow: "hidden",
                position: "relative",
                boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(50px)",
                opacity: 0.9,
              }}
            >
              <CardHeader
                className="draggable-header"
                sx={{
                  backgroundColor: "#4E7EF5",
                  borderBottom: "2px solid #3366CC",
                }}
                action={
                  <div style={{ display: "flex" }}>
                    <IconButton
                      sx={{
                        backgroundColor: "#F66058",
                        ":hover": {
                          backgroundColor: "#F66058",
                        },
                        ...circleButtonStyle,
                      }}
                      size="small"
                    />
                    <IconButton
                      sx={{
                        backgroundColor: "#FBBD2E",
                        ":hover": {
                          backgroundColor: "#FBBD2E",
                        },
                        ...circleButtonStyle,
                      }}
                      size="small"
                    />
                    <IconButton
                      sx={{
                        backgroundColor: "#45CA40",
                        ":hover": {
                          backgroundColor: "#45CA40",
                        },
                        ...circleButtonStyle,
                      }}
                      size="small"
                    />
                  </div>
                }
              />
              <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: "45px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  <Avatar
                    src={"./asset/dev-avatar.jpg"}
                    alt="Michelle Muliana"
                    sx={{
                      width: 130,
                      height: 130,
                      marginBottom: 3,
                      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
                      position: "relative",
                      zoom: 1.05,
                    }}
                  />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "black",
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                    }}
                  >
                    Michelle Muliana
                  </Typography>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <ChangeTextComponent />
                </motion.div>
                <div style={{ display: "flex", gap: "8px" }}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <a
                      href="https://github.com/michmuliana"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        sx={{
                          color: "grey",
                          outline: "2px solid #B4B4B4",
                          ":hover": {
                            color: "#4E7EF5",
                            backgroundColor: "#eee",
                            outline: "2px solid #4E7EF5",
                            borderRadius: "50%",
                          },
                          ...socialButtonStyle,
                        }}
                      >
                        <GitHub sx={{ fontSize: "30px" }} />
                      </IconButton>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <a
                      href="https://www.linkedin.com/in/michellemuliana/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        sx={{
                          color: "grey",
                          outline: "2px solid #B4B4B4",
                          ":hover": {
                            color: "#4E7EF5",
                            backgroundColor: "#eee",
                            outline: "2px solid #4E7EF5",
                            borderRadius: "50%",
                          },
                          ...socialButtonStyle,
                        }}
                      >
                        <LinkedIn sx={{ fontSize: "30px" }} />
                      </IconButton>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <a href="mailto:michmuliana@gmail.com">
                      <IconButton
                        sx={{
                          color: "grey",
                          outline: "2px solid #B4B4B4",
                          ":hover": {
                            color: "#4E7EF5",
                            backgroundColor: "#eee",
                            outline: "2px solid #4E7EF5",
                            borderRadius: "50%",
                          },
                          ...socialButtonStyle,
                        }}
                      >
                        <MailOutline sx={{ fontSize: "30px" }} />
                      </IconButton>
                    </a>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }}
                  >
                    <a
                      href={"./resumes/Muliana_Michelle_Resume_2024.pdf"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <IconButton
                        sx={{
                          color: "grey",
                          outline: "2px solid #B4B4B4",
                          ":hover": {
                            color: "#4E7EF5",
                            backgroundColor: "#eee",
                            outline: "2px solid #4E7EF5",
                            borderRadius: "50%",
                          },
                          ...socialButtonStyle,
                        }}
                      >
                        <Description sx={{ fontSize: "30px" }} />
                      </IconButton>
                    </a>
                  </motion.div>
                </div>
              </Grid>
            </Card>
          </motion.div>
        </Draggable>
      </Grid>
    </motion.div>
  );
}

export default App;
