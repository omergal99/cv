import React, { useState, useEffect, useRef } from 'react';

function MyAppsPreview({ project }) {

  const pText = useRef(null);
  const [pHeight, setPHeight] = useState('35px');
  const tags = project.tags.map(tag => {
    return <span key={tag}>{tag}</span>
  })

  useEffect(() => {
    pText.current.style.setProperty('--h', pText.current.clientHeight + 2 + 'px');
    const updatePHeight = () => {
        pText.current.style.setProperty('--h', pText.current.clientHeight + 2 + 'px');
    };
    var resizeId;
    window.addEventListener('resize', () => {
      clearTimeout(resizeId);
      resizeId = setTimeout(updatePHeight, 200);
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
            <p ref={pText}>{project.description}</p>
            <div className="links">
              <a href={project.links.github}><img src="assets/img/icons/github-logo.png" alt="Github" title="Github" /></a>
              <a href={project.links.website}><img src="assets/img/icons/web.png" alt="Website" title="Website" /></a>
            </div>
            <div className="tags">{tags}</div>
          </div>
        </div>
      </div>
    </li>
  );
}

export default React.memo(MyAppsPreview)