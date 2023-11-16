import express from "express";
import {update,create, fetch, deleteUser } from "../controller/userController.js";

const route = express.Router();

route.get("/fetch", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);
export default route;