Iniciando projetos no gitHub
git config --global user.name "patriciafraga"
git config --global user.email "patricia.f.fraga@gmail.com"
git init //cria repositório vazio
git status //status do repositório
git add . //adiciona tudo que há na pasta 
git commit -m"versãoTal" // cria o commit
git remote add origin https://github.com/patriciafraga/locadora.git //....caminho da pasta no gitHub - altera o endereço do repositório
git push origin main //upload do código para o repositório online
git branch "nome" //criar nova branch
git branch --list //listar as branches e ver qual está selecionada
git checkout "nomedaNovaBranch" //ir para a nova branch
git branch -d "nomedaNovaBranch" //deleta a branch - só consegui dando checkout para main de volta
git clone endereço/do/repositório //copiar repositório
git pull origin main //verificação das versões e atualização do código