import React, { useState, useEffect } from 'react';

// --- Componente Principal: Jogo de Adivinhação ---
export default function App() {
  const [secretNumber, setSecretNumber] = useState(0);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('Escolha um nível de dificuldade para começar.');
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [previousGuesses, setPreviousGuesses] = useState([]);
  const [maxNumber, setMaxNumber] = useState(100);
  const [difficulty, setDifficulty] = useState(null);

  // Função para definir a dificuldade e iniciar o jogo
  const selectDifficulty = (level, num) => {
    setDifficulty(level);
    setMaxNumber(num);
    setGameOver(false); // Marca o início do jogo
  };

  // Inicia uma nova rodada mantendo a dificuldade
  const startGame = (num) => {
    const newSecretNumber = Math.floor(Math.random() * num) + 1;
    setSecretNumber(newSecretNumber);
    setGuess('');
    setMessage(`Estou a pensar num número entre 1 e ${num}.`);
    setAttempts(0);
    setGameOver(false);
    setPreviousGuesses([]);
  };

  // Efeito para iniciar o jogo assim que a dificuldade é escolhida
  useEffect(() => {
    if (difficulty) {
      startGame(maxNumber);
    }
  }, [difficulty, maxNumber]);

  const handleInputChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuess = () => {
    if (gameOver) return;

    const userGuess = parseInt(guess, 10);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > maxNumber) {
      setMessage(`Por favor, insira um número válido entre 1 e ${maxNumber}.`);
      return;
    }

    const newAttempts = attempts + 1;
    setAttempts(newAttempts);
    setPreviousGuesses([...previousGuesses, userGuess]);

    if (userGuess === secretNumber) {
      setMessage(`Parabéns! Acertou o número ${secretNumber} em ${newAttempts} tentativas!`);
      setGameOver(true);
    } else if (userGuess < secretNumber) {
      setMessage('Muito baixo! Tente um número mais alto.');
    } else {
      setMessage('Muito alto! Tente um número mais baixo.');
    }
    setGuess('');
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleGuess();
    }
  };

  // Função para voltar à tela de seleção de dificuldade
  const resetGame = () => {
    setDifficulty(null);
    setMessage('Escolha um nível de dificuldade para começar.');
    setGameOver(true);
  };

  // Calcula a "temperatura" do palpite para mudar o fundo
  const getHintColor = () => {
    if (gameOver || attempts === 0) return styles.container.background;
    const lastGuess = previousGuesses[previousGuesses.length - 1];
    const diff = Math.abs(lastGuess - secretNumber);
    const closeness = 1 - (diff / maxNumber);

    if (diff <= 5) return 'linear-gradient(45deg, #ff416c, #ff4b2b)'; // Muito Quente
    if (diff <= 10) return 'linear-gradient(45deg, #ff8c00, #ffaf60)'; // Quente
    if (diff <= 25) return 'linear-gradient(45deg, #00c6ff, #0072ff)'; // Frio
    return 'linear-gradient(45deg, #1d2b64, #4e54c8)'; // Muito Frio
  };

  // Tela de Seleção de Dificuldade
  if (!difficulty) {
    return (
      <div style={styles.container}>
        <div style={styles.gameCard}>
          <h1 style={styles.title}>Jogo de Adivinhação</h1>
          <p style={styles.message}>{message}</p>
          <div style={styles.difficultyContainer}>
            <button onClick={() => selectDifficulty('Fácil', 50)} style={{...styles.button, ...styles.difficultyButton}}>Fácil (1-50)</button>
            <button onClick={() => selectDifficulty('Médio', 100)} style={{...styles.button, ...styles.difficultyButton}}>Médio (1-100)</button>
            <button onClick={() => selectDifficulty('Difícil', 200)} style={{...styles.button, ...styles.difficultyButton}}>Difícil (1-200)</button>
          </div>
        </div>
      </div>
    );
  }

  // Tela Principal do Jogo
  return (
    <div style={{...styles.container, background: getHintColor()}}>
      <div style={styles.gameCard}>
        <h1 style={styles.title}>Adivinhe o Número</h1>
        <p style={styles.message}>{message}</p>

        {!gameOver ? (
          <div style={styles.inputContainer}>
            <input
              type="number"
              value={guess}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              style={styles.input}
              placeholder="Seu palpite"
              autoFocus
            />
            <button onClick={handleGuess} style={styles.button}>Adivinhar</button>
          </div>
        ) : (
          <div style={styles.gameOverContainer}>
            <button onClick={() => startGame(maxNumber)} style={{...styles.button, ...styles.playAgainButton}}>Jogar Novamente</button>
            <button onClick={resetGame} style={{...styles.button, ...styles.changeDifficultyButton}}>Mudar Dificuldade</button>
          </div>
        )}

        <div style={styles.statsContainer}>
          <p style={styles.attempts}>Tentativas: {attempts}</p>
          <div style={styles.historyContainer}>
            <h3 style={styles.historyTitle}>Histórico:</h3>
            <div style={styles.guessesList}>
              {previousGuesses.map((pGuess, index) => (
                <span key={index} style={styles.guessBubble}>{pGuess}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// --- Estilos ---
const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100vw', // Garante que o container ocupe toda a largura da tela
    background: 'linear-gradient(45deg, #1d2b64, #f8cdda)',
    fontFamily: "'Poppins', sans-serif",
    transition: 'background 0.5s ease',
  },
  gameCard: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '30px 40px',
    borderRadius: '20px',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(12px)',
    textAlign: 'center',
    width: '90%',
    maxWidth: '450px',
    color: '#FFFFFF',
  },
  title: {
    fontSize: '2.2rem',
    marginBottom: '15px',
    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
  },
  message: {
    fontSize: '1.1rem',
    minHeight: '40px',
    margin: '0 0 25px 0',
    fontWeight: '500',
  },
  inputContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    padding: '12px',
    fontSize: '1rem',
    borderRadius: '10px',
    border: '1px solid #ddd',
    textAlign: 'center',
    width: '120px',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    color: '#333',
  },
  button: {
    padding: '12px 25px',
    fontSize: '1rem',
    color: '#FFFFFF',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    fontWeight: 'bold',
  },
  difficultyContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    marginTop: '20px',
  },
  difficultyButton: {
    backgroundColor: 'rgba(0, 123, 255, 0.7)',
  },
  gameOverContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    marginBottom: '20px',
  },
  playAgainButton: {
    backgroundColor: '#28A745',
  },
  changeDifficultyButton: {
    backgroundColor: '#6c757d'
  },
  statsContainer: {
    marginTop: '20px',
    paddingTop: '15px',
    borderTop: '1px solid rgba(255, 255, 255, 0.2)',
  },
  attempts: {
    fontSize: '1rem',
  },
  historyContainer: {
    marginTop: '10px',
  },
  historyTitle: {
    margin: '0 0 10px 0',
    fontSize: '1rem',
    fontWeight: '500',
    color: '#E0E0E0',
  },
  guessesList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    justifyContent: 'center',
    maxHeight: '100px',
    overflowY: 'auto',
  },
  guessBubble: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    padding: '5px 10px',
    borderRadius: '21px',
  },
};

