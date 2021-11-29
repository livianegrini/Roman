using Senai_Roman_webApi.Interfaces;
using Senai_Roman_webApi.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Senai_Roman_webApi.Contexts;

namespace Senai_Roman_webApi.Repositories
{


    public class UsuarioRepository : IUsuarioRepository
    {

        RomanContext ctx = new RomanContext();

        Usuario IUsuarioRepository.Login(string Email, string Senha)
        {
            return ctx.Usuarios.FirstOrDefault(U => U.Email == Email && U.Senha == Senha);
        }
    }
}
