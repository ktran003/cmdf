const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

const Passage = require("@passageidentity/passage-node");

const passageConfig = {
    appID: process.env.PASSAGE_APP_ID
};

// example of passage middleware
let passage = new psg(passageConfig);
let passageAuthMiddleware = (() => {
    return async (req, res, next) => {
        try {
            let userID = await passage.authenticateRequest(req);
            if (userID) {
                // user authenticated
                res.userID = userID;
                next();
            }
        } catch (e) {
            // failed to authenticate
            // we recommend returning a 401 or other "unauthorized" behavior
            console.log(e);
            res.status(401).send('Could not authenticate user!');
        }
    }
})();

app.get("/authenticatedRoute", passageAuthMiddleware, async (req, res) => {
    let userID = res.userID
    // do authenticated things... 
});