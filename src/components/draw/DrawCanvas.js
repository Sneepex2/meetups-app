import { useEffect, useRef, useState } from 'react';
import classes from './DrawCanvas.module.css';

function DrawCanvas(props) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas != undefined) {
      const context = canvas.getContext('2d');

      const canvasOffsetX = canvas.offsetLeft;
      const canvasOffsetY = canvas.offsetTop;

      canvas.width = 300;
      canvas.height = 300;

      let isPainting = false;
      let lineWidth = 5;
      let startX;
      let startY;

      context.strokeStyle = '#FFFFFF';

      context.fillStyle = 'black';
      context.rect(0, 0, 300, 300);
      context.fill();
      context.beginPath();

      const draw = (e) => {
        if (!isPainting) {
          return;
        }

        context.lineWidth = lineWidth;
        context.lineCap = 'round';

        context.lineTo(e.clientX - canvasOffsetX, e.clientY - canvasOffsetY);
        context.stroke();
      };

      canvas.addEventListener('mousedown', (e) => {
        console.log('mouse down');
        isPainting = true;
        startX = e.clientX;
        startY = e.clientY;
      });

      canvas.addEventListener('mouseup', (e) => {
        isPainting = false;
        context.stroke();
        context.beginPath();
      });

      canvas.addEventListener('mousemove', draw);
    }
  }, []);

  function clearCtx() {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.fillStyle = 'black';
    context.rect(0, 0, 300, 300);
    context.fill();
    context.beginPath();
  }

  function sendData() {
    var link = document.createElement('a');
    link.download = 'num.jpg';
    link.href = canvasRef.current.toDataURL();
    link.click();
  }

  return (
    <section>
      <div className={classes.canvas}>
        <canvas ref={canvasRef}></canvas>
      </div>
      <div className={classes.actions}>
        <button onClick={clearCtx}>Clear</button>
      </div>
      <div className={classes.actions}>
        <button onClick={sendData}>Recognize</button>
      </div>
    </section>
  );
}

export default DrawCanvas;
