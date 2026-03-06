"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ArtworkDetail } from "@/types/artwork.types";
import { getArtworkById } from "@/services/artworks.service";
import Image from "next/image";

export default function ArtworkDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [artwork, setArtwork] = useState<ArtworkDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetch = async () => {
      try {
        const data = await getArtworkById(Number(id));
        setArtwork(data);
      } catch {
        setError("No se pudo cargar la obra.");
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, [id]);

  if (loading) return <p className="text-center mt-20 text-stone-400">Cargando...</p>;
  if (error) return <p className="text-center mt-20 text-red-400">{error}</p>;
  if (!artwork) return null;

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-16">
      <div className="max-w-4xl mx-auto">

        <button
          onClick={() => router.back()}
          className="text-amber-600/70 text-sm tracking-wide mb-10 flex items-center gap-2"
        >
          ← Volver
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-stone-900 border border-stone-800 rounded-sm flex items-center justify-center max-h-[400px]">
            {artwork.imageUrl ? (
              <Image
                src={artwork.imageUrl}
                alt={artwork.title}
                fill
                className="object-contain rounded-sm"
              />
            ) : (
              <p className="text-stone-600 text-sm italic">Sin imagen disponible</p>
            )}
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-2xl font-light text-stone-100 leading-snug mb-1">
                {artwork.title}
              </h1>
              <p className="text-amber-600/80 text-sm tracking-wide">
                {artwork.artist}
              </p>
            </div>

            <div className="h-px w-12 bg-amber-700/40" />

            <div className="flex flex-col gap-3 text-sm">
              <div>
                <p className="text-stone-500 text-xs tracking-widest uppercase mb-1">Año</p>
                <p className="text-stone-300">{artwork.year}</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs tracking-widest uppercase mb-1">Departamento</p>
                <p className="text-stone-300">{artwork.department}</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs tracking-widest uppercase mb-1">Técnica</p>
                <p className="text-stone-300">{artwork.medium}</p>
              </div>
              <div>
                <p className="text-stone-500 text-xs tracking-widest uppercase mb-1">Dimensiones</p>
                <p className="text-stone-300">{artwork.dimensions}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}