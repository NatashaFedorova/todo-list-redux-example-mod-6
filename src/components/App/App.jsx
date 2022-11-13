import {
  Container,
  Header,
  BtnFilter,
  Form,
  BtnSubmit,
  Input,
  Item,
  TodoText,
  Box,
} from './App.styled';

const App = () => {
  return (
    <Container>
      <Header>
        <div>
          <h2>Tasks</h2>
          <p>Active: 000</p>
          <p>Completed: 000</p>
        </div>
        <div>
          <h2>Filter by status</h2>
          <BtnFilter type="button" name="all">
            All
          </BtnFilter>
          <BtnFilter type="button" name="active">
            Active
          </BtnFilter>
          <BtnFilter type="button" name="Completed">
            Completed
          </BtnFilter>
        </div>
      </Header>
      <main>
        <Form>
          <Input type="text" name="todo" placeholder="text..." />
          <BtnSubmit type="submit">Add</BtnSubmit>
        </Form>
        <Box>
          <ul>
            <Item>
              <input type="checkbox" name="" id="" />
              <TodoText>Text</TodoText>
              <button type="button">X</button>
            </Item>
          </ul>
        </Box>
      </main>
    </Container>
  );
};

export default App;
