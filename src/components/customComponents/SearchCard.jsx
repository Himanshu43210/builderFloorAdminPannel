import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import ApiButton from "./apiButton";
import { GET } from "../utils/Const";

export default function SearchCard({
  element,
  onClickApi,
  onClickNavigate,
  classname,
}) {
  return (
    
    <Card className={classname} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="100"
          image={element.thumbnails?.[0]}
          alt={element.title}
        />
        <CardContent style={ {display:'flex' , flexDirection:"column"}}>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.sectorNumber}
          </Typography>
          <div style={ {display:"flex"}}>
          <Typography variant="body2">{element.accommodation}</Typography>
          <Typography variant="body2">{element.floor}</Typography>
          <Typography variant="body2">{element.size}Sq.Yd.</Typography>
          </div>
        </CardContent>
       <div style={ { display:"flex"}}>

        <Rating
          name="home-card-fixed-rating"
          value={element.raiting || 5}
          precision={1}
          readOnly
        />
  
      <ApiButton
        apiType={GET}
        api={onClickApi}
        buttonLabel={`₹ ${element.price / 10000000} Cr.`}
        queryParams={{ id: element._id }}
        navigate={onClickNavigate}
      />
       </div>
           </CardActionArea>
    </Card>
  );
}
