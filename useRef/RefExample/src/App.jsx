
import { useState, useRef } from 'react';
// to get the direct reference to the <video> DOM elt so you can call .play() or .pause()

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false); // to store whether the video is currently paling
  const ref = useRef(null); // this will point ot the <video> elt in the DOM
  // you will use ref.current to control the video programmatically

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <>
      <button onClick={handleClick}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
}

