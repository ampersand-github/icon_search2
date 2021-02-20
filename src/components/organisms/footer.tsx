import React from "react";
import { Box, Divider, Typography } from "@material-ui/core";
import { createStyles, makeStyles } from "@material-ui/core/styles";
import { linkConstants } from "../../constants/linkConstants";
import { HeaderLeft } from "../molecules/header/headerLeft";
import { TextWrapper } from "../atoms/LinkTextWrapper";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { breakpointsConstraints } from "../../constants/breakPointConstants";

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

const useStylesMobile = makeStyles(() => {
  return createStyles({
    root: {
      display: "flex",
      flexDirection: "column",
      alignItems: "left",
    },
    titleBlock: {},
    links: {},
  });
});

export const MyFooter: React.FC = () => {
  const { width } = useWindowSize();
  const tablet = breakpointsConstraints.tablet;
  const classes = width <= tablet ? useStylesMobile() : useStyles();

  //
  const privacyPolicy = linkConstants.privacyPolicy;
  const termsOfService = linkConstants.TermsOfService;
  const twitter = linkConstants.twitter;
  const contactForm = linkConstants.contactForm;

  return (
    <footer>
      <Box className={classes.root}>
        <HeaderLeft />
        <Box height={16} />
        <Box className={classes.links}>
          <Typography variant={"body1"} style={{ fontWeight: "bold" }}>
            Legal
          </Typography>

          {width <= tablet ? <Box height={8} /> : <div />}
          {width <= tablet ? <Divider /> : <div />}
          {width <= tablet ? <Box height={8} /> : <Box height={16} />}

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
          <Box height={24} />
        </Box>
        <Box className={classes.links}>
          <Typography variant={"body1"} style={{ fontWeight: "bold" }}>
            Contact
          </Typography>
          {width <= tablet ? <Box height={8} /> : <div />}
          {width <= tablet ? <Divider /> : <div />}
          {width <= tablet ? <Box height={8} /> : <Box height={16} />}
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
          <Box height={24} />
        </Box>
      </Box>
    </footer>
  );
};
