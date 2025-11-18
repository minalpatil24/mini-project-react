import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';


export default function InfoBox({ info }) {
  const INIT_URL =
    "https://images.unsplash.com/photo-1722858343990-1604f540c15d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let COLD_URL = "https://images.unsplash.com/photo-1668531387310-9c3c2f272d52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
  let HOT_URL = "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  let RAIN_URL = "https://plus.unsplash.com/premium_photo-1664303017917-71ebeb42343d?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia sx={{ height: 140 }}
            image={
              info.humidity > 80
              ? RAIN_URL
              : info.temp > 15
                ? HOT_URL
                : COLD_URL
            }
            title="Weather" />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {
              info.humidity > 80
              ? <ThunderstormIcon/>
              : info.temp > 15
              ? <SunnyIcon/>
              : <AcUnitIcon/>
            }
            </Typography>

            {/* NO <p> inside Typography. Use multiple Typography lines.  */}
            <Typography variant="body2" color="text.secondary">
              Temperature = {info.temp}°C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Humidity = {info.humidity}
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Min Temp = {info.tempMin}°C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Max Temp = {info.tempMax}°C
            </Typography>

            <Typography variant="body2" color="text.secondary">
              Feels like {info.feelsLike}°C, and weather is{" "}
              <i>{info.weather}</i>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
