import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import NewsBoard from './Components/NewsBoard';
import NewsItem from './Components/NewsItem';
import { useState } from 'react';

function App() {

  const[category,setcategory] = useState("general")
  return (
   <>
   <Navbar setcategory={setcategory}/>
   <NewsBoard category={category}/>
   <NewsItem/>
   </>
  );
}

export default App;
