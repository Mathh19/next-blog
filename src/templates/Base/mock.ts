import { BaseTemplateProps } from '.';

export default {
  settings: {
    data: {
      id: '1',
      attributes: {
        blogName: 'Test blog',
        blogDescription:
          "A blog test then Idon't know what describe, it is random words just test",
        logo: {
          data: {
            id: '2',
            attributes: {
              alternativeText: 'bob.png',
              url: 'https://res.cloudinary.com/ddiiakz1t/image/upload/v1662119066/bob_c83cb89756.jpg',
            },
          },
        },
        menuLink: [
          {
            id: '1',
            link: '#texto',
            text: 'O texto',
            newTab: false,
          },
          {
            id: '2',
            link: '#link-2',
            text: 'Link 2',
            newTab: false,
          },
        ],
        footer: '<p>O texto da footer</p>',
      },
    },
  },
  children: 'Olá mundo!',
} as BaseTemplateProps;
