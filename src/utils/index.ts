// Helpers - axios 


const axios = require('axios').default;


// Get articles
const getArticles = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/articles');
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get dishes
const getDishes = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/articles/dishes');
        return response.data;
      } catch (error) {
        console.error(error);
    }
}; 

// Get side dishes
const getSideDishes = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/articles/side-dishes');
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get drinks
const getDrinks = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/articles/drinks');
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get sauce
const getSauces = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/articles/sauces');
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get menus
const getMenus = async () => {
    try {
        const response = await axios.get('https://localhost:3455/restorer/menus');
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Post article
const postArticle = async (name: string, type: string, quantity: number, price: number) => {
    console.log(price);
    axios({
        method: 'post',
        url: 'https://localhost:3455/restorer/menus',
        data: {
          name,
          type,
          quantity,
          price
        }
    })
    .then( (response: any) => response.status)
    .catch((error: any) => {
        console.log(error);
    });
};

// Post menu
interface Article {
    name: string,
    type: string,
    quantity: number,
    price: number
}

interface Menu {
    name: string,
    articles: Article[],
    price: number
}

const postMenu = async (name: string, articles: Article[], price: number) => {
    axios({
        method: 'post',
        url: 'https://localhost:3455/restorer/menus',
        data: {
          name,
          articles,
        }
    })
    .then( (response: any) => response.data)
    .catch((error: any) => {
        console.log(error);
    });
};

// Update article
// Update menu

// Delete article
// Delete menu

// The other microservices calls

export default {
    getArticles,
    getDishes,
    getSideDishes,
    getDrinks,
    getSauces,
    getMenus,
    postArticle,
    postMenu
}









// Exemple d'Envoi d’une requête POST.
axios({
    method: 'post',
    url: '/user/12345',
    data: {
      firstName: 'Fred',
      lastName: 'Pierrafeu'
    }
});

// Exemple d'envoi d'une requête GET.
axios.get('/user/12345')
  .then(function (response: any) {
    console.log(response.data);
    console.log(response.status);
    console.log(response.statusText);
    console.log(response.headers);
    console.log(response.config);
  }
);

const response_schema = {
    // `data` est le contenu de la réponse renvoyée par le serveur.
    data: {},
  
    // `status` est le code HTTP de la réponse.
    status: 200,
  
    // `statusText` est le message de statut HTTP de la réponse.
    statusText: 'OK',
  
    // `headers` sont les headers HTTP associés à la réponse.
    // Tous les noms de headers sont en minuscules et peuvent être récupérés en
    // utilisant les crochets.
    // Par exemple : `response.headers['content-type']`.
    headers: {},
  
    // `config` est la configuration de requête qui a été fournie à Axios.
    config: {},
  
    // `request` est la requête qui a engendré cette réponse.
    // Il s’agit de la dernière instance de ClientRequest avec node.js (il peut y
    // avoir des redirections) et d’une instance de XMLHttpRequest avec le
    // navigateur.
    request: {}
};


  