# O que é a dCasa?
A dCasa é uma marca fictícia de delivery, cujo objetivo é promover o comércio local dos estados do nordeste brasileiro. Essa empresa foi idealizada para ser um meio de aprimoramento das minhas habilidades como desenvolvedor e solucionador de problemas.

# Como você pode instalar os arquivos do Projeto?

### Siga o passo a passo:

#### no terminal, clone o projeto para um diretório de sua preferência com o comando: ` git clone https://github.com/MateusCastroDiniz/dCasa.git`
#### ao fim do download, dentro da pasta raiz do projeto, rode o comando `npm install` com seu terminal.
#### Após, finalizada, a instalação rode o comando `gulp` ainda no seu terminal.

## Ao término dos passos acima todas as dependências estarão prontas para serem utilizadas.

### Também é possível visualizar o projeto vi GithubPages com esse <a href="https://mateuscastrodiniz.github.io/dCasa/dist/landing-page.html">link</a>.

## Estrutura do Projeto

~~~html
.
├── dist
│   ├── assets
│   │   ├── css
│   │   │   └── libs.min.css
│   │   ├── img
│   │   └── vetores
│   ├── js
│   │   └── libs.min.js   
│   ├── cadastro-form.html
│   ├── cardapio.html
│   ├── contato.html
│   ├── duvidas-frequentes.html
│   ├── index.html
│   └── landing-page.html 
├── lib
│   ├── jquery.js
│   ├── jquery.mask.js
│   └── owl
├── scss
│   ├── _card.scss
│   ├── _carrossel.scss
│   ├── form.scss
│   ├── index.scss
│   ├── style.scss
│   └── _vars.scss
├── src
│    ├── assets
│    │   ├── css
│    │   │   ├── form.css
│    │   │   ├── index.css
│    │   │   └── style.css
│    │   ├── img
│    │   └── vetores
│    ├── cadastro-form.html
│    ├── cardapio.html
│    ├── contato.html
│    ├── duvidas-frequentes.html
│    ├── index.html
│    ├── landing-page.html
│    └── js
│        ├── contact.js
│        ├── form-script.js
│        ├── getLocation.js
│        ├── index.js
│        ├── landingpage-scripts.js
│        ├── menu-script.js
│        └── notifications.js
├── package.json
├── package-lock.json
├── README.md
└── gulpfile.js

~~~