import React, { Component } from 'react'
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getMemembers } from './../../actions/TableActions';
class TableComponent extends Component {

    componentWillMount() {
        this.props.getMemembers();
    }

    constructor(props) {
        super(props);
        console.dir(props);
        this.state = 
        
        {

            tableHeader: ["#", "First Name", "Last Name", "Age"]

           /* tableData: [
                { firstName: "Jithin", lastName: "Puthiyattu", age: "28" },
                { firstName: "Nithin", lastName: "Puthiyattu", age: "23" },
                { firstName: "Suthin", lastName: "Puthiyattu", age: "20" },
                { firstName: "Anusha", lastName: "Puthiyattu", age: "24" },
                { firstName: "Ajitha", lastName: "Puthiyattu", age: "48" }
            ]*/
        };
    }

    render() {
        let tableHeader = this.state.tableHeader.map((header, key) => (
            <td key={key}> {header}</td>
        ));

        let tableData = this.props.tableData.map((rowData, key ) => (
            
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


const mapStateToProps = (state) => {
    console.dir(state);
    return {
        tableData: state.table.tableData,
        newPost: state.table.row
    };
};


export default connect(mapStateToProps, { getMemembers })(TableComponent);