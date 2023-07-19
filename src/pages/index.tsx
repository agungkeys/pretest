'use client'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux";
import { useAppDispatch } from "@/redux/hooks";

import Container from "@/components/layouts/Container"
import Head from "next/head"
import InfiniteScroll from "@/components/layouts/InfiniteScrollComponent";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Container className="max-w-2xl py-6">     
        <h1 className="dark:text-white text-lg font-semibold">Your Cats</h1>
        <InfiniteScroll />
      </Container>
    </>
  )
}