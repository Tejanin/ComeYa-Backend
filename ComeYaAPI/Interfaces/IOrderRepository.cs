﻿using ComeYa.Interfaces;
using ComeYaAPI.Context;

namespace ComeYaAPI.Interfaces
{
    public interface IOrderRepository:IRepository<Order>
    {
        Task<int> Add();
        Task<Order> GetOrder(string code);
    }
}
