import React, { useEffect } from 'react';
import './App.css';
import Header from './component/header';
import Cards from './component/Cards';
import Menu from './component/Menu';

function App() {
  useEffect(() => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []); 

  return (
    <div id='content'>
      <div >
        <Header id="header" />
      </div>
      <div id="menu">
        <Menu/>
      </div>
      <div className='imagem' id='img01'>
        <p>"Eu vim para que tenham vida, e a tenham com abundância. <br />(João 10:10)</p>
      </div>
      <div id="informacoes" className="card"> 
      
  <Cards>
          <h2>Informações</h2><hr /><br />
          {
  <ul> 
    <li>
      <h3><a href="https://grupoapis.ufsc.br/files/2016/12/ProENF-SA_1_Prevencao-ao-uso-de-drogas-1-1.pdf" target='_blank' className="link">Prevenção:</a></h3><br />
      <p>
        Informações sobre medidas preventivas, como identificar sinais precoces de dependência e estratégias para evitar o desenvolvimento de vícios.
      </p>
    </li><br />
    <li>
      <h3><a href="https://www.gruporecanto.com.br/blog/tipos-de-dependencia-quimica-sintomas-e-tratamentos/" target='_blank' className="link">Tipos de Dependências:</a></h3><br />
      <p>
        Diferentes tipos de dependências, como drogas, álcool, tabaco, jogos de azar, entre outros, e seus efeitos sobre o indivíduo e a comunidade.
      </p><br />
    </li>
    <li>
      <h3><a href="https://hospitalsantamonica.com.br/quais-sao-os-tipos-de-tratamento-para-dependentes-quimicos-mais-indicados/" target='_blank' className="link" >Tratamentos:</a></h3><br />
      <p>
        Opções de tratamento disponíveis, como terapia individual, grupos de apoio, programas de desintoxicação e reabilitação, e terapias alternativas.
      </p><br />
    </li>
    <li>
      <h3><a href="https://institutosj.com.br/" target='_blank' className="link">Centros de Apoio:</a></h3><br />
      <p>
        Centros de apoio locais, organizações sem fins lucrativos, clínicas de reabilitação e outras instituições que oferecem suporte para pessoas com vícios.
      </p><br />
    </li>
    <li>
      <h3><a href="https://www.youtube.com/live/GQq8BU9m1nA?si=BxjNrNWVrgizLhr_" target='_blank' className="link">Vídeos:</a></h3><br />
      <p>
       Links de vídeos educacionais, depoimentos de recuperação e palestras sobre o tema que ajudará a compreensão e tratamento de vícios.
      </p><br />
    </li>
    <li>
      <h3><a href="https://www.unodc.org/lpo-brazil/pt/frontpage/2019/04/ods-3--sobre-sade-e-bem-estar---o-objetivo-do-ms-em-abril.html" target='_blank'className="link">ODS 3: Saúde e bem-estar</a></h3><img src="https://www.pordata.pt/Site_Static/img/ods3_Main_PT.svg" alt="img.png" /><br />
      <p>
       Informações sobre as metas da ONU para 2030 que incluem "Saude e Bem-estar". Principalmente a meta <strong>3.5:</strong> <em>"Reforçar a prevenção e o tratamento do abuso de substâncias, incluindo o abuso de drogas entorpecentes e uso nocivo do álcool; "</em>
       
      </p>
    </li>
  </ul>}
        </Cards>
      </div>

      <div className='imagem' id='img02'>
        <p>Conhecereis a verdade e a verdade vos libertará (João 8:32)</p>
      </div>

      <div id="sobre" className="card">
        <Cards>
          <h2>Sobre</h2><hr /><br />

          <img id='dro' src="https://pastoraldasaudecnbb.com.br/wp-content/uploads/2018/07/diga-nao-as-drogas.jpg" alt="img.jpg" />

          {
            <p id='sobrep'>* Este aplicativo foi idealizado com o intuito de ajudar pessoas e famílias que enfrentam problemas com vícios na <strong>comunidade do bairro Areias, em São José, SC</strong><div className="br"></div> Ele tem como objetivo fornecer recursos e apoio para aqueles que lutam contra vícios, oferecendo informações sobre os diferentes tipos de dependências, seus impactos na saúde física e mental, e orientações sobre os recursos disponíveis para auxiliar na recuperação. <br />Esperamos que esse aplicativo possa fazer uma diferença positiva na vida das pessoas e contribuir para a construção de uma comunidade mais saudável e solidária.</p>}
        </Cards>
      </div>

      <div className='imagem' id='img03'>
        
        <p>"O preço da liberdade é a eterna vigilância" <br /> John Philpot Curran (1750-1817)</p>
      </div>

      <div id="contatos" className="card">
        <Cards>
          <h2>Contatos</h2><hr /><br />
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/Google_Contacts_logo.png" alt="img.png" />
          {<><p>Para mais informações entre em contato:</p><br /><ul>
                      <li>Email: ajuda@antidrogas.com.br</li>
                      <li>Telefone: +55 (xx)xxxxxxxxx</li>
                  </ul></>}
        </Cards>
      </div>
    </div>
  );
}

export default App;
