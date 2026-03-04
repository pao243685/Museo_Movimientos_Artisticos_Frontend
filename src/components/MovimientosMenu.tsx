interface Props {
  onSelect: (movement: string) => void;
}

export default function MovementSelector({ onSelect }: Props) {
  return (
    <div className="mt-6">
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="">Selecciona un movimiento Artistico</option>
        <option value="Impressionism">Impresionismo</option>
        <option value="Cubism">Cubismo</option>
        <option value="Surrealism">Surrealismo</option>
      </select>
    </div>
  );
}