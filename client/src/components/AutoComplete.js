import { useState, useEffect } from 'react';
import { Autocomplete, TextInput } from 'evergreen-ui';
import axios from 'axios';
import './AutoComplete.css';

const AutoComplete = (props) => {
  const [value, setValue] = useState('');
  const [items, setItems] = useState([]);
  const [hero, setHero] = useState({});

  useEffect(() => {
    console.log(hero);
  }, [hero]);

  const getItem = async () => {
    try {
      const res = await axios.get(
        `http://localhost:5000/api/autocomplete/${value}`
      );
      setItems((prevItem) => res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const change = (e) => {
    setValue(e.target.value);
    console.log(e + ' ' + value);
    //getItem();
  };

  const submitValue = (item) => {
    setHero(item);
    setItems([]);
  };

  return (
    <>
      <div className='wrapper'>
        <div className='search-input'>
          <a href='' target='_blank' hidden></a>
          <input
            type='text'
            placeholder='Type to search..'
            onKeyUp={(event) => {
              if (event.code === 'Enter') getItem(event);
              else change(event);
            }}
          />
          <div className='autocom-box'>
            {items.map((item) => (
              <li className='autoComplete' onClick={() => submitValue(item)}>
                {item.name}
              </li>
            ))}
          </div>
          <div className='icon'>
            <i className='fas fa-search' onClick={getItem}></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default AutoComplete;
