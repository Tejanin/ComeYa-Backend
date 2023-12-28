using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;

namespace ComeYaAPI.Services
{
    public class WebToken
    {
        private readonly IConfiguration _configuration;

        public WebToken( IConfiguration configuration)
        {
            
            _configuration = configuration;
        }

        public string Key => _configuration["Jwt:Key"]!;

        public string SendToken(int Id, string Name, string Lname, string Genre, string Phone)
        {
            var claims = new List<Claim>
            {
                new Claim("Id", Id.ToString()),
                new Claim("Name", Name),
                new Claim("Phone", Phone),
                new Claim("Genre", Genre),
                new Claim("Lname", Lname)
            };

            var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes(Key));
            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: null,
                audience: null,
                claims: claims,
                expires: DateTime.Now.AddHours(3),
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        public int ValidateTokenUserId(ClaimsPrincipal currentUser)
        {
            var userIdClaim = currentUser.Claims.FirstOrDefault(c=> c.Type== "Id");

            if(userIdClaim != null) 
            {
                int userId = int.Parse(userIdClaim.Value);
                return userId;
            }
            return 0;
        }
    }
}
