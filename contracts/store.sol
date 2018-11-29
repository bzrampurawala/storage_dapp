pragma solidity ^0.5.00;

contract Store{
    struct file{
        uint createdAt;
        uint updatedAt;
        uint deletedAt;
        bytes32 name;
        bytes32 hashId;
        bytes32 typeOfFile;
        uint length;
    }
    mapping(address=>file[]) users;

    function addFile( uint createdAt, bytes32 name, bytes32 hashId, bytes32 typeOfFile, uint length) public{
        require(createdAt==0,"Timestamp missing");
        require(name=="","File name missing");
        require(hashId=="","Hash of file missing");
        require(typeOfFile=="","File type missing");
        require(length == 0,"length of file missing");
        users[msg.sender].push(file({
            updatedAt: 0,
            deletedAt: 0,
            createdAt: createdAt,
            name: name,
            hashId: hashId,
            typeOfFile: typeOfFile,
            length: length
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
    // function getFile(address add) public{
    //     require(add != msg.sender, "you are not authorised");
    //     // return users[add];
    // }
    
}