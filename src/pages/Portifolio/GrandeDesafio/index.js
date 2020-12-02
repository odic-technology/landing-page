import React from 'react'

import './webStyle.css'

import OdicHeader from '../../../components/Header/OdicHeader'
import SquareColor from '../../../components/SquareColor'
import PortfolioFont from '../../../components/PortfolioFont'
import PortfolioFooter from '../../../components/PortfolioFooter/index'

import CcesIcon from '../../../assets/portfolio/grandeDesafio/ccesIcon.svg'
import MuseuIcon from '../../../assets/portfolio/grandeDesafio/museuIcon.svg'
import FirstIdea from '../../../assets/portfolio/grandeDesafio/firstIdeaMuseu.svg'
import ZeroVersion1 from '../../../assets/portfolio/grandeDesafio/versionZero1.png'
import ZeroVersion2 from '../../../assets/portfolio/grandeDesafio/versionZero2.png'
import ZeroVersion3 from '../../../assets/portfolio/grandeDesafio/versionZero3.png'
import ZeroVersion4 from '../../../assets/portfolio/grandeDesafio/versionZero4.png'
import ZeroVersion5 from '../../../assets/portfolio/grandeDesafio/versionZero5.png'
import ZeroVersion6 from '../../../assets/portfolio/grandeDesafio/versionZero6.png'
import ZeroVersion7 from '../../../assets/portfolio/grandeDesafio/versionZero7.png'
import ZeroVersion8 from '../../../assets/portfolio/grandeDesafio/versionZero8.png'
import ZeroVersion9 from '../../../assets/portfolio/grandeDesafio/versionZero9.png'
import ZeroVersion10 from '../../../assets/portfolio/grandeDesafio/versionZero10.png'
import Introduction1 from '../../../assets/portfolio/grandeDesafio/introduction1.png'
import Introduction2 from '../../../assets/portfolio/grandeDesafio/introduction2.png'
import Introduction3 from '../../../assets/portfolio/grandeDesafio/introduction3.png'
import ParticipantCode1 from '../../../assets/portfolio/grandeDesafio/participantCode1.png'
import ParticipantCode2 from '../../../assets/portfolio/grandeDesafio/participantCode2.png'
import HomeScreen1 from '../../../assets/portfolio/grandeDesafio/homeScreen1.png'
import HomeScreen2 from '../../../assets/portfolio/grandeDesafio/homeScreen2.png'
import FlowCapture1 from '../../../assets/portfolio/grandeDesafio/flowCapture1.png'
import FlowCapture2 from '../../../assets/portfolio/grandeDesafio/flowCapture2.png'
import FlowCapture3 from '../../../assets/portfolio/grandeDesafio/flowCapture3.png'
import FlowCapture4 from '../../../assets/portfolio/grandeDesafio/flowCapture4.png'
import Rank1 from '../../../assets/portfolio/grandeDesafio/rank1.png'
import Rank2 from '../../../assets/portfolio/grandeDesafio/rank2.png'
import Entities from '../../../assets/portfolio/grandeDesafio/entities.png'

