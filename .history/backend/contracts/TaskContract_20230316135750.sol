// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Task(0, 'clean', false)
// Task: { id: 0, patientText: 'clean', isDeleted: false }, 

contract TaskContract {
  event AddTask(address recipient, uint patientId);
  event DeleteTask(uint patientId, bool isDeleted);

  struct Task {
    uint id;
    string firstName;
    string lastName;
    bool isDeleted;
  }

  Task[] private patients;
  mapping(uint256 => address) patientToOwner;
  
  function addTask(string memory firstName, string memory lastName, bool isDeleted) external {
    uint patientId = patients.length;
    patients.push(Task(patientId, firstName, lastName, isDeleted));
    patientToOwner[patientId] = msg.sender;
    emit AddTask(msg.sender, patientId);
    
  }
  // get patients that are mine and not deleted
  function getMyTasks() external view returns (Task[] memory){
    Task[] memory temporary = new Task[](patients.length);
    uint counter = 0;

    for (uint i=0; i<patients.length; i++) {
      if(patientToOwner[i] == msg.sender && patients[i].isDeleted == false) {
        temporary[counter] = patients[i];
        counter++;
      }
    }
    Task[] memory result = new Task[](counter);
    for (uint i=0; i<counter; i++) {
      result[i] = temporary[i];
    }
    return result;
  }

  function deleteTask(uint patientId, bool isDeleted) external {
    if(patientToOwner[patientId] == msg.sender) {
      patients[patientId].isDeleted = isDeleted;
      emit DeleteTask(patientId, isDeleted);
    }
  }

  
}
