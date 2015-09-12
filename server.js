var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var verify = require('marijuana-verify');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.route('/greenLife/:recId')
    .get(function(req, res) {
        verify.greenlife({recId: req.params.recId}, function (err, card) {
            if (err) {
                res.json(err)
            }

            if (card.isValid) {
                res.json(card);
            } else {
                res.json("Recommendation ID is not valid.");
            }
        });
    });

router.route('/patientIdCenter/:recId/:californiaId')
    .get(function(req, res) {
        verify.patientIdCenter({recId: req.params.recId, californiaId: req.params.californiaId}, function (err, card) {
            if (err) {
                res.json(err)
            }

            if (card.isValid) {
                res.json(card);
            } else {
                res.json("Recommendation ID is not valid.");
            }
        });
    });

app.use('/api', router);
app.use(express.static(__dirname + '/public'));

app.listen(port);
console.log('Server running on port ' + port);