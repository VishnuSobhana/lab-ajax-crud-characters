const router = require("express").Router();
const Character = require("../models/Character.model");
/**
 * !All the routes here are prefixed with /api/characters
 */

/**
 * ? This route should respond with all the characters
 */
router.get("/", async (req, res, next) => {
  /**Your code goes here */
  try {
    const allCharacters = await Character.find();
    res.json(allCharacters);
  } catch (error) {
    next(error);
  }
});

/**
 * ? This route should create one character and respond with
 * ? the created character
 */
router.post("/", (req, res, next) => {
  /**Your code goes here */
 
});

/**
 * ? This route should respond with one character
 */
router.get("/:id", async(req, res, next) => {
  /**Your code goes here */
  const allCharacters = await Character.findById(req.params.id);
  res.json(allCharacters);
});

/**
 * ? This route should update a character and respond with
 * ? the updated character
 */
router.patch("/:id",async (req, res, next) => {
  /**Your code goes here */
  const { id } = req.params;
  const characterToUpdate = req.body;
  try {
    if (!characterToUpdate) {
      res.json({
        errorMessage: 'Character not found',
      });
    }

    const updatedCharacter = await Character.findByIdAndUpdate(
      id,
      characterToUpdate,
      { new: true }
    );
    res.status(200).json(updatedCharacter);
  } catch (error) {
    next(error);
});

/**
 * ? Should delete a character and respond with a success or
 * ? error message
 */
router.delete("/:id", (req, res, next) => {
  /**Your code goes here */
  const { id } = req.params;
  console.log(id);
  try {
    await Character.findByIdAndDelete(id);
    res.json({ message: `D ${req.params.id} was successfully deleted` });
  } catch (error) {
    next(error);
  }
});

module.exports = router;
