import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import ApiButton from "./ApiButton";
import { GET } from "../utils/Const";

export default function HomeCard({
  element,
  onClickApi,
  onClickNavigate,
  classname,
}) {
  console.log("inside home card")
  return (
    <Card className={classname} sx={{ maxWidth: 345, width: "25%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={element.thumbnails?.[0]}
          alt={element.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.sectorNumber}
          </Typography>
          <Typography variant="body2">{element.accommodation}</Typography>
          <Typography variant="body2">{element.floor}</Typography>
          <Typography variant="body2">{element.size}Sq.Yd.</Typography>
        </CardContent>
        <Rating
          name="home-card-fixed-rating"
          value={element.raiting || 5}
          precision={1}
          readOnly
        />
      </CardActionArea>
      <ApiButton
        apiType={GET}
        api={onClickApi}
        buttonLabel={`₹ ${element.price / 10000000} Cr.`}
        queryParams={{ id: element._id }}
        navigate={onClickNavigate}
      />
    </Card>
  );
}
