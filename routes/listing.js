const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const listingController = require("../controllers/listing.js");
const multer  = require('multer');
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const mongoose = require("mongoose");

const validateObjectId = (req, res, next) => {
  if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
    req.flash("error", "Invalid listing ID");
    return res.redirect("/listings");
  }
  next();
};



router
.route("/")
.get( wrapAsync(listingController.index ))
.post(
  isLoggedIn,
  upload.single("listing[image]"),
  validateListing,
  wrapAsync(listingController.createListing)
);



//New route
router.get("/new", isLoggedIn, listingController.renderNewForm);

   router
  .route("/:id")
  .get(validateObjectId, wrapAsync(listingController.showListing))
  .put(
    validateObjectId,
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.updateListing)
  )
  .delete(
    validateObjectId,
    isLoggedIn,
    isOwner,
    wrapAsync(listingController.destroyListing)
  );


//Edit route
router.get(
  "/:id/edit",
  validateObjectId,
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm)
);



module.exports = router;