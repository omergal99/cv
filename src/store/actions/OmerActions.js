import OmerService from '../../services/OmerService';


function loadTimePoints() {
  return async (dispatch) => {
    const timePoints = await OmerService.getTimePoints();
    dispatch({ type: 'setTimePoints', payload: timePoints })
  }
}

export default {
  loadTimePoints,  
}