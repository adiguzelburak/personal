"use client";

import { memo } from "react";
import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";

interface Image {
  url: string;
  name: string;
  width: number;
  height: number;
  orientation: string;
}

interface GalleryGridProps {
  images: Image[];
}

const breakpointColumnsObj = {
  default: 4,
  1440: 3,
  1024: 2,
  560: 1,
};

const GalleryGrid = memo(function GalleryGrid({ images }: GalleryGridProps) {
  console.log(images);
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {images.map((image, index) => {
        // Construct full URL for the image
        const fullImageUrl = `https://personal-be-373o.onrender.com${image.url}`;

        return (
          <SmartImage
            priority={index < 8} // Only prioritize first 8 images
            sizes="(max-width: 560px) 100vw, (max-width: 1024px) 50vw, (max-width: 1440px) 33vw, 25vw"
            key={image.name}
            radius="m"
            aspectRatio={
              image.orientation === "horizontal" ? "16 / 9" : "9 / 16"
            }
            src={fullImageUrl}
            alt={image.name}
            className={styles.gridItem}
          />
        );
      })}
    </Masonry>
  );
});

export default GalleryGrid;
