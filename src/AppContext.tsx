import React, { createContext, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export interface IActive {
  isActive: boolean;
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
  searchParams: URLSearchParams;
  setSearchParams: (searchParams: URLSearchParams) => void;
}

export interface IAppProvider {
  children: React.ReactNode;
}

export const AppContext = createContext<IActive>({} as IActive);

export const ActiveContextProvider: React.FC<IAppProvider> = ({ children }) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const [searchParams, setSearchParams] = useSearchParams();

	return (
		<AppContext.Provider value={{
			isActive,
			setIsActive,
			searchParams,
			setSearchParams
		}}>
			{children}
		</AppContext.Provider>
	);
};