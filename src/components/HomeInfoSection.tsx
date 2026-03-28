import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { darkGray, lightYellow } from "../styles/colors";
import { h2Style } from "../styles/styles";
import CircleIcon from "@mui/icons-material/Circle";
import plusSizeCouple from "../assets/Untitled design (13).png";
const HomeInfoSection = () => {
  const circleIconStyle = {
    color: lightYellow,
    fontSize: { xs: 10, sm: 15, md: 20 },
  };
  return (
    <Box
      sx={{
        backgroundColor: darkGray,
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          padding: { xs: 2, md: 10 },
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography component={"h2"} sx={{ ...h2Style, color: lightYellow }}>
            FatForAll is for...
          </Typography>
          <List
            sx={{
              color: lightYellow,
              fontSize: { xs: "1rem", sm: "2rem" },
              fontFamily: "Alata",
            }}
          >
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={circleIconStyle} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: {
                      color: lightYellow,
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Alata",
                    },
                  },
                }}
                primary={
                  <>
                    Fat folks <a href="">(small to infini)</a> navigating public
                    spaces
                  </>
                }
              />
            </ListItem>
            <ListItem>
              {" "}
              <ListItemIcon>
                <CircleIcon sx={circleIconStyle} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: {
                      color: lightYellow,
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Alata",
                    },
                  },
                }}
                primary={<>Allies seeking inclusive businesses</>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={circleIconStyle} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: {
                      color: lightYellow,
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Alata",
                    },
                  },
                }}
                primary={<>Disabled people affected by size-based barriers</>}
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <CircleIcon sx={circleIconStyle} />
              </ListItemIcon>
              <ListItemText
                slotProps={{
                  primary: {
                    sx: {
                      color: lightYellow,
                      fontSize: { xs: "1rem", sm: "2rem" },
                      fontFamily: "Alata",
                    },
                  },
                }}
                primary={<>Business owners who want to do better</>}
              />
            </ListItem>
          </List>
        </Box>
        <Box
          component={"img"}
          alt="Silhouette of Happy, Plus Sized Couple"
          src={plusSizeCouple}
          sx={{
            width: 300,
            height: 300,
            display: { xs: "none", md: "block" },
          }}
        />
      </Box>
    </Box>
  );
};

export default HomeInfoSection;
