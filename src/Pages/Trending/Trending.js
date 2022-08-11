import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import CustomPagination from "../../Components/Pagination/CustomPagination";
import SingleContent from "../../Components/SingleContent/SingleContent";
import "./Trending.css";

const Trending = () => {
  const [Page, setPage] = useState(1);
  const [Content, setContent] = useState([]);

  //Data Fetching
  const FetchTrending = async () => {
    const { data } = await axios.get(`
    https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${Page}
    `);

    console.log(data.results);

    setContent(data.results);
  };

  useEffect(() => {
    FetchTrending();
    // eslint-disable-next-line
  }, [Page]);

  return (
    <div>
      <span className="pageTitle">Trending Now</span>
      <div className="trending">
        {Content &&
          Content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.release_date || c.first_air_date}
              media_type={c.media_type}
              vote_average={c.vote_average}
              overview={c.overview}
              original_language={c.original_language}
              backdrop_path={c.backdrop_path}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage} />
    </div>
  );
};

export default Trending;
