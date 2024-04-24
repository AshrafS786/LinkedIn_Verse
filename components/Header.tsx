import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  BellDot,
  Briefcase,
  HomeIcon,
  MessageCircleMore,
  SearchIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <div className="flex items-center p-2 max-w-6xl mx-auto">
      <Image
        className="rounded-lg"
        src="https://links.papareact.com/b3z"
        width={36}
        height={36}
        alt="logo"
      />

      <div className="flex-1">
        <form className="flex items-center space-x-1 bg-[#EDF3F8] p-2 rounded-md flex-1 mx-2 max-w-96">
          <SearchIcon className="h-4 text-gray-700" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent flex-1 outline-none"
          />
        </form>
      </div>

      <div className="flex items-center space-x-4 px-6">
        <Link href="/" className="icon">
          <HomeIcon className="h-5" />
          <p>Home</p>
        </Link>

        <Link href="/mynetwork" className="icon hidden md:flex">
          <UsersIcon className="h-5" />
          <p>My Network</p>
        </Link>

        <Link href="/jobs" className="icon hidden md:flex">
          <Briefcase className="h-5" />
          <p>Jobs</p>
        </Link>

        <Link href="/messaging" className="icon hidden md:flex">
          <MessageCircleMore className="h-5" />
          <p>Messaging</p>
        </Link>

        <Link href="/notifications" className="icon hidden md:flex">
          <BellDot className="h-5" />
          <p>Notifications</p>
        </Link>

        {/* User Button if signed in */}
        <SignedIn>
            <UserButton/>
        </SignedIn>

        {/* Sign In Button if not signed in */}
        <SignedOut>
          <Button asChild variant="secondary">
            <SignInButton/>
          </Button>
        </SignedOut>

      </div>
    </div>
  );
};

export default Header;
