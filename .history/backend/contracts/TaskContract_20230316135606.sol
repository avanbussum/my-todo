// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Task(0, 'clean', false)
// Task: { id: 0, taskText: 'clean', isDeleted: false }, 

contract TaskContract {
  event AddTask(address recipient, uint taskId);
  event DeleteTask(uint taskId, bool isDeleted);

  struct Task {
    uint id;
    string firstName;
    string lastName;
    bool isDeleted;
  }

  Task[] private tasks;
  mapping(uint256 => address) taskToOwner;
  
  function addTask(string memory firstName, string memory firstName, bool isDeleted) external {
    uint taskId = tasks.length;
    tasks.push(Task(taskId, firstName, lastName, isDeleted));
    taskToOwner[taskId] = msg.sender;
    emit AddTask(msg.sender, taskId);
    
  }
  // get tasks that are mine and not deleted
  function getMyTasks() external view returns (Task[] memory){
    Task[] memory temporary = new Task[](tasks.length);
    uint counter = 0;

    for (uint i=0; i<tasks.length; i++) {
      if(taskToOwner[i] == msg.sender && tasks[i].isDeleted == false) {
        temporary[counter] = tasks[i];
        counter++;
      }
    }
    Task[] memory result = new Task[](counter);
    for (uint i=0; i<counter; i++) {
      result[i] = temporary[i];
    }
    return result;
  }

  function deleteTask(uint taskId, bool isDeleted) external {
    if(taskToOwner[taskId] == msg.sender) {
      tasks[taskId].isDeleted = isDeleted;
      emit DeleteTask(taskId, isDeleted);
    }
  }

  
}
