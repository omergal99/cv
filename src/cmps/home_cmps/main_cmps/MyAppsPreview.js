import React, { useEffect, useRef } from 'react';
function MyAppsPreview({ project }) {

  const pText = useRef(null);
  const tags = project.tags.map(tag => {
    return <span key={tag}>{tag}</span>
  })

  useEffect(() => {
    let windowWidth = window.innerWidth;
    pText.current.style.setProperty('--h', pText.current.clientHeight + 2 + 'px');
    const updatePHeight = () => {
      if (pText.current) pText.current.style.setProperty('--h', pText.current.clientHeight + 2 + 'px');
    };
    window.addEventListener('resize', (ev) => {
      if (windowWidth !== ev.currentTarget.innerWidth) {
        windowWidth = ev.currentTarget.innerWidth;
        updatePHeight();
      }
    });
    return () => {
      window.removeEventListener('resize', updatePHeight);
    }
  }, []);

  return (
    <li className="my-app">
      <div className="wrap-img">
        <img className="desktop" src={project.desktopImg} alt="Desktop" title={project.name} />
        {project.mobileImg &&
          <img className="mobile" src={project.mobileImg} alt="Mobile" title={project.name} />
        }
      </div>
      <div className="summary">
        <div className="container">
          <div className="explain">
            <h4>{project.name}</h4>
            <p className="text" ref={pText}>{project.description}</p>
            <div className="links" style={{ height: project.links.github ? '' : '2rem' }}>
              {project.links.github &&
                <a href={project.links.github}>
                  <img src="assets/img/icons/github-logo.png" alt="Github" title="Github" />
                </a>
              }
              <a href={project.links.website} title={project.links.website} >
                <span>Web</span>
              </a>
              {project.links.gcp &&
                <a href={project.links.gcp} title={project.links.gcp} >
                  <span>GCP</span> 
                </a>
              }
            </div>
            <div className="tags">{tags}</div>
          </div>
        </div>
      </div>
    </li >
  );
}

export default React.memo(MyAppsPreview)