import express from "express";
import serverless from "serverless-http";
import path from "node:path";

const app = express();
const port = process.env.PORT || 8000;

const publicPath = path.join(process.cwd(), "./public");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("./public"));

app.get("/", (req, res) => {
  return res.sendFile(publicPath + "/index.html");
});
app.get("/api", (req, res) => {
  return res
    .status(200)
    .json({ succuss: true, message: "Hello from the server!" });
});

//serverless deployment
export const handler = serverless(app);

// if (process.env.NODE_ENV === "development") {
//   app.listen(port, () => {
//     console.log(`Server is running on port ${port}`);
//   });
// }
