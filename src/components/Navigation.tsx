import { PhoneForwarded, MapPin, Share, MessageSquareMore } from "lucide-react";

export default function Navigation() {
  return (
    <div className="flex justify-around mt-4">
      <div className="flex flex-col items-center">
        <PhoneForwarded className="w-6 h-6 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">Call Location</p>
      </div>
      <div className="flex flex-col items-center">
        <MapPin className="w-6 h-6 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">Find Location</p>
      </div>
      <div className="flex flex-col items-center">
        <Share className="w-6 h-6 text-muted-foreground" />
        <p className="text-xs text-muted-foreground">Share</p>
      </div>
      <div className="flex flex-col items-center">
        <MessageSquareMore className="w-6 h-6 text-muted-foreground opacity-[0.5]" />
        <p className="text-xs text-muted-foreground">Message</p>
      </div>
    </div>
  );
}
