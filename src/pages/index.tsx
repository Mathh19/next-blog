import { useEffect } from 'react';
import { loadPosts } from 'api/load-posts';

export default function Index() {
  useEffect(() => {
    loadPosts({
      authorSlug: { contains: 'matheus' },
    }).then((res) => console.log(res.setting, res.posts));
  }, []);

  return <h1>Hello World!</h1>;
}
