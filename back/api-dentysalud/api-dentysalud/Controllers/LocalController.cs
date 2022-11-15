using api_dentysalud.Entitys;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api_dentysalud.Controllers
{
        [ApiController]
        [Route("api-dentysalud/local")]   
        public class LocalController : ControllerBase
        {
            private readonly ApplicationDbContext context;

            public LocalController(ApplicationDbContext context)
            {
                this.context = context;
            }

            [HttpGet]
            public async Task<ActionResult<List<Local>>> findAll()
            {
                return await context.Local.ToListAsync();
            }

            [HttpPost]
            public async Task<ActionResult> add(Local a)
            {
                context.Add(a);
                await context.SaveChangesAsync();
                return Ok();
            }

            [HttpPut("{id:int}")]
            public async Task<ActionResult> update(Local a, int id)
            {
                if (a.idlocal != id)
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
                var existe = await context.Local.AnyAsync(x => x.idlocal == id);
                if (!existe)
                {
                    return NotFound();
                }
                context.Remove(new Local() { idlocal = id });
                await context.SaveChangesAsync();
                return Ok();
            }
        }   
}
