module.exports = (req, res, next) => {
    if (req.method === "POST") {
        req.body.createdAt = Date.now();
    }

    if (req.body.done) {
        req.body.finishedAt  = Date.now();
    } else {
        req.body.finishedAt = null;
    }
    next();
}
