export interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div className="mt-6 text-center text-red-600 font-semibold">
      {message}
    </div>
  );
}