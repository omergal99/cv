import React from 'react';

import SocialNetworkPreview from './SocialNetworkPreview';

function SocialNetworks({ socialNetworks = [] }) {

  // return (
  //   <div className="social-networks">
  //     SocialNetworks
  //   </div>
  // );

  const showSocialNetworks = socialNetworks.map(socialNetwork => {
    return <SocialNetworkPreview socialNetwork={socialNetwork} key={socialNetwork._id} />
  })

  return (
    <div className="social-networks">
      <ul className="networks">
        {showSocialNetworks}
      </ul>
    </div>
  );

}

export default React.memo(SocialNetworks)