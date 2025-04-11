import { create } from 'zustand'
import useTableDataStore, { TableDataStoreType } from './useTableDataSlice';
import useAuthStore, { AuthStoreType } from './authStoreSlice';

export type MyStoreInterface = TableDataStoreType & AuthStoreType;

const useStore = create<MyStoreInterface>((set:any) => ({
  // @ts-ignore
    ...useTableDataStore(set),
    // @ts-ignore
    ...useAuthStore(set)
  }));


export default useStore;