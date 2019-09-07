import React from 'react';

import MyAppsPreview from './MyAppsPreview';

function MyApps({ projects }) {

  const showProjects = projects ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
    : <div style={{ gridColumn: '1/5' }}>'Wait for the Projects..'</div>

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