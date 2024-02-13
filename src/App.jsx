import { useState } from 'react';
import './App.css';
import Invitation from './assets/giphy.gif';
import Accepted from './assets/acceptedGif.gif';

const negationValues = ['No', '¿Segura? 🧐', '¿Muy segura?', '¿Segurísima? 😚'];

function App() {
  const [count, setCount] = useState(0);
  const [buttonSize, setButtonSize] = useState(0.8);
  const [confirm, setConfirm] = useState(false);

  const handleCount = () => {
    setCount((prevValue) => prevValue + 1);
    increaseButtonSize();
  };

  const increaseButtonSize = () => {
    setButtonSize((prevSize) => prevSize + 0.2);
  };

  const handleConfirm = () => {
    setConfirm(true);
  };

  return (
    <div className="mainContainer">
      <div className="gifContainer">
        <img src={confirm ? Accepted : Invitation} alt="Invitación" />
      </div>
      {confirm ? (
        <>
          <p>Así me gusta</p>
          <p>Preparate para nuestra date 😊</p>
        </>
      ) : (
        <p>Preciosa, ¿me darías el honor de ser tu San Valentín?</p>
      )}
      <div className="buttonsContainer">
        {!confirm && (
          <>
            <button
              style={{ fontSize: `${buttonSize}rem`, minWidth: '230px' }}
              onClick={handleConfirm}
            >
              Por supuesto 😊
            </button>
            {count <= 3 && (
              <button onClick={handleCount} style={{ width: '200px' }}>
                {negationValues[count]}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
