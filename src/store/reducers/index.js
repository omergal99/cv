import OmerStore from './OmerStore'
import ProjectsStore from './ProjectsStore'
import UserStore from './UserStore'

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    omerStore: OmerStore,
    projectsStore: ProjectsStore,
    userStore: UserStore
});

export default rootReducer;