import './Welcome.css';
import React, { useState, useEffect } from 'react';
import Typewriter from '../Typewriter';

const Welcome: React.FC = () => {
  const commands = [
    'yarn create react-app',
    'yarn test',
    'yarn lint',
    'git add',
    'git commit',
    'git push',
  ];

  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      const newCommand = currentCommand + 1;
      if (newCommand >= commands.length) {
        return setCurrentCommand(0);
      }
      setCurrentCommand(newCommand);
    }, 7000);

    return () => clearTimeout(id);
  });

  return (
    <section className="welcome">
      <h1>Developer.</h1>
      <Typewriter text={commands[currentCommand]} />
    </section>
  );
}

export default Welcome;
