# Usa a imagem Node oficial como imagem base
FROM node:14

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia o package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o restante do código da aplicação para o diretório de trabalho
COPY . .

# Compila a aplicação
RUN npm run build

# Exponha a porta que o NestJS usará
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["npm", "run", "start:prod"]
