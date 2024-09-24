import {
  DiscIcon,
  DiscordLogoIcon,
  InstagramLogoIcon,
  LaptopIcon,
} from "@radix-ui/react-icons";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex items-center justify-center py-4">
      <div className="text-orange-500 text-center">
        <Button
          variant="ghost"
          onClick={() =>
            window.open("https://www.instagram.com/osu.acm/", "_blank")
          }
        >
          <InstagramLogoIcon className="text-orange-500 mr-2" />
          Instagram
        </Button>
        <Button
          variant="ghost"
          onClick={() => window.open("https://acm.oregonstate.edu/", "_blank")}
        >
          <LaptopIcon className="text-orange-500 mr-2" />
          Website
        </Button>
        <Button
          variant="ghost"
          onClick={() =>
            window.open("https://discord.gg/bNj8vTB8XG/", "_blank")
          }
        >
          <DiscordLogoIcon className="text-orange-500 mr-2" />
          Discord
        </Button>
      </div>
    </div>
  );
};

export default Footer;
