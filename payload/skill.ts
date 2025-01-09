import { ISkill } from '../component/skill/ISkill';

const programmingLanguages: ISkill.Skill = {
  category: 'Programming Languages',
  items: [
    {
      title: 'C',
      level: 1,
    },
    {
      title: 'Shell Scripting',
      level: 1,
    },
    {
      title: 'Python',
      level: 2,
    },
  ],
};

const virtualization: ISkill.Skill = {
  category: 'Virtualization',
  items: [
    {
      title: 'Docker',
      level: 1,
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [
    programmingLanguages,
    virtualization
  ],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준',
};

export default skill;
