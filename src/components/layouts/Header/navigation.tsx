import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ToggleDarkMode from "@/components/form/ToggleDarkMode";

export default function Navigation() {
  
  return (
    <div className="md:block lg:flex lg:gap-8">
      <ul className="menu menu-horizontal px-1">
        {/* <li>
          <Link href="/" legacyBehavior>
            <a className="dark:text-white">Home</a>
          </Link>
        </li> */}
        {/* <li>
          <details>
            <summary className="dark:text-white">
              Movies
            </summary>
            <ul className="p-2 bg-base-100 ">
              <li>
                <Link href="/movies" legacyBehavior>
                  <span className="">Discover</span>
                </Link>
              </li>
              <li>
                <Link href="/movies/now-playing" legacyBehavior>
                  <span className="">Now Playing</span>
                </Link>
              </li>
              <li>
                <Link href="/movies/popular" legacyBehavior>
                  <span className="">Popular</span>
                </Link>
              </li>
              <li>
                <Link href="/movies/top-rated" legacyBehavior>
                  <span className="">Top Rated</span>
                </Link>
              </li>
              <li>
                <Link href="/movies/upcoming" legacyBehavior>
                  <span className="">Upcoming</span>
                </Link>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <details>
            <summary className="dark:text-white">
              TV Show
            </summary>
            <ul className="p-2 bg-base-100 ">
              <li>
                <Link href="/tv" legacyBehavior>
                  <span className="">Discover</span>
                </Link>
              </li>
              <li>
                <Link href="/tv/airing-today" legacyBehavior>
                  <span className="">Airing Today</span>
                </Link>
              </li>
              <li>
                <Link href="/tv/popular" legacyBehavior>
                  <span className="">Popular</span>
                </Link>
              </li>
              <li>
                <Link href="/tv/top-rated" legacyBehavior>
                  <span className="">Top Rated</span>
                </Link>
              </li>
              <li>
                <Link href="/tv/on-the-air" legacyBehavior>
                  <span className="">On The Air</span>
                </Link>
              </li>
            </ul>
          </details>
        </li> */}
      </ul>
      <div className="place-self-center py-2 border-gray-100 lg:border-0 cursor-pointer">
        <ToggleDarkMode />
      </div>
    </div>
  );
}
