pragma solidity ^0.4.23;

contract Store{
    struct file{
        uint createdAt;
        uint updateAt;
        uint deletedAt;
        string name;
        string hashId;
        string typeOfFile;
        string lenght;
    }
    mapping(address=>uint[]) users;

    function addFile() public{
        
    }
    function deleteFile() public{

    }
    function editFile() public{

    }
    function shareFile() public{
        
    }
    function getFile() public{

    }
}