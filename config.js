"use strict";

/**
 * config.js
 * -------------
 * Mock database configuration and connection helper.
 * This file simulates how an app might store and use
 * configuration values for connecting to a database.
 *
 * NOTE: These values are NOT secure and are only for practice.
 */


const DB_USER = "admin";          // database username
const DB_PASSWORD = "password123"; // database password (mock only)
const DB_HOST = "localhost";       // where the DB server is running
const DB_PORT = 5432;              // example PostgreSQL port
const DB_NAME = "sample_app_db";   // example database name

// Build a URL-style connection string from the pieces above
const DB_URL = `postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`;

// Central configuration object for the database
const dbConfig = {
  user: DB_USER,
  password: DB_PASSWORD,
  host: DB_HOST,
  port: DB_PORT,
  database: DB_NAME,
  url: DB_URL,
  poolSize: 10,             // max number of connections in the pool
  ssl: false,               // mock flag for enabling SSL or not
  connectionTimeoutMs: 5000 // how long to wait before giving up
};

/**
 * getDbConfig
 * -----------
 * Returns a copy of the base database configuration.
 * Optional "overrides" let us change some values at runtime.
 *
 * @param {Object} overrides - values to override in the base config
 * @returns {Object} - merged database configuration
 */
function getDbConfig(overrides = {}) {
  // Spread syntax creates a new object (avoids mutating dbConfig)
  return {
    ...dbConfig,
    ...overrides
  };
}

/**
 * mockConnectToDatabase
 * ---------------------
 * Simulates a database connection using the configuration object.
 * In a real application, this is where you would call your DB driver.
 *
 * @param {Object} config - database configuration to use
 * @returns {Object} - mock connection result
 */
function mockConnectToDatabase(config = dbConfig) {
  // Very simple "validation" for demo purposes
  if (!config.user || !config.password) {
    throw new Error("Database credentials are missing from config.");
  }

  // Simulate a successful connection object
  return {
    status: "connected",
    driver: "mock-driver",
    connectedTo: config.url,
    startedAt: new Date().toISOString(),
    options: {
      poolSize: config.poolSize,
      ssl: config.ssl,
      timeout: config.connectionTimeoutMs
    }
  };
}

// Export values so other files can use them with require() or import
module.exports = {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DB_URL,
  dbConfig,
  getDbConfig,
  mockConnectToDatabase
};
