import React, { useEffect, useState } from 'react'
import './statewise.css';

const Statewise = () => {

    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://data.covid19india.org/data.json');
        const actualData = await res.json();
        console.log(actualData.statewise);
        setData(actualData.statewise);
    }

    useEffect(() => {
        getCovidData();
    }, []);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="text-center">INDIA COVID-19 TRACKER DASHBOARD</h1>
                </div>
                {/* Table Layout start */}
                <div className="table-responsive">
                    <table className="table table-hover">
                    <thead className="table-dark">
                        <tr>
                        <th> STATE / UT </th>
                        <th> CONFIRMED </th>
                        <th> RECOVERED </th>
                        <th> DEATHS </th>
                        <th> ACTIVE </th>
                        <th> UPDATED </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((curElem, ind) => {
                        return (
                            <tr key={ind}>
                            <th> {curElem.state} </th>
                            <td> {curElem.confirmed} </td>
                            <td> {curElem.recovered} </td>
                            <td> {curElem.deaths} </td>
                            <td> {curElem.active} </td>
                            <td> {curElem.lastupdatedtime} </td>
                            </tr>
                        );
                        })}
                    </tbody>
                    </table>
                </div>
                {/* Table Layout start */}
            </div>
      </>
    );
}
export default Statewise
