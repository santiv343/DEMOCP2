import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Gallery from './components/gallery/index.jsx';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import GalleryCardDetail from './components/galleryCardDetail';


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Gallery />} />
          <Route path="/card/:id" element={<GalleryCardDetail/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
