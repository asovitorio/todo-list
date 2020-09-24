import React from 'react'
import './style.css'
import Grid from '../template/grid'
import IconButon from '../template/iconButon'
export default props => {
    return (

        <div role='form' className='todoForm container '>
            <Grid cols='12 9 10' >
                <input id='description' className='form-control' type="text" placeholder='Digite a tarefa'
                onChange={props.handleChange}
                value={props.desccription} />
            </Grid>
            <Grid cols='12 9 10' >
                <IconButon estilo='primary' icon='plus' onClick={props.handleAdd} />
                <IconButon estilo='info' icon='search' onClick={props.handleSearch} />
            </Grid>

        </div>
    )
}