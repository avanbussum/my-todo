const PatientContract = artifacts.require("./PatientContract.sol");

contract("PatientContract", (accounts) => {
    it("check the patients array after adding", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await PatientContract.deployed().then(() => 'test');
        // Make the account add a patient
        await contract.addPatient("patient.firstName", "patient.lastName", true);
        // Get the particpant at index 0
        let patient = await contract.patients;
        // Check if that participant is the same as the addess we used
        assert.equal(patient[0].firstName, "patient.firstName");
    });
    it("some other test", async () => {
        // ...
    })
});