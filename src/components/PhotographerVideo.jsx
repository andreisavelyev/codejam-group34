import React from 'react';
import BigPicture from 'react-bigpicture';

function PhotographerVideo({ video }) {
  return (
    <BigPicture
      type='youtube'
      src={`https://www.youtube.com/watch?v=${video}`}
    >
      <img
        className='director-video'
        src={`https://img.youtube.com/vi/${video}/hqdefault.jpg`}
        alt='video'
      />
    </BigPicture>
  );
}

export default PhotographerVideo;
