import { useState } from 'react';

const CreatePost = () => {
  const [postData, setPostData] = useState('');
  const MAX_POST_LENGTH = 500;

  const handleCreatePost = (): void => {
    if (!postData) {
      console.log('Please enter all fields');
      return;
    }
    console.log('Posted');
  };

  return (
    <div className="create-post">
      <h1 className="create-post__heading">Create Post</h1>
      <div className="create-post__post-container">
        <textarea
          required
          className="create-post__post-input"
          rows={7}
          value={postData}
          onChange={(e) => setPostData(e.target.value)}
          maxLength={MAX_POST_LENGTH}
          placeholder="Craft your gaming tales, tips, and thoughts here. Let the community in on your gaming journey."
        />
        <p className="create-post__post-length">{`${postData.length}/${MAX_POST_LENGTH}`}</p>
      </div>
      <button
        className="create-post__submit-button"
        onClick={() => handleCreatePost()}
      >
        Post
      </button>
    </div>
  );
};

export default CreatePost;
