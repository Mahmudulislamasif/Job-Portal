import React, { useEffect, useState } from 'react';
import useJobs from '../../useHook/useJobs';
import Job from '../Home/Job';
import ReactPaginate from 'react-paginate';
const AllJobs = () => {
    const [jobs]=useJobs([])
    const [currentItems,setCurrentItems]=useState(null)
    const [pageCount,setPageCount]=useState(0)
    const [itemOffset,setItemOffset]=useState(0);
    const itemsPerPage=2
    useEffect(()=>{
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(jobs.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(jobs.length / itemsPerPage))
    },[itemOffset,itemsPerPage,jobs])
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % jobs.length;
        setItemOffset(newOffset);
      };
    return (
        <div className="bg-[#f7f7f7] pt-6">
           <div className='grid grid-cols-1 md:grid-cols-3 g-4'>
           {
                currentItems?.map((job)=><Job job={job} key={job._id}></Job>)
            }
           </div>
           <div>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    containerClassName="flex justify-center items-center list-none gap-4 text-xl py-4"
                    pageLinkClassName="px-4 py-1 cursor-pointer font-bold hover:bg-purple-600 hover:text-white rounded-lg"
                    previousLinkClassName="px-4 py-2 hover:bg-purple-600 hover:text-white rounded-lg"
                    nextLinkClassName="px-4 py-2 hover:bg-purple-600 hover:text-white rounded-lg"
                    activeLinkClassName="bg-purple-600 text-white"
                />
           </div>
        </div>
    );
};


export default AllJobs;