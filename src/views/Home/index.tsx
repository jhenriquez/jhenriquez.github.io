import './Home.css';
import React, { useState, useEffect } from 'react';
import Typewriter from '../../components/Typewriter'
import SingleToolDisplay from '../../components/ToolDisplay';
import CodeDisplay from '../../components/CodeDisplay';
import commands from './commandMappings';
import GithubService from '../../services/Github';

const getRandomWithMax = (max: number) : number => Math.floor(Math.random() * Math.floor(max));

const Home: React.FC = () => {
  const [currentCommand, setCurrentCommand] = useState(getRandomWithMax(commands.length));
  const [codeSnippet, setCodeSnippet] = useState('');
  const [loading, setLoading] = useState(false);
 
  useEffect(() => {
    const id = setTimeout(() => {
      let newCurrentCommand = getRandomWithMax(commands.length);
      while(newCurrentCommand === currentCommand || commands[newCurrentCommand].iconKey === commands[currentCommand].iconKey) {
        newCurrentCommand = getRandomWithMax(commands.length);
      }
      setCurrentCommand(newCurrentCommand);
    }, 5000);
    return () => clearTimeout(id);
  });

  useEffect(() => {
    const asyncEffect = async () => {
      setLoading(true);
      const code = await GithubService.getViewSourceContent('home');
      setCodeSnippet(code);
      setLoading(false);
    }
    asyncEffect();
  }, []);
  
  return (
    <div className="home-view">
      <div className="home">
        <h1 className="hello">Hello,</h1>
        <h1 className="iam">I'm julio.</h1>
        <Typewriter text={commands[currentCommand].command} />
        <div className="tool-display-container">
          <SingleToolDisplay 
            icon={commands[currentCommand].icon}
            iconKey={commands[currentCommand].iconKey}
            />
        </div>
      </div>
      {
        !loading &&
        <CodeDisplay
          className="main"
          lang="typescript"
          snippet={codeSnippet}
          />
      }
    </div>
  );
}

export default Home;
