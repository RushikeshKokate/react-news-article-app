import React from 'react'
import { useSelector } from 'react-redux';
const BookMarkCard = () => {
    const bookmarks = useSelector((state) => state.bookmarks);
  return (
    <div>
      <h2>Bookmarked Articles</h2>
      <div className="bookmark-list">
        {bookmarks.map((article, index) => (
          <div key={index} className="card">
            {article.urlToImage ? (
              <img className="img" src={article.urlToImage} alt={article.title} style={{ height: "200px", width: "200px", border: "1px solid transparent", borderRadius: "15px" }} />
            ) : (
              <img className="img" src="/placeholder.jpg" alt="Placeholder" style={{ height: "200px", width: "200px" }} />
            )}
            <h3>{article.title}</h3>
            <h4>{article.author}</h4>
            <p>{article.description}</p>
            <a className='read-more' href={article.url} target="_blank" rel="noopener noreferrer">READ MORE</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookMarkCard