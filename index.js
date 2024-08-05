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

const user_api = process.env.USERS_API;
const analytics_api = process.env.ANALYTICS_API;
const auth_api = process.env.AUTH_API;
const challenges_api = process.env.CHALLENGES_API;
const covers_api = process.env.COVERS_API;
const messages_api = process.env.MESSAGES_API;
const moderation_api = process.env.MODERATION_API;
const notification_api = process.env.NOTIFICATION_API;
const payments_api = process.env.PAYMENTS_API;
const playlists_api = process.env.PLAYLISTS_API;
const recommendations_api = process.env.RECOMMENDATIONS_API;
const search_api = process.env.SEARCH_API;
const admin_api = process.env.ADMIN_API;
const landing_api = process.env.LANDING_API;

app.use("/api/users", proxy(user_api));
app.use("/api/analytics", proxy(analytics_api));
app.use("/api/auth", proxy(auth_api));
app.use("/api/challenges", proxy(challenges_api));
app.use("/api/covers", proxy(covers_api));
app.use("/api/messages", proxy(messages_api));
app.use("/api/moderation", proxy(moderation_api));
app.use("/api/notifications", proxy(notification_api));
app.use("/api/payments", proxy(payments_api));
app.use("/api/playlists", proxy(playlists_api));
app.use("/api/recommendations", proxy(recommendations_api));
app.use("api/search", proxy(search_api));
app.use("/api/admin", proxy(admin_api));
app.use("/api/landing", proxy(landing_api));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
