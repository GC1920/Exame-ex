const mongoose = require('mongoose');

const connectToDb = () => {
    mongoose.connect(
        "mongodb+srv://root:admin@todolist.3vmj1.mongodb.net/?retryWrites=true&w=majority",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    )
    .then(() => console.log("Que a força esteja com você"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;