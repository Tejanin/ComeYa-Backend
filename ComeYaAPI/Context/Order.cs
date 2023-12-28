using System;
using System.Collections.Generic;

namespace ComeYaAPI.Context;

public partial class Order
{
    public int Id { get; set; }

    public string OrderCode { get; set; } = null!;

    public int OrderStatusId { get; set; }

    public virtual Bill? Bill { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; } = new List<OrderItem>();

    public virtual OrderStatus OrderStatus { get; set; } = null!;

    public virtual ICollection<User> Users { get; set; } = new List<User>();
}
