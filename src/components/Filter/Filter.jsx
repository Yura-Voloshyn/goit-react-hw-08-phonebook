import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Input
      type="text"
      value={value}
      onChange={onChange}
      placeholder="filter by name"
    />
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
export default Filter;
