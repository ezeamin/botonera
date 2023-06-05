import { useRef } from 'react';

import { MusicButtonProps } from '../../types';
import { useNavigate } from 'react-router-dom';
import { buttons } from '../constants/buttons';

const MusicButton = (props: MusicButtonProps) => {
  const { text, audioSrc, type } = props;

  const navigate = useNavigate();

  const audioRef = useRef<HTMLAudioElement>(null);

  const onClick = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  const onClickNavigate = () => {
    navigate('/share');
  };

  const onClickShare = () => {
    const slug = buttons.find((button) => button.text === text)?.slug;

    const link = window.location.href.split('/').slice(0, 3).join('/');

    const finalLink = `${link}/audio/${slug}`;

    onClick();
    navigator.clipboard.writeText(finalLink).then(() => {
      alert('Link copiado al portapapeles! :D');
    });
  };

  if (type && type === 'SHARE') {
    return (
      <div className='h-100 w-100' style={{ minHeight: '150px' }}>
        <button
          style={{ height: '100%' }}
          className='share'
          onClick={onClickShare}
        >
          {text}
        </button>
        <audio ref={audioRef} src={audioSrc}></audio>
      </div>
    );
  }

  if (text === 'COMPARTIR AUDIO') {
    return (
      <div className='h-100 w-100' style={{ minHeight: '150px' }}>
        <button
          style={{ height: '100%' }}
          className='share'
          onClick={onClickNavigate}
        >
          {text}
        </button>
      </div>
    );
  }

  return (
    <div className='h-100 w-100' style={{ minHeight: '150px' }}>
      <button style={{ height: '100%' }} onClick={onClick}>
        {text}
      </button>
      <audio ref={audioRef} src={audioSrc}></audio>
    </div>
  );
};

export default MusicButton;
