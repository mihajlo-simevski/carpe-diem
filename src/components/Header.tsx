import Avatar from "./Avatar";

export default function Header() {
  return (
    <div className="flex items-center">
      <Avatar />
      <div>
        <h2 className="text-xl font-bold">Carpe Diem Lounge Club</h2>
        <p className="text-sm text-muted-foreground">Open Now</p>
      </div>
    </div>
  );
}
