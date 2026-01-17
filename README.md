# Gerador de Galeria HTML

## Visão geral

Este projeto consiste em um script Python simples e objetivo, responsável por gerar automaticamente um arquivo HTML contendo uma galeria de imagens. O script percorre uma pasta de imagens, remove duplicatas e cria a marcação HTML necessária para exibir todas as imagens encontradas.

O resultado final é um arquivo `gallery.html` pronto para ser utilizado em projetos web.

## Estrutura do projeto

A estrutura esperada do projeto é a seguinte:

```
project/
├── assets/
│   ├── imagem1.jpg
│   ├── imagem2.png
│   └── ...
├── generate_gallery.py
└── gallery.html
```

A pasta `assets` deve conter todas as imagens que farão parte da galeria.

## Funcionamento do script

O script executa as seguintes etapas:

1. Define a pasta de origem das imagens como `assets`.
2. Define o nome do arquivo de saída como `gallery.html`.
3. Filtra apenas arquivos de imagem com extensões válidas.
4. Remove arquivos duplicados utilizando um conjunto (`set`).
5. Ordena os nomes dos arquivos em ordem alfabética.
6. Gera automaticamente a estrutura HTML da galeria.

Ao final da execução, o script exibe no terminal a quantidade de imagens processadas.

## Extensões de imagem suportadas

Atualmente, o script reconhece os seguintes formatos:

* .jpg
* .jpeg
* .png
* .gif
* .webp

Arquivos fora desses formatos são ignorados automaticamente.

## Estrutura HTML gerada

O arquivo `gallery.html` gerado contém a seguinte estrutura base:

```
<main class="gallery">
  <img src="assets/imagem1.jpg" alt="" />
  <img src="assets/imagem2.png" alt="" />
</main>
```

A classe `gallery` pode ser utilizada para estilização via CSS conforme a necessidade do projeto.

## Como usar

1. Certifique-se de ter o Python instalado.
2. Crie uma pasta chamada `assets` no mesmo diretório do script.
3. Adicione as imagens desejadas dentro da pasta `assets`.
4. Execute o script com o comando:

```
python script.py
```

5. O arquivo `gallery.html` será gerado automaticamente.

## Personalização

É possível adaptar facilmente o script para:

* Alterar a pasta de origem das imagens.
* Modificar o nome do arquivo HTML gerado.
* Adicionar atributos extras às tags `img`.
* Integrar o HTML gerado a frameworks ou templates existentes.

## Observações

O script não cria subpastas nem processa diretórios recursivamente. Apenas os arquivos presentes diretamente na pasta `assets` são considerados.

Este projeto foi desenvolvido com foco em simplicidade, clareza e reutilização em ambientes de desenvolvimento frontend.
