import { ArticleHeaderProps } from '.';

export default {
  id: '1',
  attributes: {
    title:
      'Sint deserunt officia sit ipsum. Minim commodo sit ea labore sit sit ex ad tempor esse labore.',
    excerpt:
      'Proident sunt est enim fugiat sit incididunt sunt veniam adipisicing amet aliquip.',
    cover: {
      data: {
        id: '6',
        attributes: {
          alternativeText: 'Cupidatat ex aute do anim in.',
          url: 'https://res.cloudinary.com/dlizakp2a/image/upload/v1614696630/Frozen_sunset_on_the_lake_by_Manuel_Arslanyan_9f9cd8ea10.jpg',
        },
      },
    },
    createdAt: '2022-09-02T15:16:09.246+00:00',
    author: {
      data: {
        id: '123456789',
        attributes: {
          slug: 'matheus-freitas',
          name: 'Matheus Freitas',
        },
      },
    },
    categories: {
      data: [
        {
          id: 'asdslgyh65',
          attributes: {
            name: 'React',
            slug: 'react',
          },
        },
        {
          id: 'asdslgyh66',
          attributes: {
            name: 'JavaScript',
            slug: 'javascript',
          },
        },
      ],
    },
  },
} as ArticleHeaderProps;
