import styled from 'styled-components';

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

export const Header = styled.header`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const BtnFilter = styled.button`
  padding: 10px;
  &:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Form = styled.form`
  display: flex;
  padding: 20px 0;
`;

export const BtnSubmit = styled.button`
  width: 100px;
  padding: 10px;
  margin-left: 10px;
`;

export const Input = styled.input`
  flex-grow: 1;
  padding: 10px;
`;

export const Box = styled.div`
  padding: 20px 0;
`;
export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  padding: 10px;
  border: 1px solid #303030;
`;

export const TodoText = styled.p`
  margin-left: 10px;
  flex-grow: 1;
`;
