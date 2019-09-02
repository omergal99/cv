import React from 'react';

import MyAppsPreview from './MyAppsPreview';

function MyApps({ projects }) {

  const showProjects = projects ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
    : <div style={{ gridColumn: '1/5' }}>'Wait for the Projects..'</div>

  return (
    <ul className="my-apps">
      {showProjects}
    </ul>
  );

}

export default React.memo(MyApps)