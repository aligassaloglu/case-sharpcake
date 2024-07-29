import Divider from '@mui/material/Divider';
import fetchEntries from '../contentfulService';
import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Skeleton from '@mui/material/Skeleton';
import { CardArticle } from '../components/CardArticle';
export const Articles = () =>{
  const contentHeader = "Explore Articles"

  const [entries, setEntries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getEntries = async () => {
      try {
        setLoading(true)
        const data = await fetchEntries();
        data.items.forEach((item,index)=>{
          item.assets = data.includes.Asset[index]
        })
        setEntries(data.items);
        console.log(data.items, "items")
        console.log('https:' + data.items[1].assets.fields.file.url)
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
    <div className='cards-layout'>
      {/* loading */}
      {
        loading ? 
        (
          [1,2].map((item,index)=>(
            <Box key={index} sx={{ width: "calc((550/16)*1vw)", display: "flex", flexDirection: "column", gap: "1vw" }}>
              <Skeleton variant="rectangular" sx={{borderRadius: "calc((20/16)*1vw)"}} width={"100%"} height={218} />
              <Skeleton />
              <Skeleton width="60%" />
              <Skeleton width="30%" sx={{alignSelf: "flex-end"}} />
            </Box>
            )
          )
        )
        : 
          
        (entries.map((item,index)=>(
          <CardArticle 
            key={index}
            img={item.assets.fields}
            title={item.fields.title} 
            summary={item.fields.summary}
            tag={item.fields.tag}
          />
        )))
      }
    </div>
  </div>
}