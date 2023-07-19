import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import ToggleDarkMode from "@/components/form/ToggleDarkMode";

export default function Navigation() {
  
  return (
    <div className="md:block lg:flex lg:gap-8">
      <div className="place-self-center py-2 border-gray-100 lg:border-0 cursor-pointer">
        <ToggleDarkMode />
      </div>
    </div>
  );
}
