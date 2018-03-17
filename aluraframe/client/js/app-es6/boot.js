import {NegociacaoController} from './controllers/NegociacaoController';
import {} from './pollyfill/fetch';

let negociacaoController = new NegociacaoController();
document.querySelector('.form').onsubmmit = negociacaoController.adiciona.bind(negociacaoController);
document.querySelector('[type=button]').onclick = negociacaoController.apaga.bind(negociacaoController);