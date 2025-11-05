# 🏨 ATV I - Atlantis

Sistema básico de **cadastro de clientes para hotel**, desenvolvido em **TypeScript**.

---

## 📋 Descrição

Este é o **primeiro projeto da série Atlantis**, um sistema simples de cadastro que demonstra os conceitos fundamentais de **orientação a objetos (OO)** em TypeScript.  
O sistema permite cadastrar clientes com suas informações pessoais, endereços, telefones, documentos e dependentes.

---

## 🚀 Funcionalidades

- **Cadastro de Cliente:** Registra informações básicas do cliente.  
- **Cadastro de Endereço:** Armazena o endereço completo do cliente.  
- **Cadastro de Telefones:** Permite adicionar múltiplos telefones.  
- **Cadastro de Documentos:** Suporte para diferentes tipos (CPF, RG, Passaporte).  
- **Cadastro de Dependentes:** Associa dependentes ao cliente titular.  
- **Clonagem de Dados:** Dependentes herdam endereço e telefones do titular automaticamente.

---

## 🛠️ Tecnologias Utilizadas

- **TypeScript** – Linguagem principal  
- **Node.js** – Ambiente de execução JavaScript  
- **ts-node** – Executor de arquivos TypeScript diretamente  
- **prompt-sync** – Interface para entrada de dados via terminal  

---

## 📦 Pré-requisitos

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 20 ou superior)  
- npm (geralmente vem com o Node.js)

---

## 🔧 Instalação

Clone o repositório e acesse a pasta do projeto:

```bash
git clone https://github.com/mariannevalerion/atlantis-1.git
cd atlantis-1
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Como Executar

Para rodar o projeto:

```bash
npm start
```

O sistema será iniciado e solicitará as seguintes informações em sequência:

### 🧾 Dados do Cliente
- Nome  
- Nome social  
- Data de cadastro  
- Data de nascimento  

### 🏠 Endereço
- Rua  
- Bairro  
- Cidade  
- Estado  
- País  
- Código postal  

### ☎️ Telefone
- DDD  
- Número  

### 🪪 Documento
- Data de expedição  
- Número do documento  
- Tipo (CPF, RG, Passaporte)

### 👨‍👩‍👧 Dependente
- Nome social  
- Data de cadastro  
- Data de nascimento  
- Documento (mesmas informações do titular)

---

## 🔄 Fluxo de Execução

1. O sistema solicita dados do cliente titular  
2. Coleta informações de endereço  
3. Registra telefone(s)  
4. Cadastra documento(s)  
5. Solicita dados do dependente  
6. Clona endereço e telefone do titular para o dependente  
7. Exibe o objeto completo do cliente no console  

---

🖋️ **Autora:** [Marianne Valério Nunes](https://github.com/mariannevalerion)

