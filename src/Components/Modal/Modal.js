import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import "./Modal.css";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../Config/Config";
import { Typography } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "80%",
  height: "80%",
  bgcolor: "#39445a",
  border: "1px solid #282c34",
  color: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function ContentModal({
  children,
  id,
  poster,
  date,
  vote_average,
  media_type,
  title,
  overview,
  original_language,
  backdrop_path,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className="media">
        {children}
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              <div className="ContentModal">
                <img
                  className="Content_portrait"
                  src={poster ? `${img_500}/${poster}` : unavailable}
                  alt={title}
                />
                <img
                  className="ContentModal_landscape"
                  src={
                    backdrop_path
                      ? `${img_500}/${backdrop_path}`
                      : unavailableLandscape
                  }
                  alt={title}
                />
                <div className="ContentModal_About">
                  <span className="ContentModal_title">
                    {title} ({date ? date.substring(0, 4) : ""})
                  </span>
                  <i className="tagline">
                    Language:{" "}
                    {original_language
                      ? original_language
                      : "Language Not Available"}
                  </i>
                  <span className="ContentModal_description">
                    {overview ? overview : "Description Not Available"}
                  </span>
                  <div
                    style={{
                      marginTop: 10,
                      display: "flex",
                      justifyContent: "space-evenly",
                    }}
                  >
                    <i style={{ fontSize: "14px" }}>
                      Rating: {vote_average ? vote_average.toFixed(1) : ""}
                    </i>
                  </div>
                </div>
              </div>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
