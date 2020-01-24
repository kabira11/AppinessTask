import React, { Component } from 'react';
import { connect } from 'react-redux'

class EmployeeList extends Component {


    render() {
        const employee = this.props.userList.userList.user
        const loggedIn = this.props.userList.loggedIn
        return (
            <div>
          
                {

                loggedIn ?  
                            (   
                                <>      
                                <h1 className= "App">Employee Lists</h1>
                                <table className ="table table-bordered table-hover">
                                <thead className ="black white-text">
                                    <tr>
                                    <th>Serial NO.</th>
                                    <th>Employee Name</th>
                                    <th>Age</th>
                                    <th>Gender</th>
                                    <th>Email</th>
                                    <th>Phone No.</th>
                                    </tr>
                                </thead>
                                {
                                employee.map((emp , index) => {
                                return (
                                    <tbody key = {emp.id} className = {emp.id}>
                                    <tr >
                                        <th scope="row">{index + 1}</th>
                                        <td>{emp.name}</td>
                                        <td>{emp.age}</td>
                                        <td>{emp.gender}</td>
                                        <td>{emp.email}</td>
                                        <td>{emp.phoneNo}</td>
                                    </tr>
                                    </tbody>
                                    );

                                })
                            }
                                </table>
                                </>
                            ) 
                        : 
                            (
                                <h3>You Are Not Logged In....</h3>

                            )
                }

            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        userList: state.userList
    }
}


export default connect(mapStateToProps)(EmployeeList);
