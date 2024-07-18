import { Category } from "../mockdata";

export default function MenuItem({
  id,
  name,
  logo,
  active,
  created_at,
  updated_at,
}: Category) {
  return (
    <div className="flex flex-col items-center">
      <img
        src={logo}
        alt={name}
        className="w-24 h-24 rounded-lg object-cover"
      />
      <p className="mt-2 text-sm font-semibold">{name}</p>
    </div>
  );
}
