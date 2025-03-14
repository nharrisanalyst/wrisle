import { MouseEvent, useEffect, useState } from 'react';
import { usePrevious } from '../../../hooks/usePrevious';
import { TableSVG } from './TableSVG';
import RightDown from './TableSVG/RightDownSVG/RightDown';

import './tableSide.scss';

export type ListItem ={
    name:string;
    id:string;
}

export type TableSideProps ={
    listItems:Array<ListItem>
}


const ListItem = ({listItem}:{listItem:ListItem}) =>(
            <div>
                <a href={`#${listItem.id}`}>
                   - {listItem.name}
                </a>
            </div>
)

const TableSide =({listItems}:TableSideProps)=>{
    const [open, setOpen] =useState<boolean>(false);
    
    const lengthListItems = usePrevious<number>(listItems.length);
    const handleClick=(ev:MouseEvent<HTMLButtonElement>)=>{
        ev.preventDefault();
        if(open){
            setOpen(false);
        }else{
            setOpen(true);
        }
    }

    useEffect(()=>{
        if(listItems.length!=0 && lengthListItems != undefined){
            if(lengthListItems<listItems.length){
                setOpen(true);
            }
        }
    },[listItems])

    const ItemList = open?(listItems.map(item=>(<ListItem key={item.id} listItem={item} />))):null;

     return(
        <div className='side-container-comp'>
            <button onClick={handleClick}>
            <RightDown right={!open} />     <TableSVG/> <span className='side-panel-title'>Tables</span>
            </button>
            <div className='side-bar-item-list'>
                {ItemList}
            </div>
        </div>
     )
}

export default TableSide;