import React, { useEffect, useState } from 'react'
import AdLoader from '../layout/components/ad-loader';

const Search = () => {
    const [search, setSearch] = useState('');
    const [serData, setSerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    // pagination 
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);

    const searchVal = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            const data = await fetch(`https://jsonplaceholder.typicode.com/comments?q=${search}`);
            const searchData = await data.json();

            setSerData(searchData);
            setIsLoading(false);
        }
        if (search.length === 0 || search.length > 2) {
            fetchData();
        }
    }, [search]);

    const Limit = 10;
    useEffect(()=>{
        const pageDataCount = Math.ceil(serData.length/Limit);
        setPageCount(pageDataCount); 

        if(page){
            const skip = Limit * page;
            const dataSkip = serData.slice(page === 1 ? 0 : skip - Limit,skip);
            setPageData(dataSkip);
        }

    }, [serData, page]);

    // handle pagination
    const handlePrev = () =>{
        if (page === 1){
            return page;
        }else{
            setPage(page - 1);
        }
    }
    const handleNext = () =>{
        if (page === pageCount){
            return page;
        }else{
            setPage(page + 1);
        }
    }

    return (
        <>
            <section className="ad-search-section">
                <div className="ad-container">
                    <div className="search-input">
                        <input type="text" placeholder="Type Here" name="search" value={search} onChange={searchVal} />
                    </div>

                    <div className="ad-table-record">

                        <table>
                            <tr>
                                <th>name</th>
                                <th>email</th>
                                <th>body</th>
                            </tr>

                            {
                                (isLoading) ?
                                    <>
                                        <tr>
                                            <td className="td-loading-col" colSpan={3}>
                                                <AdLoader/>
                                            </td>
                                        </tr>
                                    </>
                                    :
                                    pageData.map((item) => {
                                        return (
                                            <tr key={item.id}>
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.body}</td>
                                            </tr>
                                        )
                                    })
                            }
                        </table>

                        <ul className="pagination-wrapp">
                            <li><a href={()=> false} onClick={handlePrev} disabled={page === 1}>Prev</a></li>
                            {
                                Array(pageCount).fill(null).map((n, i) => {
                                    return (
                                        <li><a href={()=> false} className={page === i + 1 ? 'active' : '' } onClick={()=> setPage(i+1)}>{i + 1}</a></li>
                                    );
                                })
                            }
                            <li><a href={()=> false} onClick={handleNext} disabled={page === pageCount}>Next</a></li>
                        </ul>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Search
