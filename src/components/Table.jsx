import React, { useState, useEffect } from 'react';

import './assets/ComponentsStyles.css';

const Table = ({dataSource, columns, input}) => {
    const [tableData, setTableData] = useState(dataSource);
    const [search, setSearch] = useState('');
    const [filteredData, setFilteredData] = useState(tableData);

    console.log('dataSource', dataSource);

    return (
        <div>
            { input &&
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name" />
            }
            <table>
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column.title}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, index) => (
                        <tr key={index}>
                            {columns.map((column, index) => (
                                <td key={index}>{column.render(item[column.dataIndex])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;