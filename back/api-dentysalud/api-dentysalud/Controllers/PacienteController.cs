using api_dentysalud.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace api_dentysalud.Controllers
{
    [ApiController]
    [Route("api-dentysalud/paciente")]
    public class PacienteController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public PacienteController(ApplicationDbContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Paciente>>> findAll()
        {
            return await context.Paciente.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult> add(Paciente a)
        {
            context.Add(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Paciente a, int id)
        {
            if (a.idpaciente != id)
            {
                return BadRequest("NO SE ENCONTRO EL ID CORRESPONDIENTE");
            }
            context.Update(a);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Paciente.AnyAsync(x => x.idpaciente == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Paciente() { idpaciente = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
