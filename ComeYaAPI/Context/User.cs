﻿using System;
using System.Collections.Generic;

namespace ComeYaAPI.Context;

public partial class User
{
    public int Id { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public string Salt { get; set; } = null!;

    public DateTime? CreatedAt { get; set; }

    public DateTime? UpdatedAt { get; set; }

    public string Name { get; set; } = null!;

    public string Lname { get; set; } = null!;

    public string Phone { get; set; } = null!;

    public string Genre { get; set; } = null!;

    public decimal Balance { get; set; }

    public int StatusId { get; set; }

    public virtual ICollection<Bill> Bills { get; set; } = new List<Bill>();

    public virtual ICollection<Cart> Carts { get; set; } = new List<Cart>();

    public virtual UserStatus Status { get; set; } = null!;

    public virtual ICollection<Order> Orders { get; set; } = new List<Order>();
}