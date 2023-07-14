using backEnd.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;

namespace backEnd.Controllers
{
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class salioController : ControllerBase
    {
        //Declara un objecto dbcontext vamos a poder utilizar los metodos crud para nuestros modelos (Requerimiento)
        public readonly salioContext _dbcontext;
        //creo el constructo que recibe el contexto y asigno el valor _context a mi variable _dbcontext
        public salioController(salioContext _context)
        {
            _dbcontext = _context;
        }

        //METODO GET mostrar todos los datos de la tabla productos y categoria ya que estan relacionado atravez de llaves foraneas
        [HttpGet]
        [Route("Listasalio")]
        public IActionResult Lista()
        {
            //CREO UN OBJECTO DE liSTA<PRODUCTO> EL CUAL VA HACER UNA NUEVA LISTA DE PRODUCTOS
            List<Table1> lista = new List<Table1>();
            //CREO EL TRYCATCH PARA CAPTURAR ERRORES
            try
            {
                //llamo a mi lista y utilzo _dbContext_NombreModelo[Productos]
                lista = _dbcontext.Table1s.ToList();
                //DEVUELVE LA LISTA//se crea un json que contiene un mensaje ok y la respuesta sera lista
                // return StatusCode(StatusCodes.Status200OK, new { mensaje = "ok", response = lista });
                return Ok(lista);

            }
            catch (Exception ex)
            {
                return StatusCode(StatusCodes.Status200OK, new { mensaje = ex.Message, response = lista });
            }
        }
    }
}