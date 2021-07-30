# PokéSales - Loja com Next.js
![Prototipo da pagina principal](https://i.imgur.com/q7GkgMV.png)

Pokésales foi um desafio proposto para contratação com o propósito de avaliar os conhecimentos técnicos necessários para o desenvolvimento de um e-commerce. Neste projeto foi proposto a utilização de Reactjs e Nextjs juntamente à duas API's para a renderização front-end.
Se você quiser ver o projeto em Figma, [acesse o link](https://www.figma.com/file/DzOqQyiyHlAw0iHnWViAPs/Untitled?node-id=0%3A1)

## API's

IP-LOCATION: http://ip-api.com/json/
POKE-API: https://pokeapi.co/api/v2

Revisando a situação das API's, não foi possível encontrar valores de custo para os itens da loja, e por, foi criada uma função utilizando a quantidade de letras do 'name' de cada item.
Foi possível realizar algumas filtragens do conteúdo utilizando paths disponibilizados nas documentações.

## Protótipo
![Design components](https://i.imgur.com/OSLlNpk.png)
![Protótipo do modal](https://i.imgur.com/tLlsfo4.png)
Com o croqui do projeto em mãos, um protótipo de UI foi feito considerando as grids do framework-css previsto para a aplicação(Bootstrap). 

## Tecnologias utilizadas
 - Figma
 - Reactjs
 - Nextjs
 - Bootstrap 5.0.2
 - Axios

## Itens disponíveis na aplicação

 - Catálogo de produtos
 - Carrinho de compras
 - Barra de busca
 - Modal de finalização de compra
 - Geolocalização.

## Como utilizar

 - Com o node.js instalado, clone o projeto
 - Instale as dependências `npm install` ou `yarn add`
 - Caso aconteça algum erro, force a instalação de dependências `npm install -f`
 - Rode o projeto `npm run dev` ou caso use yarn, `yarn dev`
