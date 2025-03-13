type ControlTableProps={
    pageCount:number;
    rowCount:number;
}

const ControlTable =({pageCount, rowCount}:ControlTableProps)=>{
   return (
    <div>
       <button>{"<<"}</button><button>{"<"}</button><button>{">"}</button><button>{">>"}</button>
    </div>
   )
}

export default ControlTable;