import React from "react";
import { tableData } from "./index";

const Table = () => {
  return (
    <>
    <table className="text-white  tabletext " style={{width:'100%',marginTop:'20px'}}>
         
           
           
         <thead className="custom tb">
         <td className="tabletext text-start ">#</td>
            <td className="tabletext text-start">Title</td>
            <td className="tabletext text-start">Author</td>
            <td className="tabletext text-end">Most Liked</td>
         </thead>
          
            <tbody>
       {
        tableData.map((d,i)=>{
            return(<>
                <tr key={i} className="custom td">
                    <td className="tabletext text-start">{d.id}</td>
                    <td className="tabletext text-start">{d.title}</td>
                    <td className="tabletext text-start">{d.auther}</td>
                    <td className="tabletext text-end"><i className="fa-solid fa-arrow-up" style={{color:'#9BFF00'}}></i><span style={{marginLeft:'10px'}}>{d.mostliked}</span></td>
                </tr>
            </>)
        })
       }
    </tbody>
         
    </table>
    
<nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px">
    <li>
      <a href="#" class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" class="px-3 py-2 text-blue-600 border border-gray-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

    

     
    </>
  );
};

export default Table;
