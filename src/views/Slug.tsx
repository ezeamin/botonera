import { Link, useParams } from 'react-router-dom';
import { buttons } from '../constants/buttons';
import { useEffect, useRef } from 'react';

const Slug = () => {
  const { slug } = useParams();

  const buttonInfo = buttons.find((button) => button?.slug === slug);

  return (
    <main className='container text-center' id='slug-screen'>
      <h1>{buttonInfo?.text}</h1>
      <p>Te dedicaron un audio! 🤣</p>
      <audio controls src={buttonInfo?.audioSrc} className='mb-3'></audio>
      <Link to='/' id='back-button'>
        Volver a la botonera
      </Link>
    </main>
  );
};

export default Slug;
