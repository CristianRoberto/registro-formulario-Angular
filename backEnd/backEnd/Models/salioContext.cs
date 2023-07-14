using Microsoft.EntityFrameworkCore;

namespace backEnd.Models
{
    public partial class salioContext : DbContext
    {
        public salioContext()
        {
        }

        public salioContext(DbContextOptions<salioContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Table1> Table1s { get; set; } = null!;

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
           
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Table1>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("Table_1");

                entity.Property(e => e.Descripcion)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("descripcion");

                entity.Property(e => e.Idtablasalio)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("idtablasalio");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
