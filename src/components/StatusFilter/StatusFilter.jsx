import { useSelector } from 'react-redux';
import statusFilters from 'redux/constants';
import { getStatusFilter } from '../../redux/selectors';
import { BtnFilter } from './StatusFilter.styled';

const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  return (
    <div>
      <h2>Filter by status</h2>
      <BtnFilter selected={filter === statusFilters.all} type="button">
        All
      </BtnFilter>
      <BtnFilter selected={filter === statusFilters.active} type="button">
        Active
      </BtnFilter>
      <BtnFilter selected={filter === statusFilters.completed} type="button">
        Completed
      </BtnFilter>
    </div>
  );
};
export default StatusFilter;
