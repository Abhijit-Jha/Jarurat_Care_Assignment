const express = require("express");
const healthModel = require("./db");
const InputSchema = require("./zod");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allServices = await healthModel.find();
    res.json(allServices);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.post("/", async (req, res) => {
  try {
    const { name, description, price } = req.body;

    const isValid = InputSchema.safeParse({ name, description, price });
    if (!isValid.success) {
      return res.json({
        message: "Invalid Inputs, Please Provide Proper Input",
        error: isValid.error.issues[0].message,
      });
    }

    const newService = new healthModel({ name, description, price });
    await newService.save();

    res.json({
      message: "Created",
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      error: "Something went wrong",
    });
  }
});

app.delete("/:serviceId", async (req, res) => {
  const sId = req.params.serviceId;
  try {
    const service = await healthModel.findOneAndDelete({
      serviceId: sId,
    });

    if (!service) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.json({ message: "Service deleted successfully", service });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Failed to delete service",
    });
  }
});

app.patch("/:serviceId", async (req, res) => {
  const sId = req.params.serviceId;
  const { name, description, price } = req.body;

  try {
    const updatedService = await healthModel.findOneAndUpdate(
      {
        serviceId: sId,
      },
      {
        $set: {
          name,
          description,
          price,
        },
      },
      { new: true }
    );

    if (!updatedService) {
      return res.status(404).json({
        message: "Service not found",
      });
    }

    res.json({
      message: "Service updated successfully",
      updatedService,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to update service",
    });
  }
});

module.exports = app;
