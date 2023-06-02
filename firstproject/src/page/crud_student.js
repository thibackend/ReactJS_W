
import React, { useEffect, useState } from "react";
import axios from "axios";
class StudentList extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          students: [],
          loading: true,
          error: null,
          Name: '',
          Gender: '',
          Class: '',
          Age: '',
          showAddForm: false,
          showEditForm: false,
          editStudentId: null,
        };
      }
    
      componentDidMount() {
        this.fetchStudents();
      }
    
      fetchStudents = () => {
        axios
          .get('https://63a57216318b23efa793a737.mockapi.io/api/Student')
          .then(response => {
            this.setState({ students: response.data, loading: false });
          })
          .catch(error => {
            console.log(error);
            this.setState({ error, loading: false });
          });
      };
    
      addStudent = () => {
        const newStudent = {
          Name: this.state.Name,
          Gender: this.state.Gender,
          Class: this.state.Class,
          Age: this.state.Age,
        };
        axios
          .post('https://63a57216318b23efa793a737.mockapi.io/api/Student', newStudent)
          .then(response => {
            console.log(response);
            const students = [...this.state.students, response.data];
            this.setState({ students, Name: '', Gender: '', Class: '', Age: '' });
          })
          .catch(error => {
            console.log(error);
          });
    }
        
    
      deleteStudent = id => {
        axios
          .delete(`https://63a57216318b23efa793a737.mockapi.io/api/Student/${id}`)
          .then(response => {
            console.log(response);
            const students = this.state.students.filter(item => item.id !== id);
            this.setState({ students });
          })
          .catch(error => {
            console.log(error);
          });
      };
    
      editStudent = id => {
        const student = this.state.students.find(item => item.id === id);
        this.setState({
          editStudentId: id,
          Name: student.Name,
          Gender: student.Gender,
          Class: student.Class,
          Age: student.Age,
          showEditForm: true,
        });
      };
    
      updateStudent = () => {
        const updatedStudent = {
          Name: this.state.Name,
          Gender: this.state.Gender,
          Class: this.state.Class,
          Age: this.state.Age,
        };
    
        axios
          .put(`https://63a57216318b23efa793a737.mockapi.io/api/Student/${this.state.editStudentId}`, updatedStudent)
          .then(response => {
            console.log(response);
            const students = this.state.students.map(item => {
              if (item.id === this.state.editStudentId) {
                return { ...item, ...updatedStudent };
              }
              return item;
            });
            this.setState({ students, editStudentId: null, Name: '', Gender: '', Class: '', Age: '', showEditForm: false });
          })
.catch(error => {
            console.log(error);
          });
      };
    
      render() {
        const { students, loading, error } = this.state;
    
        if (loading) {
          return <p>Loading...</p>;
        }
    
        if (error) {
          return <p>Something went wrong: {error.message}</p>;
        }
    
        return (
          <div>
            <h2>Student List</h2>
    <button onClick={() => this.setState({showAddForm: true })}>Add Student</button>
    
            {this.state.showAddForm && (
          <div className="form-add">
            <h3>Add Student</h3>
            <input
              type="text"
              placeholder="Name"
              value={this.state.Name}
              onChange={e => this.setState({ Name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Gender"
              value={this.state.Gender}
              onChange={e => this.setState({ Gender: e.target.value })}
            />
            <input
              type="text"
              placeholder="Class"
              value={this.state.Class}
              onChange={e => this.setState({ Class: e.target.value })}
            />
            <input
              type="text"
              placeholder="Age"
              value={this.state.Age}
              onChange={e => this.setState({ Age: e.target.value })}
            />
            <button onClick={this.addStudent}>Submit</button>
          </div>
        )}
    
        <table className="table table-bordered">
          <thead className="bg-success text-white">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Class</th>
              <th>Age</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {students.map(student => (
              <tr key={student.id}>
                <td>{student.id}</td>
                <td>{student.Name}</td>
                <td>{student.Gender}</td>
                <td>{student.Class}</td>
                <td>{student.Age}</td>
                <td>
                  <button onClick={() => this.editStudent(student.id)}>Edit</button>
                  <button onClick={() => this.deleteStudent(student.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    
        {this.state.showEditForm && (
          <div>
            <h3>Edit Student</h3>
            <input
              type="text"
              placeholder="Name"
              value={this.state.Name}
              onChange={e => this.setState({ Name: e.target.value })}
            />
            <input
              type="text"
              placeholder="Gender"
              value={this.state.Gender}
              onChange={e => this.setState({ Gender: e.target.value })}
            />
            <input
              type="text"
              placeholder="Class"
value={this.state.Class}
              onChange={e => this.setState({ Class: e.target.value })}
            />
            <input
              type="text"
              placeholder="Age"
              value={this.state.Age}
              onChange={e => this.setState({ Age: e.target.value })}
            />
            <button onClick={this.updateStudent}>Save</button>
          </div>
        )}
      </div>
    );
        }
      }

function App() {
  return (
    <div>
    <StudentList/>
    </div>
  );
}
export default App;