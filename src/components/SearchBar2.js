
import React from "react";
// import { propTypes } from "react-bootstrap/esm/Image";
// Styling
import { SearchBarStyled } from "../styles";

const SearchBar2 = (props) => {
 

  return (
    <SearchBarStyled
      onChange={(event) => props.setQuery(event.target.value)}
      placeholder="Search for a movie's name"
    />
  );
};

export default SearchBar2;
