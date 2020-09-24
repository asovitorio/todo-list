import React from 'react'
import If from './if'
export default props =>{
   return (
       <If teste = {!props.hide}>
            <button className={'btn btn-'+props.estilo}
            onClick ={props.onClick}>
                <i className={'fa fa-'+props.icon}></i>
            </button>
       </If>

   )
        
    
}