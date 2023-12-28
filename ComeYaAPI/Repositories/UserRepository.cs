using AutoMapper;
using ComeYa.Repositories;
using ComeYaAPI.Context;
using ComeYaAPI.Interfaces;
using ComeYaAPI.Models.DTOs.UserDTOs;
using ComeYaAPI.Models.ResultsMessages;
using ComeYaAPI.Services;
using Nest;

namespace ComeYaAPI.Repositories
{
    public class UserRepository:Repository<User> ,IUserRepository
    {
        private readonly IMapper _mapper;
        private readonly Hasher _hasher;
        public UserRepository(ComeyaContext context, IMapper mapper, Hasher hasher):base(context)
        {
            _hasher=hasher;
            _mapper = mapper;
        }

        public ComeyaContext? ComeyaContext
        {
            get { return _context as ComeyaContext; }

        }

        public async Task<EntityResult<User>> ActivateUser(string id)
        {
            var result = new EntityResult<User>();
            result.Entity = null;
            result.StatusCode = 500;
            result.Message = "Error en el servidor";
            int Id = int.Parse(id);
            var user = await GetByIdAsync(Id);
            if (user != null)
            {
                user.StatusId = 2;
               await Update(user);
                result.Entity = user;
                result.StatusCode = 200;
                result.Message = "Usuario Activado";
                return result;
            }
             return result;


        }

        public async Task<EntityResult<User>> AddUser(CreateUserDTO userDTO)
        {
            var result = new EntityResult<User>();
            result.Entity = null;
            result.StatusCode = 500;
            result.Message = "Error en el Servidor.";


            var userExists = await FindAsync(u => u.Email == userDTO.Email);
            string salt;
            if (userExists == null)
            {
                if(userDTO.Password == userDTO.PasswordConfirmed)
                {
                    var user = _mapper.Map<User>(userDTO);
                    salt = DateTime.Now.ToString();
                    user.Password = _hasher.HashedPassword(userDTO.Password, salt);
                    user.Salt = salt;
                    await AddAsync(user);

                    result.Entity = user;
                    result.StatusCode=200;
                    
                }
                
            }
            else
            {
                result.StatusCode = 409;
                result.Message = "Este email ya ha sido registrado";
            }

            return result;
        }

        public async Task<EntityListResult<ReadUserDTO>> GetAllUsers(string? genre, int page)
        {
            var filters = new List<Func<User, bool>>();
            var result = new EntityListResult<ReadUserDTO>();

            var userList = await GetAllAsync();
            if (!string.IsNullOrEmpty(genre)) filters.Add(x => x.Genre.ToLower() == genre.ToLower());

            var filteredUsers = Filter(userList, filters);
            var pagedFilteredRecordes = Paginate(filteredUsers, page, 4M);
            var usersListDTO = _mapper.Map<IEnumerable<ReadUserDTO>>(pagedFilteredRecordes);
            
            result.Entity = usersListDTO;
            result.StatusCode = 200;
            result.Message = "";

            return result;
        }

        public async Task<EntityResult<User>> Login(LoginUserDTO userDTO)
        {
            var result = new EntityResult<User>();
            result.Message = "Error, no se pudo realizar la peticion.";
            result.Entity = null;
            result.StatusCode = 500;

            if (userDTO.Email == null || userDTO.Password == null)
            {
                result.Message = "Por favor, ingrese los campos restantes.";
                result.Entity = null;
                result.StatusCode = 400;
                
            }
            else
            {
                var user = await FindAsync(u => u.Email == userDTO.Email);
                
                bool userVerified = _hasher.VerifyPassword(user.Password, userDTO.Password, user.Salt);
                if (user != null)
                {
                    if (userVerified && user.StatusId == 2)
                    {
                        result.Message = "Inicio de sesion exitoso";
                        result.Entity = user;
                        result.StatusCode = 200;
                       
                     
                    }
                }
                
            }
            return result;
        }

        public Task<EntityResult<User>> UpdateUser(int id)
        {
            throw new NotImplementedException();
        }
    }
}
