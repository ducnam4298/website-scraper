import scrape from "website-scraper";
const websiteUrl = "url web you want";

scrape({
  urls: [websiteUrl],
  urlFilter: function (url) {
    return url.indexOf(websiteUrl) === 0;
  },
  recursive: true,
  maxDepth: 50,
  prettifyUrls: true,
  filenameGenerator: "bySiteStructure",
  directory: "../template-clone",
})
  .then((data) => {
    console.log("Entire website successfully downloaded");
  })
  .catch((err) => {
    console.log("An error ocurred", err);
  });
