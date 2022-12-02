const cors = require('cors');
const express = require('express');

const routes = require('../api/routes');
const database = require('../config/mongoConnect');
const bodyParser = require('body-parser');
const protect = require('../api/middlewares/authMiddleware');

const { SERVER_PORT, MONGO_URL } = process.env;

const processId = process.pid;
const app = express();

database.mongoConnection(MONGO_URL);

const urlencodedSaver = function (req, res, buffer, encoding) {
    if (buffer && buffer.length) {
        req.rawBody = buffer.toString(encoding || 'utf8');
    }
};

app.use((req, res, next) => {
    return protect(req, res, next);
});

app.use(cors());
app.use(express.json({
    limit: '10mb',
    extended: true
}));
app.use(
    bodyParser.urlencoded({
        verify: urlencodedSaver,
        limit: '2056B',// [key] 'longUrl=' have 8 bytes + [value] with the max value acceptable 2048 bytes = 2056 bytes
        extended: true
    })
);
app.use('/api/', routes);

app.use((error, _req, res, _next) => {
    const { message, status } = error;
    if (status < 500) {
        return res.status(status).json(message);
    }
    res.status(500).send('Something broke!');
});

app.listen(SERVER_PORT, () => {
    console.log(`Running on http://localhost:${SERVER_PORT} with ${processId}`);
});
