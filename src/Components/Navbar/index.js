"use client";
import Link from "next/link";
import { adminNavOptions, navOptions } from "@/app/Constants";
import { usePathname, useRouter } from "next/navigation";

function NavItems({router}) {
  return (
    <div className="w-full lg:inline-flex lg:w-auto">
      <ul className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto">
        {navOptions.map((item) => (
          <li
            key={item.id}
            className="lg:inline-flex lg:w-auto w-full px-3 py-3 rounded text-black font-bold items-center justify-center hover:bg-black hover:text-white"
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
  const isAdmin = true;

  return (
    <>
      <nav className="flex items-center flex-wrap justify-between bg-white p-3">
        <div
          className="flex items-center flex-shrink-0 text-black mr-6"
          onClick={() => router.push("/")}
        >
          <span className="font-semibold text-xl tracking-tight">
            E-Commerce
          </span>
        </div>
        <div className="flex md:order-2 gap-2">
          {!isAdmin && (
              <button
                className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
                onClick={() => router.push("/cart")}
              >
                Cart
              </button>
          )}
          {isAuthenticated && (
              <button
                className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
                onClick={() => router.push("/account")}
              >
                Account
              </button>
          )}
          {!isAuthenticated && (
            <button
              className={`flex items-center px-3 py-2 border rounded text-black border-white hover:text-black hover:border-white`}
              onClick={() => router.push("/cart")}
            >
              Login
            </button>
          )}
        </div>
        <NavItems 
          router={router}
        />
      </nav>
    </>
  );
}
