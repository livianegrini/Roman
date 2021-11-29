using Microsoft.EntityFrameworkCore;
using Senai_Roman_webApi.Contexts;
using Senai_Roman_webApi.Domains;
using Senai_Roman_webApi.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai_Roman_webApi.Repositories
{
    public class ProjetoRepository : IProjetoRepository
    {

        RomanContext ctx = new RomanContext();

        public void Cadastrar(Projeto ProjetoNovo)
        {
            ctx.Projetos.Add(ProjetoNovo);

            ctx.SaveChanges();
        }

        public List<Projeto> Listar()
        {
            return ctx.Projetos.Include(P => P.IdTemaNavigation).ToList();
        }
    }
}
