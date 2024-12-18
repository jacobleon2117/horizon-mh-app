const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Appointment = require("../models/Appointment");
const { check, validationResult } = require("express-validator");

/**
 * @swagger
 * /api/appointments:
 *   post:
 *     tags: [Appointments]
 *     summary: Create a new appointment
 *     security:
 *       - bearerAuth: []
 */
router.post(
  "/",
  auth,
  [
    check("therapist", "Therapist is required").not().isEmpty(),
    check("date", "Date is required").not().isEmpty(),
    check("type", "Appointment type is required").isIn([
      "video",
      "phone",
      "in-person",
    ]),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const appointment = new Appointment({
        ...req.body,
        patient: req.user._id,
      });

      await appointment.save();

      res.status(201).json({
        status: "success",
        data: { appointment },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error creating appointment",
      });
    }
  }
);

/**
 * @swagger
 * /api/appointments:
 *   get:
 *     tags: [Appointments]
 *     summary: Get user's appointments
 *     security:
 *       - bearerAuth: []
 */
router.get("/", auth, async (req, res) => {
  try {
    const appointments = await Appointment.find({
      $or: [{ patient: req.user._id }, { therapist: req.user._id }],
    })
      .populate("therapist", "fullName email")
      .populate("patient", "fullName email")
      .sort({ date: 1 });

    res.json({
      status: "success",
      data: { appointments },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching appointments",
    });
  }
});
