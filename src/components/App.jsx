import React, { useState, useRef } from 'react';
import ReactPlayer from 'react-player/youtube';

import Overlay from './Overlay';
import ChannelInfo from './ChannelInfo';
import ChannelList from './ChannelList';
import PlayerControls from './PlayerControls';

import channels from '../data/channels';

function App() {
  const [playing, setPlaying] = useState(false);
  const [channel, setChannel] = useState(channels[0]);
  const [status, setStatus] = useState(false); // used for overlay.
  const [muted, setMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);

  // console.log(channel);
  // console.log(` STATUS: ${status}`);
  // console.log(` PLAYING: ${playing}`);

  const isFirstRun = useRef(true);

  // Functions
  const setIframeTabIndex = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      iframe.setAttribute('tabIndex', '-1');
    }
  };

  const switchChannel = (selectedChannel) => {
    if (selectedChannel.name !== channel.name) {
      // if the channel clicked is not the active channel then switch the channel
      setChannel(selectedChannel);
      setStatus(false);
    } else {
      // when paused clicking on the active channel resumes the video
      setPlaying(true);
      setStatus(true);
    }
  };

  const nextChannel = () => {
    const channelIndex = channels.findIndex((ch) => ch.name === channel.name);

    if (channelIndex === channels.length - 1) {
      setChannel(channels[0]);
    } else {
      setChannel(channels[channelIndex + 1]);
      setStatus(false);
    }
  };

  // React-Player callbacks
  const handleReady = () => {
    // used to circumvent play/pause bug due to autoplay rules
    if (isFirstRun.current) {
      setIframeTabIndex();
      isFirstRun.current = false;
      return;
    }

    setPlaying(true);
  };

  const handleStart = () => {
    if (!status) {
      setStatus(true);
    }
  };

  const handlePlay = () => {
    setPlaying(true);
    setStatus(true);
  };

  const handlePause = () => {
    setPlaying(false);
    setStatus(false);
  };

  return (
    <div className="main-wrapper">
      <div className="react-player-wrapper">

        <ReactPlayer
          url={channel.url}
          className="react-player"
          playing={playing}
          muted={muted}
          width="100%"
          height="100%"
          volume={volume}
          controls={false}
          onReady={handleReady}
          onStart={handleStart}
          onPlay={handlePlay}
          onPause={handlePause}
          config={{
            attributes: { tabIndex: -1 }
          }}

          // onEnded={handleEnded}
          // onBuffer={handleOnBuffer}
          // onPause={handlePause}
        />
      </div>
      <Overlay
        status={status}
        channel={channel}
      />
      <div className="channel-ui-wrapper">
        <div className="channel-list-and-info-wrapper">
          <ChannelList
            channelList={channels}
            activeChannel={channel}
            switchChannel={switchChannel}
          />
          <div className="channel-info-area">
            <ChannelInfo
              channelName={channel.name}
              status={status}
            />
          </div>
        </div>
      </div>
      <div className="controls-wrapper">
        <PlayerControls
          handlePlay={handlePlay}
          handlePause={handlePause}
          volume={volume}
          setVolume={setVolume}
          muted={muted}
          setMuted={setMuted}
          nextChannel={nextChannel}
          playing={playing}
        />
      </div>
    </div>
  );
}

export default App;