export default function Web () {
  return (
    <div className='portfolioMuseu'>
      <OdicHeader hasBackButton hasBackButtonMobile title='Grande Desafio 2020' pageSelected='Portfólio' />
      <div className='about'>
        <text>O Grande Desafio é um projeto realizado anualmente pelo Museu Exploratório de Ciências da UNICAMP em parceria com o grupo CCES (Center for Computing in Engineering & Sciences), sendo o principal objetivo dele incentivar o público, principalmente estudantil, a aplicar de forma prática os conhecimentos adquiridos no dia-a-dia e valorizar as relações sociais. Para a versão do Grande Desafio deste ano, 2020, um dos professores de Instituto de Química da UNICAMP, membro do CCES, estaria participando da realização do projeto e teve a ideia de criar um aplicativo mobile e nós nos oferecemos para ajudar!</text>
        <div className='icons flexAlignDirection'>
          <img src={CcesIcon} alt='CcesIcon' />
          <img src={MuseuIcon} alt='MuseuIcon' />
        </div>
      </div>
      <div className='goals textBorderBottom'>
        <text className='textTitle'>Objetivos</text>
        <text>O professor queria um aplicativo que fosse capaz de tirar fotos, fornecer coordenadas, agrupar pessoas em equipes e montar um sistema de pontuação e Ranking dessas equipes.</text>
        <text>A ideia dele era que estas equipes pudessem tirar fotos dos lixos espalhados pela cidade de Campinas e fornecer a localização deles para fazer um compilado, entrar em contato com a Prefeitura da cidade e melhorar o sistema de coleta de lixo.</text>
      </div>
      <div className='firstIdea textBorderBottom flexAlignDirection'>
        <text className='textTitle'>Primeira Ideia</text>
        <text>Quando abordamos o professor para conversar, essa era a primeira ideia que ele tinha em mente sobre o aplicativo: simples, rápido e funcional.</text>
        <img src={FirstIdea} alt='First Idea' />
        <text>No início, o Design do aplicativo e a experiência dos usuários não parecia algo tão importante para ele, e sim a funcionalidade. </text>
      </div>
      <div className='development textBorderBottom'>
        <text className='textTitle'>Desenvolvimento</text>
        <text>Nesta projeto, nós decidimos nos separar em 3 frentes: dois integrantes ficariam responsáveis pela parte de UX/UI Design, outros dois  por toda a parte de programação e o último seria o que chamamos de “Coringa”, que ajudaria no que fosse necessário entre as duas áreas e ficaria responsável em, junto com todo o apoio dos outros integrantes, manter o contato com o professor.
        Sobre as reuniões de acompanhamento, acertamos com o professor de que faríamos reuniões quinzenais para mostrar com mais detalhes o que havíamos desenvolvido e que mandaríamos e-mails semanais de acompanhamento.
        </text>
      </div>
      <div className='versionZero textBorderBottom flexAlignDirection'>
        <text className='textTitle'>Versão “zero”</text>
        <text>Nós demos este nome para esssa versão porque nós a fizemos no mesmo dia que havíamos fechado o projeto com o professor. A ideia era que fizéssemos um esboço de algo bem semelhante ao que o professor havia proposto; não tínhamos intenção de copiar o que ele havia pensado e desenvolver em cima disso, mas sim de passar por cada etapa que ele havia pensado, verificar se fazia sentido e sugerir maneiras de entregar mais valor para os usuários</text>
        <div className='backgroundPhotos flexAlignDirection'>
          <div>
            <img src={ZeroVersion1} alt='Zero Version 1' />
            <img src={ZeroVersion2} alt='Zero Version 2' />
            <img src={ZeroVersion3} alt='Zero Version 3' />
            <img src={ZeroVersion4} alt='Zero Version 4' />
          </div>
          <div>
            <img src={ZeroVersion5} alt='Zero Version 5' />
            <img src={ZeroVersion6} alt='Zero Version 6' />
            <img src={ZeroVersion7} alt='Zero Version 7' />
            <img src={ZeroVersion8} alt='Zero Version 8' />
          </div>
          <div>
            <img src={ZeroVersion9} alt='Zero Version 9' />
            <img src={ZeroVersion10} alt='Zero Version 10' />
          </div>
        </div>
        <div className='mainColor'>
          <text className='textTitle'>Cor principal:</text>
          <div>
            <div className='palleteColor' />
            <text>#DA2127</text>
          </div>
          <text className='textMainColor'>Escolhemos esta por conta da logomarca do museu </text>
        </div>
        <div className='mainColorFinally'>
          <text>Quando finalizamos a “versão zero”, concordamos em fazer uma reunião com o professor para verificar se estávamos seguindo pelo caminho que ele imaginava.</text>
        </div>
      </div>
      <div className='updateVersion textBorderBottom flexDirection'>
        <text className='textTitle'>Versão “atualizada”</text>
        <text>Depois da reunião com o professor, nós pudemos tirar algumas ideias bem interessantes. Decidimos fazer uma análise de cada tela para verificar se havia algo que pudéssemos melhorar, então começamos a nos perguntar “que tipo de valor nós estamos agragando para as pessoas?” e “como podemos melhorar a experiência dos usuários?”</text>
      </div>
      <div className='colors flexAlignDirection'>
        <text className='textTitle'>Alteração das cores</text>
        <div className='subTitle'>
          <text>O professor sugeriu que utilizássemos a paleta de cores da logomarca do grupo CCES, então criamos diversas tonalidades com algumas das cores.</text>
          <img src={CcesIcon} alt='CCES Icon' />
        </div>
        <div className='divColors'>
          <text>Cores majoritárias</text>
          <div className='squareColors'>
            <SquareColor color='#FFB084' />
            <SquareColor color='#FC9C67' />
            <SquareColor color='#F39D2D' />
            <SquareColor color='#E68B15' />
            <SquareColor color='#CD5E0E' />
            <SquareColor color='#BF4D0D' />
            <SquareColor color='#AB2E06' />
          </div>
        </div>
        <div className='divColors'>
          <text>Cores secundárias</text>
          <div className='squareColors'>
            <SquareColor color='#B5B8B8' />
            <SquareColor color='#9CADAA' />
            <SquareColor color='#6D8492' />
            <SquareColor color='#536F84' />
            <SquareColor color='#3A4C67' />
            <SquareColor color='#283D53' />
            <SquareColor color='#232E56' />
            <SquareColor color='#1A2650' />
            <SquareColor color='#180E42' />
          </div>
        </div>
        <div className='divColors'>
          <text>Cores terciárias</text>
          <div className='squareColors'>
            <SquareColor color='#EBFFB4' />
            <SquareColor color='#D8F895' />
            <SquareColor color='#C7E76C' />
            <SquareColor color='#C4D752' />
            <SquareColor color='#AFC431' />
            <SquareColor color='#AAB81E' />
            <SquareColor color='#AAA417' />
            <SquareColor color='#998312' />
            <SquareColor color='#87640C' />
          </div>
        </div>
      </div>
      <PortfolioFont />
      <div className='theApp'>
        <text className='textTitle'>O aplicativo</text>
        <text>Os principais pontos que gostaríamos de trazer para melhorar a experiência dos usuários eram:</text>
        <text>1. Fazer com que os usuários tivessem um acesso fácil ao objetivo principal do aplicativo: tirar as fotos.</text>
        <text>2. Conseguir convidar outras pessoas para a sua equipe de forma rápida.</text>
        <text>3. Entender a quantidade de capturas e a distribuição das categorias dos lixos encontrados.</text>
        <text>4. Criar um modelo que, ao final de cada captura, fosse fácil ele fazer outra e entender o motivo principal delas.</text>
        <text>5. Estimular o trabalho em equipe.</text>
      </div>
      <div className='introduction'>
        <img src={Introduction1} alt='introduction 1' />
        <img src={Introduction2} alt='introduction 2' />
        <img src={Introduction3} alt='introduction 3' />
        <text className='textTitle'>Introdução</text>
      </div>
      <div className='participantCode'>
        <div className='participantCodeLeft'>
          <img src={ParticipantCode1} alt='Participant Code 1' />
        </div>
        <div className='participantCodeRight'>
          <img src={ParticipantCode2} alt='Participant Code 2' />
          <div className='textBorderBottom'>
            <text className='textTitle'>Código de participante</text>
            <text>Nós propomos ao professor de alterar o sistema de “código do líder” da versão inicial. Nossa ideia era de facilitar o método de formação das equipes fazendo com que os usuários pudessem simplesmente aceitar algum convite ou digitar um código recebido por outro participante.</text>
            <text>Esse modelo, de certa forma, filtrou o uso do aplicativo apenas para as pessoas que possuíssem algum código de participante, o que tornou o aplicativo exclusivo para a competição.</text>
          </div>
        </div>
      </div>
      <div className='homeScreen'>
        <div className='homeScreenContent'>
          <img src={HomeScreen1} alt='Home Screen 1' />
          <img src={HomeScreen2} alt='Home Screen 2' />
          <div className='textBorderBottom'>
            <text className='textTitle'>Tela inicial</text>
            <text>Aqui nós criamos uma tela inicial com algumas características que, em consenso com o professor, julgamos serem mais interessantes para os usuários.</text>
            <text>A ideia era facilitar o acesso ao registro de novas fotos, verificar a performance individual e convidar um outro participante de forma rápida: pressionando apenas um botão.</text>
          </div>
        </div>
      </div>
      <div className='flowCapture'>
        <img src={FlowCapture1} alt='Flow Capture 1' />
        <img src={FlowCapture2} alt='Flow Capture 2' />
        <img src={FlowCapture3} alt='Flow Capture 3' />
        <img src={FlowCapture4} alt='Flow Capture 4' />
        <div className='textBorderBottom'>
          <text className='textTitle'>Fluxo de captura</text>
          <text>Decidimos adicionar um método visual para os usuários estimarem o peso dos lixos encontrados e, ao final, deixar bem claro a contribuição deles para a cidade.</text>
        </div>
      </div>
      <div className='rank'>
        <div className='rankContent'>
          <div className='textBorderBottom'>
            <text className='textTitle'>Classificação</text>
            <text>A primeira tela representa o Ranking individual de cada participante; já, a segunda, o Ranking geral de todas as equipes.</text>
            <text>Uma questão que nos deixou inquetos foi a pontuação. Nós argumentamos com o professor que os usuários poderiam simplesmente tirar fotos aleatórias para somar pontos; entretanto, no futuro ele planeja fazer um sistema mais avançado utilizando Machine Learning, então não seria um ponto crucial no momento.</text>
          </div>
          <img src={Rank1} alt='Rank 1' />
          <img src={Rank2} alt='Rank 2' />
        </div>
      </div>
      <div className='entities'>
        <img src={Entities} alt='Entities' />
        <div className='textBorderBottom'>
          <text className='textTitle'>Entidades</text>
          <text>Por fim, a pedido do professor, desenvolvemos uma maneira de colocar as entidades envolvidas no Desafio para que, caso os usuários tivessem interesse, eles pudessem saber um pouco mais de detalhes de cada um.</text>
        </div>
      </div>
      <div className='results textBorderBottom flexAlignDirection'>
        <text className='textTitle'>Resultados</text>
        <text>Como estamos vivendo nesse período atípico da pandemia do COVID-19, ninguém sabe ao certo quando ocorrerá o desafio deste ano (2020). Entretanto, os resultados até o momento foram muito positivos! O professor gostou bastante do aplicativo e ele atendeu às expectativas propostas no início do projeto :)</text>
        <text>No momento, estamos no processo de colocá-lo nas lojas de aplicativos; quando tivermos mais atualizações, vamos colocando aqui!</text>
      </div>
      <div className='learn textBorderBottom flexAlignDirection'>
        <text className='textTitle'>Aprendizados</text>
        <text>Alguns dos aprendizados mais valiosos que pudemos tirar deste projeto foram:</text>
        <text>1. Trabalhar remotamente. Por conta da pandemia, as reuniões tanto entre a nossa equipe quanto com o professor foram realizadas remotamente, o que aumentou o desafio de desenvolver o aplicativo. Entretanto, nos adaptamos bem e conseguimos finalizar o projeto.</text>
        <text>2. Trabalhar em Sprints. Não digo exatamente o método descrito pelo Jake Knapp, mas sim no que diz respeito ao método ágil de produzir, avaliar e testar com o cliente.</text>
        <text className='learnThankYou'>Obrigado por nos acompanhar até aqui :)</text>
      </div>
      <PortfolioFooter />
    </div>
  )
}
