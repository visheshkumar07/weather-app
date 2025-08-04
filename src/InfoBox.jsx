import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';


export default function InfoBox ({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1476337721153-7c35c2d4346c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3ZlcmNhc3QlMjBjbG91ZHN8ZW58MHx8MHx8fDA%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1562261150-0989084c593e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VtbWVyJTIwc3VufGVufDB8fDB8fHww";
    const COLD_URL = "https://images.unsplash.com/photo-1457269449834-928af64c684d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ludGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1511634829096-045a111727eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";
    
    return (
        <div className="InfoBox">
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia
               sx={{ height: 140 }}
               image= {info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL}
               title="green iguana"
             />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
             {info.city} {info.humidity > 80 ? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> : <AcUnitIcon/>}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}component={"span"}>
             <p>Temprature = {info.temp}&deg;C</p>
             <p>Humidity = {info.humidity}</p>
             <p>Min Temp = {info.tempMin}&deg;C</p>
             <p>Mix Temp = {info.tempMax}&deg;C</p>
             <p>The weather can be described as <i>{info.weather}</i> and feels like = {info.feelsLike}&deg;C</p>
            </Typography>
            </CardContent>
           </Card>
           </div>
        </div>
    );
}