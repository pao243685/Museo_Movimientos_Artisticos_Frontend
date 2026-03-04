interface Props {
  onSelect: (movement: string) => void;
}

export default function MovementSelector({ onSelect }: Props) {
  return (
    <div className="flex flex-col items-center gap-2">
      <label className="text-xs tracking-[0.3em] text-amber-500/70 uppercase">
        Movimiento
      </label>
      <select
        onChange={(e) => onSelect(e.target.value)}
        className="
          bg-stone-900
          border border-stone-700
          text-stone-300
          text-sm tracking-wide
          px-5 py-3
          rounded-sm
          min-w-[260px]
          outline-none
          cursor-pointer
        "
      >
        <option value="">Selecciona un movimiento Artístico</option>
        <option value="Impressionism">Impresionismo</option>
        <option value="Cubism">Cubismo</option>
        <option value="Surrealism">Surrealismo</option>
      </select>
    </div>
  );
}