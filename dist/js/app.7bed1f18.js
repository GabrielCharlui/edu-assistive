(function(){"use strict";var e={9976:function(e,o,t){var n=t(3751),a=t(641);const s={class:"app"},i={key:0},r={key:1};function l(e,o,t,n,l,u){const d=(0,a.g2)("HomePage"),c=(0,a.g2)("LoginPage"),m=(0,a.g2)("StudentDashboard"),h=(0,a.g2)("TeacherDashboard");return(0,a.uX)(),(0,a.CE)("div",s,[l.isLoggedIn?(0,a.Q3)("",!0):((0,a.uX)(),(0,a.CE)("div",i,[(0,a.bF)(d,{onLoginRequest:u.showLogin},null,8,["onLoginRequest"]),l.showLoginForm?((0,a.uX)(),(0,a.Wv)(c,{key:0,onLoginSuccess:e.handleLoginSuccess},null,8,["onLoginSuccess"])):(0,a.Q3)("",!0)])),l.isLoggedIn?((0,a.uX)(),(0,a.CE)("div",r,["studentDashboard"===l.currentPage?((0,a.uX)(),(0,a.Wv)(m,{key:0})):(0,a.Q3)("",!0),"teacherDashboard"===l.currentPage?((0,a.uX)(),(0,a.Wv)(h,{key:1})):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)])}const u={class:"dashboard"},d={class:"dashboard-content"},c={class:"section conteudo-section"},m={class:"section notas-section"};function h(e,o,t,n,s,i){const r=(0,a.g2)("ConteudoView"),l=(0,a.g2)("NotasView");return(0,a.uX)(),(0,a.CE)("div",u,[o[2]||(o[2]=(0,a.Lk)("div",{class:"dashboard-header"},[(0,a.Lk)("h1",null,"Bem-vindo ao Dashboard do Aluno!"),(0,a.Lk)("p",{class:"welcome-message"},"Aqui você pode visualizar seus conteúdos e notas de forma rápida e fácil.")],-1)),(0,a.Lk)("div",d,[(0,a.Lk)("section",c,[o[0]||(o[0]=(0,a.Lk)("h2",null,"Conteúdos Disponíveis",-1)),(0,a.bF)(r)]),(0,a.Lk)("section",m,[o[1]||(o[1]=(0,a.Lk)("h2",null,"Minhas Notas",-1)),(0,a.bF)(l)])])])}var g=t(33);const p={class:"conteudo-view-container"},v={key:0,class:"no-content-message"},k={key:1,class:"conteudo-tabela"},L=["onClick"],b={key:2,class:"conteudo-detalhado"},f={key:0,class:"image-preview"},C=["src"],w={key:1,class:"video-preview"},y=["src"],S={key:3,class:"no-content-message"};function E(e,o,t,n,s,i){return(0,a.uX)(),(0,a.CE)("div",p,[o[6]||(o[6]=(0,a.Lk)("h2",null,"Conteúdos Disponíveis",-1)),0===s.conteudos.length?((0,a.uX)(),(0,a.CE)("div",v,o[1]||(o[1]=[(0,a.Lk)("p",null,"Não há conteúdo publicado no momento.",-1)]))):(0,a.Q3)("",!0),s.conteudos.length>0?((0,a.uX)(),(0,a.CE)("table",k,[o[2]||(o[2]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Título"),(0,a.Lk)("th",null,"Descrição")])],-1)),(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.conteudos,((e,o)=>((0,a.uX)(),(0,a.CE)("tr",{key:o,onClick:o=>i.abrirConteudo(e),class:"conteudo-linha"},[(0,a.Lk)("td",null,(0,g.v_)(e.titulo),1),(0,a.Lk)("td",null,(0,g.v_)(e.descricao),1)],8,L)))),128))])])):(0,a.Q3)("",!0),s.conteudoSelecionado?((0,a.uX)(),(0,a.CE)("div",b,[(0,a.Lk)("h3",null,(0,g.v_)(s.conteudoSelecionado.titulo),1),(0,a.Lk)("p",null,(0,g.v_)(s.conteudoSelecionado.descricao),1),s.conteudoSelecionado.imagem?((0,a.uX)(),(0,a.CE)("div",f,[o[3]||(o[3]=(0,a.Lk)("h4",null,"Imagem do Conteúdo:",-1)),(0,a.Lk)("img",{src:s.conteudoSelecionado.imagem,alt:"Conteúdo Imagem",class:"preview-image"},null,8,C)])):(0,a.Q3)("",!0),s.conteudoSelecionado.videoUrl?((0,a.uX)(),(0,a.CE)("div",w,[o[4]||(o[4]=(0,a.Lk)("h4",null,"Vídeo do Conteúdo:",-1)),(0,a.Lk)("iframe",{src:i.youtubeEmbed(s.conteudoSelecionado.videoUrl),frameborder:"0",allowfullscreen:"",class:"video-frame"},null,8,y)])):(0,a.Q3)("",!0),(0,a.Lk)("button",{onClick:o[0]||(o[0]=(...e)=>i.fecharConteudo&&i.fecharConteudo(...e))},"Fechar")])):(0,a.Q3)("",!0),s.conteudos.length>0&&!s.conteudos[0].titulo?((0,a.uX)(),(0,a.CE)("div",S,o[5]||(o[5]=[(0,a.Lk)("p",null,"Conteúdo indisponível no momento.",-1)]))):(0,a.Q3)("",!0)])}var X={data(){return{conteudos:[{titulo:"Curso de História",descricao:"Conteúdo sobre a Lofi Girl do YouTube",imagem:"https://images.squarespace-cdn.com/content/v1/580fbaac440243d8731ffc57/46cb49b3-63d7-40e1-9cd0-540fbecdc39c/Lofi+Girl+16x9.jpeg",videoUrl:"https://www.youtube.com/watch?v=Sj5C24PsL60"},{titulo:"Curso de Matemática",descricao:"Conteúdo sobre álgebra e cálculo.",imagem:"/images/matematica.jpg",videoUrl:"https://www.youtube.com/watch?v=qAl-3ljg8N4"},{titulo:"Curso de Física",descricao:"Conteúdo sobre leis da física e mecânica clássica.",imagem:"/images/fisica.jpg",videoUrl:"https://www.youtube.com/watch?v=B2u8FYE9fWk"},{titulo:"Curso de Biologia",descricao:"Conteúdo sobre genética e biologia celular.",imagem:"/images/biologia.jpg",videoUrl:"https://www.youtube.com/watch?v=-Vv3USW7iRU"}],conteudoSelecionado:null}},methods:{youtubeEmbed(e){const o=e.split("v=")[1],t=o?o.indexOf("&"):-1;return`https://www.youtube.com/embed/${-1===t?o:o.substring(0,t)}`},abrirConteudo(e){this.conteudoSelecionado=e},fecharConteudo(){this.conteudoSelecionado=null}}},F=t(6262);const N=(0,F.A)(X,[["render",E],["__scopeId","data-v-03719e47"]]);var I=N;const A={class:"notas-view-container"},D={key:0,class:"no-notes-message"},P={key:1};function _(e,o,t,n,s,i){return(0,a.uX)(),(0,a.CE)("div",A,[o[3]||(o[3]=(0,a.Lk)("h2",null,"Visualizar Notas",-1)),0===s.notas.length?((0,a.uX)(),(0,a.CE)("div",D,o[0]||(o[0]=[(0,a.Lk)("p",null,"Não há notas lançadas no momento.",-1)]))):((0,a.uX)(),(0,a.CE)("div",P,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(s.notas,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{key:t,class:"nota-card"},[(0,a.Lk)("p",null,[o[1]||(o[1]=(0,a.Lk)("strong",null,"Nome do Aluno:",-1)),(0,a.eW)(" "+(0,g.v_)(e.nome),1)]),(0,a.Lk)("p",null,[o[2]||(o[2]=(0,a.Lk)("strong",null,"Nota:",-1)),(0,a.eW)(" "+(0,g.v_)(e.nota),1)])])))),128))]))])}var U={data(){return{notas:[]}},created(){this.notas=JSON.parse(localStorage.getItem("notas"))||[]}};const Q=(0,F.A)(U,[["render",_],["__scopeId","data-v-9693bf82"]]);var V=Q,O={name:"DashboardPage",components:{ConteudoView:I,NotasView:V}};const T=(0,F.A)(O,[["render",h],["__scopeId","data-v-ecf25602"]]);var $=T;const x={class:"dashboard"},j={class:"dashboard-content"},J={class:"section conteudo-form-section"},q={class:"section notas-form-section"},W={class:"section notas-list-section"};function M(e,o,t,n,s,i){const r=(0,a.g2)("ConteudoForm"),l=(0,a.g2)("NotasForm"),u=(0,a.g2)("NotasList");return(0,a.uX)(),(0,a.CE)("div",x,[o[3]||(o[3]=(0,a.Lk)("div",{class:"dashboard-header"},[(0,a.Lk)("h1",null,"Bem-vindo ao Dashboard do Professor!"),(0,a.Lk)("p",{class:"welcome-message"}," Aqui você pode gerenciar os conteúdos, lançar as notas e visualizar o desempenho dos alunos. ")],-1)),(0,a.Lk)("div",j,[(0,a.Lk)("section",J,[o[0]||(o[0]=(0,a.Lk)("h2",null,"Adicionar Conteúdo",-1)),(0,a.bF)(r)]),(0,a.Lk)("section",q,[o[1]||(o[1]=(0,a.Lk)("h2",null,"Lançar Notas",-1)),(0,a.bF)(l)]),(0,a.Lk)("section",W,[o[2]||(o[2]=(0,a.Lk)("h2",null,"Notas dos Alunos",-1)),(0,a.bF)(u)])])])}const R={class:"conteudo-form-container"},B={class:"form-group"},K={class:"form-group"},z={class:"form-group"},H={class:"form-group"},Y={key:0,class:"message"},G={key:0,class:"image-preview"},Z=["src"],ee={key:1,class:"video-preview"},oe=["src"];function te(e,o,t,s,i,r){return(0,a.uX)(),(0,a.CE)("div",R,[o[12]||(o[12]=(0,a.Lk)("h2",null,"Indicar Conteúdo",-1)),(0,a.Lk)("form",{onSubmit:o[4]||(o[4]=(0,n.D$)(((...e)=>r.submitConteudo&&r.submitConteudo(...e)),["prevent"])),class:"form"},[(0,a.Lk)("div",B,[o[5]||(o[5]=(0,a.Lk)("label",{for:"titulo"},"Título do Conteúdo",-1)),(0,a.bo)((0,a.Lk)("input",{id:"titulo","onUpdate:modelValue":o[0]||(o[0]=e=>i.titulo=e),placeholder:"Digite o título do conteúdo",required:"",class:"form-input"},null,512),[[n.Jo,i.titulo]])]),(0,a.Lk)("div",K,[o[6]||(o[6]=(0,a.Lk)("label",{for:"descricao"},"Descrição do Conteúdo",-1)),(0,a.bo)((0,a.Lk)("textarea",{id:"descricao","onUpdate:modelValue":o[1]||(o[1]=e=>i.descricao=e),placeholder:"Digite a descrição do conteúdo",required:"",class:"form-textarea"},null,512),[[n.Jo,i.descricao]])]),(0,a.Lk)("div",z,[o[7]||(o[7]=(0,a.Lk)("label",{for:"imagem"},"Selecionar Imagem",-1)),(0,a.Lk)("input",{type:"file",onChange:o[2]||(o[2]=(...e)=>r.handleImageUpload&&r.handleImageUpload(...e)),accept:"image/*",class:"form-input"},null,32)]),(0,a.Lk)("div",H,[o[8]||(o[8]=(0,a.Lk)("label",{for:"videoUrl"},"Link do Vídeo (YouTube)",-1)),(0,a.bo)((0,a.Lk)("input",{id:"videoUrl","onUpdate:modelValue":o[3]||(o[3]=e=>i.videoUrl=e),placeholder:"Cole o link do vídeo do YouTube",class:"form-input"},null,512),[[n.Jo,i.videoUrl]])]),o[9]||(o[9]=(0,a.Lk)("button",{type:"submit",class:"submit-button"},"Salvar Conteúdo",-1)),i.mensagem?((0,a.uX)(),(0,a.CE)("div",Y,(0,g.v_)(i.mensagem),1)):(0,a.Q3)("",!0)],32),i.previewImage?((0,a.uX)(),(0,a.CE)("div",G,[o[10]||(o[10]=(0,a.Lk)("h3",null,"Pré-visualização da Imagem:",-1)),(0,a.Lk)("img",{src:i.previewImage,alt:"Imagem Preview",class:"preview-image"},null,8,Z)])):(0,a.Q3)("",!0),i.videoUrl?((0,a.uX)(),(0,a.CE)("div",ee,[o[11]||(o[11]=(0,a.Lk)("h3",null,"Vídeo Preview:",-1)),(0,a.Lk)("iframe",{src:r.youtubeEmbed(i.videoUrl),frameborder:"0",allowfullscreen:"",class:"video-frame"},null,8,oe)])):(0,a.Q3)("",!0)])}var ne={data(){return{titulo:"",descricao:"",videoUrl:"",mensagem:"",previewImage:null}},methods:{handleImageUpload(e){const o=e.target.files[0];if(o){const e=new FileReader;e.onload=e=>{this.previewImage=e.target.result},e.readAsDataURL(o)}},submitConteudo(){this.mensagem=`Conteúdo "${this.titulo}" salvo com sucesso!`,this.titulo="",this.descricao="",this.videoUrl="",this.previewImage=null},youtubeEmbed(e){const o=e.split("v=")[1],t=o?o.indexOf("&"):-1;return`https://www.youtube.com/embed/${-1===t?o:o.substring(0,t)}`}}};const ae=(0,F.A)(ne,[["render",te],["__scopeId","data-v-de91b6b2"]]);var se=ae;const ie={class:"notas-form-container"},re={class:"form-group"},le={class:"form-group"},ue={key:0,class:"message"};function de(e,o,t,s,i,r){return(0,a.uX)(),(0,a.CE)("div",ie,[o[6]||(o[6]=(0,a.Lk)("h2",null,"Lançar Notas",-1)),(0,a.Lk)("form",{onSubmit:o[2]||(o[2]=(0,n.D$)(((...e)=>r.submitNotas&&r.submitNotas(...e)),["prevent"])),class:"form"},[(0,a.Lk)("div",re,[o[3]||(o[3]=(0,a.Lk)("label",{for:"nomeAluno"},"Nome do Aluno",-1)),(0,a.bo)((0,a.Lk)("input",{id:"nomeAluno","onUpdate:modelValue":o[0]||(o[0]=e=>i.nomeAluno=e),placeholder:"Digite o nome do aluno",required:"",class:"form-input"},null,512),[[n.Jo,i.nomeAluno]])]),(0,a.Lk)("div",le,[o[4]||(o[4]=(0,a.Lk)("label",{for:"nota"},"Nota",-1)),(0,a.bo)((0,a.Lk)("input",{id:"nota",type:"number","onUpdate:modelValue":o[1]||(o[1]=e=>i.nota=e),placeholder:"Digite a nota (0-10)",min:"0",max:"10",required:"",class:"form-input"},null,512),[[n.Jo,i.nota]])]),o[5]||(o[5]=(0,a.Lk)("button",{type:"submit",class:"submit-button"},"Salvar Nota",-1)),i.mensagemNotas?((0,a.uX)(),(0,a.CE)("div",ue,(0,g.v_)(i.mensagemNotas),1)):(0,a.Q3)("",!0)],32)])}t(4114);var ce={data(){return{nomeAluno:"",nota:"",mensagemNotas:""}},methods:{submitNotas(){const e=JSON.parse(localStorage.getItem("notas"))||[];e.push({nome:this.nomeAluno,nota:this.nota}),localStorage.setItem("notas",JSON.stringify(e)),this.mensagemNotas=`Nota de ${this.nomeAluno} lançada com sucesso: ${this.nota}`,this.nomeAluno="",this.nota=""}}};const me=(0,F.A)(ce,[["render",de],["__scopeId","data-v-53ad4bdb"]]);var he=me;const ge={class:"notas-list-container"},pe={class:"filter-container"},ve={class:"autocomplete-container"},ke={key:0,class:"suggestions-list"},Le=["onClick"],be={class:"autocomplete-container"},fe={class:"notas-table"},Ce={key:0};function we(e,o,t,s,i,r){return(0,a.uX)(),(0,a.CE)("div",ge,[o[7]||(o[7]=(0,a.Lk)("h2",null,"Notas Lançadas",-1)),(0,a.Lk)("div",pe,[(0,a.Lk)("div",ve,[(0,a.bo)((0,a.Lk)("input",{type:"text","onUpdate:modelValue":o[0]||(o[0]=e=>i.nomeFiltro=e),onInput:o[1]||(o[1]=(...e)=>r.updateSuggestions&&r.updateSuggestions(...e)),onKeydown:o[2]||(o[2]=(0,n.jR)((0,n.D$)(((...o)=>e.applySuggestion&&e.applySuggestion(...o)),["prevent"]),["enter"])),placeholder:"Filtrar por nome",class:"filter-input"},null,544),[[n.Jo,i.nomeFiltro]]),i.filteredSuggestions.length>0&&i.nomeFiltro?((0,a.uX)(),(0,a.CE)("ul",ke,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.filteredSuggestions,((e,o)=>((0,a.uX)(),(0,a.CE)("li",{key:o,onClick:o=>r.selectSuggestion(e)},(0,g.v_)(e),9,Le)))),128))])):(0,a.Q3)("",!0)]),(0,a.Lk)("div",be,[(0,a.bo)((0,a.Lk)("input",{type:"number","onUpdate:modelValue":o[3]||(o[3]=e=>i.notaFiltro=e),placeholder:"Filtrar por nota",min:"0",max:"10",class:"filter-input"},null,512),[[n.Jo,i.notaFiltro]])]),(0,a.Lk)("button",{onClick:o[4]||(o[4]=(...e)=>r.clearFilters&&r.clearFilters(...e)),class:"clear-button"},"Limpar Filtros")]),(0,a.Lk)("table",fe,[o[6]||(o[6]=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"Nome do Aluno"),(0,a.Lk)("th",null,"Nota")])],-1)),(0,a.Lk)("tbody",null,[0===r.filteredNotas.length?((0,a.uX)(),(0,a.CE)("tr",Ce,o[5]||(o[5]=[(0,a.Lk)("td",{colspan:"2",class:"no-data"},"Nenhuma nota lançada ainda.",-1)]))):(0,a.Q3)("",!0),((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(r.filteredNotas,((e,o)=>((0,a.uX)(),(0,a.CE)("tr",{key:o},[(0,a.Lk)("td",null,(0,g.v_)(e.nome),1),(0,a.Lk)("td",null,(0,g.v_)(e.nota),1)])))),128))])])])}t(7642),t(8004),t(3853),t(5876),t(2475),t(5024),t(1698);var ye={data(){return{notas:[],nomeFiltro:"",notaFiltro:null,filteredSuggestions:[]}},computed:{filteredNotas(){return this.notas.filter((e=>{const o=e.nome.toLowerCase().includes(this.nomeFiltro.toLowerCase()),t=null===this.notaFiltro||e.nota===this.notaFiltro;return o&&t}))}},created(){this.loadNotas()},methods:{loadNotas(){const e=JSON.parse(localStorage.getItem("notas"))||[];this.notas=e},updateSuggestions(){const e=[...new Set(this.notas.map((e=>e.nome)))];this.filteredSuggestions=e.filter((e=>e.toLowerCase().includes(this.nomeFiltro.toLowerCase())))},selectSuggestion(e){this.nomeFiltro=e,this.filteredSuggestions=[]},clearFilters(){this.nomeFiltro="",this.notaFiltro=null,this.filteredSuggestions=[]}}};const Se=(0,F.A)(ye,[["render",we],["__scopeId","data-v-7656d206"]]);var Ee=Se,Xe={name:"DashboardPage",components:{ConteudoForm:se,NotasForm:he,NotasList:Ee}};const Fe=(0,F.A)(Xe,[["render",M],["__scopeId","data-v-5d02af30"]]);var Ne=Fe;const Ie={class:"homepage"},Ae={class:"navbar"},De={key:0,class:"banner"},Pe={key:2};function _e(e,o,t,s,i,r){const l=(0,a.g2)("LoginPage"),u=(0,a.g2)("StudentDashboard"),d=(0,a.g2)("TeacherDashboard");return(0,a.uX)(),(0,a.CE)("div",Ie,[(0,a.Lk)("header",null,[(0,a.Lk)("nav",Ae,[(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#",onClick:o[0]||(o[0]=(0,n.D$)((e=>r.showPage("home")),["prevent"]))},"Início")]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#",onClick:o[1]||(o[1]=(0,n.D$)((e=>r.showPage("about")),["prevent"]))},"Sobre")]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#",onClick:o[2]||(o[2]=(0,n.D$)((e=>r.showPage("courses")),["prevent"]))},"Cursos")]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{href:"#",onClick:o[3]||(o[3]=(0,n.D$)((e=>r.showPage("login")),["prevent"]))},"Login")])])])]),(0,a.Lk)("main",null,["home"===i.currentPage?((0,a.uX)(),(0,a.CE)("div",De,[o[5]||(o[5]=(0,a.Lk)("h1",null,"Bem-vindo à Plataforma de Ensino!",-1)),o[6]||(o[6]=(0,a.Lk)("p",null,"Aprenda no seu próprio ritmo com nossos cursos online.",-1)),(0,a.Lk)("button",{onClick:o[4]||(o[4]=e=>r.showPage("login")),class:"cta-button"},"Acesse sua Conta")])):(0,a.Q3)("",!0),"login"===i.currentPage?((0,a.uX)(),(0,a.Wv)(l,{key:1,onLoginSuccess:r.handleLoginSuccess},null,8,["onLoginSuccess"])):(0,a.Q3)("",!0),i.isAuthenticated?((0,a.uX)(),(0,a.CE)("div",Pe,[i.isStudent&&"studentDashboard"===i.currentPage?((0,a.uX)(),(0,a.Wv)(u,{key:0})):(0,a.Q3)("",!0),i.isTeacher&&"teacherDashboard"===i.currentPage?((0,a.uX)(),(0,a.Wv)(d,{key:1})):(0,a.Q3)("",!0)])):(0,a.Q3)("",!0)]),o[7]||(o[7]=(0,a.Lk)("footer",null,[(0,a.Lk)("p",null,"© 2024 Plataforma de Ensino. Todos os direitos reservados.")],-1))])}const Ue={class:"login-container"},Qe={class:"form-group"},Ve={class:"form-group"},Oe={key:0,class:"error"};function Te(e,o,t,s,i,r){return(0,a.uX)(),(0,a.CE)("div",Ue,[o[4]||(o[4]=(0,a.Lk)("h2",null,"Acesso a Plataforma",-1)),(0,a.Lk)("form",{onSubmit:o[2]||(o[2]=(0,n.D$)(((...e)=>r.handleLogin&&r.handleLogin(...e)),["prevent"])),class:"login-form"},[(0,a.Lk)("div",Qe,[(0,a.bo)((0,a.Lk)("input",{type:"text",id:"username","onUpdate:modelValue":o[0]||(o[0]=e=>i.username=e),required:"",placeholder:"Digite seu usuário"},null,512),[[n.Jo,i.username]])]),(0,a.Lk)("div",Ve,[(0,a.bo)((0,a.Lk)("input",{type:"password",id:"password","onUpdate:modelValue":o[1]||(o[1]=e=>i.password=e),required:"",placeholder:"Digite sua senha"},null,512),[[n.Jo,i.password]])]),o[3]||(o[3]=(0,a.Lk)("button",{type:"submit",class:"login-button"},"Entrar",-1)),i.errorMessage?((0,a.uX)(),(0,a.CE)("div",Oe,(0,g.v_)(i.errorMessage),1)):(0,a.Q3)("",!0)],32)])}var $e={data(){return{username:"",password:"",errorMessage:""}},methods:{handleLogin(){"aluno@test.com"===this.username&&"357951"===this.password?(this.$emit("login-success","student"),this.errorMessage="Credenciais válidas. Você está autenticado."):"admin"===this.username&&"admin"===this.password?(this.$emit("login-success","teacher"),this.errorMessage="Credenciais válidas. Você está autenticado."):this.errorMessage="Usuário ou senha incorretos."}}};const xe=(0,F.A)($e,[["render",Te],["__scopeId","data-v-4d9baab8"]]);var je=xe,Je={name:"HomePage",components:{LoginPage:je,TeacherDashboard:Ne,StudentDashboard:$},data(){return{currentPage:"home",isAuthenticated:!1,isStudent:!1,isTeacher:!1}},methods:{showPage(e){this.currentPage=e},handleLoginSuccess(e){this.isAuthenticated=!0,"teacher"===e?(this.isTeacher=!0,this.isStudent=!1,this.showPage("teacherDashboard")):"student"===e&&(this.isStudent=!0,this.isTeacher=!1,this.showPage("studentDashboard"))}}};const qe=(0,F.A)(Je,[["render",_e],["__scopeId","data-v-cb8fa3e2"]]);var We=qe,Me={name:"App",components:{HomePage:We,LoginPage:je,StudentDashboard:$,TeacherDashboard:Ne},data(){return{currentPage:"home",isLoggedIn:!1,showLoginForm:!1,userType:""}},methods:{showLogin(){this.showLoginForm=!0},handleLogout(){this.isLoggedIn=!1,this.currentPage="home"}}};const Re=(0,F.A)(Me,[["render",l],["__scopeId","data-v-676ae1ba"]]);var Be=Re;(0,n.Ef)(Be).mount("#app")}},o={};function t(n){var a=o[n];if(void 0!==a)return a.exports;var s=o[n]={exports:{}};return e[n].call(s.exports,s,s.exports,t),s.exports}t.m=e,function(){var e=[];t.O=function(o,n,a,s){if(!n){var i=1/0;for(d=0;d<e.length;d++){n=e[d][0],a=e[d][1],s=e[d][2];for(var r=!0,l=0;l<n.length;l++)(!1&s||i>=s)&&Object.keys(t.O).every((function(e){return t.O[e](n[l])}))?n.splice(l--,1):(r=!1,s<i&&(i=s));if(r){e.splice(d--,1);var u=a();void 0!==u&&(o=u)}}return o}s=s||0;for(var d=e.length;d>0&&e[d-1][2]>s;d--)e[d]=e[d-1];e[d]=[n,a,s]}}(),function(){t.d=function(e,o){for(var n in o)t.o(o,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:o[n]})}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)}}(),function(){var e={524:0};t.O.j=function(o){return 0===e[o]};var o=function(o,n){var a,s,i=n[0],r=n[1],l=n[2],u=0;if(i.some((function(o){return 0!==e[o]}))){for(a in r)t.o(r,a)&&(t.m[a]=r[a]);if(l)var d=l(t)}for(o&&o(n);u<i.length;u++)s=i[u],t.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return t.O(d)},n=self["webpackChunkEducaWebAssistiva"]=self["webpackChunkEducaWebAssistiva"]||[];n.forEach(o.bind(null,0)),n.push=o.bind(null,n.push.bind(n))}();var n=t.O(void 0,[504],(function(){return t(9976)}));n=t.O(n)})();
//# sourceMappingURL=app.7bed1f18.js.map