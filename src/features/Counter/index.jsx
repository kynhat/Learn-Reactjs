import React from 'react';
import { useSelector } from 'react-redux';

 CounterFeature.prototype = {

};

  function CounterFeature(props) {

    const count = useSelector(state => state.count);
  return (
    <div>
        CounterFeature: {count}
    </div>
  );
}
 
export default CounterFeature ;
