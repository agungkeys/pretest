import { Key } from "react";

export type TBreed = {
  id: String;
  name?: String | null | undefined;
  description?: String;
  origin?: String;
  wikipedia_url?: String;
  temperament?: String;
}

export type TBreeds = {
  id?: Number | null | undefined;
  name?: String | null | undefined;
  origin?: String;
  wikipedia_url?: String;
}

export type TBreedImageBreeds = {
  id?: Number | null | undefined;
  name?: String | null | undefined;
}

export type TBreedImage = {
  id?: String | null;
  url?: String | null | undefined;
  width?: number;
  height?: number;
  breeds: TBreedImageBreeds[];
  breed_ids?: String;
}
