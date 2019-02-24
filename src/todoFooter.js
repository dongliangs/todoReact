import React from 'react';
import * as FilterTypes from './filtertypes';
export default class TodoFooter extends React.Component{
    render() {
        console.log(this.props.filtertype === FilterTypes.ALL);
        return(
            <div className="row">
                <div className="col-md-4 col-sm-4">
                    你有{this.props.activetodoCount}件待办事项
                </div>
                <div className="col-md-5 col-sm-5 text-center">
                    <button className={`btn btn-xs ${this.props.filterType === FilterTypes.ALL?'btn-primary':'btn-default'}`} onClick={()=>this.props.changeFiltertype(FilterTypes.ALL)}>全部</button>
                    <button style={{marginLeft:5}} className={`btn btn-xs ${this.props.filterType === FilterTypes.ACTIVE ?'btn-primary':'btn-default'}`} onClick={()=>this.props.changeFiltertype(FilterTypes.ACTIVE)}>未完成</button>
                    <button style={{marginLeft:5}} className={`btn btn-xs ${this.props.filterType === FilterTypes.COMPLETED?'btn-primary':'btn-default'}`} onClick={()=>this.props.changeFiltertype(FilterTypes.COMPLETED)}>已完成</button>
                </div>
                <div className="col-md-3 col-sm-3 text-center">
                    {this.props.completedCount > 0 ?<button className="btn btn-danger btn-xs" onClick={this.props.deleteCompleted}>
                        删除已完成
                    </button>:null}

                </div>
            </div>
        )
    }
}
