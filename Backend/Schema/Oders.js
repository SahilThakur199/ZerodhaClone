const {Schema} = require("mongoose");
const OdersSchema = new Schema({
    name: { type: String,  },
    qty: { type: Number,  },
    price: { type: Number,  },
    mode: { type: String,  },
});
module.exports = { OdersSchema };
