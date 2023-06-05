import { Link } from 'react-router-dom';
import MusicButton from '../components/MusicButton';
import { buttons } from '../constants/buttons';

const Share = () => {
  return (
    <main className='container text-center'>
      <h1>Compartir audio</h1>
      <p>Selecciona uno para compartirlo. El link se copiará</p>
      <Link to='/' id='back-button'>
        Volver
      </Link>
      <section className='row mt-2'>
        {buttons.map((button, index) => {
          if (index === buttons.length - 1) return null;

          return (
            <article className='col-6 p-2' key={button.text}>
              <MusicButton {...button} type='SHARE' />
            </article>
          );
        })}
      </section>
    </main>
  );
};

export default Share;
