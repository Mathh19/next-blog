import { PostCardProps } from '.';

export default {
  data: {
    id: '1',
    attributes: {
      slug: 'blog-sobre-nextjs',
      title: 'Blog sobre Nextjs',
      excerpt:
        'Esse é um blog que fala um pouco sobre Next e como ele funciona.',
      cover: {
        data: {
          id: '3',
          attributes: {
            alternativeText: 'next-capa.png',
            url: 'https://res.cloudinary.com/ddiiakz1t/image/upload/v1662140975/next_capa_ba07b5ec5d.png',
          },
        },
      },
    },
  },
} as PostCardProps;
