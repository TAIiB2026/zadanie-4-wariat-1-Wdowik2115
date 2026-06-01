namespace WebAPI.Models
{
    public class Produkt
    {
        public int Id { get; set; }
        public string Nazwa { get; set; } = string.Empty;
        public decimal Cena { get; set; }
        public DateTime DataWaznosci { get; set; }
    }
}