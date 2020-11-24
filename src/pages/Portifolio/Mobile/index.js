import React from 'react'

import OdicHeader from '../../../components/Header/OdicHeader'
import PortfolioStepDiv from '../../../components/PortfolioStepDiv'
import PortfolioFooter from '../../../components/PortfolioFooter/index'

import MatchfyLogo from '../../../assets/portfolio/matchfy/matchfyLogoRight.svg'
import FirstPost from '../../../assets/portfolio/matchfy/matchfyFirstPost.svg'
import Introduction1 from '../../../assets/portfolio/matchfy/introduction1.svg'
import Introduction2 from '../../../assets/portfolio/matchfy/introduction2.svg'
import Introduction3 from '../../../assets/portfolio/matchfy/introduction3.svg'
import Diversity1 from '../../../assets/portfolio/matchfy/diversity1.svg'
import Diversity2 from '../../../assets/portfolio/matchfy/diversity2.svg'
import Diversity3 from '../../../assets/portfolio/matchfy/diversity3.svg'
import Filter1 from '../../../assets/portfolio/matchfy/filter1.svg'
import Filter2 from '../../../assets/portfolio/matchfy/filter2.svg'
import Filter3 from '../../../assets/portfolio/matchfy/filter3.svg'
import Complaint2 from '../../../assets/portfolio/matchfy/complaint2.svg'
import Match2 from '../../../assets/portfolio/matchfy/match2.svg'
import Arrow2 from '../../../assets/portfolio/matchfy/arrow2.svg'
import Reached from '../../../assets/portfolio/matchfy/reached.svg'
import Chat1 from '../../../assets/portfolio/matchfy/chat1.svg'
import Chat2 from '../../../assets/portfolio/matchfy/chat2.svg'
import Chat3 from '../../../assets/portfolio/matchfy/chat3.svg'
import Chat4 from '../../../assets/portfolio/matchfy/chat4.svg'
import Chat5 from '../../../assets/portfolio/matchfy/chat5.svg'
import HomeScreen2 from '../../../assets/portfolio/matchfy/homeScreen2.svg'
import Perfil2 from '../../../assets/portfolio/matchfy/perfil2.svg'
import Perfil3 from '../../../assets/portfolio/matchfy/perfil3.svg'
import Perfil4 from '../../../assets/portfolio/matchfy/perfil4.svg'
import BugReport2 from '../../../assets/portfolio/matchfy/bugReport2.svg'
import FirstVersion from '../../../assets/portfolio/matchfy/firstVersion.png'
import OnlineStage1 from '../../../assets/portfolio/matchfy/onlineStage1.png'
import OnlineStage2 from '../../../assets/portfolio/matchfy/onlineStage2.png'
import PerfilDescription1 from '../../../assets/portfolio/matchfy/perfilDescription1.svg'
import PerfilDescription2 from '../../../assets/portfolio/matchfy/perfilDescription2.svg'
import Complaint1 from '../../../assets/portfolio/matchfy/complaint1.svg'
import Complaint3 from '../../../assets/portfolio/matchfy/complaint3.svg'
import Complaint5 from '../../../assets/portfolio/matchfy/complaint5.svg'

import './mobileStyle.css'

