import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Article from './Article';
import '../Components/Feed.css'
import { useDispatch } from 'react-redux';
import { addBookmark } from './bookmarkSlice';

const Feed = () => {

  const [articles, setArticles] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const getFeed = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=263b6747186d4936a30a4d6ec37800ea');
        setArticles(response.data.articles);
        console.log(articles);
      } catch (error) {
        console.error('Error fetching the news feed:', error);
      }
    };
    getFeed();
  }, []);

  const handleBookmark = (article) => {
    dispatch(addBookmark(article));
  };
  
  return (
    <div>
      <div className='Feed'>
        {articles.map((article, index) => (
          <Article key={index} article={article}  onBookmark={() => handleBookmark(article)}/>
        ))}
      </div>
    </div>
  );
};

export default Feed;
