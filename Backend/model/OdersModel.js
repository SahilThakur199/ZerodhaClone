const {model} = require("mongoose");
const {OdersSchema} = require("../Schema/Oders");

const OdersModel = model("Oders", OdersSchema);
module.exports = OdersModel;
