import thunk from "redux-thunk";
import logger from "./logger";
import { applyMiddleware } from "redux";

const middleWares = [thunk, logger];
export default applyMiddleware(...middleWares);
