import React from 'react';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import List from './List';
import uuid from 'react-uuid';
function TodoInput() {
  const [open, setOpen] = React.useState(false);
  const [newTodo, setnewTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const removeItem = (id) => {
    setTodoList(
      todoList.filter(item => {
        return item.id !== id;
      }),
    );
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleCancle = () => {
    setOpen(false);
    setnewTodo('');
  }
  const notify = () => toast("At least 10 Characters!");

  function HandleClick(e) {
    e.preventDefault();
    if (newTodo.length <= 10) {
      notify();
    }
    else {
      const itemToAdd = {
        id: uuid(),
        name: newTodo
      }
      setTodoList([itemToAdd, ...todoList])
      setnewTodo('');
      handleClose();
    }
  }
  function handleTextChange(e) {
    setnewTodo(e.target.value)
    e.target.value = "";
  }

  return (
    <div>
      <div className="TodoInput">
        <div className='myaddbutton'>
          {todoList.map((todoItem) => {
            return (
              <List newTodo={todoItem} deleteItem={removeItem} />
            )
          })}
          <Button color='secondary' variant="contained" onClick={handleClickOpen}>
            + New Task
          </Button>
          <Dialog open={open} onClose={handleClose}>
            <DialogTitle>Add New To Do</DialogTitle>
            <DialogContent>
              <DialogContentText>
                Please write the task you that want to add into
                your to do List.
              </DialogContentText>
              <TextField
                autoFocus
                margin="dense"
                id="Task"
                label="New Task"
                type="text"
                fullWidth
                variant="standard"
                onChange={handleTextChange}
                value={newTodo}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={handleCancle}>Cancel</Button>
              <Button onClick={HandleClick}>Add</Button>
            </DialogActions>
          </Dialog>
        </div>

        <ToastContainer />
      </div>
    </div>


  );
}
export default TodoInput;