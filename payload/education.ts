import { IEducation } from '../component/education/IEducation';

const education: IEducation.Payload = {
  disable: false,

  list: [
    {
      title: 'Gwangju Institute of Science and Technology',
      subTitle: 'BS in Electrical Engineering and Computer Science',
      startedAt: '2018-03',
      // endedAt: '2025-07',
    },
    {
      title: 'Seocho High School',
      subTitle: 'Graduated',
      startedAt: '2015-03',
      endedAt: '2018-02',
    },
  ],
};

export default education;
