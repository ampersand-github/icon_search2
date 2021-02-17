import React from "react";
import { Box, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { widthConstants } from "../../constants/widthConstants";
import { linkConstants } from "../../constants/linkConstants";
import { HeaderLeft } from "../molecules/header/headerLeft";
import { TextWrapper } from "../atoms/LinkTextWrapper";

const useStyles = makeStyles(() => {
  return createStyles({
    root: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    titleBlock: {
      display: "flex",
      flexDirection: "column",
    },
    links: {
      display: "flex",
      flexDirection: "column",
    },
  });
});

export const MyFooter: React.FC = () => {
  const classes = useStyles();
  const width = widthConstants.footerWidth;
  //
  const privacyPolicy = linkConstants.privacyPolicy;
  const termsOfService = linkConstants.TermsOfService;
  const twitter = linkConstants.twitter;
  const contactForm = linkConstants.contactForm;

  return (
    <footer>
      <Box className={classes.root}>
        <HeaderLeft />
        <Box className={classes.links}>
          <Typography variant={"body1"} style={{ fontWeight: "bold" }}>
            Legal
          </Typography>
          <Box height={8} />
          <TextWrapper
            text={privacyPolicy.title}
            url={privacyPolicy.url}
            variant={"body2"}
            opacity={0.6}
          />
          <Box height={8} />
          <TextWrapper
            text={termsOfService.title}
            url={termsOfService.url}
            variant={"body2"}
            opacity={0.6}
          />
          <Box height={8} />
        </Box>
        <Box className={classes.links}>
          <Typography variant={"body1"} style={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          <Box height={8} />
          <TextWrapper
            text={twitter.title}
            url={twitter.url}
            variant={"body2"}
            opacity={0.6}
          />
          <Box height={8} />
          <TextWrapper
            text={contactForm.title}
            url={contactForm.url}
            variant={"body2"}
            opacity={0.6}
          />
        </Box>
      </Box>
    </footer>
  );
};
