const mongoose = require('mongoose');

const mongoConnection = async (DB_URL) =>
    mongoose
        .connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

const mongoClose = async () => mongoose.connection.close(false, () => {
    process.exit(0);
});

mongoose.connection.on('connected', () => {
    console.log('mongo running');
});

mongoose.connection.on('error', () => {
    console.log('mongo connection error');
});

mongoose.connection.on('disconnected', () => {
    console.log('mongo disconected');
});

module.exports = {
    mongoConnection,
    mongoClose,
};
