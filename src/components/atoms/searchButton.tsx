import React from "react";
import { useRouter } from "next/router";
import AppLogo from "./AppLogo";
import {IconButton} from "@material-ui/core";

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
       <AppLogo/>
      </IconButton>

  );
};
export default SearchButton;
/*
  <SearchIcon />



 */
