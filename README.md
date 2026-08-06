# JusRank - Índice de Complexidade Processual

> MVP desenvolvido como proposta para a segunda etapa da Residência em Tecnologia da JusMed Tech.

## 📖 Sobre o projeto

O **JusRank** é uma aplicação web que utiliza Inteligência Artificial para auxiliar na análise preliminar de processos trabalhistas relacionados à perícia médica.

O objetivo não é substituir a análise humana, mas **reduzir o tempo gasto na leitura inicial dos documentos**, identificando automaticamente inconsistências, informações ausentes e possíveis conflitos entre os fatos narrados na petição.

Ao final da análise, o sistema gera um **Índice de Complexidade Processual (ICP)**, permitindo que a equipe priorize processos potencialmente mais complexos.

---

## 🎯 Problema

Atualmente a análise dos processos exige leitura manual de diversos documentos.

Durante esse processo podem existir:

- documentos sem data;
- exames incompatíveis com a petição;
- CIDs sem comprovação documental;
- informações contraditórias;
- documentos obrigatórios ausentes;
- benefícios previdenciários inconsistentes.

Essa conferência é repetitiva e consome bastante tempo da equipe.

---

## 💡 Solução

O JusRank utiliza um modelo de IA para realizar uma leitura inicial da petição.

A IA identifica informações relevantes como:

- datas
- CIDs
- diagnósticos
- exames
- benefícios previdenciários
- documentos citados
- possíveis inconsistências

Após essa extração, o backend calcula um **Índice de Complexidade Processual (ICP)** baseado na quantidade e gravidade das inconsistências encontradas.

Esse índice serve apenas como apoio para priorização da análise humana.

---

# Fluxo da aplicação

```text
Usuário

↓

Cole o texto da petição

↓

React

↓

Node + Express

↓

OpenAI API

↓

Extração estruturada em JSON

↓

Cálculo do ICP

↓

Resultado apresentado ao usuário
```

---

# Tecnologias

## Front-end

- React
- Vite
- TailwindCSS
- Axios

## Back-end

- Node.js
- Express
- OpenAI API

---

# Funcionalidades

## MVP

- Inserção da petição por texto
- Envio para análise
- Extração estruturada via IA
- Identificação de inconsistências
- Cálculo do Índice de Complexidade Processual
- Exibição dos resultados

---

# Funcionalidades da IA

A IA deverá identificar automaticamente:

- CIDs
- Diagnósticos
- Datas importantes
- Exames citados
- Benefícios previdenciários
- CAT
- Doenças pré-existentes
- Informações conflitantes
- Informações ausentes

---

# Índice de Complexidade Processual (ICP)

| Inconsistência                 | Peso (%) |
| ------------------------------ | -------: |
| Documento sem data             |   **10** |
| CAT ausente                    |   **14** |
| CID sem comprovação documental |   **19** |
| Benefício incompatível         |   **14** |
| Datas conflitantes             |   **10** |
| Exame ausente                  |   **19** |
| Informação contraditória       |   **14** |
| **Total**                      |  **100** |

O **Score** é calculado pela soma dos pesos.

### Classificação

| Pontuação | Classificação |
| --------- | ------------- |
| 0 - 30    | 🟢 Baixa      |
| 31 - 69   | 🟡 Média      |
| 70+       | 🔴 Alta       |

---

# Estrutura do projeto

```
jusrank
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── routes
│   │   ├── prompts
│   │   ├── utils
│   │   └── app.js
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── hooks
│   │   ├── assets
│   │   └── App.jsx
│   │
│   └── vite.config.js
│
└── README.md
```

---

# Fluxo de funcionamento

1. O usuário cola o texto da petição.
2. O frontend envia o conteúdo para o backend.
3. O backend monta um prompt estruturado.
4. A OpenAI analisa o documento.
5. A IA retorna um JSON padronizado.
6. O backend calcula o ICP.
7. O frontend apresenta:
   - resumo do processo;
   - inconsistências;
   - documentos ausentes;
   - classificação de complexidade.

---

# Exemplo de resposta

