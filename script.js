document.getElementById('openBtn').addEventListener('click', () => {
    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.roseSection').classList.remove('hidden');
    typeWriterEffect();
  });
  
  const text = `
  Hola Titis Mitis,
  
  Hoy es Sant Jordi y la distancia no podrá evitar que te regale una rosa, aunque sea digitalmente, ni que te escriba una carta de amor pero NO a mano.
  
  Eres una persona increíble y estoy muy agradecido de tenerte en mi vida. Espero que este día esté lleno de amor y felicidad para ti, porque te lo mereces.
  Aunque no pueda estar contigo en persona, quiero que sepas que siempre estás en mi corazón.

  MMUUAAAAAA!!!!
  
  Con mucho amor y rez mez,  
  Tu chico guapo del movil.
  `;
  
  function typeWriterEffect() {
    const el = document.getElementById('scrollText');
    let i = 0;
  
    function type() {
      if (i < text.length) {
        el.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 40);
      }
    }
  
    type();
  }
  