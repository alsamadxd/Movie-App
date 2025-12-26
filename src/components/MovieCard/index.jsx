import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid,Icon, IconButton  } from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarIcon from '@mui/icons-material/Star';

export default function MovieCard({movie}) {
    // const {}
  return (
    <Grid sx={6}>
      <Card sx={{ maxWidth: 345,height:700 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={`${movie.backdrop_path}`}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {movie.original_title}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Release Date : {movie.release_date}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Rating : {movie.vote_average}
          </Typography>
          <Typography variant="h6" sx={{ color: "text.secondary" }}>
            Language : {movie.original_language}
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Duration: 125 mins
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            
            <StarIcon /> {movie.vote_average}
          </Typography>
        </CardActions>
      </Card>
    </Grid>
  );
}
