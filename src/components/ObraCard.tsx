import Image from "next/image";
import { Artwork } from "@/types/artwork.types";
import Link from "next/link";

interface Props {
  artwork: Artwork;
}

export default function ArtworkCard({ artwork }: Props) {
  return (
    <Link href={`/artwork/${artwork.id}`}>
      <div className="border border-stone-800 rounded-sm bg-stone-900 overflow-hidden hover:border-amber-700/50 transition-colors">
        {artwork.imageUrl ? (
          <div className="relative w-40 h-60">
            <Image
              src={artwork.imageUrl}
              alt={artwork.title}
              fill
              className="object-cover"
            />
          </div>
        ) : (
          <div className="w-full h-60 bg-stone-800 flex items-center justify-center text-stone-500 text-sm italic">
            Sin imagen
          </div>
        )}
        <div className="p-4">
          <h3 className="text-stone-100 font-light text-sm leading-snug">{artwork.title}</h3>
          <p className="text-amber-600/70 text-xs mt-1">{artwork.artist}</p>
          <p className="text-stone-500 text-xs mt-1">{artwork.year}</p>
        </div>
      </div>
    </Link>
  );
}