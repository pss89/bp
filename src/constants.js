import React from 'react'

const navbarItems = [
  { title: '자기소개', path: '/bp/intro' },
  { title: '경력', path: '/bp/career' },
  { title: '전체프로젝트', path: '/bp/projects' },
  { title: '주요프로젝트', path: '', subItems: [
    { title: '주요프로젝트1', path: '/bp/project/first' },
    { title: '주요프로젝트2', path: '/bp/project/seconde' },
    { title: '주요프로젝트3', path: '/bp/project/third' }
  ]}
  // { title: '주요프로젝트1', path: '/bp/project/first' },
  // { title: '주요프로젝트2', path: '/bp/project/seconde' },
  // { title: '주요프로젝트3', path: '/bp/project/third' }
]
// const deviceVersion = navigator.userAgent

// dark mode인지 확인하는 방법
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

// react 버전 확인하는 방법
const reactVersion = React.version


export default { navbarItems, isDarkMode, reactVersion }