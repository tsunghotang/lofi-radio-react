import React from 'react';

function ChannelInfo({ channelName, status }) {
  return (
    <header className={`channel-info ${status ? 'channel-info--animation' : ''}`}>
      <h1 className="channel-info__title channel-info__title--shadow">{channelName}</h1>
      <div className="channel-info__underline" />
    </header>
  );
}

export default React.memo(ChannelInfo);
