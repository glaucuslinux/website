import lume from "lume/mod.ts";
import minifyHTML from "lume/plugins/minify_html.ts";
import lightningCss from "lume/plugins/lightningcss.ts";
import sitemap from "lume/plugins/sitemap.ts";
import picture from "lume/plugins/picture.ts";
import transformImages from "lume/plugins/transform_images.ts";
import svgo from "lume/plugins/svgo.ts";

const site = lume({
  src: "./src",
  location: new URL("https://glaucuslinux.org"),
});

site.use(minifyHTML());
site.use(lightningCss());
site.use(sitemap());
site.use(picture());
site.use(transformImages());
site.use(svgo());

site.copy("assets", "/");

export default site;
