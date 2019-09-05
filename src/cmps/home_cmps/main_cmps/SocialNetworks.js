import React from 'react';

import SocialNetworkPreview from './SocialNetworkPreview';

function SocialNetworks({socialNetworks}) {

  // return (
  //   <div className="social-networks">
  //     SocialNetworks
  //   </div>
  // );

  const showSocialNetworks = socialNetworks ?
  socialNetworks.map(socialNetwork => <SocialNetworkPreview socialNetwork={socialNetwork} key={socialNetwork._id} />)
  : <div>'Wait time Social Network..'</div>

return (
  <div className="social-networks">
    <ul className="networks">
      {showSocialNetworks}
    </ul>
  </div>
);

}

export default React.memo(SocialNetworks)