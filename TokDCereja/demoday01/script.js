// aside 
 
//   sidebar 

let savedRecipes = [];

    function toggleSidebar() {
        let sidebar = document.getElementById('sidebar');
        if (sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
        } else {
            sidebar.style.display = 'none';
        }
    }

    function saveRecipe() {
        let recipeInput = document.getElementById('recipeInput');
        let recipe = recipeInput.value;
        
        if (recipe !== '') {
            savedRecipes.push(recipe);
            
            let savedRecipesDiv = document.getElementById('savedRecipes');
            savedRecipesDiv.innerHTML = '';
            
            savedRecipes.forEach((savedRecipe, index) => {
                let recipeDiv = document.createElement('div');
                recipeDiv.className = 'savedRecipe';
                recipeDiv.textContent = savedRecipe;
                
                let trashIcon = document.createElement('span');
                trashIcon.className = 'trash-icon';
                trashIcon.textContent = ' 🗑️';
                trashIcon.onclick = () => deleteRecipe(index);
                recipeDiv.appendChild(trashIcon);
                
                if (recipeDiv.style.backgroundColor === 'rgb(107, 2, 6)') {
                    trashIcon.classList.add('white');
                } else {
                    trashIcon.classList.add('red');
                }
                
                savedRecipesDiv.appendChild(recipeDiv);
            });
            
            recipeInput.value = '';
        }
    }

    function clearRecipe() {
        savedRecipes = [];
        let savedRecipesDiv = document.getElementById('savedRecipes');
        savedRecipesDiv.innerHTML = '';
    }

    function deleteRecipe(index) {
        savedRecipes.splice(index, 1);
        let savedRecipesDiv = document.getElementById('savedRecipes');
        savedRecipesDiv.innerHTML = '';
        
        savedRecipes.forEach((savedRecipe, index) => {
            let recipeDiv = document.createElement('div');
            recipeDiv.className = 'savedRecipe';
            recipeDiv.textContent = savedRecipe;
            
            let trashIcon = document.createElement('span');
            trashIcon.className = 'trash-icon';
            trashIcon.textContent = ' 🗑️';
            trashIcon.onclick = () => deleteRecipe(index);
            recipeDiv.appendChild(trashIcon);
            
            if (recipeDiv.style.backgroundColor === 'rgb(107, 2, 6)') {
                trashIcon.classList.add('white');
            } else {
                trashIcon.classList.add('red');
            }
            
            savedRecipesDiv.appendChild(recipeDiv);
        });
    }


    function toggleSidebar() {
        let sidebar = document.getElementById('sidebar');
        let hamburger = document.getElementById('hamburger');
        
        if (sidebar.style.display === 'none') {
            sidebar.style.display = 'block';
            hamburger.style.left = '200px'; // Mover o hambúrguer para a direita
        } else {
            sidebar.style.display = 'none';
            hamburger.style.left = '0'; // Mover o hambúrguer de volta para a posição inicial
        }
    }
    

    
// final aside 




// tabela 

