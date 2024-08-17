import React from 'react';

const HomeProductsPagination = ({ pages, currentPage, setCurrentPage, topRef, limit, setLimit, setSkip, resetSkipCPage }) => {
    return (
        <div className={`flex flex-col sm:flex-row gap-4 sm:gap-2 ${pages.length === 0 && "hidden"}`}>
            <div className='flex flex-1 justify-center items-center gap-2'>
                {/* handle previous */}
                <button
                    onClick={() => {
                        if (currentPage === 0) {
                            return console.log("Previous page do not exits");
                        }
                        setCurrentPage(() => currentPage - 1)
                        setSkip((currentPage - 1) * limit)
                        topRef.current.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`btn btn-secondary btn-sm rounded ${currentPage === 0 && "hidden"}`}
                >Previous</button>
                {/* handle next */}
                <button
                    onClick={() => {
                        if (currentPage === pages[pages.length - 1]) {
                            return console.log("Previous page do not exits");
                        }
                        setCurrentPage(() => currentPage + 1)
                        setSkip((currentPage + 1) * limit)
                        topRef.current.scrollIntoView({ behavior: "smooth" })
                    }}
                    className={`btn btn-secondary btn-sm rounded ${currentPage === pages[pages.length - 1] && "hidden"}`}
                >Next</button>
            </div>
            <div className='flex flex-col sm:flex-row gap-6 items-center'>
                {/* show per page */}
                <div className='flex items-center gap-1'>
                    <span>Show</span>
                    <select
                        onChange={(e) => {
                            const limit = parseInt(e.target.value)
                            setLimit(limit)
                            resetSkipCPage()
                        }}
                        className='select select-bordered select-sm rounded'
                    >
                        <option value={8}>8</option>
                        <option value={12}>12</option>
                        <option value={20}>20</option>
                        <option value={40}>40</option>
                    </select>
                    <span>per page</span>
                </div>
                {/* jump to page */}
                <div className='flex items-center gap-1'>
                    <span>Jump to page</span>
                    <select
                        value={currentPage}
                        onChange={(e) => {
                            const page = parseInt(e.target.value)
                            setCurrentPage(() => page)
                            setSkip((page) * limit)
                            topRef.current.scrollIntoView({ behavior: "smooth" })
                        }}
                        className='select select-bordered select-sm rounded'
                    >
                        {pages.map(page => <option
                            value={page} key={page}
                        >{page + 1}</option>)}
                    </select>
                </div>
                <p>Page {currentPage + 1} of {pages.length}</p>
            </div>
        </div>
    );
};

export default HomeProductsPagination;