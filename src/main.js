import GeraCPF from './modules/GeraCPF';
import './assets/css/style.css';

(function() {  // ->função autoexecutável
    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.cpf-gerado');
    cpfGerado.innerHTML = gera.geraNovoCpf();
})();