import React from "react";
import {
  Box,
  createStyles,
  Menu,
  MenuItem,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

import IconButton from "@material-ui/core/IconButton";
import ShareIcon from "@material-ui/icons/Share";
import { appConstants } from "../../../constants/appConstants";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      display: "flex",
    },
  })
);

export const ShareMenu: React.FC = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box className={classes.root}>
      <IconButton
        aria-controls="share"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <ShareIcon />
      </IconButton>
      <Menu
        id="share"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>
          <FacebookShareButton url={appConstants.appUrl}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/*  <FacebookIcon size={width <= xs ? 24 : 48} round /> */}
              <FacebookIcon size={48} round />
              <div style={{ width: 8 }} />
              <Typography>facebookでシェア</Typography>
            </Box>
          </FacebookShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <TwitterShareButton url={appConstants.appUrl}>
            <Box
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              {/*  <TwitterIcon size={width <= xs ? 24 : 48} round /> */}
              <TwitterIcon size={48} round />
              <div style={{ width: 8 }} />
              <Typography>twitterでシェア</Typography>
            </Box>
          </TwitterShareButton>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <HatenaShareButton />
        </MenuItem>
      </Menu>
    </Box>
  );
};

// todo 別ファイルに
function HatenaShareButton() {
  return (
    <a
      href={`https://b.hatena.ne.jp/entry/s/${appConstants.appUrl}/`}
      className="hatena-bookmark-button"
      data-hatena-bookmark-layout="touch"
      title="このエントリーをはてなブックマークに追加"
    >
      <Box
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <img
          style={{ borderRadius: "50%" }}
          src="https://b.st-hatena.com/images/v4/public/entry-button/button-only@2x.png"
          alt="このエントリーをはてなブックマークに追加"
          width={48}
          height={48}
        />
        <div style={{ width: 8 }} />
        <Typography>はてなでシェア</Typography>
      </Box>
    </a>
  );
}
