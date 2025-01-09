import { IProject } from '../component/project/IProject';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'HTML Lexer and Parser in Python',
      startedAt: '2021-10',
      endedAt: '2021-11',
      where: 'Team Project',
      descriptions: [
        {
          content:
            'Python을 이용해 입력된 문자열을 어휘 단위로 쪼개 의미별로 토큰화하는 Lexer 구현',
        },
        {
          content:
            '토큰화된 문자열에 대해 Context-free Grammar를 기준으로 구문적 의미를 분석하는 Parser 구현 하며 프로그래밍 언어의 문법과 구조를 익힘',
        },
      ],
    },
    {
      title: 'Face Tracking with 2D Discrete Fourier Transform',
      startedAt: '2021-05',
      endedAt: '2021-06',
      where: 'Personal Project',
      descriptions: [
        {
          content:
            '신호 처리와 신경망 기법에 사용되는 Convoltion을 구현하면서 Numpy의 텐서 계산을 익힘',
        },
        {
          content:
            'Convolution을 통해 구현한 2D Fourier Transform으로 이미지에서 얼굴만을 인식하는 Face Tracking 개발',
        },
      ],
    },
    {
      title: 'Implementation of Cyclic Redundancy Check in Verilog',
      startedAt: '2021-05',
      endedAt: '2021-06',
      where: 'Team Project',
      descriptions: [
        {
          content: '순환 중복 검사(CRC)를 수행하는 논리 회로 모델링 디자인',
        },
        {
          content: '모델 디자인을 기반으로 베릴로그를 이용한 논리 회로 구현',
        },
      ],
    },
    {
      title: 'Optimal purchase list with greedy algorithm',
      startedAt: '2019-10',
      endedAt: '2019-11',
      where: 'Personal Project',
      descriptions: [
        {
          content: 'Python을 이용한 Steam에서의 데이터 크롤링 구현',
        },
        {
          content: '크롤링 데이터를 사용한 greedy algorithm 구현',
        },
      ],
    },
  ],
};

export default project;
