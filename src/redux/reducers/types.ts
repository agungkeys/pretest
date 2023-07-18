import { Key } from "react";

export type TBreed = {
  id: Key | Number | null;
  name?: String | null | undefined;
  origin?: String;
  wikipedia_url?: String;
}

export type TBreeds = {
  id?: Number | null | undefined;
  name?: String | null | undefined;
  origin?: String;
  wikipedia_url?: String;
}