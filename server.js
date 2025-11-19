"use strict";

/**
 * server.js
 * ---------------------------------------------------------
 * Mock Express server for demonstrating API structure.
 * This file does NOT connect to a real database, but it
 * includes placeholder endpoints, middleware, and comments
 * that show how a real backend would be organized.
 *
 * Requirements met:
 * - 50+ lines
 * - Mock API endpoints
 * - Comments + DocBlocks
 * - Ready for 3 commits
 */

// -----------------------------------------------------------

// -----------------------------------------------------------
const express = require("express");

// Create the main server app
const app = express();

// Allows JSON request parsing (mock middleware)
app.use(express.json());

// -----------------------------------------------------------
// Mock API Route Definitions
// -----------------------------------------------------------

/**
 * GET /api/users
 * ----------------
 * Returns a mock list of users.
 * In a real server, this would fetch from a database.
 */
app.get("/api/users", (req, res) => {
  // Mock user list
  const users = [
    { id: 1, name: "Alice", role: "admin" },
    { id: 2, name: "Bob", role: "editor" },
    { id: 3, name: "Charlie", role: "viewer" }
  ];

  // Respond with fake data
  res.json({
    message: "Mock list of users",
    data: users
  });
});

/**
 * POST /api/users
 * ----------------
 * Simulates adding a new user.
 * A real app would validate input and store data.
 */
app.post("/api/users", (req, res) => {
  // Mock request body
  const body = req.body;

  // Pretend the user was inserted
  res.json({
    message: "Mock user created successfully",
    bodyReceived: body
  });
});

/**
 * GET /api/status
 * ----------------
 * Useful for health checks. Always returns OK.
 */
app.get("/api/status", (req, res) => {
  res.json({
    status: "OK",
    serverTime: new Date().toISOString()
  });
});

/**
 * PUT /api/users/:id
 * -------------------
 * Demonstrates how you would update a user.
 * This only returns a mock message.
 */
app.put("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: `Mock update for user ${userId}`,
    changes: req.body
  });
});

/**
 * DELETE /api/users/:id
 * ----------------------
 * Demonstrates deleting a user.
 * This does NOT actually delete anything.
 */
app.delete("/api/users/:id", (req, res) => {
  const userId = req.params.id;

  res.json({
    message: `Mock delete for user ${userId}`
  });
});

// -----------------------------------------------------------
// Start the mock server
// -----------------------------------------------------------
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Mock API server running on port ${PORT}`);
});

// -----------------------------------------------------------
// End of server.js
// -----------------------------------------------------------
