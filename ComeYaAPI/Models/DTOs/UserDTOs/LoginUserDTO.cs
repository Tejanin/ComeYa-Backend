﻿using System.ComponentModel.DataAnnotations;

namespace ComeYaAPI.Models.DTOs.UserDTOs
{
    public class LoginUserDTO
    {
        [Required]
        public string Email { get; set; } = null!;
        [Required]
        public string Password { get; set; }= null!;

    }
}
