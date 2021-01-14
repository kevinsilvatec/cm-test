# CM Teste

API criada para teste na CM Tecnologia

# Dependencias

- Axios: Foi utilizado para fazer a requisição no _quotes.toscrape.com_. É um cliente HTTP amplamente utilizado;
- Cheerio: O cheerio também foi utilizado no webscraping. Ele funciona (a grosso modo), como uma implementação do saudoso jquery do lado do servidor. Procurar elementos na DOM se torna assim, muito mais intuitivo;
- Express: Foi utilizado para receber e tratar as requisições e respostas da API;

# Dependencias de Desenvolvimento

- Nodemon: Foi utilizado para reinicializar o server sempre que houvesse um novo salvamento. Auxilia bastante no momento de desenvolvimento;

# Endpoints

A aplicação tem 3 rotas acessíveis: _/_ e _/singleDigit_ e _saveQuotes_

## /
- Método: GET;
- Função: Teste da API;
- Request's body: -
- Retorno: 

		{
			"message": "This API is working!"
		}

## /singleDigit
- Método: POST;
- Função: Essa rota recebe uma string (que deve ser um inteiro) e um inteiro. Ela se propõe a resolver o que está descrito no primeiro desafio do teste;
- Body Request: 

		{
			"n": "5",

			"k": 1987
		}

- Retorno - Sucesso: Em caso de sucesso o _status code_  da requisição será 200 e o corpo será o seguinte 

		{
			"singleDigit": 1
		}

- Retorno - Erro: Em caso de erro o _status code_  da requisição será 500 e o corpo será o seguinte 

		{
			"message": "string"
		}

## /saveQuotes
- Método: GET;
- Função: Essa rota se propõe a resolver o que está descrito no segundo desafio do teste, fazer o webscraping da url _quotes.toscrape.com_ e salvar o resultado num arquivo _.json_. Após a execução com sucesso, o arquivo é salvo em _./temp/quotes.json_;
- Body Request: -

- Retorno - Sucesso: Em caso de sucesso o _status code_  da requisição será 200 e o corpo será o seguinte 

		{
			"message": "File ./temp/quotes.json saved with success!"
		}

- Retorno - Erro: Em caso de erro o _status code_  da requisição será 500 e o corpo será o seguinte 

		{
			"message": "string"
		}

# Linha de raciocínio para o desafio 1
O desafio de único dígito foi um exercício bacana de fazer. Eu tentei usar uma arquitetura mais limpa e, mesmo sendo um desafio relativamente simples, gosto sempre de "pulverizar" o código em mais arquivos para que uma manutenção futura seja mais favorável. Sem mais, à explicação...

Utilizei o método _calc_ localizado no arquivo _./src/controller/digitController.js_
para fazer o controle da requisição e resposta da aplicação. Esse método basicamente faz o trabalho de chamar os métodos de validação e o método que faz a "regra de negócio" de fato. No método _singleDigit_ localizado no arquivo _./src/models/digitModel.js_ os número são recebidos (já validados anteriormente no controller) e trabalhados para que se chegue ao único dígito. O método _singleDigit_ tem basicamente um laço _do while_ que chama o método _reduceP_ (implementado no arquivo _./src/helpers/digitHelper.js_) enquanto o valor _p_ possuir duas posições. A condição do while funciona como a condição de parada para que o valor _p_ seja retornado ao controller que o exibe como uma resposta da API.

# Linha de raciocínio para o desafio 2
O desafio 2 também foi interessante. Eu já havia feito algumas aplicações de webscraping, então a experiência passada foi bastante auxiliar para a criação. Novamente aqui, fiz a "pulverização" do código em mais arquivos para facilitar manutenção e novas implementações. Aqui novamente há um controller (_./src/scrapingController.js_) que faz a tratativa de requisição e resposta da aplicação. Após isso, a aplicação utiliza o axios para buscar o conteúdo da página e o cheerio para a navegação. Utilizo um laço each para iterar sobre o DOM da página e novamente o cheerio para localizar as classes CSS corretas. Adiciono cada "parte" em uma variável e cada variável a um objeto que é adicionado num array que concentra toda a massa de dados capturada. Depois, o método _storeScrapingFs_ localizado no arquivo _./src/models/scrapingModel.js_ tem a responsabilidade de salvar o arquivo na pasta _./temp_ como o nome _quotes.json_ e retornar a informação de que o arquivo foi salvo ou não. O controller recebe a resposta do método e retorna uma mensagem informando que o arquivo foi criado.

# Rodando a aplicação
 Para rodar a aplicação basta clonar este repositório, entrar na raiz do projeto por meio de um CLI (poweshel, cmd, git bash) e executar o comando _yarn install_. Após a instalação das dependências basta rodar o comando _yarn dev_. Para fazer os testes será necessário utilizar o postman ou o insomnia.

 # Considerações
 - 0. No teste não foi pedida a construção de uma API, mas achei que dessa forma ficaria mais fácil pra que qualquer pessoa testasse. Transformar o código em apenas funções é possível e estou 100% disponível para fazer essa alteração caso a exijam;
 - 1. Eu tenho por prática (já de algum tempo pra cá, por volta de um ano), escrever todo o meu código em inglês. É uma forma que achei de treinar e também me acostumei desde que trabalhei na Mundiale. Sei que no teste tinha o nome da função _digitoUnico_ já definida, mas adaptei à forma com a qual estou habituado, espero que tanto isso quanto a questão da API não sejam circunstâncias penalizantes para a minha avaliação no teste;
 - 2. Eu gostei MUITO do desafio de vocês. Já fico agradecido pela participação, independente do resultado da avaliação!
 - 3. MUITO OBRIGADO! 