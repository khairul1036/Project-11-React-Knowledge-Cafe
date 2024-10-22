import './App.css'
import Header from './components/header'
import Blogs from './components/blogs'
import { useState } from 'react'
import Bookmarks from './components/Bookmarks';

function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmarks = data => {
    setBookmarks([...bookmarks, data])
  }

  const handleMarkAsRead = (id,time) =>{
    const newReadingTime = parseFloat(readingTime) + parseFloat(time);
    setReadingTime(newReadingTime)

    const remainingBookmark = bookmarks.filter(bookmark => bookmark.id != id);
    setBookmarks(remainingBookmark)
  }

  return (
    <>
      <Header></Header>
      <div className='flex max-w-7xl mx-auto py-10 gap-10'>
          <Blogs handleAddBookmarks={handleAddBookmarks} handleMarkAsRead={handleMarkAsRead}></Blogs>
          <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
