"use client";
import { Media, MasonryGrid, Heading, Column } from "@once-ui-system/core";
import { gallery } from "@/resources";

export default function GalleryView() {
  const sections = Array.from(new Set(gallery.images.map((img: any) => img.section)));

  return (
    <Column fillWidth gap="xl">
      {sections.map((section) => (
        <Column key={section} fillWidth gap="m">
          <Heading as="h2" variant="heading-strong-l">{section}</Heading>
          <MasonryGrid columns={2} s={{ columns: 1 }}>
            {gallery.images
              .filter((img: any) => img.section === section)
              .map((image: any, index: number) => (
                <Media
                  enlarge
                  priority={index < 10}
                  sizes="(max-width: 560px) 100vw, 50vw"
                  key={index}
                  radius="m"
                  aspectRatio={image.aspectRatio || (image.orientation === "horizontal" ? "16 / 9" : "3 / 4")}                  
                  src={image.src}
                  alt={image.alt}
                />
              ))}
          </MasonryGrid>
        </Column>
      ))}
    </Column>
  );
}
