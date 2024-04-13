import express from "express";
import bodyParser from "body-parser";
import businessRoutes from "./api/routes/businessRoute.js";
import userRoutes from "./api/routes/userRoute.js";
import agentRoutes from "./api/routes/agentRoute.js";
import dbPromise from "./api/models/index.js";
import bookingRoute from "./api/routes/bookingRoute.js";
import schedulerRoute from "./api/routes/schedulerRoute.js";
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api", userRoutes);
app.use("/api", agentRoutes);
app.use("/api/client", bookingRoute);
app.use("/api/business", businessRoutes);
app.use("/api", schedulerRoute);

async function dbConnect() {
  try {
    const db = await dbPromise;
    await db.sequelize.sync();
    console.log("Database synchronized successfully.");
  } catch (error) {
    console.error("Failed to initialize database:", error);
    process.exit(1);
  }
}
dbConnect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
