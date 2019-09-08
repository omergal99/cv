import OmerService from '../../services/OmerService';


function loadOmerStore() {
  return async (dispatch) => {
    const omerInit = await OmerService.getOmerInit();
    dispatch({ type: 'setOmerInit', payload: omerInit })
  }
}

export default {
  loadOmerStore,
}