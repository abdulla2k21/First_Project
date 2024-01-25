import React from 'react';

/**
 * map() - it is used to iterate a list.
 * filter() - it is used to filter the list based on the given condition.
 *          - if the given condition return true the object has been collected and    returned. if it return false that particular object is ommitted.
 *
 */

class ListExample extends React.Component {

    constructor(){
        super()

        this.state = {
            studentList : [
                { id: 101, name: "Ramesh", address: "Chennai" },
                { id: 102, name: "Kamesh", address: "Vellore" },
                { id: 103, name: "Rajesh", address: "Selam" },
                { id: 104, name: "Suresh", address: "Erode" }
            ]
        }
    }

    filterStudentDetails(id){ // 101
        const filteredStudentlist = this.state.studentList.filter( std => std.id != id ); // 104 != 101

        this.setState({
            studentList : filteredStudentlist
        })

    }

    render() {
        const numberList = [98, 43, 56, 2, 46, 35];
        const stringList = ["Apple", "Grape", "Mango", "Papaya"];

        return (

            <>
                <h2>Number List</h2>
                <ul>
                    {numberList.map(x => {
                        return <li>{x + 1}</li>
                    })}
                </ul>

                <h2>Student Details : </h2>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>

                    {this.state.studentList.map(std => {
                        return <>
                            <tr>
                                <td>{std.id}</td>
                                <td>{std.name}</td>
                                <td>{std.address}</td>
                                <td><button onClick={this.filterStudentDetails.bind(this,std.id)}>Delete</button></td>
                            </tr>
                        </>
                    })}

                </table>
            </>

        )
    }

}

export default ListExample;