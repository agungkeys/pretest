"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { RootState } from "@/redux";
import { useAppDispatch } from "@/redux/hooks";
import { fetchBreeds, fetchMoreBreeds } from "@/redux/actions/breeds";
import { fetchBreedImages } from "@/redux/actions/breedImages";
import { TBreed } from "@/redux/reducers/types";
import Image from "next/image";
import Search from "../Search";

const InfiniteScrollComponent: React.FC = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  // Data Breed List
  const data = useSelector((state: RootState) => state.breeds.data);
  const loading = useSelector((state: RootState) => state.breeds.loading);
  const error = useSelector((state: RootState) => state.breeds.error);
  // Data Breed Images
  const dataImages = useSelector((state: RootState) => state.breedImages.data);
  const loadingImages = useSelector((state: RootState) => state.breedImages.loading);
  const errorImages = useSelector((state: RootState) => state.breedImages.error);

  const [isFetching, setIsFetching] = useState(false);
  const [items, setItems] = useState<TBreed[]>();
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);
  const perPage = 10;

  // Fetch data function
  const fetchData = () => {
    const params = {
      q: "",
      page,
      perPage,
    };
    dispatch(fetchMoreBreeds(params));
    setPage(page + 1);
  };

  const fetchDataImages = (id: String) => {
    dispatch(fetchBreedImages({ id: id }));
  }

  useEffect(() => {
    const params = {
      q: "",
      page: 0,
      perPage: 15,
    };
    dispatch(fetchBreeds(params));
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      setItems(data);
    } else {
      setHasMore(false);
    }
  }, [data]);

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.offsetHeight &&
      !isFetching &&
      hasMore
    ) {
      setIsFetching(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;

    fetchData();
    setIsFetching(false);
  }, [isFetching]);

  function handleSearch(value: String) {
    console.log("🚀 ~ file: index.tsx:87 ~ handleSearch ~ value:", value)

  }

  return (
    <div>
      <Search handleChange={(val:String) =>  handleSearch(val)} />  
      <ul>
        {items?.map((item: TBreed, index: number) => (
          <div key={`${index}`} tabIndex={index} className="collapse collapse-arrow border border-gray-300 rounded-md my-4" onClick={() => fetchDataImages(item.id)}> 
            <div className="collapse-title text-xl font-medium">
            <span className="dark:text-gray-200 text-lg">{item.name}</span>
             <div>
               <span className="text-secondary text-xs font-semibold">
                 {item.origin}
               </span>
             </div>
            </div> 
            <div className="collapse-content"> 
              {loadingImages ?
                <span className="loading loading-bars loading-md"></span>
              :
              <div className="flex flex-row">
                {dataImages.map((item, index: number) => 
                  <div key={index} className="w-full">
                    <Image className="w-full h-50 rounded-md object-cover" width={item.width} height={item.height} src={`${item.url}`} alt={`${item.id}`} />
                  </div>
                )}
              </div>
              }
              <p className="my-4 text-md dark:text-white">{item?.description || '-'}</p>
              <div className="mb-2">
                <span className="text-accent italic">{item?.temperament || ''}</span>
              </div>
            </div>
          </div> 
        ))}
      </ul>

      {loading && (
        <div className="w-full text-center dark:text-gray-400">
          <span className="loading loading-dots loading-md"></span>
          <div>
            <span>Loading...</span>
          </div>
        </div>
      )}
      {!loading && !hasMore && (
        <div className="w-full text-center">
          <span className="text-gray-400 dark:text-gray-500 text-center">
            No more item breeds to load.
          </span>
        </div>
      )}
    </div>
  );
};

export default InfiniteScrollComponent;
