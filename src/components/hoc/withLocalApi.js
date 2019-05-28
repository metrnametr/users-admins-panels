import React from 'react';
import { ListServiceConsumer } from '../list-context';

const withLocalApi = () => (Wrapped) => {

  return (props) => {
    return (
      <ListServiceConsumer>
        {
          (localApi) => {
            return (<Wrapped {...props}
                localApi={localApi}/>);
          }
        }
      </ListServiceConsumer>
    );
  }
};

export default withLocalApi;