import "./card.css";
import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";

import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import IconButton from "@mui/joy/IconButton";
import Link from "@mui/joy/Link";
import Favorite from "@mui/icons-material/Favorite";
import Card from "@mui/joy/Card";

export default function MainCard({ props }) {
  return (
    <div
      className="main-card"
    >
      {props.map((el, ind) => {
        return (
          <Card variant="solid" sx={{ minWidth: 300, flexGrow: 1 }} key={ind}>
            <CardOverflow>
              <AspectRatio ratio="2">
                {el.url.includes("youtube.com") ||
                el.url.includes("youtu.be") ? (
                  <iframe
                    width="300"
                    height="200"
                    src={el.url.replace("watch?v=", "embed/")}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video width="300" height="200" controls muted>
                    <source src={el.url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                )}
              </AspectRatio>
              <IconButton
                aria-label="Like minimal photography"
                size="md"
                variant="solid"
                color="danger"
                sx={{
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  right: "1rem",
                  bottom: 0,
                  transform: "translateY(50%)",
                }}
              >
                <Favorite />
              </IconButton>
            </CardOverflow>
            <CardContent>
              <Typography level="title-md" textColor="inherit">
                <Link
                  href="#multiple-actions"
                  overlay
                  underline="none"
                  color="success"
                  variant="plain"
                >
                  {el.title}
                </Link>
              </Typography>
              <Typography level="body-sm">
                <Link href="#multiple-actions">Channel link</Link>
              </Typography>
            </CardContent>
            <CardOverflow variant="soft">
              <Divider inset="context" />
              <CardContent orientation="horizontal">
                <Typography level="body-xs">6.3k views</Typography>
                <Divider orientation="vertical" />
                <Typography level="body-xs">1 hour ago</Typography>
              </CardContent>
            </CardOverflow>
          </Card>
        );
      })}
    </div>
  );
}

// <Card component="li" key={ind} sx={{ minWidth: 300, flexGrow: 1 }}>
//             {el.url.includes("youtube.com") || el.url.includes("youtu.be") ? (
//               <iframe
//                 width="300"
//                 height="200"
//                 src={el.url.replace("watch?v=", "embed/")}
//                 title="YouTube video player"
//                 frameBorder="0"
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                 allowFullScreen
//               ></iframe>
//             ) : (
//               <video width="300" height="200" controls muted>
//                 <source src={el.url} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             )}
//           </Card>
