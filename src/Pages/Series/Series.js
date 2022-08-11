import React, { useEffect, useState } from "react";
import useGenre from "../../Hooks/useGenre";
import axios from "axios";
import Genres from "../../Components/Genres";
import SingleContent from "../../Components/SingleContent/SingleContent";
import CustomPagination from "../../Components/Pagination/CustomPagination";

const Series = () => {
  const [Page, setPage] = useState(1);
  const [Content, setContent] = useState([]);
  const [NumberOfPages, setNumberOfPages] = useState(1);
  const [SelectedGenres, setSelectedGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const genreforURL = useGenre(SelectedGenres);

  const Fetchmovies = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${Page}&with_genres=${genreforURL}`
      // &with_genres=${genreforURL}
    );
    // console.log(data)
    setContent(data.results);
    setNumberOfPages(data.total_pages);
  };

  useEffect(() => {
    Fetchmovies();
    //eslint-disable-next-line
  }, [Page, genreforURL]);
  return (
    <div>
      <span className="pageTitle"> TV Series</span>
      <Genres
        type="tv"
        SelectedGenres={SelectedGenres}
        setSelectedGenres={setSelectedGenres}
        genres={genres}
        setPage={setPage}
        setGenres={setGenres}
      />
      <div className="trending">
        {Content &&
          Content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type="tv"
              vote_average={c.vote_average}
              overview={c.overview}
              original_language={c.original_language}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
      {NumberOfPages > 1 && (
        <CustomPagination setPage={setPage} numberOfPages={NumberOfPages} />
      )}
    </div>
  );
};

export default Series;
