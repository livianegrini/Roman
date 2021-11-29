using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai_Roman_webApi.Domains;
using Senai_Roman_webApi.Interfaces;
using Senai_Roman_webApi.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]

    [Authorize]
    public class ProjetosController : ControllerBase
    {
        private IProjetoRepository _projetoRepository { get; set; }

        public ProjetosController()
        {
            _projetoRepository = new ProjetoRepository();
        }

        /// <summary>
        /// Listar todas as Consultas
        /// </summary>
        /// <returns>Uma lista de Consultas</returns>
        [HttpGet]
        public IActionResult Listar()
        {
            try
            {
                return Ok(_projetoRepository.Listar());
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }

        }

        /// <summary>
        /// Cadastrar uma nova Consulta
        /// </summary>
        /// <param name="ProjetoNovo">Dados a serem cadastrados</param>
        [HttpPost]
        public IActionResult Cadastar(Projeto ProjetoNovo)
        {
            try
            {
                _projetoRepository.Cadastrar(ProjetoNovo);

                return StatusCode(201);
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
        }
    }
}
