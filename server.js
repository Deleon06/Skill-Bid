import express from "express"
import cors from "cors"
import morgan from "morgan"
import db from "./db/index.js"
import routes from "./routes/index.js"


const app = express();
const PORT = process.env.PORT || 4567;

const whitelist = ["https://awesome-jepsen-f2cb4f.netlify.app/"];
const corsOptions = {
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(
                new Error("Not allowed by CORS; origin domain needs to be added to whitelist.")
            );
        }
    },
};

app.use(express.json());
app.use(cors(corsOptions)); 
app.use(morgan("dev"));

app.use("/api", routes)

app.get("/", (req, res) => res.send("<h1>API DOCUMENTATION<h1>"))


db.on("connected", () => {
  console.log("Connected to MongoDB")
  app.listen(PORT, () => console.log(`Connected on port: ${PORT}`));
})