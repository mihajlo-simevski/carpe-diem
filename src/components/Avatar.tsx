import { ReactComponent as AvatarSVG } from "../assets/images/avatar-15.svg";

export default function Avatar() {
  return (
    <div className="relative flex h-full w-10 shrink-0 overflow-hidden rounded-full">
      <AvatarSVG style={{ height: '100%' }} />
    </div>
  );
}
