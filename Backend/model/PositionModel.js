const { model } = require("mongoose");
const { PositionSchema } = require("../Schema/PositionSchema");

const PositionModel = model("Position", PositionSchema);
module.exports = PositionModel;
