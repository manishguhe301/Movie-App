const useGenre = (selectedGenres) => {
  if (selectedGenres.length < 1) return "";

  const genreIDs = selectedGenres.map((g) => g.id);
  return genreIDs.reduce(
    (accumulator, currentval) => accumulator + "," + currentval
  );
};

export default useGenre;
