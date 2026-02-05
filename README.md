🐾 Pet Manager Frontend

Aplicação Frontend desenvolvida em React + TypeScript como parte de um processo seletivo, com o objetivo de consumir a API pública de registro de Pets e seus Tutores, conforme especificações do edital.

O projeto foi estruturado como uma SPA (Single Page Application), priorizando arquitetura, organização do código, navegação e preparação para integração com API, respeitando as limitações encontradas durante o desenvolvimento.

🚀 Tecnologias Utilizadas

React

TypeScript

Vite

React Router DOM

Axios

CSS puro (sem frameworks visuais)

▶️ Como Executar o Projeto
npm install
npm run dev


A aplicação estará disponível em:

http://localhost:5173

🔐 Autenticação (Login)

A aplicação possui uma tela de login funcional em modo simulado (mock).

Durante o desenvolvimento, foi identificado que a API pública não disponibiliza credenciais de acesso públicas para o endpoint de autenticação (POST /autenticacao/login), o que inviabiliza a realização de login real em ambiente local.

Diante disso, foi adotada uma estratégia de mock para a tela de login, permitindo:

Demonstração do fluxo de autenticação

Navegação entre telas

Continuidade do desenvolvimento

Avaliação da arquitetura e roteamento da aplicação

📌 A estrutura do código permanece preparada para integração real com a API assim que credenciais válidas estiverem disponíveis.

🐶 Pets

Após o login, o usuário é direcionado para a tela de listagem de Pets.

Funcionalidades implementadas:

Navegação entre telas (Login → Pets)

Estrutura preparada para consumo da API de Pets

Exibição de lista de pets em formato de cards

Tratamento de erros da API

Utilização de dados simulados (mock) quando a API está indisponível

O uso de dados mock foi uma decisão técnica consciente, adotada para garantir visualização da interface e validação do fluxo da aplicação, mesmo diante de falhas externas da API.

🌐 Integração com API

A aplicação está configurada para integração com a API pública conforme documentação oficial, incluindo:

BaseURL centralizada

Instância HTTP com Axios

Estrutura preparada para uso de Bearer Token

Tratamento de respostas e erros

Durante o desenvolvimento, alguns endpoints apresentaram:

Retorno HTTP 401 (Unauthorized) por ausência de credenciais públicas

Retorno HTTP 404 (Not Found) em determinados contextos

Esses comportamentos não indicam falha do Frontend, mas sim limitações do ambiente público da API.

🎨 Interface e UX

O projeto utiliza CSS puro, com foco em:

Organização visual

Uso de cards

Layout simples e funcional

Separação entre lógica e apresentação

A interface foi mantida propositalmente objetiva, priorizando clareza, legibilidade do código e facilidade de evolução futura.

🧪 Testes e Evoluções Futuras

Funcionalidades previstas como evolução do projeto:

Integração completa com autenticação real

CRUD de Pets e Tutores

Tela de detalhes de Pets

Upload de imagens

Paginação e filtros

Testes unitários

Responsividade avançada

Containerização com Docker

🧠 Considerações Finais

Mesmo não contemplando 100% dos requisitos do edital, o projeto apresenta:

Arquitetura organizada

Navegação funcional

Uso consciente de mocks

Preparação para integração real com API

Código limpo, legível e extensível

Todas as decisões técnicas foram tomadas visando qualidade, clareza e escalabilidade, respeitando as limitações externas identificadas durante o desenvolvimento.
