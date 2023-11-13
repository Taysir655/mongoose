const express = require("express");
const Contact = require("../models/contactSchema");
const router = express.Router(); 

// @ DESCRIPTION : POST METHOD
router.post("/users", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(200).json({ msg: "success", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// @ DESCRIPTION : get METHOD
router.get("/users", async (req, res) => {
  try {
    const newContact = await Contact.find();
    res.status(200).json({ msg: "success", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// @ DESCRIPTION : GET BY ID METHOD
router.get("/users/:id", async (req, res) => {
  try {
    const newContact = await Contact.findById(req.params.id);
    if (!newContact) return res.status(404).json({ msg: "contact not found" });
    res.status(200).json({ msg: "success", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// @ DESCRIPTION : UPDATE METHOD
router.put("/users/:id", async (req, res) => {
  try {
    const newContact = await Contact.findByIdAndUpdate(
      { _id: req.params.id },
      { ...req.body }
    );
    if (!newContact) return res.status(404).json({ msg: "contact not found" });
    res.status(200).json({
      msg: "contact updated",
      newContact: { ...newContact._doc, ...req.body },
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

// @ DESCRIPTION : DELETE METHOD
router.delete("/users/:id", async (req, res) => {
  try {
    const newContact = await Contact.findByIdAndDelete(req.params.id);
    if (!newContact) return res.status(404).json({ msg: "contact not found" });
    res.status(200).json({ msg: "contact deleted", newContact });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
