##script para testar as rotas da aplicacao, para executar utilize '$ sh script.sh'


##TESTANDO AS ROTAS GET
echo '\n\nRequesting all heroes'
curl localhost:3000/heroes

echo '\n\nRequesting flash'
curl localhost:3000/heroes/1


##TESTANDO AS ROTAS POST
echo '\n\nRequesting with wrong body'
curl --silent -X POST \
  --data-binary '{"Invalid": "data"}' \
  localhost:3000/heroes

echo '\n\nCreating Batman'
curl --silent -X POST \
  --data-binary '{"name": "Batman", "age": 40, "power": "Strength"}' \
  localhost:3000/heroes  

echo $CREATE
ID=$(echo $CREATE | jq .id)

echo '\n\nRequesting flash'
curl localhost:3000/heroes/$ID