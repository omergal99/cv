import React from 'react';

import MyAppsPreview from './MyAppsPreview';

const emptyProjects = Array.from(Array(12));

const emptyProject = {
  name: 'Project Name',
  description: 'Description',
  desktopImg: '',
  mobileImg: '',
  links: { github: '', website: '' },
  tags: []
}

const corona = {
  _id: 'corona',
  name: 'Hello Corona',
  description: 'Impressive view of the world countries on Map.\nCheck status of your country situation by the Corona virus.\nCheck the color changer, open the speakers and select country, play with the map and graph data.',
  desktopImg: 'assets/img/apps/hello corona/desktop.png',
  mobileImg: 'assets/img/apps/hello corona/mobile.png',
  links: { github: 'https://github.com/omergal99/hello-corona', website: 'https://omergal99.github.io/hello-corona' },
  tags: ['React', 'Hooks', 'Redux', 'Responsive', 'SVG-Map', 'Corona virus', 'Heroku API']
}


function MyApps(props) {
  const { projects } = props;
  return (
    <div className="projects">

      <h2>Corona Virus App (Covid-19)</h2>
      <p>With information about the infecteds in each country</p>
      <div className="hello-corona">
        <MyAppsPreview project={corona} key={corona._id} />
      </div>

      <h2>More Projects</h2>
      <p>All my projects I made. Some with Server and DB, Responsive design</p>
      <ul className="my-apps">
        {projects
          ? projects.map(project => <MyAppsPreview project={project} key={project._id} />)
          : emptyProjects.map((_, idx) => <MyAppsPreview project={emptyProject} key={idx} />)}
      </ul>
    </div>
  );

}

export default React.memo(MyApps)