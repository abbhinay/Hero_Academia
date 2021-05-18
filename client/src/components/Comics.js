import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comics = (props) => {
  const [comics, setComics] = useState([]);

  const getComics = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/search/${props.id}`
      );
      //console.log(res.data);
      const newComics = res.data.map((comic) => {
        const newComic = {
          title: comic.title,
          thumbnail: comic.thumbnail.path + '.' + comic.thumbnail.extension,
        };
        return newComic;
      });
      //console.log(newComics);
      setComics([...newComics]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getComics();
  }, [props.id]);

  return (
    <div>
      <h1>Comics</h1>
      {comics.map((cc) => (
        <div className='card'>
          <img src={cc.thumbnail} alt='' />
          <h1>{cc.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Comics;
