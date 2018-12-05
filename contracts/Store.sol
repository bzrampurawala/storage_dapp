pragma solidity ^0.4.24;

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

    function addFile( uint createdAt, bytes32 name, bytes32 hashId, bytes32 typeOfFile, uint size) public{
        require(createdAt==0,"Timestamp missing");
        require(name=="","File name missing");
        require(hashId=="","Hash of file missing");
        require(typeOfFile=="","File type missing");
        require(size == 0,"length of file missing");
        users[msg.sender].push(file({
            updatedAt: 0,
            deletedAt: 0,
            createdAt: createdAt,
            name: name,
            hashId: hashId,
            typeOfFile: typeOfFile,
            size: size
        }));
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
    function getFile(uint index) public view returns( uint , uint, uint , bytes32 , bytes32 , bytes32 , uint ){
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