import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import { faBell } from '@fortawesome/free-regular-svg-icons';
import { IProfile } from '../component/profile/IProfile';
import image from '../asset/sample_tux.png';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: 'Kyutae Kong',
    small: '()',
  },
  contact: [
    {
      title: 'ogrim123@gmail.com',
      link: 'mailto:ogrim123@gmail.com',
      icon: faEnvelope,
    },
    {
      title: '이력서에는 전화번호를 기재하지 않았습니다. 이메일로 연락 부탁드립니다.',
      icon: faPhone,
      badge: true,
    },
    {
      link: 'https://github.com/Kerkane',
      icon: faGithub,
    },
  ],
};

export default profile;
