import { apiInitializer } from "discourse/lib/api";

export default apiInitializer((api) => {
  (settings.Hamburger_links || "").split("|").forEach((link, index) => {
    let [rawLabel, href] = (link || "").split(",");

    api.addCommunitySectionLink((baseSectionLink) => {
      return class CustomSectionLink extends baseSectionLink {
        name = `custom-link-${index + 1}`;
        href = href;
        route = "";
        text = rawLabel;
        title = rawLabel;
      };
    }, false);
  });
});
