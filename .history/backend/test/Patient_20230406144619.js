const Patient = artifacts.require("./PatientContract.sol");

contract("PatientContract", (accounts) => {
    it("check the pat array after participation", async () => {
        // Get the first account
        let account = accounts[0];
        // Retreive the deployed contract
        const contract = await Fundraiser.deployed();
        // Make the account send 14 gwei
        await contract.sendMoney({from: account, value: 14});
        // Get the particpant at index 0
        let backer = await contract.backers.call(0);
        // Check if that participant is the same as the addess we used
        assert.equal(backer, account);
    });
    it("some other test", async () => {
        // ...
    });
});