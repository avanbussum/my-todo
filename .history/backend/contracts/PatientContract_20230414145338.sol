// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// Patient(0, 'clean', false)
// Patient: { id: 0, patientText: 'clean', isDeleted: false }, 

contract PatientContract {
  event AddPatient(address recipient, uint patientId, string firstName, string latName, bool isDeleted, uint256 timestamp);
  event DeletePatient(uint patientId, bool isDeleted);

  struct Patient {
    uint id;
    string firstName;
    string lastName;
    bool isDeleted;
  }

  Patient[] private patients;
  mapping(uint256 => address) patientToOwner;
  
  function addPatient(string memory firstName, string memory lastName, bool isDeleted) external {
    uint patientId = patients.length;
    patients.push(Patient(patientId, firstName, lastName, isDeleted));
    patientToOwner[patientId] = msg.sender;
    emit AddPatient(msg.sender, patientId, firstName);
  }
  // get patients that are mine and not deleted
  function getMyPatients() external view returns (Patient[] memory){
    Patient[] memory temporary = new Patient[](patients.length);
    uint counter = 0;

    for (uint i=0; i<patients.length; i++) {
      if(patientToOwner[i] == msg.sender && patients[i].isDeleted == false) {
        temporary[counter] = patients[i];
        counter++;
      }
    }
    Patient[] memory result = new Patient[](counter);
    for (uint i=0; i<counter; i++) {
      result[i] = temporary[i];
    }
    return result;
  }

  function deletePatient(uint patientId, bool isDeleted) external {
    if(patientToOwner[patientId] == msg.sender) {
      patients[patientId].isDeleted = isDeleted;
      emit DeletePatient(patientId, isDeleted);
    }
  }
}
