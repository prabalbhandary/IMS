import React, {Component} from "react";
import "../../../style/admin.css";
import AnchorTag from "../../../components/Anchortag";
import Table from "../../../components/table/Table";


class UserList extends Component{
    constructor(props){
        super(props);
        this.columnList = ["ID", "Name", "Email", "Role", "Status", "Action"];
        this.tableData = [
            {"id": 1, "name": "Prabal Bhandary", "email": "prabalbhandary97@gmail.com", "role": "Super Admin", "status": "Active"},
            {"id": 2, "name": "Prajwol Bhandary", "email": "bhandaryprajwol@gmail.com", "role": "Admin", "status": "Active"},
            {"id": 3, "name": "Janardan Bhandary", "email": "janardanbhandary97@gmail.com", "role": "Editor", "status": "Active"},
        ]
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <AnchorTag link="/admin/settings/user-create" className="btn btn-warning float-right" itemValue="Create User"></AnchorTag>
                    <h4>System User</h4>
                </div>
                <Table className="table table-striped" columnList={this.columnList} tableData={this.tableData} actionLinkPrefix="user/"></Table>
            </div>
        ) 
    }
}

export default UserList;