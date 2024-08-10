import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
// import productRoutes from "./routes/productRoutes.js";
// import orderRoutes from "./routes/orderRoutes.js";
// import adminRoutes from "./routes/adminRoutes.js";
// import { notFound, errorHandler } from "./middlewares/errorMiddleware.js";

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middleware to parse JSON data in the body
app.use(express.json());

// Define routes
// app.use("/api/products", productRoutes);
// app.use("/api/orders", orderRoutes);
// app.use("/api/admin", adminRoutes);

// Error handling middleware
// app.use(notFound);
// app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
