import {useState} from 'react'
import {initialDetails} from './data';
import Card from './Card';

const SearchableList = () => {
  const [search, setSearch] = useState(''); // j
  const [data, setData] = useState(initialDetails);

  const handleSearch = (evt) => {
    setSearch(evt.target.value);
    if (evt.target.value.length > 0) {
      const filteredData = data.filter((user) => {
        return user.name.toLowerCase().startsWith(evt.target.value.toLowerCase())
         || 
         user.email.toLowerCase().startsWith(evt.target.value.toLowerCase());
      })
      setData(filteredData);
    } else {
      setData(initialDetails);
    }
  }
  
  return (
    <div>
      <input type='text' value={search} onChange={handleSearch} />
      <div className='grid'>
        {data && data.map((userData) => {
          return (
            <Card key={userData.id} user={userData} />
          )
        })}
      </div>
    </div>
  )
}

export const Search = () => {
  return (
    <div>

    </div>
  )
}

export default SearchableList