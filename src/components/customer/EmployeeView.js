import React, {Component} from "react";
import AnchorTag from "../../components/Anchortag";


class EmployeeView extends Component{
    constructor(props){
        super(props);
        this.productDetails = "PERFECT GIFT IDEA: Works on wet, tion and is not a product defect."
    }


    render(){
        return (
            <div className="admin-content mx-auto">
                <div className="w-100 mb-5">
                    <h4>Employee Details</h4>
                </div>
                <div className="w-75">
                    <form>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">First Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Last Name</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Email</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Role</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Status</label>
                                        <input type="text" className="form-control" value="Active" readOnly/>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="form-group">
                                        <label className="mb-2">Joined At</label>
                                        <input type="text" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-12 mt-4">
                                    <div className="form-group">
                                        <AnchorTag className="btn btn-warning" itemValue="Back to List" link="/app/shop/employee/list"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </form>
                </div>
                
            </div>
        ) 
    }
}

export default EmployeeView;