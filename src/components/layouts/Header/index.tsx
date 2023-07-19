
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useAppSelector } from "@/redux/hooks";
import { BsJustify, BsXLg } from "react-icons/bs";
import Navigation from "./navigation";
import Container from "../Container";
export default function Header() {
  const themeMode = useAppSelector((state) => state?.themeMode?.data || '');
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if(!!mobileMenuIsOpen && themeMode) {
      setMobileMenuIsOpen(!mobileMenuIsOpen)
    }

  }, [themeMode])
  return (
    <header className="sticky top-0 bg-white shadow-lg z-10 header bg-gray-10 border-b dark:bg-gray-900 dark:border-opacity-10 dark:border-gray-100">
      <Container className="max-w-2xl">
        <section className="">
          <div className="flex flex-wrap items-center justify-between py-4 gap-4">
            <div className="flex items-center gap-2">
              <Image height={40} width={30} src="/favicon.png" alt='Logo' />
              <span className="text-xl font-semibold text-secondary dark:text-accent">Pretest Buana</span>
            </div>
            <div
              className="flex-none gap-4 lg:hidden dark:text-white"
              onClick={() => setMobileMenuIsOpen(!mobileMenuIsOpen)}>
                {
                  mobileMenuIsOpen ?
                  <BsXLg size={22} /> :
                  <BsJustify size={22} />
                }
            </div>
            <div
              className={`lg:flex flex-col lg:flex-row lg:items-center lg:justify-center text-sm w-full lg:w-auto z-0	${
                mobileMenuIsOpen ? `block animate-slideIn` : `hidden`
              }`}>
              <div className={`${mobileMenuIsOpen ? `p-2 	` : ` float-right`}`}>
                <Navigation />
              </div>
            </div>
          </div>
        </section>
      </Container>
    </header>
  );
}
