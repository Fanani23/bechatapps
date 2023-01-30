const express = require("express");
const router = express.Router();
const { userController } = require("../controllers/users");
const { user } = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/all", userController.getAll);
router.put("/edit", user, upload.single("photo"), userController.update);
router.put(
  "/edit/photo",
  user,
  upload.single("photo"),
  userController.updatePhoto
);
router.get(`/profile`, user, userController.profile);

module.exports = router;
