import Cliente from "../modelos/cliente";
import Documento from "../modelos/documento";
import Endereco from "../modelos/endereco";
import Telefone from "../modelos/telefone";
import Entrada from "./entrada";

const entradaCliente = new Entrada();

const cliente = new Cliente();
const endereco = new Endereco();
const telefone = new Telefone();
const dependente = new Cliente();
const documento = new Documento();
const documentoDependente = new Documento();

cliente.nome = entradaCliente.receberTexto("Insira o nome do cliente: ");
cliente.nomeSocial = entradaCliente.receberTexto(
	"Insira o nome social do cliente: ",
);
cliente.dataCadastro = entradaCliente.receberData(
	"Insira a data de cadastro: ",
);
cliente.dataNascimento = entradaCliente.receberData(
	"Insira a data de nascimento: ",
);

endereco.rua = entradaCliente.receberTexto("Insira o nome da rua: ");
endereco.bairro = entradaCliente.receberTexto("Insira o nome do bairro: ");
endereco.cidade = entradaCliente.receberTexto("Insira o nome da cidade: ");
endereco.estado = entradaCliente.receberTexto("Insira o nome do estado: ");
endereco.pais = entradaCliente.receberTexto("Insira o nome do país: ");
endereco.codigoPostal = entradaCliente.receberTexto("Insira o codigo postal: ");

cliente.endereco = endereco;

telefone.ddd = entradaCliente.receberTexto("Insira o DDD: ");
telefone.numero = entradaCliente.receberTexto(
	"Insira o nome numero de telefone: ",
);

cliente.telefones.push(telefone);

documento.dataExpedicao = entradaCliente.receberData(
	"Insira a data de expedição do documento: ",
);
documento.numero = entradaCliente.receberTexto(
	"Insira o numero do documento: ",
);
const tipoDocumento = entradaCliente.receberTipoDeDocumento(
	"Insira o tipo de documento: ",
);

if (tipoDocumento !== null) {
	documento.tipo = tipoDocumento;
	cliente.documentos.push(documento);
	console.log("Documento do cliente adicionado com sucesso!");
} else {
	console.log("Documento do cliente não foi adicionado.");
}

dependente.nomeSocial = entradaCliente.receberTexto(
	"Insira o nome social do dependente: ",
);
dependente.dataCadastro = entradaCliente.receberData(
	"Insira a data de cadastro do dependente: ",
);
dependente.dataNascimento = entradaCliente.receberData(
	"Insira a data de nascimento do dependente ",
);

documentoDependente.dataExpedicao = entradaCliente.receberData(
	"Insira a data de expedição do documento: ",
);
documentoDependente.numero = entradaCliente.receberTexto(
	"Insira o numero do documento: ",
);
const tipoDocumentoDependente = entradaCliente.receberTipoDeDocumento(
	"Insira o tipo de documento do dependente: ",
);

if (tipoDocumentoDependente !== null) {
	documentoDependente.tipo = tipoDocumentoDependente;
	dependente.documentos.push(documentoDependente);
	console.log("Documento do dependente adicionado com sucesso!");
} else {
	console.log("Documento do dependente não foi adicionado.");
}

dependente.endereco = cliente.endereco.clonar() as Endereco;

dependente.telefones = cliente.telefones.map(
	(telefone) => telefone.clonar() as Telefone,
);

dependente.titular = cliente;

cliente.dependentes.push(dependente);

console.log(cliente);