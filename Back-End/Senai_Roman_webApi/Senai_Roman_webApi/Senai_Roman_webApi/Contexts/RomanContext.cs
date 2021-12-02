using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;
using Senai_Roman_webApi.Domains;

#nullable disable

namespace Senai_Roman_webApi.Contexts
{
    public partial class RomanContext : DbContext
    {
        public RomanContext()
        {
        }

        public RomanContext(DbContextOptions<RomanContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Equipe> Equipes { get; set; }
        public virtual DbSet<Projeto> Projetos { get; set; }
        public virtual DbSet<Tema> Temas { get; set; }
        public virtual DbSet<TipoUsuario> TipoUsuarios { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
/*                optionsBuilder.UseSqlServer("Data Source=NOTE0113F4\\SQLEXPRESS; Initial Catalog=Roman; integrated security=true");
*/                optionsBuilder.UseSqlServer("Data Source=NOTE0113F1\\SQLEXPRESS; initial catalog=Roman; user Id=sa; pwd=Senai@132;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Latin1_General_CI_AS");

            modelBuilder.Entity<Equipe>(entity =>
            {
                entity.HasKey(e => e.IdEquipe)
                    .HasName("PK__Equipe__D80524127568308D");

                entity.ToTable("Equipe");

                entity.HasIndex(e => e.NomeEquipe, "UQ__Equipe__55A6F17FCFC669C9")
                    .IsUnique();

                entity.Property(e => e.NomeEquipe)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Projeto>(entity =>
            {
                entity.HasKey(e => e.IdProjeto)
                    .HasName("PK__Projeto__B9E1BB5C83E02597");

                entity.ToTable("Projeto");

                entity.Property(e => e.Descricao)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.NomeProjeto)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdTemaNavigation)
                    .WithMany(p => p.Projetos)
                    .HasForeignKey(d => d.IdTema)
                    .HasConstraintName("FK__Projeto__IdTema__46E78A0C");

                entity.HasOne(d => d.IdUsuarioNavigation)
                    .WithMany(p => p.Projetos)
                    .HasForeignKey(d => d.IdUsuario)
                    .HasConstraintName("FK__Projeto__IdUsuar__45F365D3");
            });

            modelBuilder.Entity<Tema>(entity =>
            {
                entity.HasKey(e => e.IdTema)
                    .HasName("PK__Tema__9F3A41176BD8088A");

                entity.ToTable("Tema");

                entity.HasIndex(e => e.NomeTema, "UQ__Tema__795998E274B4CBAA")
                    .IsUnique();

                entity.Property(e => e.NomeTema)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.Status).HasDefaultValueSql("((0))");
            });

            modelBuilder.Entity<TipoUsuario>(entity =>
            {
                entity.HasKey(e => e.IdTipoUsuario)
                    .HasName("PK__TipoUsua__CA04062BCF55F938");

                entity.ToTable("TipoUsuario");

                entity.HasIndex(e => e.TipoUsuario1, "UQ__TipoUsua__52F7E3AA97F77206")
                    .IsUnique();

                entity.Property(e => e.TipoUsuario1)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("TipoUsuario");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasKey(e => e.IdUsuario)
                    .HasName("PK__Usuario__5B65BF97ACDEAE4D");

                entity.ToTable("Usuario");

                entity.HasIndex(e => e.Email, "UQ__Usuario__A9D1053435BFEB55")
                    .IsUnique();

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(80)
                    .IsUnicode(false);

                entity.Property(e => e.Nome)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.Senha)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.IdEquipeNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdEquipe)
                    .HasConstraintName("FK__Usuario__IdEquip__3F466844");

                entity.HasOne(d => d.IdTipoUsuarioNavigation)
                    .WithMany(p => p.Usuarios)
                    .HasForeignKey(d => d.IdTipoUsuario)
                    .HasConstraintName("FK__Usuario__IdTipoU__3E52440B");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
