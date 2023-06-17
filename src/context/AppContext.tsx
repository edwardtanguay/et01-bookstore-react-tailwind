import React, { createContext, useState } from 'react';
import { IActive, IProvider, ISearch } from '../interface/interface';
import { useSearchParams } from 'react-router-dom';

// event for toggleButton for change color und ...
export const AppContext = createContext<IActive>({} as IActive);

export const ActiveContextProvider: React.FC<IProvider> = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false);

	return (
		<AppContext.Provider value={{ isActive, setIsActive }}>
			{children}
		</AppContext.Provider>
	);
};

// search a book with searchparams Huck
export const SearchContext = createContext<ISearch>({} as ISearch);

export const SearchContextProvider: React.FC<IProvider> = ({ children }) => {
	const [searchParams, setSearchParams] = useSearchParams();
	return (
		<SearchContext.Provider value={{ searchParams, setSearchParams }}>
			{children}
		</SearchContext.Provider>
	);
};
