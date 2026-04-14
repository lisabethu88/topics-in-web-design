import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip, IconButton } from "@mui/material";

const FatergoriesTooltip = () => {
  return (
    <Tooltip title="Fatergories describe different lived experiences of body size, from smallfat to infinifat.">
      <IconButton size="small">
        <InfoOutlinedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default FatergoriesTooltip;
