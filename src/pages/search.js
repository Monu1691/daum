import React, { useEffect, useState } from 'react'

const Search = () => {
    const [search, setSearch] = useState('');

    const [serData, setSerData] = useState([]);

    const searchVal = (e) => {
        setSearch(e.target.value);
    }

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch(`https://jsonplaceholder.typicode.com/users?q=${search}`);
            const searchData = await data.json();

            setSerData(searchData);
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
                                <th>username</th>
                                <th>email</th>
                                <th>address</th>
                                <th>phone</th>
                                <th>website</th>
                                <th>company</th>
                            </tr>                            

                            {serData.map((item) => {
                                return (
                                    <tr key={item.id}>
                                        <td>{item.name}</td>
                                        <td>{item.username}</td>
                                        <td>{item.email}</td>
                                        <td>{`${item.address.suite}, ${item.address.street}, ${item.address.city}, ${item.address.zipcode}`}</td>
                                        <td>{item.phone}</td>
                                        <td>{item.website}</td>
                                        <td>{item.company.name}</td>
                                    </tr>
                                )
                            })}
                        </table>
                        

                    </div>
                </div>
            </section>
        </>
    )
}

export default Search
