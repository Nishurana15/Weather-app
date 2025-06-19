import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
export default function InfoBox({Info}){
    const INIT_URL="https://images.unsplash.com/photo-1628868520252-7152dd0a1b0c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEJST0tFTiUyMENMT1VEU3xlbnwwfHwwfHx8MA%3D%3D"
    let cold_url="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    let hot_url="https://images.unsplash.com/uploads/14121010130570e22bcdf/e1730efe?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    let rain_url="https://images.unsplash.com/photo-1475116127127-e3ce09ee84e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    return(
        <div className="InfoBox">
            
            <div className="cardContainer">
             <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={Info.humidity>80?rain_url:Info.temp>15?hot_url:cold_url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {Info.city}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
          <p>Tempertaure={Info.temp}&deg;C</p>
          <p>Humidity={Info.humidity}</p>
          <p>Min temp={Info.tempMin}&deg;C</p>
          <p>Max temp={Info.tempMax}&deg;C</p>
          <p>Weather can be described as {Info.weather} and  feels like {Info.feels_like}&deg;C</p>
        </Typography>
      </CardContent>
      
    </Card>
        </div>
        </div>
    )
}