export default function ProductItem({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-lg font-bold">{price}</p>
      </div>
    </div>
  );
}
