import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { Tooltip, IconButton } from "@mui/material";

const FategoriesTooltip = () => {
  return (
    <Tooltip title="Fategories describe different lived experiences of body size, from smallfat to infinifat.">
      <IconButton size="small">
        <InfoOutlinedIcon fontSize="small" />
      </IconButton>
    </Tooltip>
  );
};

export default FategoriesTooltip;
