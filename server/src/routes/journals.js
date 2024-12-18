const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Journal = require("../models/Journal");

/**
 * @swagger
 * /api/journals:
 *   post:
 *     tags: [Journals]
 *     summary: Create a new journal entry
 *     security:
 *       - bearerAuth: []
 */
router.post(
  "/",
  auth,
  [
    check("title", "Title is required").not().isEmpty(),
    check("content", "Content is required").not().isEmpty(),
    check("mood", "Valid mood is required").isIn([
      "happy",
      "sad",
      "angry",
      "anxious",
      "calm",
      "stressed",
      "neutral",
    ]),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const journal = new Journal({
        ...req.body,
        user: req.user._id,
      });

      await journal.save();

      res.status(201).json({
        status: "success",
        data: { journal },
      });
    } catch (error) {
      res.status(500).json({
        status: "error",
        message: "Error creating journal entry",
      });
    }
  }
);

/**
 * @swagger
 * /api/journals:
 *   get:
 *     tags: [Journals]
 *     summary: Get user's journal entries
 *     security:
 *       - bearerAuth: []
 */
router.get("/", auth, async (req, res) => {
  try {
    const journals = await Journal.find({ user: req.user._id }).sort({
      createdAt: -1,
    });

    res.json({
      status: "success",
      data: { journals },
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Error fetching journal entries",
    });
  }
});

module.exports = router;
