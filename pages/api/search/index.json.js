
export default async (req, res) => {
  res.writeHead(404, {
    "Content-Type": "text/xml"
  });
    res.status(200)
    res.end("xml")
  }
    