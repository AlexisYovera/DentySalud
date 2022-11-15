using Microsoft.EntityFrameworkCore.Migrations;

namespace api_dentysalud.Migrations
{
    public partial class dentysalud1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Cita",
                columns: table => new
                {
                    idcita = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombrepaciente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    apellidopaciente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    local = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Hora = table.Column<int>(type: "int", nullable: false),
                    fecha = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Cita", x => x.idcita);
                });

            migrationBuilder.CreateTable(
                name: "Local",
                columns: table => new
                {
                    idlocal = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    callelocal = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    numerolocal = table.Column<int>(type: "int", nullable: false),
                    cplocal = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Local", x => x.idlocal);
                });

            migrationBuilder.CreateTable(
                name: "Odonlotogo",
                columns: table => new
                {
                    codigoodontologo = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dni = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Odonlotogo", x => x.codigoodontologo);
                });

            migrationBuilder.CreateTable(
                name: "Paciente",
                columns: table => new
                {
                    idpaciente = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombrepaciente = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellidopaciente = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dni = table.Column<int>(type: "int", nullable: false),
                    telefonopaciente = table.Column<int>(type: "int", nullable: false),
                    correo = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Paciente", x => x.idpaciente);
                });

            migrationBuilder.CreateTable(
                name: "Secretaria",
                columns: table => new
                {
                    codigosecretaria = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    nombre = table.Column<string>(type: "nvarchar(100)", maxLength: 100, nullable: false),
                    apellido = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    dni = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    telefono = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Secretaria", x => x.codigosecretaria);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Cita");

            migrationBuilder.DropTable(
                name: "Local");

            migrationBuilder.DropTable(
                name: "Odonlotogo");

            migrationBuilder.DropTable(
                name: "Paciente");

            migrationBuilder.DropTable(
                name: "Secretaria");
        }
    }
}
