import React, { useEffect } from "react";
import axios from "axios";
import { Chip } from "@mui/material";

const Genres = ({
  type,
  SelectedGenres,
  setSelectedGenres,
  genres,
  setPage,
  setGenres,
}) => {
  const handleAdd = (genre) => {
    setSelectedGenres([...SelectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };

  const handleRemove = (genre) => {
    setSelectedGenres(
      SelectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };

  const fetchGenres = async () => {
    const { data } = await axios.get(`
      https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US
    `);
    setGenres(data.genres);
  };

  // console.log(genres);

  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres();
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div style={{ padding: "6px 0" }}>
      {SelectedGenres &&
        SelectedGenres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              size="small"
              clickable
              style={{ color: "black", backgroundColor: "#81c784", margin: 3 }}
              onDelete={() => handleRemove(genre)}
              variant="outlined"
            />
          );
        })}
      {genres &&
        genres.map((genre) => {
          return (
            <Chip
              key={genre.id}
              label={genre.name}
              style={{ margin: 2, borderColor: "black", color: "white" }}
              size="small"
              clickable
              variant="outlined"
              onClick={() => handleAdd(genre)}
            />
          );
        })}
    </div>
  );
};

export default Genres;
