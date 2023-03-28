import { legacy_createStore as createStore } from "redux";

import clientReducer from "./reducers";




const store = createStore(clientReducer)




export default store