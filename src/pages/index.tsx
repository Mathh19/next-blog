import { loadPosts, StrapiPostAndSettings } from 'api/load-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function Index({ posts, setting }: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>
          {setting.data.attributes.blogName} -{' '}
          {setting.data.attributes.blogDescription}
        </title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (e) {
    data = null;
  }

  if (!data || !data.posts || !data.posts.data.length) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      posts: data.posts,
      setting: data.setting,
    },
  };
};
