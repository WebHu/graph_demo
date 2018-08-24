var express = require('express');
var router = express.Router();
var   { graphql } =require('graphql');
var Schema =require('../schema/user_schema');
router.post('/findUser', (req, res) => {
    let body=req.body;
    graphql(Schema, body.graphql)
        .then((result) => {
            res.send(JSON.stringify(result, null, 2));
        })
});

module.exports = router;

