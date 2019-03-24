pragma solidity ^0.5.00;

contract Store{
    struct file{
        bytes32 name;
        bytes32 hashId1;
        bytes32 hashId2;
        bytes32 typeOfFile;
        uint size;
    }
    mapping(address=>file[]) users;

    function addFile(bytes32 name, bytes32 hashId1, bytes32 hashId2, bytes32 typeOfFile, uint size) public{
        users[msg.sender].push(file(name,hashId1, hashId2, typeOfFile, size));
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
    function getFile(uint index) public view returns(bytes32, bytes32, bytes32, bytes32, uint){
        require(users[msg.sender].length>0,"there are no files associated with this address");
        bytes32 name = users[msg.sender][index].name;
        bytes32 hashId1 = users[msg.sender][index].hashId1;
        bytes32 hashId2 = users[msg.sender][index].hashId2;
        bytes32 typeOfFile = users[msg.sender][index].typeOfFile;
        uint size = users[msg.sender][index].size;
        return(name, hashId1, hashId2, typeOfFile, size);
    }
    
}