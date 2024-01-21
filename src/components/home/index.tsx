import { useEffect, useState } from 'react';
import Posts from '../shared/Posts';
import FilterIcon from '../../assets/icons/misc/filter.svg?react';
import TrendingIcon from '../../assets/icons/misc/trending.svg?react';
import TopIcon from '../../assets/icons/misc/top.svg?react';
import NewIcon from '../../assets/icons/misc/new.svg?react';
import CreatePost from './CreatePost';
import useAuth from '../../hooks/useAuth';
import axios from '../../api/axios';
import { PostType } from '../../types/PostType';

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('new');
  const [posts, setPosts] = useState<PostType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const auth = useAuth();
  console.log('USEAUTH: ', auth?.auth);

  const handleFilterChange = async (sortBy = 'trending') => {
    if (posts.length === 0) {
      return;
    }

    try {
      let sortedPosts: PostType[] = [];
      setSelectedFilter(sortBy);

      if (sortBy === 'trending') {
        sortedPosts = [...posts].sort((a, b) => {
          const now = new Date();
          const timePassedA = now.getTime() - new Date(a.createdAt).getTime();
          const timePassedB = now.getTime() - new Date(b.createdAt).getTime();

          const ratioA =
            (a.likedBy?.length - a.dislikedBy?.length || 0) / timePassedA;
          const ratioB =
            (b.likedBy?.length - b.dislikedBy?.length || 0) / timePassedB;

          if (ratioA === ratioB) {
            return timePassedB - timePassedA;
          }

          return ratioB - ratioA;
        });
      } else if (sortBy === 'new') {
        sortedPosts = [...posts].sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
        );
      } else if (sortBy === 'top') {
        sortedPosts = [...posts].sort(
          (a, b) =>
            b.likedBy.length -
            b.dislikedBy.length -
            (a.likedBy.length - a.dislikedBy.length)
        );
      }

      setPosts(sortedPosts);
    } catch (error) {
      console.log('Failed to sort posts: ', error);
    }
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get('/posts/');
        console.log(response);
        setPosts(response?.data?.data || []);
      } catch (error) {
        console.log('Failed to fetch posts: ', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="home">
      <div className="home__filter">
        <FilterIcon className="home__filter-icon" />
        <button
          className={`home__filter-button ${
            selectedFilter === 'trending' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => handleFilterChange('trending')}
        >
          <TrendingIcon className="home__filter-icon" />
          Trending
        </button>
        <button
          className={`home__filter-button ${
            selectedFilter === 'new' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => handleFilterChange('new')}
        >
          <NewIcon className="home__filter-icon" />
          New
        </button>
        <button
          className={`home__filter-button ${
            selectedFilter === 'top' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => handleFilterChange('top')}
        >
          <TopIcon className="home__filter-icon" />
          Top
        </button>
      </div>
      <CreatePost posts={posts} setPosts={setPosts} />
      {isLoading && <p>Loading..</p>}
      {posts?.length !== 0 && <Posts posts={posts} />}
    </div>
  );
};

export default Home;
