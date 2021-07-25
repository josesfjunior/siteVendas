const mongoose = require("mongoose");
mongoose
  .connect("mongodb://db:27017/teste", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then((result) => {
    console.log("Db conectado");
  })
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;
module.exports = mongoose;
