import './Welcome.css';
import React, { useState } from 'react';

const Welcome: React.FC = () => {
  const commands = [
    '$ yarn create react-app',
    '$ git init',
    '$ git commit',
    '$ git push',
  ];

  const [currentCommand, setCurrentCommand] = useState(0);

  setTimeout(() => {
    const newCommand = currentCommand + 1;
    if (newCommand >= commands.length) {
      return setCurrentCommand(0);
    }
    setCurrentCommand(newCommand);
  }, 15000);

  return (
    <section className="welcome">
      <h1>Engineer</h1>
      <div className="typewriter">
        <span>{commands[currentCommand]}</span>
        <span className="console-cursor">_</span>
      </div>
      {/* <div className="social-icons">
        <img src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" />
        <img src="https://unpkg.com/simple-icons@latest/icons/linkedin.svg" />
      </div> */}
    </section>
  );
}

export default Welcome;
