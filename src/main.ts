import * as dotenv from "dotenv";
dotenv.config();

import * as _ from "lodash";
import * as visapi from "./visapi";
import * as express from "express";
import * as vars from "./vars";

var app = express()

/**
 * @api {get} /api/gamelog
 * @apiName GetGamelog
 * @apiGroup Visapi
 * @apiDescription Retrieve gamelog of most recent unvisualized finished game from the database
 * 
 * @apiParam {Number} [time] Optional Time to get gamelog before
 * 
 * @apiSuccess (200) {String} gamelog Gamelog file.
 * @apiSuccess (204) NoContent No gamelog was available.
 * @apiError (400) BadRequest Something went wrong.
 */
app.get('/api/gamelog', function (req, res) {
    const time: number = req.query.time;
    
    // if time was given get gamelog using time
    let p = _.isNil(time) ? visapi.getGamefile() : visapi.getGamefileBeforeTime(time)

    p.then((gameObjects) => {
            if (_.isNil(gameObjects)) {
                return res.status(204).send('Gamelog Not Found');
            }
            res.status(200).send(gameObjects.gamelog);
        })
        .catch(err => {
            res.status(400).send();
        });
})