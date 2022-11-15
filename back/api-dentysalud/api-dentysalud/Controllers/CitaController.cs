using api_dentysalud.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_dentysalud.Controllers
{
    [ApiController]
    [Route("api-dentysalud/cita")]
    public class CitaController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public CitaController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Cita>>> findAll()
        {
            return await context.Cita.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> add(Cita c)
        {
            context.Add(c);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Cita c, int id)
        {
            if (c.idcita != id)
            {
                return BadRequest("NO SE ENCONTRO EL ID CORRESPONDIENTE");
            }
            context.Update(c);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Cita.AnyAsync(x => x.idcita == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Cita() { idcita = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
