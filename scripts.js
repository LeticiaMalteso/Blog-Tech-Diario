const posts = [
  {
      id: 1,
      title: 'Meta Quest 3S: Óculos de realidade virtual',
      intro: 'Dispositivo é uma versão \'mais básica\' do Quest 3 e tem preços que partem de US$ 299 nos EUA...',
      date: '1/10/2024',
      category: 'tecnologia',
      image: 'assets/photo-post1.jpg',
      views: 123
  },
  {
      id: 2,
      title: 'iServices: Inovação e tecnologia no centro do Chiado',
      intro: 'É a primeira loja dedicada em exclusivo à marca própria da iServices, a iS...',
      date: '2/10/2024',
      category: 'inovação',
      image: 'assets/photo-post2.jpg',
      views: 101
  },
  {
      id: 3,
      title: 'Uso da tecnologia transforma o cenário das empresas em Sorocaba',
      intro: 'Nos últimos anos, a digitalização se tornou um fator crucial para o crescimento das empresas...',
      date: '3/10/2024',
      category: 'negocios',
      image: 'assets/photo-post3.jpg',
      views: 90
  },
  {
      id: 4,
      title: 'MacBook Air com M3 é bom? Veja preço e ficha técnica',
      intro: 'MacBook Air com M3 é um notebook da Apple lançado em março de 2024...',
      date: '4/10/2024',
      category: 'informática',
      image: 'assets/photo-post4.jpg',
      views: 80
  }
];

// posiciona todos os posts na página inicial
function displayPosts(filteredCategory = 'all') {
  const postsContainer = document.getElementById('posts-container');
  postsContainer.innerHTML = '';

  const filteredPosts = posts.filter(post => filteredCategory === 'all' || post.category === filteredCategory);

  filteredPosts.forEach(post => {
      const postCard = document.createElement('div');
      postCard.classList.add('post');

      postCard.innerHTML = `
          <a href="post${post.id}.html">
              <img src="${post.image}" alt="${post.title}">
          </a>
          <h1>${post.title}</h1>
          <p>${post.intro}</p>
          <div class="data">
              <span class="dataTime">${post.date}</span>
              <span class="category"> - ${post.category.charAt(0).toUpperCase() + post.category.slice(1)}</span>
          </div>
      `;

      postsContainer.appendChild(postCard);
  });
}


function filterPosts(category) {
  displayPosts(category);
}


function getViews(postId) { // para o número de visualizações armazenado no LocalStorage
  // tenta buscar as visualizações no LocalStorage
  const views = localStorage.getItem(`views-${postId}`);
  return views ? parseInt(views) : 0;  // Se não houver, começa com 0
}

// acrescenta o número de visualizações no LocalStorage
function incrementViews(postId) {
  let currentViews = getViews(postId);
  currentViews += 1;

  // atualizacao do LocalStorage
  localStorage.setItem(`views-${postId}`, currentViews);

  document.getElementById(`views${postId}`).textContent = currentViews;
}


window.onload = function() {// funcao que carrega o post e incrementa visualizações ao carregar a página
  const urlParams = new URLSearchParams(window.location.search);
  const postId = parseInt(urlParams.get('id'));

  if (postId) {

    incrementViews(postId);// atualiza as visualizações

    
    const views = getViews(postId);// atualiza tb o valor de visualizações exibido no post
    document.getElementById(`views${postId}`).textContent = views;
  }
};

