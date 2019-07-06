import React from 'react';
import {
  Angular, React as ReactIcon, Dotnet, MongoDB, Yarn, Git, Kubernetes, Jest, Npm, Docker 
} from '../../components/Icons';

export default [
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