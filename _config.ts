import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";

const site = lume({
  src: "./src",
  location: new URL("https://glaucuslinux.org"),
});

site.use(minifyHTML());
site.use(lightningCss());
site.use(sitemap());

site.copy("assets", "/");

export default site;
