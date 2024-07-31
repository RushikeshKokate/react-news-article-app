import React from 'react';
import css from '../Components/Article.css'

const Article = ({ article, onBookmark}) => {
  return (
    <div className = 'card'>
      {article.urlToImage ? (
        <img className="img" src={article.urlToImage} alt={article.title} style={{height:"200px", width:"200px", border: "1px solid transperent", borderRadius:"15px"}}/>
      ) : (
        <img className="img"  src="/placeholder.jpg" alt="Placeholder" style={{height:"200px", width:"200px"}}/>
      )}

      <h3>{article.title}</h3>
      <h4>{article.author}</h4>
      <p>{article.description}</p>
      <a className='read-more' href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
      <button className='btn' onClick={onBookmark}>Bookmark</button>
    </div>
  );
};

export default Article;
