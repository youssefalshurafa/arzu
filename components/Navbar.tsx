import {
  SignedOut,
  SignInButton,
  SignedIn,
  UserButton,
  currentUser,
} from '@clerk/nextjs';
import { RxHamburgerMenu } from 'react-icons/rx';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Menu } from 'lucide-react';
async function Navbar() {
  const user = await currentUser();

  return (
    <>
      <nav className=" flex justify-between px-6 py-3 bg-slate-50 drop-shadow-md">
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="mt-2 h-full w-screen">
              <DropdownMenuItem className=" justify-center text-lg font-semibold">
                Menu
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className=" justify-center text-lg font-semibold">
                Women
              </DropdownMenuItem>
              <DropdownMenuItem className=" justify-center text-lg font-semibold">
                Kids
              </DropdownMenuItem>
              <DropdownMenuItem className=" justify-center text-lg font-semibold">
                Men
              </DropdownMenuItem>
              <DropdownMenuItem className=" justify-center text-lg font-semibold">
                Shoes
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div>
          <h1 className="text-2xl font-semibold">Arzu</h1>
        </div>
        <div className="hidden md:flex gap-4 font-semibold items-center">
          <p className=" hover:cursor-pointer">Women</p>
          <p className=" hover:cursor-pointer">Kids</p>
          <p className=" hover:cursor-pointer">Men</p>
          <p className=" hover:cursor-pointer">Shoes</p>
        </div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <div className="flex items-center gap-2">
          <SignedIn>
            <p className=" font-semibold">Hi, {user?.firstName}</p>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
