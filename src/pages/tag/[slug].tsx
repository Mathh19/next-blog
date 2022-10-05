import {
  defaultLoadPostsVariables,
  loadPosts,
  StrapiPostAndSettings,
} from 'api/load-posts';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { PostsTemplate } from 'templates/PostsTemplate';

export default function TagPage({
  posts,
  setting,
  variables,
}: StrapiPostAndSettings) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  const tagName = posts.data[0].attributes.tags.data.filter(
    (tag) => tag.attributes.slug === router.query.slug,
  )[0].attributes.name;

  return (
    <>
      <Head>
        <title>
          Tag: {tagName} - {setting.data.attributes.blogName}
        </title>
      </Head>
      <PostsTemplate posts={posts} settings={setting} variables={variables} />
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<StrapiPostAndSettings> = async (
  ctx,
) => {
  let data = null;
  const variables = {
    tagSlug: { contains: ctx.params.slug as string },
  };

  try {
    data = await loadPosts(variables);
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
        ...variables,
      },
    },
    revalidate: 60,
  };
};
