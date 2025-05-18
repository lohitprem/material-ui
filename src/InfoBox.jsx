import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';


export default function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1545134969-8debd725b007?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZHVzdHl8ZW58MHx8MHx8fDA%3D"

    const HOT_URL = "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3VtbWVyfGVufDB8fDB8fHww"
    const RAIN_URL = "https://images.unsplash.com/photo-1509635022432-0220ac12960b?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHJhaW58ZW58MHx8MHx8fDA%3D"
    const COLD_URL = "https://images.unsplash.com/photo-1579847641267-5445b760b991?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sZHxlbnwwfHwwfHx8MA%3D%3D"
    
    return (
    <div className="InfoBox">
    <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity > 50 ? (info.temp > 300 ? HOT_URL : COLD_URL) : (info.temp > 300 ? HOT_URL : RAIN_URL)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity > 50 ? (info.temp > 300 ? <SunnyIcon /> : <AcUnitIcon />) : (info.temp > 300 ? <SunnyIcon /> : <WaterDropIcon />)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' } } component={"span"}>
          <p>temperature: {info.temp}</p>
          <p>humidity: {info.humidity}</p>
          <p>min temp: {info.tempmin}</p>
          <p>max temp: {info.tempmax}</p>
          <p>weather feels like: {info.feelslike}</p>


        </Typography>
      </CardContent>
    </Card>
    </div>
    </div>
    )
}