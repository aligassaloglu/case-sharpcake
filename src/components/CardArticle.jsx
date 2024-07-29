import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

export const CardArticle = ({img, title, summary, tag, isLoading = false}) =>{
  return <Card className='card-article' style={{borderRadius: "calc((20/16)*1vw)"}}>
  <CardMedia
    sx={{ height: "calc((218/16)*1vw)",borderRadius: "calc((20/16)*1vw)" }}
    image={"https:" + img.file.url}
    title={img.file.title}
  />
  <CardContent className='content'>
    <h3>
      {title}
    </h3>
    <p>{summary}</p>
  </CardContent>
  <CardActions>

    <strong>#{tag}</strong>
  </CardActions>
</Card>
}