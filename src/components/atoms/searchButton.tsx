import React from "react";
import { useRouter } from "next/router";
import {IconButton} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
const SearchButton: React.FC = () => {
  const router = useRouter();
  return (
      <IconButton
          aria-label="search"
          size="small"
          onClick={() => {
            router.push({
              pathname: "/search",
            });
          }}
      >
       <SearchIcon/>
      </IconButton>

  );
};
export default SearchButton;
/*
  <SearchIcon />



 */
