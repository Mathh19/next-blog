import { PostTagsProps } from '.';
import { data } from '../../api/data.json';

export default { tags: data.posts.data[0].attributes.tags } as PostTagsProps;

// export default {
//   tags: {
//     data: [
//       {
//         id: '3',
//         attributes: {
//           name: 'SSR',
//           slug: 'ssr',
//         },
//       },
//       {
//         id: '4',
//         attributes: {
//           name: 'SSG',
//           slug: 'ssg',
//         },
//       },
//       {
//         id: '5',
//         attributes: {
//           name: 'Studies',
//           slug: 'studies',
//         },
//       },
//     ],
//   },
// } as PostTagsProps;