```json
{
  "cids": ["M75.1", "G56.0"],
  "documentosAusentes": ["CAT", "Exame do punho"],
  "inconsistencias": [
    {
      "descricao": "Ressonância sem data",
      "peso": 2
    },
    {
      "descricao": "CID G56.0 sem exame correspondente",
      "peso": 4
    }
  ],
  "indiceComplexidade": {
    "pontuacao": 9,
    "nivel": "Alta"
  }
}
```

---

# Interface

O MVP será composto por uma única página.

Ela conterá:

- Campo para inserir a petição
- Botão de análise
- Loading durante o processamento
- Cards com o resultado
- Índice de Complexidade Processual
- Lista de inconsistências
- Lista de documentos ausentes

---

# Limitações

Este projeto representa um MVP e possui algumas limitações intencionais:

- não realiza OCR;
- recebe apenas texto (não PDFs);
- não possui autenticação;
- não armazena histórico das análises;
- não substitui a avaliação médica ou jurídica.

A IA atua apenas como ferramenta de apoio para triagem documental.

---

# Evoluções futuras

- Upload de múltiplos PDFs
- Integração com OCR
- Histórico das análises
- Dashboard de processos
- Exportação em PDF
- Banco de dados
- Autenticação de usuários
- Motor de regras independente da IA
- Análise de múltiplos documentos simultaneamente
- Ajuste dos pesos do ICP com base em dados reais

---

# Objetivo acadêmico

Este projeto foi desenvolvido exclusivamente para demonstrar uma proposta técnica para o desafio da Residência em Tecnologia da JusMed Tech.

O foco da solução é apresentar como modelos de linguagem podem ser utilizados para organizar informações, identificar inconsistências documentais e apoiar a priorização da análise humana, sem substituir a decisão dos especialistas.# JusRank - Índice de Complexidade Processual

> MVP desenvolvido como proposta para a segunda etapa da Residência em Tecnologia da JusMed Tech.

## 📖 Sobre o projeto

O **JusRank** é uma aplicação web que utiliza Inteligência Artificial para auxiliar na análise preliminar de processos trabalhistas relacionados à perícia médica.

O objetivo não é substituir a análise humana, mas **reduzir o tempo gasto na leitura inicial dos documentos**, identificando automaticamente inconsistências, informações ausentes e possíveis conflitos entre os fatos narrados na petição.

Ao final da análise, o sistema gera um **Índice de Complexidade Processual (ICP)**, permitindo que a equipe priorize processos potencialmente mais complexos.

---

## 🎯 Problema

Atualmente a análise dos processos exige leitura manual de diversos documentos.

Durante esse processo podem existir:

- documentos sem data;
- exames incompatíveis com a petição;
- CIDs sem comprovação documental;
- informações contraditórias;
- documentos obrigatórios ausentes;
- benefícios previdenciários inconsistentes.

Essa conferência é repetitiva e consome bastante tempo da equipe.

---

## 💡 Solução

O JusRank utiliza um modelo de IA para realizar uma leitura inicial da petição.

A IA identifica informações relevantes como:

- datas
- CIDs
- diagnósticos
- exames
- benefícios previdenciários
- documentos citados
- possíveis inconsistências

Após essa extração, o backend calcula um **Índice de Complexidade Processual (ICP)** baseado na quantidade e gravidade das inconsistências encontradas.

Esse índice serve apenas como apoio para priorização da análise humana.

---

# Fluxo da aplicação

```text
Usuário

↓

Cole o texto da petição

↓

React

↓

Node + Express

↓

OpenAI API

↓

Extração estruturada em JSON

↓

Cálculo do ICP

↓

Resultado apresentado ao usuário
```

---

# Tecnologias

## Front-end

- React
- Vite
- TailwindCSS
- Axios
- lucide-react

## Back-end

- Node.js
- Express
- OpenAI API
- pdf-parse
- multer
- typescript

---

# Funcionalidades

## MVP

- Inserção da petição por texto
- Envio para análise
- Extração estruturada via IA
- Identificação de inconsistências
- Cálculo do Índice de Complexidade Processual
- Exibição dos resultados

---

# Funcionalidades da IA

A IA deverá identificar automaticamente:

