import { Flex } from "@/once-ui/components";
import { Suspense } from "react";
import { baseURL } from "@/app/resources";
import { gallery, person } from "@/app/resources/content";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Loading from "@/components/gallery/Loading";

// Define interfaces for the API response
interface Image {
  url: string;
  name: string;
  width: number;
  height: number;
  orientation: string;
}

interface GalleryResponse {
  success: boolean;
  images: Image[];
}

export async function generateMetadata() {
  const title = gallery.title;
  const description = gallery.description;
  const ogImage = `https://${baseURL}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://${baseURL}/gallery`,
      images: [
        {
          url: ogImage,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

// Server component to fetch gallery data
async function GalleryImages() {
  const response = await fetch(
    "https://personal-be-373o.onrender.com/api/gallery",
    {
      next: { revalidate: 3600 }, // Revalidate every hour
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch gallery images");
  }

  const data: GalleryResponse = await response.json();

  return <GalleryGrid images={data.images} />;
}

export default function Gallery() {
  return (
    <Flex fillWidth>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            name: gallery.title,
            description: gallery.description,
            url: `https://${baseURL}/gallery`,
            author: {
              "@type": "Person",
              name: person.name,
              image: {
                "@type": "ImageObject",
                url: `${baseURL}${person.avatar}`,
              },
            },
          }),
        }}
      />
      <Suspense fallback={<Loading />}>
        <GalleryImages />
      </Suspense>
    </Flex>
  );
}
