pragma solidity ^0.5.00;

contract Store{
    struct file{
        uint createdAt;
        uint updatedAt;
        uint deletedAt;
        bytes32 name;
        bytes32 hashId;
        bytes32 typeOfFile;
        uint size;
    }
    mapping(address=>file[]) users;

    function addFile(uint createdAt, bytes32 name, bytes32 hashId, bytes32 typeOfFile, uint size) public{
        users[msg.sender].push(file(0, 0, createdAt, name,hashId, typeOfFile, size));
    }
    function numberOfFiles() public view returns(uint)  {
        return users[msg.sender].length;
    }
    // function deleteFile(bytes32  hashId) public{

    // }
    // function editFile() public{

    // }
    // function shareFile(address to) public{
        
    // }
    function getFile(uint index) public view returns(uint, uint, uint, bytes32, bytes32, bytes32, uint){
        require(users[msg.sender].length>0,"there are no files associated with this address");
        uint createdAt = users[msg.sender][index].createdAt;
        uint updatedAt = users[msg.sender][index].updatedAt;
        uint deletedAt = users[msg.sender][index].deletedAt;
        bytes32 name = users[msg.sender][index].name;
        bytes32 hashId = users[msg.sender][index].hashId;
        bytes32 typeOfFile = users[msg.sender][index].typeOfFile;
        uint size = users[msg.sender][index].size;
        return(createdAt, updatedAt, deletedAt, name, hashId, typeOfFile, size);
    }
    
}