import { useSelector } from 'react-redux';
import statusFilters from '../../redux/constants';
import { getTasks, getStatusFilter } from '../../redux/selectors';
import { Item, TodoText, Box } from './Todolist.styled';

const getVisilbleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

const TodoList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);
  const visilbleTasks = getVisilbleTasks(tasks, statusFilter);

  return (
    <Box>
      <ul>
        {visilbleTasks.map(task => (
          <Item key={task.id}>
            <input type="checkbox" name="" id="" checked={task.completed} />
            <TodoText>{task.text}</TodoText>
            <button type="button">X</button>
          </Item>
        ))}
      </ul>
    </Box>
  );
};
export default TodoList;
