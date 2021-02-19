import React, { useState } from "react";
import Layout from "../../src/components/templates/Layout";
import {
  Box,
  createStyles,
  InputAdornment,
  makeStyles,
  TextField,
  Theme,
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
library.add(fas, far, fab);
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      padding: theme.spacing(3),
      [`& fieldset`]: {
        borderRadius: 48,
      },
    },
  })
);

const SearchPage: React.FC = () => {
  const classes = useStyles();

  const [awesomeMatchList, setAwesomeMatchList] = useState<iconType[]>([]);
  const [materialMatchList, setMaterialMatchList] = useState<iconType[]>([]);
  const filteredIconList = (value: string) => {
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
      <Box borderRadius={24}>
        <TextField
          className={classes.textField}
          fullWidth
          variant="outlined"
          id="input-with-icon-textfield"
          placeholder={"アイコンの特徴を入力してください..."}
          InputProps={{
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
      </Box>
      <Box height={48} />
      <section>
        結果一覧 一致件数：○件 上位100件までを表示します。
        <section>
          <p>検索一致件数：</p>
          <IconList
            iconDataList={materialMatchList}
            generateUrl={generateMaterialUrl}
          />
        </section>
        <section>
          <p>検索一致件数：</p>
          <IconList
            iconDataList={awesomeMatchList}
            generateUrl={generateFontAwesomeUrl}
          />
        </section>
      </section>
    </Layout>
  );
};
export default SearchPage;
