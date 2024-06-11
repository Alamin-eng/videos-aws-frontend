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
          <Card variant="solid" sx={{ minWidth: 280, flexGrow: 1 }} key={ind}>
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
                  <video width="280" height="180" controls muted>
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
            <CardOverflow variant="plain" sx={{ height: "100px" }}>
              <CardContent>
                <Typography
                  level="body-md"
                  fontWeight={600}
                  sx={{ color: "rgb(12, 193, 234)" }}
                >
                  {el.title}
                </Typography>
                <Divider
                  orientation="horizontal"
                  sx={{ background: "rgb(179, 179, 179)", width: "60%" }}
                />
                <Typography level="body-sm">
                  <Link
                    fontWeight={500}
                    href="#multiple-actions"
                    sx={{ color: "rgb(220, 168, 70)" }}
                  >
                    Channel link
                  </Link>
                </Typography>
              </CardContent>
            </CardOverflow>
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

