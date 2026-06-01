using Microsoft.AspNetCore.Mvc;
using WebAPI.Models;

namespace WebAPI.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ProduktyController : ControllerBase
    {
        private static List<Produkt> _produkty = new List<Produkt>
        {
            new Produkt { Id = 1, Nazwa = "Chleb", Cena = 4.50m, DataWaznosci = DateTime.Now.AddDays(2) },
            new Produkt { Id = 2, Nazwa = "Mleko", Cena = 3.20m, DataWaznosci = DateTime.Now.AddDays(5) }
        };

        [HttpGet]
        public IEnumerable<Produkt> Get() => _produkty;

        [HttpGet("{id}")]
        public ActionResult<Produkt> GetByID(int id)
        {
            var produkt = _produkty.FirstOrDefault(p => p.Id == id);
            return produkt == null ? NotFound() : produkt;
        }

        [HttpPost]
        public ActionResult Post(Produkt produkt)
        {
            produkt.Id = _produkty.Count > 0 ? _produkty.Max(p => p.Id) + 1 : 1;
            _produkty.Add(produkt);
            return Ok();
        }

        [HttpPut]
        public ActionResult Put(Produkt produkt)
        {
            var existing = _produkty.FirstOrDefault(p => p.Id == produkt.Id);
            if (existing == null) return NotFound();

            existing.Nazwa = produkt.Nazwa;
            existing.Cena = produkt.Cena;
            existing.DataWaznosci = produkt.DataWaznosci;
            return Ok();
        }

        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var produkt = _produkty.FirstOrDefault(p => p.Id == id);
            if (produkt == null) return NotFound();
            _produkty.Remove(produkt);
            return Ok();
        }
    }
}
