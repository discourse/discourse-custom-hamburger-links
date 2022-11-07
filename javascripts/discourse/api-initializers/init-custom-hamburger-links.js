import { apiInitializer } from "discourse/lib/api";

export default apiInitializer("0.8.18", (api) => {
  (settings.Hamburger_links || "").split("|").forEach((link) => {
    let [rawLabel, href, loc, target] = (link || "").split(",");
    let className = `custom-hamburger-link ${rawLabel
      .replace(/\s+/g, "-")
      .toLowerCase()}`;

    loc = "f" === loc ? "footerLinks" : "generalLinks";
    target = "blank" === target ? "_blank" : "";

    api.decorateWidget(`hamburger-menu:${loc}`, () => {
      return {
        href,
        rawLabel,
        className,
        attributes: { target },
      };
    });
  });
});
