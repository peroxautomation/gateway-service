const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const proxy = require("express-http-proxy");
const { errorHandler } = require("./middleware/errorMiddleware.js");

const app = express();
// Middlewares
app.use(cors());
app.use(express.json());
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const user_api = process.env.USERS_API
const analytics_api = process.env.ANALYTICS_API
const auth_api = process.env.AUTH_API
const challenges_api = process.env.CHALLENGES_API
const covers_api = process.env.COVERS_API
const messages_api = process.env.MESSAGES_API
const moderation_api = process.env.MODERATION_API
const notification_api = process.env.NOTIFICATION_API
const payments_api = process.env.PAYMENTS_API
const playlists_api = process.env.PLAYLISTS_API
const recommendations_api = process.env.RECOMMENDATIONS_API
const search_api = process.env.SEARCH_API
const admin_api = process.env.ADMIN_API
const landing_api = process.env.LANDING_API


app.use("/api/users", proxy("http://localhost:4001"));
app.use("/api/analytics", proxy("http://localhost:4002"));
app.use("/api/auth", proxy("http://localhost:4003"));
app.use("/api/challenges", proxy("http://localhost:4004"));
app.use("/api/covers", proxy("http://localhost:4005"));
app.use("/api/messages", proxy("http://localhost:4006"));
app.use("/api/moderation", proxy("http://localhost:4007"));
app.use("/api/notifications", proxy("http://localhost:4008"));
app.use("/api/payments", proxy("http://localhost:4009"));
app.use("/api/playlists", proxy("http://localhost:4010"));
app.use("/api/recommendations", proxy("http://localhost:4011"));
app.use("api/search", proxy("http://localhost:40012"));
app.use("/api/admin", proxy("http://localhost:4013"));
app.use("/api/landing", proxy("http://localhost:4014"));


app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
