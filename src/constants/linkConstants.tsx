import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import AppLogo from "../components/atoms/AppLogo";

export const linkConstants = {
  privacyPolicy: {
    title: "プライバシー・ポリシー",
    // icon: <Description />,
    icon:<AppLogo/>,
    url:
      "https://gist.github.com/ampersand-github/8e5049e947550a6a332e2758f3e11310/",
  },
  TermsOfService: {
    title: "利用規約",
  //  icon: <Description />,
    icon:<AppLogo/>,
    url:
      "https://gist.github.com/ampersand-github/19b29cd24a71f343730b25e0d42a7917",
  },
  twitter: {
    title: "Twitter",
    icon: <FontAwesomeIcon icon={faTwitter} />,
    url: "https://twitter.com/ampersand000",
  },
  contactForm: {
    title: "コンタクトフォーム",
    //icon: <Message />,
    icon:<AppLogo/>,
    url: "https://forms.gle/jUN2r2mwBvFU62ZC8", // TODO コンタクトフォームのurl
  },
  /*
          home: {
            title: 'トップへ戻る',
            icon: <InboxIcon />,
            url: '/',
          },
         */
};
