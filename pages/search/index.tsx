import React, { useState } from "react";
import Layout from "../../src/components/templates/Layout";
import {
  Box,
  Container,
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";

import { SearchRounded } from "@material-ui/icons";
import { fontAwesomeIconData } from "../../src/constants/icons/fontAwesomeIconData";
import { materialIconData } from "../../src/constants/icons/materialIconData";
import { iconType } from "../../src/types/iconType";
import { IconList } from "../../src/components/organisms/contents/IconList";
import { generateFontAwesomeUrl } from "../../src/utils/functions/generateFontAwesomeIconUrl";
import { generateMaterialUrl } from "../../src/utils/functions/generateMaterialIconUrl";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { tabIndexConstants } from "../../src/constants/tabIndexConstants";
import { useWindowSize } from "../../src/utils/hooks/useWindowSize";
import { breakpointsConstraints } from "../../src/constants/breakPointConstants";
import AppLogo from "../../src/components/atoms/AppLogo";

library.add(fas, far, fab);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      [`& fieldset`]: {
        borderRadius: 48,
      },
    },
    fontSize: {},
    fontSizePhone: {
      fontSize: 12,
    },
  })
);

const SearchPage: React.FC = () => {
  const classes = useStyles();
  const { width } = useWindowSize();
  const variant = width <= breakpointsConstraints.tablet ? "body1" : "h6";
  const [awesomeMatchList, setAwesomeMatchList] = useState<iconType[]>([]);
  const [materialMatchList, setMaterialMatchList] = useState<iconType[]>([]);
  const filteredIconList = (value: string) => {
    if (value === "") {
      return;
    }
    const fontAwesome = fontAwesomeIconData.filter(
      (icon: iconType) =>
        icon.tag.find((tag) => tag.indexOf(value) > -1) ||
        [icon.icon].find((tag) => tag.indexOf(value) > -1)
    );
    setAwesomeMatchList(fontAwesome.slice(0, 100));
    //
    const material = materialIconData.filter(
      (icon: iconType) =>
        icon.tag.find((tag) => tag.indexOf(value) > -1) ||
        [icon.icon].find((tag) => tag.indexOf(value) > -1)
    );
    setMaterialMatchList(material.slice(0, 100));
  };

  return (
    <Layout>
      <div style={{ backgroundColor: "#E6F2FF" }}>
        <Box height={48} />
        <Container maxWidth={"lg"}>
          <Box borderRadius={48}>
            <section className={classes.textField}>
              <TextField
                fullWidth
                variant="outlined"
                autoFocus={true}
                id="input-with-icon-textfield"
                placeholder={"アイコンの特徴を入力してください..."}
                InputProps={{
                  classes: {
                    input:
                      width <= breakpointsConstraints.tablet
                        ? classes.fontSizePhone
                        : classes.fontSize,
                  },
                  endAdornment: (
                    <InputAdornment position="start">
                      <SearchRounded />
                    </InputAdornment>
                  ),
                }}
                onChange={(e) => {
                  filteredIconList(e.target.value);
                }}
              />
              <p>※ 上位100件までを表示します。</p>
              <Box height={8} />
            </section>
          </Box>

          {/*  material */}
          <section>
            <Typography variant={variant} style={{ fontWeight: "bold" }}>
              {tabIndexConstants.material.name}
            </Typography>
            <p>検索一致件数 : {materialMatchList.length}件</p>
            <IconList
              iconDataList={materialMatchList}
              generateUrl={generateMaterialUrl}
            />
          </section>

          {width <= breakpointsConstraints.tablet ? (
            <Box height={16} />
          ) : (
            <Box height={48} />
          )}
          {/*  fontAwesome */}
          <section>
            <Typography variant={variant} style={{ fontWeight: "bold" }}>
              {tabIndexConstants.fontAwesome.name}
            </Typography>
            <p>検索一致件数 : {awesomeMatchList.length}件</p>
            <IconList
              iconDataList={awesomeMatchList}
              generateUrl={generateFontAwesomeUrl}
            />
          </section>
        </Container>
        <Box height={48} />
      </div>
    </Layout>
  );
};
export default SearchPage;
