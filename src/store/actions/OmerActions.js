import OmerService from '../../services/OmerService';


function loadTimePoints() {
  return async (dispatch) => {
    const timePoints = await OmerService.getTimePoints();
    dispatch({ type: 'setTimePoints', payload: timePoints })
  }
}

function loadSocialNetworks() {
  return async (dispatch) => {
    const socialNetworks = await OmerService.getSocialNetworks();
    dispatch({ type: 'setSocialNetworks', payload: socialNetworks })
  }
}

export default {
  loadTimePoints,
  loadSocialNetworks
}