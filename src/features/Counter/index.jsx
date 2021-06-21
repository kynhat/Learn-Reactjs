import React from 'react';
import { useSelector } from 'react-redux';

CounterFeature.prototypes = {

};

  function CounterFeature(props) {

    const count = useSelector(state => state.count);
    console.log(count)
  return (
    <div>
        CounterFeature: {count}
    </div>
  );
}

export default CounterFeature ;
