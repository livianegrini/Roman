using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using Senai_Roman_webApi.Domains;
using Senai_Roman_webApi.Interfaces;
using Senai_Roman_webApi.Repositories;
using Senai_Roman_webApi.ViewModel;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;

namespace Senai_Roman_webApi.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
            private IUsuarioRepository _usuarioRepository { get; set; }

            public LoginController()
            {
                _usuarioRepository = new UsuarioRepository();
            }

            /// <summary>
            /// Método responsavel por fazer login no sistema
            /// </summary>
            /// <param name="Login">Objeto do tipo Login com Email e Senha</param>
            /// <returns>Usuario com esse email e senha</returns>
            [HttpPost]
            public IActionResult Login(LoginViewModel Login)
            {
                try
                {
                    Usuario UsuarioBuscado = _usuarioRepository.Login(Login.Email, Login.Senha);

                    if (UsuarioBuscado != null)
                    {
                        var MinhasClains = new[]
                        {
                        new Claim(JwtRegisteredClaimNames.Email, UsuarioBuscado.Email),
                        new Claim(JwtRegisteredClaimNames.Jti, UsuarioBuscado.IdUsuario.ToString()),
                        new Claim(ClaimTypes.Role, UsuarioBuscado.IdTipoUsuario.ToString()),
                        new Claim ("Role", UsuarioBuscado.IdTipoUsuario.ToString())
                    };

                        var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("Roman-chave-Autenticacao"));

                        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                        var meuToken = new JwtSecurityToken(
                            issuer: "Roman_webApi",
                            audience: "Roman_webApi",
                            claims: MinhasClains,
                            expires: DateTime.Now.AddHours(3),
                            signingCredentials: creds
                            );

                        return Ok(new
                        {
                            token = new JwtSecurityTokenHandler().WriteToken(meuToken)
                        });
                    }

                    return BadRequest("Email ou Senha Invalidos!");
                }
                catch (Exception ex)
                {

                    return BadRequest(ex);
                }
            }
    }
}
