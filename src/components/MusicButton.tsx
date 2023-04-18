import { useRef } from 'react';

import { MusicButtonProps } from '../../types';

const MusicButton = (props: MusicButtonProps) => {
  const { text, audioSrc } = props;

  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className='h-100 w-100' style={{minHeight: "150px"}}>
      <button style={{ height: '100%' }} onClick={onClick}>
        {text}
      </button>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default MusicButton;
