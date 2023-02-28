import * as React from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

export default function HalfRating() {
  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        size="small"
        defaultValue={3}
        precision={0.5}
        onChange={(e) => console.log(e.target.value)}
      />
    </Stack>
  );
}
