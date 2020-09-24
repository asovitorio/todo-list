import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleAsPending = this.handleAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)
        this.refresh()
    }
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }
    handleAdd() {
        const description = this.state.description
        console.log(description)
        axios.post(URL, { description }).then(resp => this.refresh())
    }
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }
    refresh(description='') {
        const search = description ? `&description__regex=/${description}/`:''

        axios.get(`${URL}?sort=-createAt${search}`).then(resp => this.setState({ ...this.setState, description, list: resp.data }))
    }
    handleSearch(){
this.refresh(this.state.description)
    }
    handleMarkAsDone(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:true})
        .then(resp =>this.refresh(this.state.description) )
    }
    handleAsPending(todo){
        axios.put(`${URL}/${todo._id}`,{...todo,done:false})
        .then(resp =>this.refresh(this.state.description) )
    }

    render() {
        return (
            <div id='todos'>
                <PageHeader name="Tarefas" small='Cadastro' />
                <TodoForm handleAdd={this.handleAdd}
                 description={this.state.description}
                  handleChange={this.handleChange} 
                  handleSearch={this.handleSearch}
                  />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone = {this.handleMarkAsDone}
                    handleAsPending = {this.handleAsPending}
                    handleSearch={this.handleSearch}
                    />
            </div>
        )
    }
}