document.getElementById('adicionar').addEventListener('click', function () {
    var table = document.getElementById('tabela-2').getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.rows.length);
    var newCell = newRow.insertCell(0);
    newCell.innerHTML = '<input id="tamanhoIp" type="text" placeholder="Ingrediente">';
    newCell = newRow.insertCell(1);
    newCell.innerHTML = '<input id="tamanhoIp" type="text" placeholder="Quantidade"> <select><option value="unidade">-</option><option value="unidade">Und</option>';
    newCell = newRow.insertCell(2);
    newCell.innerHTML = '<input id="tamanhoIp" type="text" placeholder="Medida"> <select><option value="unidade">-</option><option value="gramas">G-(Grama(s))</option><option value="Litro">L-(litro(s))</option></select>';
    newCell = newRow.insertCell(3);
    newCell.innerHTML = '<input id="tamanhoIp" type="number" placeholder="Preço">';
    newCell = newRow.insertCell(4);
    newCell.innerHTML = '<button class="removerBtn">Remover</button>';
  });
  
  document.getElementById('tabela-2').addEventListener('input', function () {
    var sum = 0;
    var rows = document.getElementById('tabela-2').getElementsByTagName('tbody')[0].getElementsByTagName('tr');
    for (var i = 0; i < rows.length; i++) {
        var cells = rows[i].getElementsByTagName('td');
        var preco = cells[3].getElementsByTagName('input')[0].value;
        var quantidade = cells[1].getElementsByTagName('input')[0].value;
        var medida = cells[1].getElementsByTagName('select')[0].value;
        if (quantidade && preco) {
            if (medida === "unidade") {
                sum += parseFloat(preco) * parseInt(quantidade);
            } else {
                sum += parseFloat(preco);
            }
        }
    }
    document.getElementById('total').textContent = sum.toFixed(2);
  });
  
  document.getElementById('tabela-2').addEventListener('click', function (e) {
    if (e.target.classList.contains('removerBtn')) {
        var row = e.target.parentNode.parentNode;
        var preco = row.getElementsByTagName("td")[3].getElementsByTagName('input')[0].value;
        var quantidade = row.getElementsByTagName("td")[1].getElementsByTagName('input')[0].value;
        var medida = row.getElementsByTagName("td")[1].getElementsByTagName('select')[0].value;
        var subtotal = 0;
  
        if (medida === "unidade") {
            subtotal = parseFloat(preco) * parseInt(quantidade);
        } else {
            subtotal = parseFloat(preco);
        }
  
        var total = parseFloat(document.getElementById('total').textContent);
        if (quantidade && preco) {
            document.getElementById('total').textContent = (total - subtotal).toFixed(2);
        }
  
        var tbody = document.getElementById('corpoTabela');
        tbody.removeChild(row);
  
        if (tbody.children.length === 0) {
            document.querySelector('.corpo').remove();
        }
    }
  });
  
  
  document.getElementById('remover').addEventListener('click', function () {
    var table = document.getElementById('tabela-2').getElementsByTagName('tbody')[0];
    while (table.rows.length > 0) {
        table.deleteRow(0);
    }
    document.getElementById('total').textContent = '0.00';
  });
  
  // texto editável
  // Função para permitir a edição do texto ao clicar no elemento
  document.getElementById('textoEditavel').addEventListener('click', function() {
    this.readOnly = false;
    this.focus();
  });
  
  // Função para desabilitar a edição do texto ao sair do elemento
  document.getElementById('textoEditavel').addEventListener('blur', function() {
    this.readOnly = true;
  });
  
  
//  final tabela 



// função que modifica o texto e a tabela 
function saveRecipe() {
    let recipeInput = document.getElementById('recipeInput');
    let recipe = recipeInput.value;
    
    if (recipe !== '') {
        savedRecipes.push(recipe);
        
        // Atualizar o campo de texto editável com o nome da receita
        let textoEditavel = document.getElementById('textoEditavel');
        textoEditavel.value = recipe;
        
        let savedRecipesDiv = document.getElementById('savedRecipes');
        savedRecipesDiv.innerHTML = '';
        
        savedRecipes.forEach((savedRecipe, index) => {
            let recipeDiv = document.createElement('div');
            recipeDiv.className = 'savedRecipe';
            recipeDiv.textContent = savedRecipe;
            
            let trashIcon = document.createElement('span');
            trashIcon.className = 'trash-icon';
            trashIcon.textContent = ' 🗑️';
            trashIcon.onclick = () => deleteRecipe(index);
            recipeDiv.appendChild(trashIcon);
            
            if (recipeDiv.style.backgroundColor === 'rgb(107, 2, 6)') {
                trashIcon.classList.add('white');
            } else {
                trashIcon.classList.add('red');
            }
            
            savedRecipesDiv.appendChild(recipeDiv);
        });
        
        recipeInput.value = '';
    }
}
