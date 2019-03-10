import React, { Component } from 'react'
import { Table } from 'react-bootstrap';

export default class TableComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {

            tableHeader: ["#", "First Name", "Last Name", "Age"],

            tableData: [
                { firstName: "Jithin", lastName: "Puthiyattu", age: "28" },
                { firstName: "Nithin", lastName: "Puthiyattu", age: "23" },
                { firstName: "Suthin", lastName: "Puthiyattu", age: "20" },
                { firstName: "Anusha", lastName: "Puthiyattu", age: "24" },
                { firstName: "Ajitha", lastName: "Puthiyattu", age: "48" }
            ]
        };
    }

    render() {
        let tableHeader = this.state.tableHeader.map((header, key) => (
            <td key={key}> {header}</td>
        ));

        let tableData = this.state.tableData.map((rowData, key ) => (
            
            <tr key={key}>
                <td>{key + 1}</td>
                <td>{rowData.firstName}</td>
                <td>{rowData.lastName}</td>
                <td>{rowData.age}</td>
            </tr>
        ));
;        return (
            <Table>
                <thead>
                    <tr>
                        {tableHeader}
                    </tr>
                    {tableData}
                </thead>
            </Table>
        )
    }
}
