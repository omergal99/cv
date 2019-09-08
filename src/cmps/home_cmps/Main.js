import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import actions from '../../store/actions';

import MyApps from './main_cmps/MyApps';
import Background from './main_cmps/Background';
import Knowledge from './main_cmps/Knowledge';
import Technology from './main_cmps/Technology';
import SocialNetworks from './main_cmps/SocialNetworks';
import AboutMe from './main_cmps/AboutMe';

function Main() {

  const dispatch = useDispatch();
  const projects = useSelector(state => state.projectsStore.projects);
  const timePoints = useSelector(state => state.omerStore.timePoints);
  const socialNetworks = useSelector(state => state.omerStore.socialNetworks);

  useEffect(() => {
    dispatch(actions.loadProjects());
    dispatch(actions.loadOmerStore());
  });

  return (
    <div className="main">
      <MyApps projects={projects} />
      <Background timePoints={timePoints} />
      <Knowledge />
      <Technology />
      <SocialNetworks socialNetworks={socialNetworks} />
      <AboutMe />
    </div>
  );
}

export default React.memo(Main)