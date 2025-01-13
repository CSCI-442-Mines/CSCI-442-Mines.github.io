/**
 * @file VitePress theme configuration
 * @see https://vitepress.dev/guide/custom-theme
 */

import type {Theme} from "vitepress";
import DefaultTheme from "vitepress/theme";
import Layout from "./Layout.vue";
import "./style.css";

export default {
  Layout,
  extends: DefaultTheme,
} satisfies Theme;
