import CMS from "decap-cms-app";

CMS.registerPreviewTemplate("blog", ({ entry }) => {
  const image = entry.getIn(["data", "image"]);
  return `
    <div>
      <h1>${entry.getIn(["data", "title"])}</h1>
      ${image ? `<img src="${image}" style="max-width:100%;" />` : ""}
    </div>
  `;
});
