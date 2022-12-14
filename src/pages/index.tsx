import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from 'api/load-posts';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function Index({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  return (
    <>
      <Head>
        <title>{setting.data.attributes.blogName}</title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticProps: GetStaticProps<
  StrapiPostAndSettings
> = async () => {
  let data = null;

  try {
    data = await loadPosts();
  } catch (err) {
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
      variables: {
        ...defaultLoadPostsVariables,
      },
    },
    revalidate: 60,
  };
};
