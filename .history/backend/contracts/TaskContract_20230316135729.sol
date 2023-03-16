// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// patient(0, 'clean', false)
// patient: { id: 0, patientText: 'clean', isDeleted: false }, 

contract patientContract {
  event Addpatient(address recipient, uint patientId);
  event Deletepatient(uint patientId, bool isDeleted);

  struct patient {
    uint id;
    string firstName;
    string lastName;
    bool isDeleted;
  }

  patient[] private patients;
  mapping(uint256 => address) patientToOwner;
  
  function addpatient(string memory firstName, string memory lastName, bool isDeleted) external {
    uint patientId = patients.length;
    patients.push(patient(patientId, firstName, lastName, isDeleted));
    patientToOwner[patientId] = msg.sender;
    emit Addpatient(msg.sender, patientId);
    
  }
  // get patients that are mine and not deleted
  function getMypatients() external view returns (patient[] memory){
    patient[] memory temporary = new patient[](patients.length);
    uint counter = 0;

    for (uint i=0; i<patients.length; i++) {
      if(patientToOwner[i] == msg.sender && patients[i].isDeleted == false) {
        temporary[counter] = patients[i];
        counter++;
      }
    }
    patient[] memory result = new patient[](counter);
    for (uint i=0; i<counter; i++) {
      result[i] = temporary[i];
    }
    return result;
  }

  function deletepatient(uint patientId, bool isDeleted) external {
    if(patientToOwner[patientId] == msg.sender) {
      patients[patientId].isDeleted = isDeleted;
      emit Deletepatient(patientId, isDeleted);
    }
  }

  
}
