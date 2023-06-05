import MusicButton from '../components/MusicButton';

import { buttons } from '../constants/buttons';

const Index = () => {
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

export default Index;
