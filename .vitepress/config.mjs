import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "不服的forty",
  description: "不服的forty",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "React之旅", link: "/markdown-examples" },
      { text: "Runtime API Examples", link: "/api-examples" },
      {
        text: "关于",
        items: [
          { text: "关于1", link: "/about/about1/" },
          { text: "关于2", link: "/about/about2/" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "React之旅", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
});
