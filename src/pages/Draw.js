import DrawCanvas from '../components/draw/DrawCanvas';
import { useEffect } from 'react';

function DrawPage() {
  useEffect(() => {
    document.title = 'Number Recognition';
  }, []);

  return (
    <section>
      <h1>Number Recognition</h1>
      <DrawCanvas />
    </section>
  );
}

export default DrawPage;
