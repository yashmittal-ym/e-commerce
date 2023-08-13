"use client";
import Link from "next/link";
import { adminNavOptions, navOptions } from "@/app/Constants";
import { usePathname, useRouter } from "next/navigation";

function NavItems() {
  return (
    <div className="w-full lg:inline-flex lg:flex-grow lg:w-auto">
      <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        {navOptions.map((item) => (
          <li
            key={item.id}
            className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-black font-bold items-center justify-center hover:bg-green-600 hover:text-black"
            onClick={() => router.push(item.path)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Navbar() {
  const router = useRouter();
  const pathname = usePathname();
  const isAuthenticated = false;
  const isAdmin = false;

  return (
    <>
      <nav className="flex items-center flex-wrap bg-white p-3">
        <div
          className="flex items-center flex-shrink-0 text-black mr-6"
          onClick={() => router.push("/")}
        >
          <span className="font-semibold text-xl tracking-tight">
            E-Commerce
          </span>
        </div>
        <div className="block flex">
          <button
            className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
            onClick={() => router.push("/account")}
          >
            Account
          </button>
          <button
            className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
            onClick={() => router.push("/cart")}
          >
            Cart
          </button>
          {isAuthenticated ? (
            <button
              className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
              onClick={() => router.push("/cart")}
            >
              Logout
            </button>
          ) : (
            <button
              className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
              onClick={() => router.push("/cart")}
            >
              Login
            </button>
          )}
        </div>
      </nav>
    </>
  );
}
