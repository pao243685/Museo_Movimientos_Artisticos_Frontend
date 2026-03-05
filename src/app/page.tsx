"use client";

import { useState } from "react";
import { Artwork } from "../types/artwork.types";
import ArtworkCard from "../components/ObraCard";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";
import MovementSelector from "../components/MovimientosMenu";
import { getArtworksByMovement } from "../services/artworks.service";

export default function Home() {
  const [artworks, setArtworks] = useState<Artwork[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchArtworks = async (movement: string) => {
    if (!movement) return;

    setLoading(true);
    setError("");

    try {
     const data = await getArtworksByMovement(movement);
     setArtworks(data);
    } catch {
      setError("No se pudieron cargar las obras.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-stone-950 px-6 py-16">

      <div className="max-w-4xl mx-auto text-center mb-14">
        <h1 className="text-5xl md:text-6xl font-light text-stone-100 tracking-widest mb-2">
          Museo
        </h1>
        <h2 className="text-lg text-amber-400/80 tracking-[0.2em] mb-6">
          Movimientos Artísticos
        </h2>
        <div className="w-16 h-px bg-amber-600/80 mx-auto mb-6" />
        <p className="text-stone-200 text-sm tracking-wide">
          Aprende sobre movimientos artísticos y sus obras
        </p>
      </div>

      <div className="flex justify-center mb-12">
        <MovementSelector onSelect={fetchArtworks} />
      </div>

      <div className="max-w-5xl mx-auto">
        {loading && <Loader />}
        {error && <ErrorMessage message={error} />}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artworks.map((art) => (
            <ArtworkCard key={art.id} artwork={art} />
          ))}
        </div>
      </div>

    </main>
  );
}