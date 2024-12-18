const User = require("../models/User");
const logger = require("../config/logger");
const { validationResult } = require("express-validator");

const authController = {
  register: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, fullName, userType } = req.body;

      let user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({
          status: "error",
          message: "User already exists",
        });
      }

      user = new User({
        email,
        password,
        fullName,
        userType: userType || "user",
      });

      const token = await user.generateAuthToken();

      logger.info(`New user registered: ${user.email}`);

      res.status(201).json({
        status: "success",
        data: { user, token },
      });
    } catch (error) {
      logger.error("Registration error:", error);
      res.status(500).json({
        status: "error",
        message: "Error creating user",
      });
    }
  },

  login: async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password } = req.body;

      const user = await User.findOne({ email });
      if (!user) {
        return res.status(401).json({
          status: "error",
          message: "Invalid credentials",
        });
      }

      const isMatch = await user.validatePassword(password);
      if (!isMatch) {
        return res.status(401).json({
          status: "error",
          message: "Invalid credentials",
        });
      }

      user.lastLogin = new Date();
      await user.save();

      const token = await user.generateAuthToken();

      logger.info(`User logged in: ${user.email}`);

      res.json({
        status: "success",
        data: { user, token },
      });
    } catch (error) {
      logger.error("Login error:", error);
      res.status(500).json({
        status: "error",
        message: "Error logging in",
      });
    }
  },

  logout: async (req, res) => {
    try {
      req.user.tokens = req.user.tokens.filter(
        (token) => token.token !== req.token
      );
      await req.user.save();

      logger.info(`User logged out: ${req.user.email}`);

      res.json({
        status: "success",
        message: "Logged out successfully",
      });
    } catch (error) {
      logger.error("Logout error:", error);
      res.status(500).json({
        status: "error",
        message: "Error logging out",
      });
    }
  },

  getMe: async (req, res) => {
    try {
      res.json({
        status: "success",
        data: { user: req.user },
      });
    } catch (error) {
      logger.error("Get user error:", error);
      res.status(500).json({
        status: "error",
        message: "Error getting user data",
      });
    }
  },
};

module.exports = authController;
