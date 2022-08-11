import { Badge } from "@mui/material";
import React from "react";
import { img_300, unavailable } from "../../Config/Config";
import ContentModal from "../Modal/Modal";
import "./SingleContent.css";

const SingleContent = ({
  id,
  poster,
  title,
  date,
  media_type,
  vote_average,
  overview,
  original_language,
  backdrop_path,
}) => {
  return (
    <ContentModal
      id={id}
      poster={poster}
      title={title}
      date={date}
      media_type={media_type}
      vote_average={vote_average}
      overview={overview}
      original_language={original_language}
      backdrop_path={backdrop_path}
    >
      <Badge
        badgeContent={`${vote_average.toFixed(1)}`}
        color={vote_average > 7 ? "success" : "primary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movie"}
        <span className="subTitle">{date}</span>
      </span>
    </ContentModal>
  );
};

export default SingleContent;
