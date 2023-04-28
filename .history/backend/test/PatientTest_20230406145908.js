const PatientContract = artifacts.require("./PatientContract.sol");

contract("PatientContract", (accounts) => {
    it("check the patients array after adding", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await PatientContract.deployed();
        // Make the account add a patient
        await contract.PatientContract.addPatient("patient.firstName", "patient.lastName", 1);
        // Get the particpant at index 0
        let Patient = await contract.Patient.call(0);
        // Check if that participant is the same as the addess we used
        assert.equal(Patient.firstName, "patient.firstName");
    });
    it("some other test", async () => {
        // ...
    });
});