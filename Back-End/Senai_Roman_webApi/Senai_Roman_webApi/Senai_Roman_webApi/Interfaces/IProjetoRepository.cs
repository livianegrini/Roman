using Senai_Roman_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_webApi.Interfaces
{
    interface IProjetoRepository
    {
        /// <summary>
        /// Listar todas as Consultas
        /// </summary>
        /// <returns>Uma lista de Consultas</returns>
        List<Projeto> Listar();

        /// <summary>
        /// Cadastrar uma nova Consulta
        /// </summary>
        /// <param name="ProjetoNovo">Dados a serem cadastrados</param>
        void Cadastrar(Projeto ProjetoNovo);
    }
}
