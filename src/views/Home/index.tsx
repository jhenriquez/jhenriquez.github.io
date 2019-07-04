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

const getRandomWithMax = (max: number) : number => Math.floor(Math.random() * Math.floor(max));

const Introduction: React.FC = () => {
  const commands = [
    { command: 'yarn create react-app', icon: <ReactIcon />, iconKey: 'react' },
    { command: 'yarn', icon: <Yarn />, iconKey: 'yarn' },
    { command: 'git commit', icon: <Git />, iconKey: 'git' },
    { command: 'db.orders.find({...})', icon: <MongoDB />, iconKey: 'mongodb' },
    { command: 'git push', icon: <Git />, iconKey: 'git' },
    { command: 'ng new', icon: <Angular />, iconKey: 'angular' },
    { command: 'kubectl logs', icon: <Kubernetes />, iconKey: 'kubernetes' },
    { command: 'docker build', icon: <Docker />, iconKey: 'docker' },
    { command: 'jest', icon: <Jest />, iconKey: 'jest' },
    { command: 'db.orders.aggregate([...])', icon: <MongoDB />, iconKey: 'mongodb' },
    { command: 'kubectl describe pod', icon: <Kubernetes />, iconKey: 'kubernetes' },
    { command: 'dotnet run', icon: <Dotnet />, iconKey: 'dotnet' },
    { command: 'npm install', icon: <Npm />, iconKey: 'npm' },
    { command: 'docker push', icon: <Docker />, iconKey: 'docker' },
  ];

  const [currentCommand, setCurrentCommand] = useState(getRandomWithMax(commands.length));

  useEffect(() => {
    const id = setTimeout(() => {
      let newCurrentCommand = getRandomWithMax(commands.length);

      while(newCurrentCommand === currentCommand || commands[newCurrentCommand].icon === commands[currentCommand].icon) {
        newCurrentCommand = getRandomWithMax(commands.length);
      }

      setCurrentCommand(newCurrentCommand);
    }, 5000);

    return () => clearTimeout(id);
  });

  return (
    <section className="home">
      <h1 className="hello">Hello,</h1>
      <h1 className="iam">I'm julio.</h1>
      <h2>Software Developer</h2>
      <Typewriter text={commands[currentCommand].command} />
      <div className="tool-display-container">
        <SingleToolDisplay 
          icon={commands[currentCommand].icon}
          iconKey={commands[currentCommand].iconKey}
          />
      </div>
    </section>
  );
}

export default Introduction;
