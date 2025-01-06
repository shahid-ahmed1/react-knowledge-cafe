import { useState } from "react"
import Blogs from "./components/Blogs/Blogs"
import Bookmarks from "./components/Bookmarks/Bookmarks"

import Header from "./components/headers/Header"


function App() {
  const [bookmarks,setBooksmarks]=useState([])
  const [readingtime,setReadingtime]=useState(0);

const handleAddToBooksmark =blog=>{
  const newBooksmark= [...bookmarks,blog];
  setBooksmarks(newBooksmark)
}
const handleMarkAsRead= time=>{
  setReadingtime(readingtime+time)
}
  return (
    <>
      
       <Header></Header>
       <div className="md:flex justify-between mx-5 p-5 ">
      <Blogs handleAddToBooksmark={handleAddToBooksmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
       <Bookmarks bookmarks={bookmarks} readingtime={readingtime} ></Bookmarks>
       </div>
     
    </>
  )
}

export default App
