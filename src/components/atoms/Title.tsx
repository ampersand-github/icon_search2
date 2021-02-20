import React from "react";
import Typography from "@material-ui/core/Typography";
import { appConstants } from "../../constants/appConstants";
import { useWindowSize } from "../../utils/hooks/useWindowSize";
import { breakpointsConstraints } from "../../constants/breakPointConstants";

const Title: React.FC = () => {
  const { width } = useWindowSize();
  const variant = width <= breakpointsConstraints.tablet ? "body1" : "h6";

  return (
    <Typography variant={variant} noWrap style={{ fontWeight: "bold" }}>
      {appConstants.applicationTitle}
    </Typography>
  );
};
export default Title;