export default function Mobile () {
  return (
    <div className='portifolioMobile'>
      <OdicHeader hasBackButton hasBackButtonMobile title='Matchfy' pageSelected='Portfólio' />
      <div className='firstProject flexDirection textBorderBottom'>
        <text className='textTitle'>O primeiro projeto que desenvolvemos!</text>
        <text>A ideia do projeto surgiu em meados de setembro de 2019 numa época onde nosso interesse pela tecnologia, empreendedorismo e Design estava crescendo muito. Tínhamos muita vontade de, alguma forma, melhorar a vida das pessoas as quais convivíamos diariamente; foi então que nós vimos uma oportunidade de desenvolver um aplicativo mobile para atingir tal objetivo. Nós tínhamos um desafio enorme pela frente!</text>
        <text>Tudo começou quando nós percebemos que as pessoas da nossa universidade, incluindo nós mesmos, tinham uma rotina muito estressante com as aulas, estudos, trabalhos, etc e queríamos criar uma válvula de escape onde elas pudessem ter um pouco mais de conforto no dia-a-dia. Eu e os meus amigos conversávamos muito sobre o assunto e percebemos que o fato de termos uns aos outros para conversar já trazia um grande conforto e alegrava um pouco o nosso dia, então nós tivemos a ideia de criar um meio pelo qual fosse simples e fácil das pessoas se conhecessem e passassem a interagir mais umas com as outras de diferentes modos, seja para fazer novos amigos ou mesmo para ter um relacionamento amoroso.</text>
      </div>
      <div className='visualIdentity'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Identidade visual</text>
          <text>Rapidamente, a primeira coisa que pensamos foi no nome e na identidade visual que um app desse modelo teria, qual seria o logotipo, a logomarca e a cor majoritária. Nós logo percebemos que um nome envolvendo um “match” especial e único para as pessoas seria envolvente; foi então que surgiu o nome “Matchfy”, ou “match for you”. Sobre as cores, decidimos que o vermelho seria uma ótima escolha, porque é uma cor que chama bastante atenção para o afeto e amor. Além disso, optamos por colocar a cereja como logomarca para dar um tom mais “picante” para o aplicativo, uma vez que as pessoas poderiam utilizá-lo também para encontros amorosos. Como um dos integrantes havia tido um pouco de contato com o Adobe Illustrator, nós fomos discutindo sobre como poderíamos juntar todas as informações para criar uma identidade visual e chegamos ao seguinte resultado:</text>
        </div>
        <div className='matchfyCard flexAlignDirection'>
          <img src={MatchfyLogo} alt='Matchfy Logo' />
          <div className='matchfyColor flexDirection'>
            <div />
            <text>#C23334</text>
          </div>
        </div>
      </div>
      <div className='research'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Pesquisa de interesse</text>
          <text>Depois de criarmos a nossa identidade visual, decidimos que seria interessante nós medirmos o interesse dos alunos da nossa universidade nesse tipo de de projeto. Então, nós criamos uma postagem e publicamos em um grupo de cerca de 50 mil pessoas da universidade; o resultado esperado era que, considerando que muitas pessoas presentes no grupo eram ex-alunas e alunos, cerca de 10% desse público parasse para ler a publicação e que cerca de 10% desses demonstrasse algum tipo de reação, ou seja, 500 pessoas; para nossa surpresa, o resultado foi tivemos 938 pessoas demonstrando reações e 658 comentários. Nós sabíamos que esses parâmetros não demonstrariam se realmente as pessoas usariam o serviço, mas pela nossa pouca experiência decidimos que valeria a pena ir começando aos poucos e ir testando o jeito que as pessoas reagiriam. </text>
          <text>Abaixo encontra-se a nossa primeira postagem juntos com as reações e os comentários:</text>
        </div>
        <div className='flexAlignDirection'>
          <img src={FirstPost} alt='First Post' />
        </div>
        <div className='flexDirection'>
          <text>Além dessa publicação decidimos que seria interessante perguntar, presencialmente, para algumas pessoas sobre as experiências passadas que elas haviam tido com aplicativos de relacionamento. Muitas delas haviam citado que a segurança era uma preocupação importante, além da necessidade de inclusão de outros gêneros e que houvessem mais opções de relacionamento, como “namoro” e “amizade”. Infelizmente, nós não documentamos essas respostas.</text>
          <text>Por fim, levamos todos os argumentos em consideração e começamos a pensar em formas de atender o maior número de pessoas.</text>
        </div>
      </div>
      <text className='textTitle theAppTitle'>O aplicativo</text>
      <div className='introduction'>
        <div className='introductionText flexDirection textBorderBottom'>
          <text className='textTitle'>Introdução </text>
          <text>Nós colocamos uma mensagem introdutória para deixar bem claro os valores que buscávamos passar para as pessoas como diversidade, respeito e segurança.</text>
        </div>
        <img src={Introduction1} alt='Introduction1' />
        <img src={Introduction2} alt='Introduction2' />
        <img src={Introduction3} alt='Introduction3' />
      </div>
      <div className='diversity'>
        <img src={Diversity1} alt='Diversity1' />
        <img src={Diversity2} alt='Diversity2' />
        <img src={Diversity3} alt='Diversity3' />
        <div className='diversityText flexDirection textBorderBottom'>
          <text className='textTitle'>Diversidade </text>
          <text>Como citamos anteriormente, a diversidade foi um ponto crucial no projeto. Além de ser um pedido dos próprios alunos, nós também concordamos que esse ponto seria de suma importância para aumentar o conforto das pessoas. Por fim, como também pedido pelos alunos, decidimos colocar algumas alternativas para a interação que eles estavam interessados; nós também deixamos um ponto para sugestões nos tópicos abordados, porque entendemos que estávamos desenvolvendo um projeto para os usuários.</text>
        </div>
      </div>
      <div className='filters flexAlignDirection'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Filtros</text>
          <text>Na tela principal do aplicativo, colocamos um ícone de “filtros” para que fosse critério dos usuários filtrarem uns aos outros de acordo com as suas preferências, lembrando que seria possível selecionar mais de uma das opções.</text>
        </div>
        <div className='filterImages'>
          <img src={Filter1} alt='Filter1' />
          <img src={Filter2} alt='Filter2' />
          <img src={Filter3} alt='Filter3' />
        </div>
        <text>Um outro ponto interessante é que, como existem diversos campus da universidade, decidimos deixar explícito no perfil dos usuários em qual eles estudam (Barão Geraldo, Limeira, etc). Por fim, por preferência de alguns usuários, optamos também por colocar a idade da pessoa ao lado do nome.</text>
      </div>
      <div className='complaint'>
        <div className='complaintContent flexDirection textBorderBottom'>
          <text className='textTitle'>Denúncia</text>
          <text>Adicionamos um botão acima da foto da pessoa para casos onde seja alguma foto imprópria. Desta forma, o usuário poderia denunciar a pessoa.</text>
        </div>
        <img src={Filter1} alt='Complaint 1' />
        <img src={Complaint2} alt='Complaint 2' />
      </div>
      <PortfolioStepDiv
        color1='#881175'
        color2='#8A0A47'
        text1='Match'
        text2='Caso o usuário clicasse no “coração” apresentado na parte de baixo da tela e a pessoa a qual ele está vendo a foto também houvesse clicado no coração da sua foto apresentada para ela, ocorreria um pareamento entre os dois. A partir daí, o usuário teria a opção de mandar uma mensagem para essa pessoa ou continuar olhando os perfis de outros usuários. Além disso, o “x” em amarelo no canto esquerdo permitiria ao usuário pular a pessoa está vendo na tela.'
        children={
          <>
            <img src={Filter1} alt='Match 1' />
            <img src={Match2} alt='Match 2' />
          </>
        }
      />
      <PortfolioStepDiv
        color1='#0C788C'
        color2='#34A1B6'
        text1='Flecha:'
        text2='Se o usuário estivesse muito interessado na pessoa apresentada para ele, ele poderia clicar  no botão azul e logo essa pessoa seria atingida por uma “flecha” e receberia uma notificação direta.'
        children={
          <>
            <img src={Filter1} alt='Arrow 1' />
            <img src={Arrow2} alt='Arrow 2' />
          </>
        }
      />
      <PortfolioStepDiv
        color1='#9E579D'
        color2='#FC85AE'
        text1='Você foi atingido!'
        text2='Essa tela seria apresentada caso o usuário recebesse uma “flechada” de alguém, ou seja, a pessoa da foto estaria muito interessada em você. Para instigar o usuário a tomar algum tipo de atitude em relação a flecha recebida, tivemos a idéia de remover qualquer outra ação que ele pudesse tomar a não ser aceitar ou recusar uma interação com a pessoa que mandou a “flecha”.'
        children={
          <>
            <img src={Reached} alt='Reached' />
          </>
        }
      />
      <div className='chat'>
        <div className='chatLine'>
          <div className='flexDirection textBorderBottom'>
            <text className='textTitle'>Chat</text>
            <text>Para que as pessoas pudessem interagir mais, adicionamos uma aba de conversas. Nela, o usuário poderia conversar com as pessoas que deu “match”. Na parte de cima da tela, também é possível observar várias fotos de outros usuários; a ideia aqui é, ao dar um scroll horizontal, a pessoa poderia passar para outros usuários que estivesse conversando ao invés de ter que voltar para a tela de “conversas”.</text>
          </div>
          <div className='chatImages'>
            <img src={Chat1} alt='Chat 1' />
            <img src={Chat2} alt='Chat 2' />
          </div>
        </div>
        <div className='chatLine'>
          <div className='chatLineLeft'>
            <text>Caso o usuário se sentisse desconfortável com alguma situação, ele poderia denunciar ou bloquear a pessoa que estivesse conversando.</text>
          </div>
          <div className='chatImages chatLineRight'>
            <img src={Chat3} alt='Chat 3' />
            <img src={Chat4} alt='Chat 4' />
            <img src={Chat5} alt='Chat 5' />
          </div>
        </div>
      </div>
      <div className='homeScreen'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Menu principal</text>
          <text>Para facilitar a localização do usuário pelo aplicativo, colocamos um menu no canto superior esquerdo de, praticamente, todas as telas. Dessa forma, ele poderia navegar de forma rápida pelo aplicativo. Um exemplo está demonstrado abaixo:</text>
        </div>
        <div className=''>
          <img src={Filter1} alt='Homescreen 1' />
          <img src={HomeScreen2} alt='Homescreen 2' />
        </div>
      </div>
      <div className='perfil'>
        <div className='perfilLine'>
          <div>
            <img src={HomeScreen2} alt='Perfil 1' />
            <img src={Perfil2} alt='Perfil 2' />
          </div>
          <div className='flexDirection textBorderBottom'>
            <text className='textTitle'>Perfil</text>
            <text>Aqui nós tentamos organizar as informações do usuário em relação ao campus da universidade, o seu gênero e sexualidade e, por fim, a sua intenção com os demais usuários. Algumas dessas informações serviriam para os demais usuários te encontrarem na hora de utilizarem o “filtro” na tela principal. Apesar disso, a única informação que realmente estaria visível para os demais usuários seria a do campus em que você estuda, porque ao conversar com algumas pessoas nós percebemos que muitas delas se sentiriam inseguras em deixar expostos o seu gênero e sexualidade.</text>
          </div>
        </div>
        <div className='perfilLine'>
          <div>
            <img src={Perfil3} alt='Perfil 3' />
            <img src={Perfil4} alt='Perfil 4' />
          </div>
          <div className='flexDirection textBorderBottom'>
            <text>Percebe-se, também, que colocamos um “drop down” em todas as opções caso o usuário quisesse alterar alguma das informações. Caso o usuário quisesse alterar as suas três fotos de apresentação para as pessoas, ele poderia simplesmente clicar na sua foto principal de perfil.</text>
          </div>
        </div>
      </div>
      <div className='bugReport'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Reportar Bug</text>
          <text>Essa parte do aplicativo é de suma importância para nós. Ela garantiria que sempre estivéssemos corrigindo os erros que não conseguimos identificar durante o desenvolvimento. Isso nos ajudaria a manter a melhor experiência para os usuários.</text>
        </div>
        <div>
          <img src={HomeScreen2} alt='Bug Report 1' />
          <img src={BugReport2} alt='Bug Report 2' />
        </div>
      </div>
      <div className='validation'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'> Validação da primeira versão</text>
          <text>Com a primeira versão do aplicativo em mãos, decidimos que seria hora de conversar com o nosso público e apresentar a proposta para eles, coletar as opiniões e melhorar mais ainda o aplicativo!</text>
          <text>Inicialmente, nós optamos por desenvolver uma landing page do aplicativo para já apresentar a ideia para as pessoas e mensurar o interesse das pessoas para testar a primeira versão. Não vamos entrar em muitos detalhes sobre como construímos a landing page para não fugir muito do contexto do aplicativo, mas qualquer coisa você pode entrar em contato que te contamos! Durante a construção, tivemos os primeiros contatos com o Google Analytics e o Hotjar para estudar o comportamento dos usuários na página. De qualquer forma, aqui está o link caso tenha interesse em visitar: http://matchfyapp.com/</text>
        </div>
        <img src={FirstVersion} alt='First Version' />
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Etapa online</text>
          <text>Nós colocamos um campo na landing page onde a pessoa seria redirecionada para um formulário e preencheria alguns dados como nome, e-mail, idade e se teria interesse de participar de uma etapa presencial de teste para o aplicativo. Depois de finalizada, nós divulgamos a página no grupo da universidade e esperávamos em torno de 50 respostas. Para nossa surpresa, tivemos 118!</text>
          <text>Com esses dados em mãos, mandamos um e-mail para essas pessoas convidando-as a agendar um horário que fosse mais agradável para elas nos encontrarem e testarem o aplicativo presencialmente. No total, conseguimos agendar 29 pessoas através do e-mail e registramos o contato de cada uma delas no aplicativo Doodle.</text>
        </div>
        <div className='onlineStage'>
          <img src={OnlineStage1} alt='Online Stage 1' />
          <img src={OnlineStage2} alt='Online Stage 2' />
          <div />
        </div>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Etapa presencial</text>
          <text>Nós reservamos uma sala na Biblioteca do Instituto de Química e combinamos de encontrar cada pessoa individualmente no horário agendado anteriormente. Para deixá-las mais confortáveis, conversamos com elas antes de iniciar os testes e explicamos como funcionaria todo o processo; combinamos que deixaríamos elas sozinhas na sala e avisamos onde estaríamos caso precisassem de algum auxílio e, caso elas permitissem, filmaríamos a tela do celular com um aplicativo para analisar o comportamento de uso. A ideia era deixar as pessoas mexerem no aplicativo por cerca de 30 minutos e, durante esse tempo, preencher um pequeno formulário que fizemos através do Typeform para capturar algumas opiniões, idéias e reclamações sobre a parte técnica que elas viessem a ter. </text>
        </div>
        <div className='flexDirection textBorderBottom margin10'>
          <text className='textTitle'>Alterações pós-validação</text>
          <text>Fizemos um apanhado diário de todos os comentários e respostas dos testes e colocamos em ordem de prioridade as alterações que seriam interessantes de realizarmos; sendo assim, o time de programação saberia por onde começar a desenvolver. Realizamos estas alterações no mesmo dia da validação para que sempre as pessoas do próximo dia já pudessem testar uma versão mais atualizada do aplicativo.</text>
        </div>
      </div>
      <div className='perfilDescription perfilDescription1'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Pequena descrição no perfil</text>
          <text>Uma das alterações que muitos usuários sugeriram foi de que eles pudessem colocar uma breve descrição sobre eles no perfil para que as demais pessoas pudessem já, inicialmente, gerar algum tipo de empatia e interesse mútuo.</text>
        </div>
        <img src={PerfilDescription1} alt='Perfil Description 1' />
      </div>
      <div className='perfilDescription perfilDescription2'>
        <img src={PerfilDescription2} alt='Perfil Description 2' />
        <div className='flexDirection textBorderBottom'>
          <text>Este seria o modelo com a breve descrição aparecendo no perfil dos usuários, logo abaixo do “campus” (Barão Geraldo). Caso o usuário clicasse na descrição, abriria uma caixa de texto um pouco maior para demonstrar o restante da descrição.</text>
        </div>
      </div>
      <div className='complaints flexAlignDirection'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Denúncias</text>
          <text>Antes do usuário descrever com mais detalhes a ocorrência, ele poderia filtrar os assuntos os quais a denúncia estaria relacionada para direcioná-lo melhor na hora de escrevê-lá; além disso, seria mais fácil para nós priorizarmos os casos mais graves de denúncias e nos prepararmos da melhor forma para ajudar os usuários.</text>
        </div>
        <div className='complaintsImages'>
          <img src={Complaint1} alt='Complaint 1' />
          <img src={Complaint2} alt='Complaint 2' />
          <img src={Complaint3} alt='Complaint 3' />
        </div>
        <div className='complaintsImages2'>
          <text>Antes não havia um método pelo qual o usuário pudesse ver e acompanhar o status das denúncias realizadas. Depois de ouví-los, decidimos adicionar um atalho no menu da tela principal onde ele poderia clicar em “denúncias” e verificar todas essas informações. Sobre o método de avaliação das denúncias, ainda estamos em discussão para buscar a melhor forma porque, em alguns casos, poderá envolver alguns órgãos do governo.</text>
          <div>
            <img src={Filter1} alt='Complaint 4' />
            <img src={Complaint5} alt='Complaint 5' />
          </div>
        </div>
      </div>
      <div className='conclusion'>
        <div className='flexDirection textBorderBottom'>
          <text className='textTitle'>Conclusões e Aprendizados</text>
          <text>Como dito anteriormente, esse foi nosso primeiro projeto! Dentre todas as dificuldades, erros e acertos, acreditamos que o aprendizado que tiramos até o momento é indescritível; em todas as nossas discussões sempre tentávamos trazer novos conceitos e aprendidos para agregar no conhecimento de todos e no valor do produto! Além de aprendermos muito sobre as técnicas envolvidas no processo de criação como a “Double Diamond” e “Scrum”, por exemplo, pudemos acompanhar, mesmo que sem perceber no início, um pouco mais sobre o dia-a-dia de uma empresa de tecnologia. Desde então, nós nos apaixonamos pelo ramo e estamos dispostos em aprender cada vez mais! Entendemos que o processo de criação do aplicativo foi apenas uma das etapas cumpridas, agora devemos publicá-lo em breve e continuar estudando as melhores maneiras de melhorá-lo junto com nossos usuários.</text>
        </div>
      </div>
      <PortfolioFooter />
    </div>
  )
}
