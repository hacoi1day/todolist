import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Swal from 'sweetalert2';
import {deleteTask} from './../actions/taskAction';
import { connect } from 'react-redux';

class Task extends Component {

    constructor(props) {
        super(props);
        this.state = {
            task: this.props.task
        };
    }

    onEdit = () => {
        console.log(this.state.task);
    }

    onDelete = () => {
        Swal.fire({
            title: 'Bạn có muốn xóa ?',
            text: 'Một khi đã xóa thì không thể khôi phục lại.',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Đồng ý',
            cancelButtonText: 'Hủy'
        }).then(result => {
            if (result.value) {
                // get id task
                const {id} = this.state.task;
                // call api delete task
                fetch(`http://localhost:80/tasks/${id}`, {
                    method : 'DELETE',
                }).then((res) => {
                    // update store
                    this.props.deleteTask(id);
                    // show message
                    Swal.fire({
                        title: 'Thành công',
                        text: 'Xóa Task thành công',
                        icon: 'success',
                        confirmButtonText: 'Đóng',
                    });
                });
            }
        });
    }

    render() {
        const {task} = this.props;
        return (
            <div className="_1task">
                <div className="alert alert-success" role="alert">
                    <i className="fas fa-list-ul task-icon"></i>
                    <span className="task-title">{task.title || ''}</span>
                    <div className="action">
                        <i onClick={this.onEdit} className="fas fa-pen"></i>
                        <i onClick={this.onDelete} className="fas fa-trash"></i>
                    </div>
                </div>
            </div>
        )
    }
}

Task.propTypes = {
    deleteTask: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = (dispatch) => ({
    deleteTask: (id) => dispatch(deleteTask(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Task);
