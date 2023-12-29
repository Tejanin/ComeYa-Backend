namespace ComeYaAPI.Context
{
    public partial class OrderHistory
    {
        public int UserId { get; set; }

        public int OrderId { get; set; }

        public virtual Order Order { get; set; } = null!;

        public virtual User User { get; set; } = null!;
    }
}
