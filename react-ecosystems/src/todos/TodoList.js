import React, { useEffect } from "react";
import { connect } from "react-redux";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import {
  loadTodos,
  markTodoAsCompletedRequest,
  removeTodoRequest,
} from "./thunks";
import {
  getCompletedTodos,
  getIncompleteTodos,
  getTodosLoading,
} from "./selectors";

const ListWrapper = styled.div`
  max-width: 700px;
  margin: auto;
`;

const TodoList = ({
  completedtodos,
  incompleteTodos,
  onRemovePressed,
  onCompletedPressed,
  isLoading,
  startLoadingTodos,
}) => {
  useEffect(() => {
    startLoadingTodos();
  }, []);

  const loadingMessage = <div>Loading Todos...</div>;
  const content = (
    <ListWrapper>
      <NewTodoForm />
      <h3> Incomplete: </h3>
      {incompleteTodos.map((todo, key) => (
        <TodoListItem
          todo={todo}
          key={key}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
      <h3> Completed: </h3>
      {completedtodos.map((todo, key) => (
        <TodoListItem
          todo={todo}
          key={key}
          onRemovePressed={onRemovePressed}
          onCompletedPressed={onCompletedPressed}
        />
      ))}
    </ListWrapper>
  );
  return isLoading ? loadingMessage : content;
};

const mapStateToProps = (state) => ({
  completedtodos: getCompletedTodos(state),
  incompleteTodos: getIncompleteTodos(state),
  isLoading: getTodosLoading(state),
});

const mapDispatchToProps = (dispatch) => ({
  startLoadingTodos: () => dispatch(loadTodos()),
  onRemovePressed: (id) => dispatch(removeTodoRequest(id)),
  onCompletedPressed: (id) => dispatch(markTodoAsCompletedRequest(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
