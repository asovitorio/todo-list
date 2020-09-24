import React from 'react'
import IconButton from '../template/iconButon'
import'./style.css'
export default props => {
    const renderRows = () => {
        const list = props.list || []
        return list.map((todo,i)=>(
            <tr key={i}>
                <td className={todo.done?'markedAsDone':''}>{todo.description}</td>
                <td>
                <IconButton estilo={'success'} icon={'check'} onClick = {() => props.handleMarkAsDone(todo)} hide={todo.done} />
                <IconButton estilo={'warning text-white'} icon={'undo'} onClick = {() => props.handleAsPending(todo)} hide={!todo.done} />
                <IconButton estilo={'danger'} icon={'trash-alt'} onClick = {() => props.handleRemove(todo)}  />
                </td>
            </tr>
        ))
    }
    return (
        <div className='container'>
            <table className='table'>
                <thead>
                    <tr className='linha'>
                        <th>Descrição</th>
                        <th>Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {renderRows()}
                </tbody>

            </table>
        </div>
    )
}