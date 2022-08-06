import React, { useEffect } from 'react';

let prevVolume = 0.5;

function PlayerControls({
  handlePlay,
  handlePause,
  playing,
  volume,
  muted,
  setMuted,
  setVolume,
  nextChannel
}) {
  useEffect(() => {
    if (volume <= 0) {
      setMuted(true);
    } else if (muted) {
      setVolume(volume);
      setMuted(false);
    }
  }, [volume]);

  const handlePlayPause = () => {
    if (playing) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleVolumeChange = (e) => {
    setVolume(parseFloat(e.target.value));
  };

  const toggleMuted = () => {
    if (muted && volume === 0) {
      setMuted(false);
      setVolume(prevVolume);
    } else if (muted) {
      setVolume(prevVolume);
      setMuted(false);
    } else {
      prevVolume = volume;
      setMuted(true);
      setVolume(0);
    }
  };

  return (
    <div className="controls">
      <button
        className="control"
        onClick={nextChannel}
        type="button"
      >
        <i className="fa-solid fa-forward-step" />
      </button>
      <button
        className="control"
        onClick={handlePlayPause}
        type="button"
      >
        {playing ? <i className="fa-solid fa-pause" /> : <i className="fa-solid fa-play" />}
      </button>
      <button
        className="control"
        onClick={toggleMuted}
        type="button"
      >
        {muted ? <i className="fa-solid fa-volume-xmark" /> : <i className="fa-solid fa-volume-high" />}
      </button>
      <div className="control__volume">
        <input className="control__volume-slider" type="range" min={0} max={1} step="any" value={volume} onChange={handleVolumeChange} />
      </div>
    </div>
  );
}

export default PlayerControls;
