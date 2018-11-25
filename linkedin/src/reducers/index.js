import { combineReducers } from "redux";
import LoginReducer from "./LoginReducer";
import signupreducer from "./signupreducer";
import jobResultsReducer from './jobResultsReducer';
import jobSearchReducer from './jobSearchReducer'
import { reducer as formReducer } from "redux-form";
import jobsLandingPageReducer from './jobsLandingPageReducer';

const rootReducer = combineReducers({
  Login: LoginReducer,
  form: formReducer,
  signup: signupreducer,
  jobResultsStateStore : jobResultsReducer,
  jobSearchFieldsStateStore : jobSearchReducer,
  jobsLandingPageStateStore : jobsLandingPageReducer
});

export default rootReducer;
