import { defaultTheme } from "@vuepress/theme-default";

import md_footnote from "markdown-it-footnote";
import md_attrs from "markdown-it-attrs";
import md_table from "markdown-it-multimd-table";
import md_katex from "markdown-it-katex";

export default {
  lang: "ru-RU",
  title: "Алгоритмы",
  base: "/",
  description: "Сайт про алгоритмы",
  head: [
    ["meta", { name: "theme-color", content: "#ffffff" }],
    ["link", { rel: "icon", href: "/assets/favicons/favicon.svg" }],
    [
      "link",
      {
        rel: "mask-icon",
        href: "/assets/favicons/mask-icon.svg",
        color: "red",
      },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        href: "/assets/favicons/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "manifest.json" }],
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css",
      },
    ],

    // <!-- revisionme -->
    [
      "script",
      {},
      `
	    var __rm__config = {
        projectId: '-NE7NESwBLRrHXE1JpTi',
        locale: 'ru',
        contextWidget: 0,
        embedBtn: 0,
        floatingBtn: 1,
        floatingBtnPosition: 'left',
        floatingBtnStyle: 'light',
			};
    `,
    ],
    [
      "script",
      {
        src: "https://widget.revisionme.com/app.js",
        defer: "defer",
        id: "rm_app_script",
      },
    ],
    // <!-- /revisionme -->
  ],
  theme: defaultTheme({
    sidebar: false,
    contributors: false,
    lastUpdatedText: "Последниее изменение",
    navbar: [
      { text: "Главная", link: "/" },
      { text: "Контакты", link: "/contacts.md" },
    ],
  }),

  extendsMarkdown: (md) => {
    md.use(md_footnote);
    md.use(md_katex);
    md.use(md_attrs);
    md.use(md_table, {
      multiline: true,
      rowspan: true,
      headerless: true,
    });
  },
};
