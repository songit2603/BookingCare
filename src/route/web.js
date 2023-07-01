import express from "express"
import homeController from "../controllers/homeController";


let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    //rest api
    router.get('/hoidanit', (req, res) => {
        return res.send('hoi dan it')
    });

    return app.use("/", router);
}

module.exports = initWebRoutes;