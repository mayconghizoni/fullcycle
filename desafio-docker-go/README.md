# Desafio proposto

Esse desafio é muito empolgante principalmente se você nunca trabalhou com a linguagem Go!
Você terá que publicar uma imagem no docker hub. Quando executarmos:
```
docker run <seu-user>/fullcycle
```
Temos que ter o seguinte resultado: Full Cycle Rocks!!
Se você perceber, essa imagem apenas realiza um print da mensagem como resultado final.
Lembrando que a Go Lang possui imagens oficiais prontas, vale a pena consultar o Docker Hub.
A imagem de nosso projeto Go precisa ter menos de 2MB.

# Fullcycle (GoLang)

Contém os files necessários para build de uma imagem docker que exibe a mensagem "Full Cycle Rocks!!" quando executada.

# Link da imagem no dockerhub

- [DockerHub Go Challenge](https://hub.docker.com/r/mayconghizoni/fullcycle)

# Como realizar a build e execução da imagem

- Acesse o reposítório onde foi feito o clone da aplicação;
- Execute o comando: 
```
docker build -t <image-name> .
```
- Execute o comando para executar a imagem:
```
docker build -t <image-name> .
```