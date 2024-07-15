import React, { useState } from 'react';
import { PostType } from '../../../types/PostType';
import Post from './Post';
import Report from '../../report';

interface PostsProps {
  posts: PostType[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [reportedProfileId, setReportedProfileId] = useState('');
  const [reportedPostItemId, setReportedPostItemId] = useState('');
  return (
    <>
      <section className="posts">
        {posts.map((post) => (
          <Post
            key={post._id}
            _id={post._id}
            comments={post.comments}
            contents={post.contents}
            likedBy={post.likedBy}
            createdAt={post.createdAt}
            dislikedBy={post.dislikedBy}
            profileId={post.profileId}
            areCommentsDisabled={false}
            setIsReportModalOpen={setIsReportModalOpen}
            setReportedProfileId={setReportedProfileId}
            setReportedPostItemId={setReportedPostItemId}
          />
        ))}
      </section>
      <Report
        isReportModalOpen={isReportModalOpen}
        setIsReportModalOpen={setIsReportModalOpen}
        itemId={reportedPostItemId}
        itemType="post"
        reportedProfileId={reportedProfileId}
      />
    </>
  );
};

export default Posts;
