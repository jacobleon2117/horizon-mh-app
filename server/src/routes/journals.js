import express from "express";
import { check, validationResult } from "express-validator";
import auth from "../middleware/auth.js";
import Journal from "../models/Journal.js";

const router = express.Router();

/**
 * @openapi
 * /api/journals:
 *   post:
 *     tags:
 *       - Journals
 *     summary: Create a new journal entry
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - content
 *               - mood
 *             properties:
 *               title:
 *                 type: string
 *               content:
 *                 type: string
 *               mood:
 *                 type: string
 *                 enum: [happy, sad, angry, anxious, calm, stressed, neutral]
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
 * @openapi
 * /api/journals:
 *   get:
 *     tags:
 *       - Journals
 *     summary: Get user's journal entries
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of user's journal entries
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                 data:
 *                   type: object
 *                   properties:
 *                     journals:
 *                       type: array
 *                       items:
 *                         type: object
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

export default router;
