import { Autocomplete, TextInput } from 'evergreen-ui';
import axios from 'axios';

const AutoComplete = (props) => {
  return (
    <Autocomplete
      title='Heroes'
      onChange={(changedItem) => {
        console.log(changedItem);
      }}
      items={['Apple', 'Apricot', 'Banana', 'Cherry', 'Cucumber']}
    >
      {(props) => {
        const { getInputProps, getRef, inputValue } = props;

        // await axios.get(`http://localhost:5000/api/autocomplete/${inputValue}`);
        // let name = res.data.map((obj) => obj.name);
        // console.log(name);

        return (
          <TextInput
            placeholder='Search Heroes'
            value={inputValue}
            ref={getRef}
            {...getInputProps()}
          />
        );
      }}
    </Autocomplete>
  );
};

export default AutoComplete;
