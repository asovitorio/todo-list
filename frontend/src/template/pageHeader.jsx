import React from 'react';

// import { Container } from './styles';

const PageHeader = (props)=> {
  return (
      <header className='page-header'>
          <h2>{props.name} <small>{props.small}</small></h2><hr/>
      </header>
  );
}

export default PageHeader;