import React from 'react'

// 상당 메뉴 목록
const navbarItems = [
  { title: '자기소개', path: '/bp/intro' },
  { title: '경력', path: '/bp/career' },
  { title: '전체프로젝트', path: '/bp/projects' },
  { title: '주요프로젝트', path: '', subItems: [
    { title: '주요프로젝트1', path: '/bp/project/first' },
    { title: '주요프로젝트2', path: '/bp/project/seconde' },
    { title: '주요프로젝트3', path: '/bp/project/third' }
  ]}
]
// const deviceVersion = navigator.userAgent

// dark mode인지 확인하는 방법
const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches

// react 버전 확인하는 방법
const reactVersion = React.version

// 경력 설명
const careerList = {
  education: [
    {
      year: '2005.03 ~ 2008.02',
      title: '안산국제비즈니스고등학교 정보처리과'
    },
    {
      year: '2008.03 ~ 2015.02',
      title: '청운대학교 컴퓨터학과'
    }
  ],
  company: [
    {
      year: '2015.11 ~ 2018.12',
      title: '인터넷토마토',
      position: '개발팀 대리',
      desc: [
        '광고솔루션 개발 및 유지보수',
        '자사 ERP 개발 및 유지보수(리뉴얼)',
        '거래처 홈페이지 개발 및 유지보수'
      ]
    },
    {
      year: '2019.04 ~ 2023.03',
      title: '오아',
      position: '서버개발팀 TL/매니저',
      desc: [
        '자사 쇼핑몰 개발 및 유지보수',
        '자사 그룹웨어 개발 및 유지보수',
        '자사 ERP 개발 및 유지보수'
      ]
    },
    {
      year: '2023.06 ~ 2023.10',
      title: '더비즈',
      position: '포털개발그룹 매니저',
      desc: [
        '통합회원 개발 및 SSO 연동',
      ]
    },
    {
      year: '2023.10 ~ 2024.10',
      title: '클린일렉스',
      position: '서버개발팀 선임연구원',
      desc: [
        '자사 홈페이지 개발 및 유지보수(리팩토링)',
        '자사 전기차충전서비스 관리자페이지, 웹앱페이지 개발 및 유지보수',
        '자사 로컬관제 시스템 개발 및 유지보수'
      ]
    }
  ],
  skils: [
    {
      title: 'FrontEnd',
      list: "HTML5, CSS, JavaScript/jQUERY, AngularJS"
    },
    {
      title: 'BackEnd',
      list: "PHP, Codeigniter, Laravel, RESTful API"
    },
    {
      title: 'Database',
      list: "MySQL, MariaDB"
    },
    {
      title: 'ETC',
      list: "Ubuntu, Centos, GitHub, SVN, Docker, WSL, Atlassian(Jira, Confluence, Bitbucket)"
    }

    // FrontEnd: "'HTML5', 'CSS', 'JavaScript/jQUERY', 'AngularJS'",
    // BackEnd: "'PHP', 'Codeigniter', 'Laravel', 'RESTful API'",
    // Database: "'MySQL', 'MariaDB'",
    // ETC: "'Ubuntu', 'Centos', 'GitHub', 'SVN', 'Docker', 'WSL', 'Atlassian(Jira, Confluence, Bitbucket)'"
    //   FrontEnd: "'HTML5', 'CSS', 'JavaScript/jQUERY', 'AngularJS'",
    //   BackEnd: "'PHP', 'Codeigniter', 'Laravel', 'RESTful API'",
    //   Database: "'MySQL', 'MariaDB'",
    //   ETC: "'Ubuntu', 'Centos', 'GitHub', 'SVN', 'Docker', 'WSL', 'Atlassian(Jira, Confluence, Bitbucket)'"
    // }
  ]
}


export default { navbarItems, isDarkMode, reactVersion, careerList }