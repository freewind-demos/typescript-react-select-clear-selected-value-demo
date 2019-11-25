import React, {useState} from 'react'
import Select, {ValueType} from 'react-select';

type Option = {
  value: string,
  label: string
}

const options = [
  {value: 'value1', label: 'label1'},
  {value: 'value2', label: 'label2'},
];

export default function Hello() {
  const [selectedOption, setSelectedOption] = useState<ValueType<Option>>()

  function resetSelectedValue() {
    // Notice: must be `null` not `undefined`
    setSelectedOption(null);
  }

  return <div>
    <button onClick={() => resetSelectedValue()}>Clear Selection</button>
    <Select value={selectedOption} onChange={setSelectedOption} options={options}/>
  </div>
};
