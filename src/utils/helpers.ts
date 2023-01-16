// This is the helpers file to interact with the restorer back end.

const API_RESTORER = 'http://localhost:3000/api/restorer';

const axios = require('axios').default;


import {Article, Menu} from '@/utils/interfaces';

// Get articles
export const getArticles = async () => {
    try {
        // const response = await axios.get(`${API_RESTORER}/articles`);
        // return response.data;

        const response = await axios({
            method: 'get',
            url: `${API_RESTORER}/articles`,
        });
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get dishes
const getDishes = async () => {
    try {
        const response = await axios.get(`${API_RESTORER}/articles/dishes`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
}; 

// Get side dishes
const getSideDishes = async () => {
    try {
        const response = await axios.get(`${API_RESTORER}/articles/side-dishes`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get drinks
const getDrinks = async () => {
    try {
        const response = await axios.get(`${API_RESTORER}/articles/drinks`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get sauce
const getSauces = async () => {
    try {
        const response = await axios.get(`${API_RESTORER}/articles/sauces`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Get menus
const getMenus = async () => {
    try {
        const response = await axios.get(`${API_RESTORER}/menus`);
        return response.data;
      } catch (error) {
        console.error(error);
    }
};

// Post article
export const postArticle = async (article: Article) => {
    console.log(article.price);

    try {
        const response = await axios({
            method: 'post',
            url: `${API_RESTORER}/articles`,
            data: {
              name: article.name,
              type: article.type,
              quantity: article.quantity,
              price: article.price
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.log(error);
    }

};

// Post menu
const postMenu = async (name: string, articles: Article[], price: number) => {
    axios({
        method: 'post',
        url: `${API_RESTORER}/menus`,
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
export const deleteArticle = async (id: any) => {

    try {
        const response = await axios({
            method: 'delete',
            url: `${API_RESTORER}/articles/${id}`,
        });
        console.log(response.status);
    } catch (error) {
        console.log(error);
    }

};

// Delete menu

// The other microservices calls

// export const helpers = {
//     getArticles,
//     getDishes,
//     getSideDishes,
//     getDrinks,
//     getSauces,
//     getMenus,
//     postArticle,
//     postMenu
// };








////////////////////////////////////////////////////////////////////////////////////
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


  