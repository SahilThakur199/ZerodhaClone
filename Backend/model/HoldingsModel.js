const {model, default: mongoose} = require("mongoose");
const {HoldingSchema} = require("../Schema/schema");

const HoldingModel = model("Holding", HoldingSchema);
module.exports = HoldingModel;
