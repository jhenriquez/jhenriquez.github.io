import './Home.css';
import React, { useState, useEffect } from 'react';
import Typewriter from '../../components/Typewriter';
import {
  Angular,
  React as ReactIcon,
  Dotnet,
  MongoDB,
  Yarn,
  Git,
  Kubernetes,
  Jest,
  Npm,
  Docker,
} from '../../components/Icons';
import SingleToolDisplay from '../../components/SingleToolDisplay';

const Introduction: React.FC = () => {
  const commands = [
    { command: 'yarn create react-app', icon: <ReactIcon /> },
    { command: 'yarn', icon: <Yarn /> },
    { command: 'git commit', icon: <Git /> },
    { command: 'db.orders.find({...})', icon: <MongoDB /> },
    { command: 'git push', icon: <Git /> },
    { command: 'ng new', icon: <Angular /> },
    { command: 'kubectl logs', icon: <Kubernetes /> },
    { command: 'docker build', icon: <Docker /> },
    { command: 'jest', icon: <Jest /> },
    { command: 'db.orders.aggregate([...])', icon: <MongoDB /> },
    { command: 'kubectl describe pod', icon: <Kubernetes /> },
    { command: 'dotnet run', icon: <Dotnet /> },
    { command: 'npm install', icon: <Npm /> },
    { command: 'docker push', icon: <Docker /> },
  ];

  const [currentCommand, setCurrentCommand] = useState(0);

  useEffect(() => {
    const id = setTimeout(() => {
      let newCurrentCommand = Math.floor(Math.random() * Math.floor(commands.length));

      while(newCurrentCommand === currentCommand || commands[newCurrentCommand].icon === commands[currentCommand].icon) {
        newCurrentCommand = Math.floor(Math.random() * Math.floor(commands.length));
      }

      setCurrentCommand(newCurrentCommand);
    }, 5000);

    return () => clearTimeout(id);
  });

  return (
    <section className="home">
      <h1 className="hello">Hello,</h1>
      <h1 className="iam">I'm Julio.</h1>
      <h2>Software Developer</h2>
      <Typewriter text={commands[currentCommand].command} />
      <div className="tool-display-container">
        <SingleToolDisplay 
          icon={commands[currentCommand].icon}
          />
      </div>
    </section>
  );
}

export default Introduction;