- CIDs
- Diagnósticos
- Datas importantes
- Exames citados
- Benefícios previdenciários
- CAT
- Doenças pré-existentes
- Informações conflitantes
- Informações ausentes

---

# Índice de Complexidade Processual (ICP)

Cada inconsistência recebe um peso.

| Inconsistência                 | Peso |
| ------------------------------ | ---: |
| Documento sem data             |    2 |
| CAT ausente                    |    3 |
| CID sem comprovação documental |    4 |
| Benefício incompatível         |    3 |
| Datas conflitantes             |    2 |
| Exame ausente                  |    4 |
| Informação contraditória       |    3 |

O score é calculado pela soma dos pesos.

### Classificação

| Pontuação | Classificação |
| --------- | ------------- |
| 0 - 3     | 🟢 Baixa      |
| 4 - 7     | 🟡 Média      |
| 8+        | 🔴 Alta       |

---

# Estrutura do projeto

```
jusrank
│
├── backend
│   ├── src
│   │   ├── controllers
│   │   ├── services
│   │   ├── routes
│   │   ├── prompts
│   │   ├── utils
│   │   └── app.js
│   │
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   ├── hooks
│   │   ├── assets
│   │   └── App.jsx
│   │
│   └── vite.config.js
│
└── README.md
```

---

# Fluxo de funcionamento

1. O usuário cola o texto da petição.
2. O frontend envia o conteúdo para o backend.
3. O backend monta um prompt estruturado.
4. A OpenAI analisa o documento.
5. A IA retorna um JSON padronizado.
6. O backend calcula o ICP.
7. O frontend apresenta:
   - resumo do processo;
   - inconsistências;
   - documentos ausentes;
   - classificação de complexidade.

---

# Exemplo de resposta

```json
{
  "cids": ["M75.1", "G56.0"],
  "diagnostics": ["Lesão do manguito rotador", "Síndrome do túnel do carpo"],
  "importantDates": [
    "Data de admissão: 10/03/2022",
    "Data do afastamento: 15/08/2024"
  ],
  "missingDocs": ["CAT", "Exame de ressonância magnética do punho"],
  "complexityScore": 78,
  "complexityLevel": "Alta",
  "inconsistencies": [
    {
      "type": "Exame sem data",
      "description": "Ressonância magnética apresentada sem identificação da data de realização.",
      "severity": "Média",
      "weight": 10
    },
    {
      "type": "CID sem comprovação documental",
      "description": "CID G56.0 informado no processo sem exame médico correspondente que comprove o diagnóstico.",
      "severity": "Alta",
      "weight": 19
    }
  ],
  "summary": "O processo apresenta alta complexidade devido à necessidade de perícia médica, ausência de documentos essenciais e inconsistências relacionadas aos diagnósticos apresentados."
}
```

---

# Interface

O MVP será composto por uma única página.

Ela conterá:

- Campo para inserir a petição
- Botão de análise
- Loading durante o processamento
- Cards com o resultado
- Índice de Complexidade Processual
- Lista de inconsistências
- Lista de documentos ausentes

---

# Limitações

Este projeto representa um MVP e possui algumas limitações intencionais:

- não realiza OCR;
- recebe apenas texto (não PDFs);
- não possui autenticação;
- não armazena histórico das análises;
- não substitui a avaliação médica ou jurídica.

A IA atua apenas como ferramenta de apoio para triagem documental.

---

# Evoluções futuras

- Upload de múltiplos PDFs
- Integração com OCR
- Histórico das análises
- Dashboard de processos
- Exportação em PDF
- Banco de dados
- Autenticação de usuários
- Motor de regras independente da IA
- Análise de múltiplos documentos simultaneamente
- Ajuste dos pesos do ICP com base em dados reais

---

# Objetivo acadêmico

Este projeto foi desenvolvido exclusivamente para demonstrar uma proposta técnica para o desafio da Residência em Tecnologia da JusMed Tech.

O foco da solução é apresentar como modelos de linguagem podem ser utilizados para organizar informações, identificar inconsistências documentais e apoiar a priorização da análise humana, sem substituir a decisão dos especialistas.