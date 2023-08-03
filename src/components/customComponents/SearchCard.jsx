import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import ApiButton from "./ApiButton";
import { FaShareAlt, FaRegHeart } from "react-icons/fa";
import "./../../css/UserStyle.css";

export default function SearchCard({
  element = {},
  apiType,
  onClickApi,
  onClickNavigate,
  classname,
}) {
  return (
    <Card className={classname}>
      <CardActionArea className="searchcardiv">
        <CardMedia
          component="img"
          height="100"
          // image={element.thumbnails?.[0]}
          src={element}
          // alt="Left_Image"

          alt={element.title}
        />
        <div>
          <CardContent>
            <div className="detailcardheadingdiv">
              <Typography
                variant="h5"
                gutterBottom
                className="detailcardheading"
              >
                {element.title}
              </Typography>
              <div className="detailicondiv">
                <FaShareAlt size={"23px"} />
                <FaRegHeart size={"23px"} />
              </div>
            </div>
            <div>
              <div className="contentdiv">
                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/location.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">
                    {element.sectorNumber}
                  </Typography>
                </div>
                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/home.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">{element.size}</Typography>
                </div>
                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/check.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">{element.possession}</Typography>
                </div>
                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/stairs.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">{element.floor}</Typography>
                </div>
                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/home.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">
                    {element.accommodation}
                  </Typography>
                </div>

                <div>
                  <img
                    className="detailimages"
                    src="https://builder-floor-flax.vercel.app/assets/imgs/icons/compass.png"
                    alt=""
                  />
                  <Typography fontWeight="lg">{element.facing}</Typography>
                </div>

                <div className="searchpagebuttondiv">
                  <ApiButton
                    className="searchcardbtn"
                    apiType={apiType}
                    api={onClickApi}
                    buttonLabel={`₹ ${element.price / 10000000} Cr.`}
                    queryParams={{ id: element._id }}
                    navigate={`${onClickNavigate}?title=${element.title?.replaceAll(
                      " ",
                      "-"
                    )}&id=${element._id}`}
                  />
                  &nbsp;
                  <Typography fontWeight="lg"> View Details >>>> </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </CardActionArea>
    </Card>
  );
}
