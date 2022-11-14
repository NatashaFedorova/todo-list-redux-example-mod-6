import { StyledForm, BtnSubmit, Input } from './Form.styled';

const Form = () => {
  const handleInput = e => {
    console.log(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input
        type="text"
        name="todo"
        placeholder="text..."
        onChange={handleInput}
      />
      <BtnSubmit type="submit">Add</BtnSubmit>
    </StyledForm>
  );
};
export default Form;
