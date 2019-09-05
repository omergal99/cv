import React from 'react';

function SocialNetworkPreview({ socialNetwork }) {

  return (
    <li className="network">
      <div className="net-icon">
        <a href={socialNetwork.link}>
          <img src={socialNetwork.icon} alt={socialNetwork.title} title={`Link My ${socialNetwork.title}`} />
        </a>
      </div>
      {/* <h3 className="title">{socialNetwork.title}</h3> */}
      <div className="photo">
        <img src={socialNetwork.img} alt={socialNetwork.title} title={socialNetwork.title} />
      </div>
    </li>
  );
}

export default React.memo(SocialNetworkPreview)
