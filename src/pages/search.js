import React, { useEffect, useState } from 'react'
import AdLoader from '../layout/components/ad-loader';

const Search = () => {
    const [search, setSearch] = useState('');
    const [serData, setSerData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

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
                                    serData.map((item) => {
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

                    </div>
                </div>
            </section>
        </>
    )
}

export default Search
