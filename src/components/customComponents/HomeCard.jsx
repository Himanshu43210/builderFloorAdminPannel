import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import ApiButton from "./ApiButton";
import { convertToCr } from "../utils/HelperMethods";

export default function HomeCard({
  element,
  onClickApi,
  onClickNavigate,
  classname,
  apiType,
}) {
  return (
    <Card
      className={classname}
      sx={{
        maxWidth: "345px",
        width: "auto",
        height: "300px",
        marginTop: "0px",
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={element.thumbnails?.[0]}
          alt={element.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {element.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {element.sectorNumber}
          </Typography>
          <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ display: "flex", gap: "5px" }}>
              <img
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/home.svg"
                alt="img"
                className="homecardicon"
                height="20px"
                width="20px"
              />
              <Typography variant="body2" className="homecardtext">
                {element.accommodation}{" "}
              </Typography>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <img
                src="https://builder-floor-flax.vercel.app/assets/imgs/page/homepage5/floor.svg"
                alt="img"
                className="homecardicon"
                height="20px"
                width="20px"
              />
              <Typography variant="body2">{element.floor}</Typography>
            </div>
            <div style={{ display: "flex", gap: "5px" }}>
              <img
                src="https://builder-floor-flax.vercel.app/assets/imgs/icons/area-svg.svg"
                alt="img"
                className="homecardicon"
                height="20px"
                width="20px"
              />
              <Typography variant="body2">{element.size}Sq.Yd.</Typography>
            </div>
          </div>
        </CardContent>

        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          <Rating
            name="home-card-fixed-rating"
            value={element.raiting || 5}
            precision={1}
            readOnly
          />
          <ApiButton
            apiType={apiType}
            api={onClickApi}
            buttonLabel={`₹ ${convertToCr(element.price)} Cr.`}
            queryParams={{ id: element._id }}
            navigate={`${onClickNavigate}?title=${element.title?.replaceAll(
              " ",
              "-"
            )}&id=${element._id}`}
          />
        </div>
      </CardActionArea>
    </Card>
  );
}
