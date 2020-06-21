var express = require("express");
var router = express.Router();
const Notice = require("../../../models/notice");
router.get('/', (req, res) => {
    const noticeList = [];

    Notice.find({}).sort({ createdAt: -1 }).exec()
        .then(r => {
            res.send(r)
        })
        .catch(e => {
            console.error(e);
        })
    // console.log(noticeList)
    // console.log(noticeList)
    // res.send(noticeList)
})

module.exports = router;