using Senai_Roman_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_webApi.Interfaces
{
    interface IUsuarioRepository
    {
        /// <summary>
        /// Método responsavel por fazer login no sistema
        /// </summary>
        /// <param name="Email">Email para login</param>
        /// <param name="Senha">Senha para login</param>
        /// <returns>Usuario com esse email e senha</returns>
        Usuario Login(string Email, string Senha);
    }
}
