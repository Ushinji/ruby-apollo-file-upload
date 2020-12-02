import * as React from 'react';
import {
  useCreatePostMutation,
  usePostsQuery,
} from '@/graphql/generated/graphql';
import CreatePostForm from '@/components/CreatePostForm';

const PostListPage: React.FC = () => {
  const { loading, error, data } = usePostsQuery();
  const [sendReportEmailMutation] = useCreatePostMutation();

  const onSubmit = React.useCallback(
    async (displayName: string, image: File) => {
      await sendReportEmailMutation({
        variables: { displayName, image },
      });
    },
    [sendReportEmailMutation]
  );

  if (loading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;

  return (
    <div>
      <CreatePostForm onSubmit={onSubmit} />
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
    </div>
  );
};

export default PostListPage;
