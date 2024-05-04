import axios from "axios";

export default async (req, res) => {
  const bibleversescript = await axios.get("https://dailyverses.net/get/verse.js?language=nbv");
  const bibleversesplitted1 = bibleversescript.data.split("\\u003cdiv");
  const bibleverse = bibleversesplitted1[1].split("\\u003e")[1].replace("\\u003c/div", "");
  const author = bibleversesplitted1[2].split("target=\\")[1].replace(`"_blank\\"\\u003e`, "").split("\\u003c")[0]
  console.log()
  const bibleData = {
    verse: bibleverse,
    slug: author
  };
  res.json(bibleData)
  res.end()
}
    