using ComeYa.Interfaces;
using ComeYaAPI.Context;
using ComeYaAPI.Models.DTOs.UserDTOs;
using ComeYaAPI.Models.ResultsMessages;

namespace ComeYaAPI.Interfaces
{
    public interface IUserRepository: IRepository<User>
    {
        Task<EntityResult<User>> AddUser(CreateUserDTO userDTO);
        Task<EntityResult<User>> Login(LoginUserDTO userDTO);
        Task<EntityListResult<ReadUserDTO>> GetAllUsers(string? genre, int page);
        Task<EntityResult<User>> ActivateUser(string id);
        Task<EntityResult<User>> UpdateUser(int id);

    }
}
