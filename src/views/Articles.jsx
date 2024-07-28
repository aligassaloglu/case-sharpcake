import Divider from '@mui/material/Divider';
import fetchEntries from '../contentfulService';
import { useState, useEffect } from 'react';
export const Articles = () =>{
  const contentHeader = "Explore Articles"

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEntries = async () => {
      try {
        const data = await fetchEntries();
        setEntries(data.items);
        console.log(data.items, "items")
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    getEntries();
  }, []);

  return <div className="articles-tab">
    <div className='tab-header'>
      <h2>{contentHeader}</h2>
      <Divider orientation="horizontal" />
    </div>
  </div>
}