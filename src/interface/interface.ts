import React from "react";

export interface IActive {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IBook {
  name: string;
  id: number;
  amount: string;
  due: string;
  imgUrl: string;
  desc: string;
}
[];

export interface ISearch {
  searchParams: URLSearchParams;
  setSearchParams: (searchParams: URLSearchParams) => void;
}

export interface IProvider {
  children: React.ReactNode;
}
