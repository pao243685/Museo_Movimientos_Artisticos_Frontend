import { Artwork } from "@/types/artwork.types";
import Image from "next/image";

interface Props {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <div className="border rounded shadow p-4">
      <Image
        src={artwork.image}
        alt={artwork.title}
        className="w-full h-60 object-cover mb-4"
      />
      <h3 className="font-bold">{artwork.title}</h3>
      <p>{artwork.artist}</p>
      <p className="text-sm text-gray-500">{artwork.year}</p>
    </div>
  );
}