import ProjectsService from '../../services/ProjectsService';


function loadProjects() {
  return async (dispatch) => {
    const projects = await ProjectsService.getProjects();
    // console.log(projects)
    if(projects){
      dispatch({ type: 'setProjects', payload: projects })
    }
  }
}

export default {
  loadProjects,
}