import { create } from 'zustand'
import useTableDataStore, { TableDataStoreType } from './useTableDataSlice';

export type MyStoreInterface = TableDataStoreType;

const useStore = create<MyStoreInterface>((set:any) => ({
  // @ts-ignore
    ...useTableDataStore(set)
  }));


export default useStore;