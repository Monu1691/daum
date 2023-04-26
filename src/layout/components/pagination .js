import React, { useState } from 'react'

const Pagination = (perPageRecord, totlePageRecord) => {

    const [startPageIndex, setStartPageIndex] = useState();
    const [endtPageIndex, setEndPageIndex] = useState(perPageRecord - 1);
    const [currentPageIndex, setCurrentPageIndex] = useState(1);

    const totlePage = Math.ceil(totlePageRecord / perPageRecord);

    const displayPage = (pageNo) => {
        setCurrentPageIndex(pageNo)

        let end_page_index = (perPageRecord * pageNo) - 1
        let start_page_index = (perPageRecord * pageNo) - perPageRecord

        setStartPageIndex(start_page_index)

        if (start_page_index) {
            setEndPageIndex(totlePageRecord - 1);
        } else {
            setEndPageIndex(end_page_index);
        }
    }


    return [
        startPageIndex,
        endtPageIndex,
        currentPageIndex,
        totlePage,
        displayPage
    ]
}

export default Pagination 
