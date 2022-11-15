using api_dentysalud.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_dentysalud.Controllers
{
    [ApiController]
    [Route("api-dentysalud/secretaria")]
    public class SecretariaController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public SecretariaController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Secretaria>>> findAll()
        {
            return await context.Secretaria.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> add(Secretaria s)
        {
            context.Add(s);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Secretaria s, int id)
        {
            if (s.codigosecretaria != id)
            {
                return BadRequest("NO SE ENCONTRO EL ID CORRESPONDIENTE");
            }
            context.Update(s);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Secretaria.AnyAsync(x => x.codigosecretaria == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Secretaria() { codigosecretaria = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
