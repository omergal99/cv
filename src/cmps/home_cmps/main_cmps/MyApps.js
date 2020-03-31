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

  const showProjects = projects
    ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
    : empty12.map((empty, idx) => <MyAppsPreview project={emptyProj} key={idx} />);

  const corona = {
    _id: 'corona',
    name: 'Hello Corona',
    description: 'Impressive view of the world countries on Map.\nCheck status of your country situation by the Corona virus',
    desktopImg: 'assets/img/apps/hello corona/desktop.png',
    mobileImg: 'assets/img/apps/hello corona/mobile.png',
    links: { github: 'https://github.com/omergal99/hello-corona', website: 'https://omergal99.github.io/hello-corona' },
    tags: ['React', 'Hooks', 'Redux', 'Responsive', 'SVG-Map', 'Corona virus', 'Heroku API']
  }

  return (
    <div className="projects">
      <h2>My projects</h2>
      <p>All my projects I made. Some with Server and DB, Responsive design.</p>
      <div className="hello-corona">
        <MyAppsPreview project={corona} key={corona._id} />
      </div>
      <ul className="my-apps">
        {showProjects}
      </ul>
    </div>
  );

}

export default React.memo(MyApps)