using api_dentysalud.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_dentysalud.Controllers
{
    [ApiController]
    [Route("api-dentysalud/odontologo")]
    public class OdontologoController : ControllerBase
    {
        private readonly ApplicationDbContext context;
        public OdontologoController(ApplicationDbContext context)
        {
            this.context = context;
        }

        //cuando queremos obtener informacion
        [HttpGet]
        public async Task<ActionResult<List<Odontologo>>> findAll()
        {
            return await context.Odonlotogo.ToListAsync();
        }

        //cuando queremos guardar informacion
        [HttpPost]
        public async Task<ActionResult> add(Odontologo o)
        {
            context.Add(o);
            await context.SaveChangesAsync();
            return Ok();
        }

        //cuando queremos actualizar informacion
        [HttpPut("{id:int}")]
        public async Task<ActionResult> update(Odontologo o, int id)
        {
            if (o.codigoodontologo != id)
            {
                return BadRequest("No se encuentra el codigo correspondiente");
            }
            context.Update(o);
            await context.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> delete(int id)
        {
            var existe = await context.Odonlotogo.AnyAsync(x => x.codigoodontologo == id);
            if (!existe)
            {
                return NotFound();
            }
            context.Remove(new Odontologo() { codigoodontologo = id });
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}
