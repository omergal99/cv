import React from 'react';

function SocialNetworkPreview({ socialNetwork }) {

  return (
    <li className="network">
      <div className="net-icon">
        <a href={socialNetwork.link}>
          <img src={socialNetwork.icon} alt={socialNetwork.title} title={`Link My ${socialNetwork.title}`} />
        </a>
      </div>
      <div className="photo">
        <a href={socialNetwork.link}>
          <img src={socialNetwork.img} alt={socialNetwork.title} title={socialNetwork.title} />
        </a>
      </div>
    </li>
  );
}

export default React.memo(SocialNetworkPreview)
