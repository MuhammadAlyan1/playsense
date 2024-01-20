import { useState } from 'react';
import Posts from '../shared/Posts';
import FilterIcon from '../../assets/icons/misc/filter.svg?react';
import TrendingIcon from '../../assets/icons/misc/trending.svg?react';
import TopIcon from '../../assets/icons/misc/top.svg?react';
import NewIcon from '../../assets/icons/misc/new.svg?react';
import CreatePost from './CreatePost';
// import useRefreshToken from '../../hooks/useRefreshToken';
import useAuth from '../../hooks/useAuth';
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { axiosPrivate } from '../../api/axios';
const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState('trending');
  const auth = useAuth();
  console.log('USEAUTH: ', auth?.auth);
  // const useAxiosPrivate = useAxiosPrivate();

  // useEffect(() => {
  //   console.log('AUTH: ', authContext?.auth);
  // }, [authContext?.auth?.accessToken]);

  const deleteUser = async () => {
    const response = await axiosPrivate.delete(
      `/users/delete/${auth?.auth?.userId}`,
      {
        withCredentials: true
      }
    );

    console.log('DELETE USER RESPONSE: ', response);
  };

  return (
    <div className="home">
      <div className="home__filter">
        <FilterIcon className="home__filter-icon" />
        <button
          className={`home__filter-button ${
            selectedFilter === 'trending' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => setSelectedFilter('trending')}
        >
          <TrendingIcon className="home__filter-icon" />
          Trending
        </button>
        <button
          className={`home__filter-button ${
            selectedFilter === 'new' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => setSelectedFilter('new')}
        >
          <NewIcon className="home__filter-icon" />
          New
        </button>
        <button
          className={`home__filter-button ${
            selectedFilter === 'top' ? 'home__filter-button--selected' : ''
          }`}
          onClick={() => setSelectedFilter('top')}
        >
          <TopIcon className="home__filter-icon" />
          Top
        </button>
      </div>
      <button onClick={deleteUser}>DELETE</button>
      <CreatePost />
      <Posts />
    </div>
  );
};

export default Home;
