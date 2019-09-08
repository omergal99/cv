import React from 'react';

import MyAppsPreview from './MyAppsPreview';

function MyApps({ projects }) {

  const empty12 = Array.from(Array(12));

  const emptyProj = {
    name: 'Project Name',
    description: 'Description',
    desktopImg: '',
    mobileImg: '',
    links: { github: '', website: '' },
    tags: []
  }

  const showProjects = projects ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
    : empty12.map((empty, idx) => <MyAppsPreview project={emptyProj} key={idx} />)

  // const showProjects = projects ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
  //   : <div style={{ gridColumn: '1/5' }}>'Wait for the Projects..'</div>

  return (
    <div className="projects">
      <h2>My projects</h2>
      <p>All my projects I made. Some with Server and DB, Responsive design.</p>
      <ul className="my-apps">
        {showProjects}
      </ul>
    </div>
  );

}

export default React.memo(MyApps)