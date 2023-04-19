import MusicButton from './components/MusicButton';

const buttons = [
  {
    text: 'La plata de la agua',
    audioSrc: '/audios/agua.mp3',
  },
  {
    text: 'Pase',
    audioSrc: '/audios/pase.mp3',
  },
  {
    text: 'Cagate',
    audioSrc: '/audios/cagate.mp3',
  },
  {
    text: 'Caisajeta',
    audioSrc: '/audios/caisajeta.mp3',
  },
  {
    text: 'Jesus',
    audioSrc: '/audios/jesus.mp3',
  },
  {
    text: 'Cumple Jesus',
    audioSrc: '/audios/cumple-jesus.mp3',
  },
  {
    text: 'Picasso',
    audioSrc: '/audios/picasso.mp3',
  },
];

const App = () => {
  return (
    <main className='container'>
      <h1 className='text-center'>Paaaase!</h1>
      <section className='row'>
        {buttons.map((button) => (
          <article className='col-6 p-2' key={button.text}>
            <MusicButton {...button} />
          </article>
        ))}
      </section>
    </main>
  );
};

export default App;
