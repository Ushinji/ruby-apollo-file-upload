import * as React from 'react';

type Props = {
  onSubmit: (displayName: string, image: File) => Promise<void>;
};

const CreatePostForm: React.FC<Props> = ({ onSubmit }) => {
  const [displayName, setDisplayName] = React.useState('');
  const onChangeDisplayName = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setDisplayName(event.currentTarget.value);
    },
    []
  );

  const [image, setImage] = React.useState<File>();
  const onChangeImage = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target.files ? event.target.files[0] : null;
      if (file) {
        setImage(file);
      }
    },
    []
  );

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!displayName) {
        // eslint-disable-next-line no-alert
        alert('Please input displayName');
        return;
      }

      if (!image) {
        // eslint-disable-next-line no-alert
        alert('Please input image');
        return;
      }

      await onSubmit(displayName, image);
    },
    [displayName, image, onSubmit]
  );

  return (
    <div>
      <h2>Post upload form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="displayName">
            display name
            <input
              type="text"
              id="displayName"
              value={displayName}
              onChange={onChangeDisplayName}
            />
          </label>
        </div>
        <div>
          <label htmlFor="image">
            image
            <input type="file" id="image" onChange={onChangeImage} />
          </label>
        </div>
        <button type="submit">upload</button>
      </form>
    </div>
  );
};

export default CreatePostForm;
