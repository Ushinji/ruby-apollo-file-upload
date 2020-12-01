import { usePostsQuery } from '@/graphql/generated/graphql';
import * as React from 'react';

const PostListPage: React.FC = () => {
  const { loading, error, data } = usePostsQuery();

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;

  return (
    <table>
      <thead>
        <tr>
          <th>名前</th>
          <th>画像</th>
        </tr>
      </thead>
      <tbody>
        {data.posts.map((post) => {
          const key = `post-${post.id}`;
          return (
            <tr key={key}>
              <td>{post.displayName}</td>
              <td>
                <img src={post.image} alt="post" />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default PostListPage;
