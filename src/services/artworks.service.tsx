import { Artwork, ArtworkDetail } from "../types/artwork.types";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function getArtworksByMovement(movement: string): Promise<Artwork[]> {
  const res = await fetch(`${API_URL}/api/artworks?movement=${movement}`);

  if (!res.ok) {
    throw new Error("Error al obtener las obras.");
  }

  const data = await res.json();
  return data.artworks;
}

export async function getArtworkById(id: number): Promise<ArtworkDetail> {
  const res = await fetch(`${API_URL}/api/artworks/${id}`);

  if (!res.ok) {
    throw new Error("Error al obtener el detalle de la obra.");
  }

  const data = await res.json();
  return data.artwork;
}