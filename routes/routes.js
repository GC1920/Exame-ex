const routes = require("express").Router();
const TaskController = require("../controller/TaskController");

routes.get("/", TaskController.getAll);
routes.post("/create", TaskController.createTask);
routes.get("/getById/:id/:method", TaskController.getById);
routes.post("/updateOne/:id", TaskController.updateTask);
routes.get("/deleteOne/:id", TaskController.deleteTask);
routes.get("/check/:id", TaskController.taskCheck);

module.exports =  routes;