import { create } from 'zustand'
import useTableDataStore, { TableDataStoreType } from './useTableDataSlice';

export type MyStoreInterface = TableDataStoreType;

const useStore = create<MyStoreInterface>((set:any, get:any) => ({
    ...useTableDataStore(set, get)
  }));


export default useStore;