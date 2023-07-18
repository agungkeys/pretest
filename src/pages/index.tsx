'use client'
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { useAppDispatch } from "@/redux/hooks";
import { fetchBreeds } from "@/redux/actions/breeds";

import Container from "@/components/layouts/Container"
import Head from "next/head"
import { TBreed } from "@/redux/reducers/types";

export default function Home() {
  const [displayListBreeds, setDisplayListBreeds] = useState<TBreed[]>([]);
  const dispatch = useAppDispatch();
  const breeds = useSelector((state: RootState) => state.breeds.data);
  const loading = useSelector((state: RootState) => state.breeds.loading);
  const error = useSelector((state: RootState) => state.breeds.error);

  useEffect(() => {
    const params = {
      q: '',
      page: 1,
      perPage: 10,
    };
    dispatch(fetchBreeds(params))
  }, [])

  useEffect(() => {
    if(!loading && breeds.length > 0) {
      setDisplayListBreeds(breeds)
    }
  }, [breeds, loading])

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </Head>
      <Container className="max-w-2xl py-6">        
        <h1 className="dark:text-white text-lg font-semibold">Breed Cats</h1>
        {breeds?.map((item) => 
          <div key={`${item.id}`} className="border border-gray-300 rounded-md p-4 my-2">
            <span className="text-base font-semibold text-gray-500 dark:text-gray-400">{item.name}</span>
          </div>  
        )}
      </Container>
    </>
  )
}