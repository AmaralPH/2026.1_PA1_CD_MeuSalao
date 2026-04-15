# User Stories — MeuSalão MVP Fase 1

Gerado com base nas Personas, Jornadas e Touchpoints documentados.
Estrutura: História de Usuário → Detalhes da Tela → Critérios de Aceitação (BDD)

---

# Persona: Carla Mendes — Cliente / Usuária Final

---

## Jornada 1 — Descoberta e Escolha de Salão

---

### US-01 — Tela Inicial / Onboarding

**História de Usuário**

- Como Carla Mendes, uma mulher de 32 anos que nunca usou o MeuSalão antes e acessa o app pelo celular durante um momento livre do dia,
- Eu quero visualizar uma tela inicial clara que comunique imediatamente a proposta de valor do aplicativo, com um botão de acesso evidente,
- Para entender em segundos se esse app resolve minha dificuldade de encontrar salões confiáveis perto de mim, e decidir se vale a pena criar uma conta.

---

**Detalhes da Tela**

Tela projetada para causar impacto imediato com carga cognitiva mínima, focando na conversão para o cadastro.

Estrutura Visual (top-down, mobile-first):

- **Header/Branding:** Logotipo do MeuSalão centralizado no topo, em fonte leve e moderna.
- **Imagem Hero:** Ilustração ou foto de uma mulher saindo satisfeita de um salão bem cuidado, transmitindo confiança e resultado.
- **Título Principal (H1):** "Encontre o salão ideal perto de você." — fonte robusta, leitura instantânea.
- **Subtítulo (H2):** "Veja avaliações reais, compare preços e agende sem precisar ligar." — texto menor, apoio à dor da persona.
- **Botão de Ação Principal (CTA):** Botão largo em destaque — "Começar agora" — posicionado na área de alcance do polegar.
- **Ação Secundária:** Link textual discreto abaixo do botão — "Já tenho uma conta. Entrar."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização da proposta de valor**
- Dado que Carla abre o aplicativo pela primeira vez após o download,
- Quando a tela inicial terminar de carregar,
- Então ela deve visualizar o título principal, o subtítulo e o botão "Começar agora" sem precisar fazer scroll (above the fold),
- E a tela deve estar livre de pop-ups, menus complexos ou qualquer elemento que distraia da proposta de valor.

**Cenário 2: Início do cadastro**
- Dado que Carla está na tela inicial e entendeu que o app pode ajudá-la a encontrar salões,
- Quando ela toca no botão "Começar agora",
- Então o sistema deve direcioná-la para a primeira tela do fluxo de cadastro, com transição fluida.

---

### US-02 — Solicitação de Permissão de Geolocalização

**História de Usuário**

- Como Carla Mendes, uma usuária que acabou de iniciar o uso do aplicativo,
- Eu quero ser informada de forma clara sobre o motivo pelo qual o app está pedindo acesso à minha localização, antes de tomar qualquer decisão,
- Para sentir que estou no controle dos meus dados e entender que essa permissão vai me ajudar a ver salões realmente próximos de mim.

---

**Detalhes da Tela**

Tela de solicitação de permissão com contexto explicativo antes do prompt nativo do sistema operacional.

Estrutura Visual (top-down, mobile-first):

- **Ícone ilustrativo:** Ícone de localização ou mapa em destaque visual, centralizado.
- **Título (H1):** "Salões perto de você" — direto e positivo.
- **Texto explicativo:** "Para mostrar os melhores salões da sua região, precisamos saber onde você está. Sua localização não será compartilhada com terceiros."
- **Botão de Ação Principal:** "Permitir localização" — largo, em destaque.
- **Ação Secundária:** "Agora não" — link textual menor, sem destaque, para não pressionar a usuária.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição da tela de contexto**
- Dado que Carla concluiu o cadastro inicial e vai acessar a listagem de salões pela primeira vez,
- Quando o sistema identificar que a permissão de localização ainda não foi concedida,
- Então deve exibir a tela de contexto explicando o benefício da permissão antes de acionar o prompt nativo do sistema operacional.

**Cenário 2: Permissão concedida**
- Dado que Carla está na tela de solicitação de localização,
- Quando ela tocar em "Permitir localização" e confirmar no prompt nativo do sistema,
- Então o sistema deve redicioná-la para a listagem de salões com resultados filtrados pela sua localização atual.

**Cenário 3: Permissão negada**
- Dado que Carla optou por não permitir a localização,
- Quando ela tocar em "Agora não",
- Então o sistema deve direcioná-la para a listagem de salões com opção de digitar manualmente o bairro ou CEP, sem bloquear o acesso ao app.

---

### US-03 — Tela de Listagem de Salões

**História de Usuário**

- Como Carla Mendes, que acabou de abrir o aplicativo e quer ver opções de salões,
- Eu quero visualizar uma lista de salões próximos à minha localização, com informações básicas visíveis já na listagem,
- Para avaliar rapidamente as opções disponíveis sem precisar entrar em cada perfil, e sentir que o app está me poupando tempo.

---

**Detalhes da Tela**

Tela de listagem em formato de cards verticais, otimizada para navegação rápida.

Estrutura Visual (top-down, mobile-first):

- **Barra de busca:** Campo de texto no topo com ícone de lupa — "Buscar por nome ou serviço."
- **Filtros rápidos:** Chips horizontais roláveis logo abaixo da busca — ex.: "Cabelo", "Manicure", "Barba", "Mais próximos".
- **Cards de salão:** Para cada salão exibir:
  - Foto de capa do salão
  - Nome do salão
  - Distância da localização atual (ex.: "1,2 km")
  - Nota média com estrelas e número de avaliações
  - Dois ou três serviços em destaque com preço inicial (ex.: "Corte a partir de R$ 40")
  - Indicação de disponibilidade (ex.: "Horários disponíveis hoje")
- **Carregamento progressivo:** Skeleton loading enquanto os dados são carregados.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Listagem com localização ativa**
- Dado que Carla concedeu permissão de localização,
- Quando acessar a tela de listagem,
- Então deve ver no mínimo 5 salões ordenados por proximidade, com distância, nota e serviços em destaque visíveis em cada card.

**Cenário 2: Listagem sem localização**
- Dado que Carla não concedeu permissão de localização,
- Quando acessar a tela de listagem,
- Então deve ver um campo para digitar bairro ou CEP antes de exibir os resultados, sem travar a navegação.

**Cenário 3: Nenhum salão encontrado**
- Dado que Carla digitou um bairro sem salões cadastrados,
- Quando o sistema processar a busca,
- Então deve exibir uma mensagem amigável informando que não há salões cadastrados na região, com sugestão de expandir o raio de busca.

---

### US-04 — Filtros de Busca por Serviço e Localização

**História de Usuário**

- Como Carla Mendes, que já está na listagem de salões e sabe exatamente o serviço que quer,
- Eu quero aplicar filtros por tipo de serviço e localização para refinar os resultados exibidos,
- Para não perder tempo olhando salões que não atendem o que eu preciso, e sentir que estou no controle da minha busca.

---

**Detalhes da Tela**

Tela de filtros acessada por um botão ou ícone na tela de listagem, em formato de painel deslizante (bottom sheet) ou tela modal.

Estrutura Visual (top-down, mobile-first):

- **Título do painel:** "Filtrar resultados"
- **Seção de Serviço:** Lista de categorias com checkbox — ex.: Cabelo, Manicure, Pedicure, Barba, Sobrancelha, Depilação, Maquiagem.
- **Seção de Distância:** Slider ou opções de raio — ex.: "Até 1 km", "Até 3 km", "Até 5 km".
- **Seção de Avaliação mínima:** Seleção por estrelas — "3 estrelas ou mais", "4 estrelas ou mais".
- **Botão de aplicar filtros:** "Ver salões" — largo, em destaque, no rodapé do painel.
- **Opção de limpar filtros:** Link textual "Limpar filtros" próximo ao título do painel.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Aplicação de filtro por serviço**
- Dado que Carla está na tela de listagem,
- Quando ela abre o painel de filtros e seleciona "Manicure",
- E toca em "Ver salões",
- Então a listagem deve exibir apenas salões que oferecem manicure, atualizando os resultados imediatamente.

**Cenário 2: Combinação de filtros**
- Dado que Carla abriu o painel de filtros,
- Quando ela seleciona "Manicure", distância "Até 2 km" e avaliação "4 estrelas ou mais",
- E toca em "Ver salões",
- Então a listagem deve exibir apenas salões que atendem todos os critérios simultaneamente.

**Cenário 3: Nenhum resultado para filtro aplicado**
- Dado que Carla aplicou filtros muito restritivos,
- Quando não houver salões que atendam todos os critérios,
- Então o sistema deve exibir mensagem sugerindo relaxar um dos filtros, sem exibir tela vazia sem orientação.

---

### US-05 — Perfil do Salão

**História de Usuário**

- Como Carla Mendes, que encontrou um salão interessante na listagem,
- Eu quero acessar o perfil completo do salão com fotos, serviços, preços e avaliações em uma tela organizada,
- Para ter segurança suficiente para tomar a decisão de agendar, sem precisar pesquisar o salão em outro lugar.

---

**Detalhes da Tela**

Tela de perfil completo do salão, organizada em seções com rolagem vertical.

Estrutura Visual (top-down, mobile-first):

- **Galeria de fotos:** Carrossel horizontal com fotos do salão e dos resultados de serviços — até 6 imagens.
- **Nome e informações básicas:** Nome do salão, endereço, distância atual, horário de funcionamento.
- **Nota e avaliações:** Nota média com estrelas, número de avaliações, link para ver todas.
- **Catálogo de serviços:** Lista de serviços com nome, descrição curta e preço — agrupados por categoria (Cabelo, Unhas, Estética).
- **Botão de agendamento fixo:** "Agendar horário" — fixado no rodapé da tela (sticky), sempre visível durante a rolagem.
- **Seção "Sobre o salão":** Texto curto de apresentação, especialidades e diferenciais.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Carregamento completo do perfil**
- Dado que Carla tocou em um card de salão na listagem,
- Quando a tela de perfil carregar,
- Então deve exibir pelo menos uma foto, o nome, a nota, dois serviços com preço e o botão "Agendar horário" visível sem precisar rolar a tela.

**Cenário 2: Navegação pelo catálogo**
- Dado que Carla está no perfil do salão,
- Quando ela rolar pela tela até a seção de serviços,
- Então deve ver todos os serviços organizados por categoria, com nome e preço de cada um claramente legíveis.

**Cenário 3: Botão de agendamento acessível**
- Dado que Carla está rolando o perfil completo do salão,
- Quando ela estiver em qualquer posição da página,
- Então o botão "Agendar horário" deve permanecer fixo no rodapé, sempre acessível sem precisar rolar de volta ao topo.

---

### US-06 — Seção de Avaliações no Perfil do Salão

**História de Usuário**

- Como Carla Mendes, que está considerando agendar em um salão que nunca visitou,
- Eu quero ler avaliações reais de outras clientes com nota, comentário e data da visita,
- Para reduzir minha ansiedade de experimentar um lugar novo e tomar a decisão com mais confiança.

---

**Detalhes da Tela**

Seção de avaliações dentro do perfil do salão, com carregamento progressivo.

Estrutura Visual (top-down, mobile-first):

- **Resumo de avaliações:** Nota média grande em destaque, com distribuição de estrelas (barra de proporção por quantidade de 1 a 5 estrelas).
- **Cards de avaliação:** Para cada avaliação exibir:
  - Nome e foto de perfil da cliente (ou avatar padrão)
  - Nota em estrelas
  - Comentário textual
  - Data da visita (ex.: "há 2 semanas")
  - Serviço realizado (ex.: "Manicure")
- **Botão "Ver todas as avaliações":** Carrega mais avaliações sem sair do perfil.
- **Filtro por serviço:** Opção de filtrar avaliações pelo tipo de serviço realizado.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição das avaliações**
- Dado que Carla está no perfil de um salão com avaliações,
- Quando ela rolar até a seção de avaliações,
- Então deve ver a nota média em destaque, a distribuição por estrelas e no mínimo 3 avaliações com comentário, nota e data visíveis.

**Cenário 2: Carregar mais avaliações**
- Dado que Carla leu as avaliações iniciais e quer ver mais,
- Quando ela tocar em "Ver todas as avaliações",
- Então o sistema deve carregar as próximas avaliações sem redirecionar para outra tela, expandindo a lista na mesma página.

**Cenário 3: Salão sem avaliações**
- Dado que Carla entrou no perfil de um salão recém-cadastrado sem avaliações,
- Quando acessar a seção de avaliações,
- Então deve ver uma mensagem amigável como "Ainda não há avaliações. Seja a primeira a avaliar!" em vez de uma seção vazia.

---

### US-07 — Perfil do Salão / Tela de Listagem com Preços Visíveis (Comparação de Preços)

**História de Usuário**

- Como Carla Mendes, que está avaliando dois ou três salões ao mesmo tempo,
- Eu quero visualizar os preços dos principais serviços tanto na listagem quanto no perfil de cada salão, sem precisar entrar em cada um para descobrir os valores,
- Para comparar as opções de forma rápida e sentir que estou fazendo uma escolha inteligente e financeiramente consciente.

---

**Detalhes da Tela**

Preços visíveis na listagem (card) e no perfil — sem necessidade de clique adicional para ver valores.

Estrutura Visual — Card na Listagem (mobile-first):

- **Destaque de preço no card:** Abaixo dos serviços em destaque no card de listagem, exibir "a partir de R$ XX" com o serviço de referência.
- **Indicador visual:** Badge de preço em cor suave (ex.: verde claro) para salões com preços abaixo da média da região.

Estrutura Visual — Catálogo no Perfil:

- **Preço ao lado de cada serviço:** Valor exibido em destaque visual ao lado direito do nome do serviço.
- **Ordenação por preço:** Opção de ordenar os serviços do catálogo por valor (menor ao maior).

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Preço visível na listagem**
- Dado que Carla está na tela de listagem de salões,
- Quando os cards dos salões estiverem carregados,
- Então cada card deve exibir pelo menos um serviço com o respectivo preço de referência, sem necessidade de tocar no card para ver valores.

**Cenário 2: Preço detalhado no perfil**
- Dado que Carla entrou no perfil de um salão,
- Quando ela acessar o catálogo de serviços,
- Então todos os serviços devem ter o preço exibido ao lado do nome, claramente legível sem zoom.

**Cenário 3: Salão sem preços cadastrados**
- Dado que um salão não preencheu os preços dos serviços,
- Quando Carla visualizar o card ou o catálogo desse salão,
- Então deve ver a indicação "Consultar preço" no lugar do valor, sem exibir campo vazio ou zero.

---

## Jornada 2 — Agendamento

---

### US-08 — Seleção de Serviço no Perfil do Salão

**História de Usuário**

- Como Carla Mendes, que já escolheu o salão e está pronta para agendar,
- Eu quero selecionar o serviço desejado diretamente no perfil do salão, com informações claras sobre duração e preço antes de confirmar a escolha,
- Para iniciar o agendamento com segurança, sabendo exatamente o que vou contratar e quanto vou pagar.

---

**Detalhes da Tela**

Tela de seleção de serviço como primeiro passo do fluxo de agendamento.

Estrutura Visual (top-down, mobile-first):

- **Título:** "Escolha o serviço" — claro e objetivo.
- **Categorias de serviço:** Abas ou seções colapsáveis por categoria (Cabelo, Unhas, Estética).
- **Cards de serviço:** Para cada serviço exibir:
  - Nome do serviço
  - Descrição curta (opcional)
  - Duração estimada (ex.: "⏱ 45 min")
  - Preço (ex.: "R$ 60,00")
  - Botão ou radio de seleção
- **Botão de continuar:** "Escolher horário" — fixado no rodapé, ativo somente após selecionar um serviço.
- **Indicador de progresso:** Barra ou steps no topo mostrando a etapa atual do fluxo (ex.: 1 de 3 — Serviço → Horário → Confirmação).

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Seleção de serviço**
- Dado que Carla tocou em "Agendar horário" no perfil do salão,
- Quando a tela de seleção de serviço carregar,
- Então deve ver todos os serviços do salão com nome, duração e preço, organizados por categoria.

**Cenário 2: Confirmação da seleção**
- Dado que Carla está na tela de seleção de serviço,
- Quando ela tocar em um serviço para selecioná-lo,
- E tocar em "Escolher horário",
- Então o sistema deve avançar para a tela de calendário de disponibilidade, mantendo o serviço selecionado visível no topo como referência.

**Cenário 3: Tentativa de avançar sem seleção**
- Dado que Carla está na tela de seleção de serviço sem ter escolhido nenhum,
- Quando ela toca em "Escolher horário",
- Então o botão deve permanecer inativo e o sistema deve exibir uma indicação visual solicitando que ela selecione um serviço antes de continuar.

---

### US-09 — Calendário de Disponibilidade de Horários

**História de Usuário**

- Como Carla Mendes, que selecionou o serviço desejado e quer reservar um horário,
- Eu quero visualizar um calendário com os horários realmente disponíveis para o serviço escolhido,
- Para verificar a disponibilidade real antes de sair de casa e escolher uma data e hora que se encaixem na minha rotina.

---

**Detalhes da Tela**

Tela de calendário de disponibilidade, segundo passo do fluxo de agendamento.

Estrutura Visual (top-down, mobile-first):

- **Referência do serviço selecionado:** Card compacto no topo com nome do serviço e duração — reforço visual do contexto.
- **Calendário mensal:** Visualização de mês com dias disponíveis em destaque (cor cheia) e dias indisponíveis em cinza/riscado.
- **Grade de horários:** Após tocar em uma data disponível, exibir os horários disponíveis naquele dia em formato de chips ou botões — ex.: "09:00", "10:30", "14:00".
- **Legenda visual:** Indicação de "Disponível", "Indisponível" e "Selecionado" com cores distintas.
- **Botão de continuar:** "Confirmar horário" — fixado no rodapé, ativo somente após selecionar data e hora.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição do calendário**
- Dado que Carla selecionou um serviço e avançou para o calendário,
- Quando a tela de disponibilidade carregar,
- Então deve ver o mês atual com dias disponíveis claramente diferenciados dos indisponíveis, sem ambiguidade visual.

**Cenário 2: Seleção de data e horário**
- Dado que Carla está no calendário de disponibilidade,
- Quando ela tocar em uma data disponível,
- Então os horários disponíveis para aquela data devem aparecer imediatamente abaixo do calendário, sem recarregar a tela.

**Cenário 3: Tentativa de selecionar dia indisponível**
- Dado que Carla toca em um dia marcado como indisponível,
- Quando o sistema processar o toque,
- Então o dia não deve ser selecionável e o sistema deve exibir uma mensagem indicando que não há horários disponíveis naquela data.

---

### US-10 — Seleção de Data e Horário

**História de Usuário**

- Como Carla Mendes, que está no calendário de disponibilidade e já identificou as datas possíveis,
- Eu quero selecionar a data e o horário específico que melhor se encaixam na minha semana,
- Para organizar minha rotina com eficiência e garantir um horário que eu consiga cumprir sem conflito com outros compromissos.

---

**Detalhes da Tela**

Interação de seleção dentro da tela de calendário, com confirmação do slot escolhido.

Estrutura Visual (top-down, mobile-first):

- **Estado selecionado:** Ao tocar em um horário disponível, o chip/botão muda para estado selecionado (cor de destaque, check visual).
- **Resumo do agendamento:** Card de resumo que aparece na parte inferior da tela após seleção, mostrando: serviço, data formatada (ex.: "Sexta-feira, 20 de junho"), horário e duração estimada.
- **Duração estimada de término:** Ex.: "Previsão de término: 10:45" — ajuda no planejamento da rotina.
- **Botão de confirmar:** "Confirmar agendamento" — ativo após a seleção, em destaque no rodapé.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Seleção do horário**
- Dado que Carla tocou em uma data disponível no calendário,
- Quando ela tocar em um dos horários disponíveis exibidos,
- Então o horário deve ser marcado visualmente como selecionado e o resumo do agendamento deve aparecer com os dados: serviço, data, hora e duração.

**Cenário 2: Alteração de seleção**
- Dado que Carla já selecionou um horário,
- Quando ela tocar em outro horário disponível,
- Então a seleção anterior deve ser desmarcada automaticamente e o resumo deve ser atualizado com o novo horário sem recarregar a tela.

---

### US-11 — Tela de Confirmação do Agendamento

**História de Usuário**

- Como Carla Mendes, que escolheu o serviço, a data e o horário,
- Eu quero visualizar um resumo completo do agendamento antes de confirmar definitivamente,
- Para ter segurança de que todos os dados estão corretos e sentir que o horário foi reservado exclusivamente para mim.

---

**Detalhes da Tela**

Tela de revisão e confirmação final do agendamento, terceiro passo do fluxo.

Estrutura Visual (top-down, mobile-first):

- **Título:** "Confirmar agendamento" — claro e direto.
- **Resumo completo:**
  - Nome e foto do salão
  - Endereço com link para abrir no mapa
  - Serviço selecionado e preço
  - Data e horário
  - Duração estimada
- **Informação de cancelamento:** Texto informativo sobre política de cancelamento do salão (ex.: "Cancelamento gratuito até 2h antes").
- **Botão de confirmação:** "Confirmar agendamento" — largo, em cor de destaque, no rodapé.
- **Ação secundária:** "Voltar e alterar" — link textual discreto.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição do resumo**
- Dado que Carla selecionou serviço, data e horário,
- Quando a tela de confirmação carregar,
- Então deve exibir nome do salão, serviço, preço, data, horário e endereço todos visíveis sem scroll.

**Cenário 2: Confirmação bem-sucedida**
- Dado que Carla está na tela de confirmação com todos os dados corretos,
- Quando ela tocar em "Confirmar agendamento",
- Então o sistema deve registrar o agendamento, exibir uma tela de sucesso com mensagem de confirmação e informar que ela receberá uma notificação de confirmação.

**Cenário 3: Horário ocupado no momento da confirmação**
- Dado que outra cliente agendou o mesmo horário enquanto Carla revisava o resumo,
- Quando ela tocar em "Confirmar agendamento",
- Então o sistema deve informar que o horário não está mais disponível e redirecioná-la automaticamente para o calendário para escolher outro horário.

---

### US-12 — Notificação Push / E-mail de Confirmação

**História de Usuário**

- Como Carla Mendes, que acabou de confirmar um agendamento,
- Eu quero receber imediatamente uma notificação de confirmação com os detalhes do agendamento,
- Para ter a tranquilidade de saber que o horário está reservado e ter uma referência fácil de consultar quando precisar.

---

**Detalhes da Tela**

Notificação push (dispositivo) e/ou e-mail de confirmação enviados após o agendamento.

Estrutura da Notificação Push:

- **Título:** "Agendamento confirmado! ✅"
- **Corpo:** "Seu horário de [Serviço] no [Nome do Salão] está confirmado para [Data] às [Horário]."
- **Ação ao tocar:** Abre a tela de detalhes do agendamento no app.

Estrutura do E-mail de Confirmação:

- Logotipo do MeuSalão no topo.
- Mensagem de confirmação com todos os detalhes: salão, serviço, data, horário, endereço.
- Botão "Ver no app" para abrir diretamente os detalhes.
- Link de cancelamento: "Cancelar agendamento" — link textual no rodapé do e-mail.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Envio da notificação push**
- Dado que Carla confirmou o agendamento com sucesso,
- Quando o sistema registrar o agendamento,
- Então Carla deve receber uma notificação push em até 30 segundos com nome do salão, serviço, data e horário.

**Cenário 2: Envio do e-mail de confirmação**
- Dado que Carla tem um e-mail cadastrado e confirmou o agendamento,
- Quando o sistema registrar o agendamento,
- Então ela deve receber um e-mail de confirmação em até 2 minutos com todos os detalhes e um link para cancelamento.

**Cenário 3: Notificações desativadas**
- Dado que Carla não concedeu permissão para notificações push,
- Quando confirmar o agendamento,
- Então o sistema deve garantir o envio do e-mail de confirmação e, na tela de sucesso, exibir um aviso sugerindo ativar notificações para receber lembretes.

---

### US-13 — Notificação Push de Lembrete

**História de Usuário**

- Como Carla Mendes, que tem uma rotina agitada e pode esquecer compromissos marcados com antecedência,
- Eu quero receber um lembrete automático próximo ao dia do meu agendamento,
- Para não perder o horário reservado e sentir que o app está cuidando dos detalhes por mim.

---

**Detalhes da Tela**

Notificação push automática de lembrete enviada em momentos estratégicos antes do agendamento.

Estrutura da Notificação de Lembrete:

- **Lembrete D-1 (véspera):**
  - Título: "Amanhã é dia de cuidar de você! 💅"
  - Corpo: "Seu [Serviço] no [Salão] está agendado para amanhã às [Horário]. Endereço: [Endereço]."

- **Lembrete D-0 (no dia, 2h antes):**
  - Título: "Seu horário é em 2 horas ⏰"
  - Corpo: "[Serviço] no [Salão] hoje às [Horário]. Boa sorte!"

- **Ação ao tocar em qualquer lembrete:** Abre a tela de detalhes do agendamento com opção de cancelar ou ver endereço no mapa.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Lembrete na véspera**
- Dado que Carla tem um agendamento confirmado para o dia seguinte,
- Quando forem 18h do dia anterior ao agendamento,
- Então ela deve receber a notificação de lembrete D-1 com nome do salão, serviço e horário.

**Cenário 2: Lembrete no dia**
- Dado que Carla tem um agendamento confirmado para o dia atual,
- Quando faltarem 2 horas para o horário agendado,
- Então ela deve receber a notificação de lembrete D-0 com os detalhes do agendamento.

**Cenário 3: Agendamento cancelado antes do lembrete**
- Dado que Carla cancelou o agendamento antes do horário de envio do lembrete,
- Quando o sistema processar o cancelamento,
- Então os lembretes agendados para esse agendamento devem ser cancelados automaticamente, sem enviar notificações de um evento inexistente.

---

# Persona: Roberto Alves — Cliente / Usuário Final

---

## Jornada 1 — Busca com Filtro Específico

---

### US-14 — Tela Inicial do App (Roberto)

**História de Usuário**

- Como Roberto Alves, um motorista de aplicativo que usa o celular em intervalos curtos da rotina e precisa resolver tudo rápido,
- Eu quero abrir o aplicativo e acessar a busca de salões com o mínimo de passos possível,
- Para aproveitar o pouco tempo disponível no meu intervalo e não perder tempo com telas desnecessárias.

---

**Detalhes da Tela**

Tela inicial com acesso rápido à busca e filtros, priorizando velocidade de uso.

Estrutura Visual (top-down, mobile-first):

- **Barra de busca em destaque:** Campo de busca no topo, já ativo ao abrir o app (teclado abre automaticamente em segundo acesso).
- **Atalhos rápidos de serviço:** Ícones de acesso rápido abaixo da busca — "Barbearia", "Barba", "Corte Infantil".
- **Localização atual:** Indicação automática da região atual abaixo dos atalhos — "Resultados perto de você: [Bairro]."
- **Acesso recente:** Se Roberto já usou o app, exibir "Seu último salão: [Nome]" como atalho de reacesso.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Acesso rápido à busca**
- Dado que Roberto abre o aplicativo em um intervalo da sua rotina,
- Quando a tela inicial carregar,
- Então deve ver a barra de busca e os atalhos de serviço imediatamente, sem telas intermediárias ou pop-ups bloqueantes.

**Cenário 2: Atalho de serviço**
- Dado que Roberto está na tela inicial,
- Quando ele tocar em um dos atalhos rápidos (ex.: "Barbearia"),
- Então o sistema deve direcioná-lo diretamente para a listagem filtrada por aquele tipo de serviço, sem precisar abrir o painel de filtros manualmente.

---

### US-15 — Filtros de Busca por Tipo de Serviço (Roberto)

**História de Usuário**

- Como Roberto Alves, que precisa encontrar especificamente salões que atendam público masculino ou infantil,
- Eu quero aplicar filtros por tipo de serviço de forma rápida, com o mínimo de toques,
- Para não precisar ver salões femininos ou que não atendem o que eu preciso, economizando tempo no meu intervalo.

---

**Detalhes da Tela**

Chips de filtro rápido na tela de listagem, com painel de filtros avançados opcional.

Estrutura Visual (top-down, mobile-first):

- **Chips horizontais roláveis:** Abaixo da barra de busca — "Barba", "Corte Masculino", "Corte Infantil", "Barbearia", "Todos".
- **Filtro ativo com feedback visual:** Chip selecionado em destaque (cor preenchida), com indicação do número de resultados — ex.: "Barba (12)".
- **Painel de filtros avançados:** Ícone de filtro ao lado dos chips para abrir painel com opções adicionais (distância, avaliação).

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Filtro por tipo de serviço via chip**
- Dado que Roberto está na tela de listagem,
- Quando ele tocar no chip "Barba",
- Então a listagem deve atualizar em tempo real, exibindo apenas salões que oferecem serviço de barba, com o chip destacado como ativo.

**Cenário 2: Filtro por corte infantil**
- Dado que Roberto quer agendar para o filho,
- Quando ele tocar no chip "Corte Infantil",
- Então deve ver apenas salões que atendem público infantil, sem salões que não informaram esse serviço.

---

### US-16 — Listagem de Salões Filtrados com Distância

**História de Usuário**

- Como Roberto Alves, que está em uma localização específica da cidade durante seu intervalo,
- Eu quero ver os salões que atendem meu filtro de serviço ordenados por proximidade da minha localização atual,
- Para ir ao salão mais próximo sem se deslocar à toa e garantir que vai ter tempo de ser atendido no intervalo disponível.

---

**Detalhes da Tela**

Listagem filtrada com distância em destaque em cada card.

Estrutura Visual (top-down, mobile-first):

- **Ordenação padrão por distância:** Salões mais próximos aparecem primeiro.
- **Distância em destaque no card:** Exibida em tamanho legível abaixo do nome — "📍 800 m" ou "1,3 km".
- **Tempo estimado a pé/carro:** Ex.: "~10 min de carro" ao lado da distância.
- **Indicador de agendamento disponível hoje:** Badge "Tem horário hoje" em salões com disponibilidade no dia atual.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Listagem ordenada por distância**
- Dado que Roberto aplicou o filtro "Barba" e está com localização ativa,
- Quando a listagem for exibida,
- Então os salões devem estar ordenados do mais próximo ao mais distante, com a distância em destaque em cada card.

**Cenário 2: Badge de disponibilidade hoje**
- Dado que Roberto está visualizando a listagem filtrada,
- Quando um salão tiver horários disponíveis no dia atual,
- Então deve exibir o badge "Tem horário hoje" no card desse salão, priorizá-lo visualmente na listagem.

---

### US-17 — Perfil do Salão com Indicação de Agendamento Disponível

**História de Usuário**

- Como Roberto Alves, que chegou ao perfil de um salão que parece atender suas necessidades,
- Eu quero confirmar rapidamente que o salão aceita agendamento pelo app e tem horários disponíveis para o serviço que preciso,
- Para ter segurança de que não vou chegar e ter que esperar sem previsão, respeitando minha janela de tempo.

---

**Detalhes da Tela**

Perfil do salão com destaque para disponibilidade de agendamento e tipos de serviço atendidos.

Estrutura Visual (top-down, mobile-first):

- **Badge de agendamento online:** Indicação destacada próxima ao nome — "✅ Aceita agendamento pelo app".
- **Público atendido:** Tags visíveis no início do perfil — "Masculino", "Infantil", "Feminino".
- **Próximos horários disponíveis:** Seção compacta no topo do perfil — "Próximos horários: Hoje 15h, 16h30 | Amanhã 9h, 11h" — sem precisar rolar até o calendário.
- **Botão de agendamento rápido:** "Agendar agora" — em destaque, acessível sem scroll.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Confirmação de agendamento disponível**
- Dado que Roberto entrou no perfil de um salão,
- Quando a tela carregar,
- Então deve ver o badge "Aceita agendamento pelo app" e os próximos horários disponíveis visíveis acima da dobra, sem precisar rolar.

**Cenário 2: Salão sem agendamento online**
- Dado que Roberto entrou no perfil de um salão que não usa o sistema de agendamento,
- Quando a tela carregar,
- Então deve ver a indicação "Apenas presencial" e o número de telefone para contato, sem exibir botão de agendamento online.

---

### US-18 — Calendário de Disponibilidade (Roberto)

**História de Usuário**

- Como Roberto Alves, que precisa de um horário específico que caiba no seu intervalo,
- Eu quero visualizar os horários disponíveis de forma clara e rápida, filtrando pelo dia de hoje ou pelos próximos dias,
- Para verificar se existe um horário compatível com minha janela de tempo antes de decidir se vale a pena ir ao salão.

---

**Detalhes da Tela**

Calendário com foco em disponibilidade imediata e visualização rápida de hoje.

Estrutura Visual (top-down, mobile-first):

- **Aba "Hoje" como padrão:** Calendário abre diretamente no dia atual, mostrando os horários disponíveis de hoje sem precisar navegar.
- **Visualização de horários em lista:** Horários do dia em formato de lista vertical com horário e duração — mais rápido de ler do que grade.
- **Indicação de tempo até o horário:** Ex.: "15h00 — em 1h30min" — ajuda Roberto a calcular se cabe no intervalo.
- **Navegação para próximos dias:** Abas dos próximos 5 dias visíveis horizontalmente no topo do calendário.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Abertura no dia atual**
- Dado que Roberto iniciou o fluxo de agendamento,
- Quando a tela de calendário abrir,
- Então deve exibir automaticamente os horários disponíveis do dia atual sem necessidade de navegação.

**Cenário 2: Sem horários hoje**
- Dado que o salão não tem horários disponíveis no dia atual,
- Quando Roberto acessar o calendário,
- Então deve ver a mensagem "Sem horários hoje" e o próximo dia com disponibilidade deve ser destacado automaticamente.

---

## Jornada 2 — Agendamento com Horário Garantido

---

### US-19 — Seleção de Serviço no Perfil do Salão (Roberto)

**História de Usuário**

- Como Roberto Alves, que quer agendar corte, barba ou corte infantil de forma rápida,
- Eu quero selecionar o serviço desejado com o menor número de toques possível,
- Para iniciar o agendamento sem perder tempo navegando por um catálogo longo e irrelevante para minha necessidade.

---

**Detalhes da Tela**

Tela de seleção de serviço otimizada para decisão rápida.

Estrutura Visual (top-down, mobile-first):

- **Serviços em destaque:** Os serviços mais buscados por perfil masculino/infantil aparecem primeiro — "Corte", "Barba", "Corte Infantil".
- **Card de serviço compacto:** Nome, duração e preço em uma linha — sem descrições longas.
- **Seleção por toque único:** Um toque no card seleciona o serviço e avança automaticamente para o calendário, sem botão de "confirmar" intermediário (se apenas um serviço for selecionável por vez).

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Seleção rápida de serviço**
- Dado que Roberto entrou no fluxo de agendamento,
- Quando a tela de seleção de serviço carregar,
- Então os serviços masculinos e infantis devem aparecer no topo da lista, visíveis sem scroll.

**Cenário 2: Avanço automático após seleção**
- Dado que Roberto tocou em "Corte Masculino",
- Quando o sistema registrar a seleção,
- Então deve avançar diretamente para o calendário de horários sem etapa intermediária de confirmação.

---

### US-20 — Calendário de Horários Disponíveis (Roberto)

*(Touchpoint idêntico ao US-18 no contexto do fluxo de agendamento — referência cruzada)*

**História de Usuário**

- Como Roberto Alves, que selecionou o serviço e precisa de um horário que se encaixe no seu intervalo,
- Eu quero visualizar os horários disponíveis com indicação de quando cada um ocorre em relação ao horário atual,
- Para escolher um horário que eu consiga cumprir sem comprometer meus compromissos do dia.

*(Detalhes da Tela e Critérios de Aceitação idênticos ao US-18 — aplicados ao contexto pós-seleção de serviço.)*

---

### US-21 — Tela de Confirmação do Agendamento (Roberto)

*(Estrutura idêntica ao US-11 aplicada à persona Roberto)*

**História de Usuário**

- Como Roberto Alves, que escolheu o serviço e o horário que cabe no seu intervalo,
- Eu quero visualizar um resumo rápido do agendamento antes de confirmar,
- Para ter segurança de que vou ser atendido no horário exato sem surpresas de espera, e poder planejar o restante do dia com confiança.

---

**Detalhes da Tela**

*(Idêntica ao US-11, com ênfase adicional no horário exato e no tempo estimado de término.)*

Adição específica para Roberto:
- **Tempo estimado de término:** "Previsão de saída: 15h45" — em destaque para ajudar no planejamento da rotina.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Confirmação com horário exato**
- Dado que Roberto está na tela de confirmação,
- Quando a tela carregar,
- Então deve ver o horário de início e o horário estimado de término do serviço, ambos em destaque.

**Cenário 2: Confirmação bem-sucedida**
- Dado que Roberto confirmou o agendamento,
- Quando o sistema registrar,
- Então deve receber confirmação imediata com horário exato e endereço do salão, e o app deve exibir opção de adicionar ao calendário do dispositivo.

---

### US-22 — Notificação Push / E-mail de Confirmação (Roberto)

*(Estrutura base idêntica ao US-12)*

**História de Usuário**

- Como Roberto Alves, que tem uma rotina imprevisível e precisa ter os dados do agendamento sempre acessíveis,
- Eu quero receber confirmação imediata com horário, serviço e endereço do salão,
- Para planejar o restante do dia com confiança e ter todos os dados em um lugar de fácil acesso.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Notificação com endereço**
- Dado que Roberto confirmou o agendamento,
- Quando o sistema registrar,
- Então a notificação push deve incluir o endereço do salão além do serviço e horário, para que Roberto possa se planejar sem abrir o app.

---

### US-23 — Notificação Push de Lembrete (Roberto)

*(Estrutura base idêntica ao US-13)*

**História de Usuário**

- Como Roberto Alves, que pode ter o dia virado de cabeça para baixo por imprevistos na rotina,
- Eu quero receber um lembrete automático antes do meu agendamento,
- Para não perder o horário nem comprometer meus outros compromissos do dia.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Lembrete com antecedência adequada**
- Dado que Roberto tem um agendamento confirmado,
- Quando faltarem 1 hora para o horário agendado,
- Então deve receber notificação push com serviço, horário e endereço, com opção de abrir o mapa diretamente da notificação.

---

# Persona: Dona Márcia Silva — Proprietária de Salão Pequeno

---

## Jornada 1 — Cadastro e Configuração do Salão

---

### US-24 — Tela Inicial / Onboarding para Salões

**História de Usuário**

- Como Dona Márcia Silva, proprietária de um salão pequeno que usa pouca tecnologia no dia a dia,
- Eu quero acessar o aplicativo pela primeira vez e entender claramente que existe uma área específica para donos de salão, com uma proposta de valor simples e sem jargões técnicos,
- Para sentir que esse app foi pensado para alguém como eu, e ter coragem de começar o cadastro sem medo de errar.

---

**Detalhes da Tela**

Tela de entrada com seleção de perfil (Cliente ou Salão) antes do onboarding.

Estrutura Visual (top-down, mobile-first):

- **Logotipo do MeuSalão centralizado.**
- **Pergunta de entrada:** "Como você quer usar o MeuSalão?" — texto grande e amigável.
- **Dois cards de seleção:**
  - "Sou cliente — quero encontrar salões" (ícone de tesoura/espelho)
  - "Tenho um salão — quero receber clientes" (ícone de prédio/salão)
- **Linguagem acessível:** Sem termos como "cadastrar empresa" ou "criar conta comercial".
- **Rodapé discreto:** "Já tenho uma conta. Entrar."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Seleção do perfil de salão**
- Dado que Dona Márcia abre o aplicativo pela primeira vez,
- Quando a tela de seleção de perfil carregar,
- Então deve ver dois cards distintos: um para clientes e um para donos de salão, com linguagem simples e sem termos técnicos.

**Cenário 2: Início do onboarding de salão**
- Dado que Dona Márcia tocou em "Tenho um salão",
- Quando o sistema processar a seleção,
- Então deve iniciar o fluxo de onboarding específico para proprietários, com a primeira tela explicando os benefícios em até 3 pontos simples.

---

### US-25 — Fluxo de Onboarding Guiado

**História de Usuário**

- Como Dona Márcia Silva, que nunca configurou um sistema de agendamento digital antes,
- Eu quero ser guiada passo a passo pelo processo de configuração do meu salão, com instruções claras em cada etapa,
- Para completar o cadastro com confiança, sem precisar de ajuda de ninguém e sem medo de fazer algo errado.

---

**Detalhes da Tela**

Fluxo de onboarding em múltiplas telas com barra de progresso, uma ação por tela.

Estrutura Visual (top-down, mobile-first):

- **Barra de progresso:** No topo — "Passo 1 de 5", com barra visual de preenchimento.
- **Uma instrução por tela:** Título grande e direto (ex.: "Vamos começar pelo nome do seu salão"), campo de ação e botão "Próximo".
- **Texto de apoio:** Abaixo do campo, uma dica curta em linguagem simples — ex.: "Use o nome que seus clientes já conhecem."
- **Botão "Salvar e sair":** Discreto no rodapé — permite pausar o cadastro e retomar depois.
- **Indicador de etapas:** Pontos ou steps mostrando onde Dona Márcia está no processo.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Progressão pelo onboarding**
- Dado que Dona Márcia iniciou o fluxo de onboarding,
- Quando ela preenche o campo da etapa atual e toca em "Próximo",
- Então o sistema deve avançar para a próxima etapa, atualizando a barra de progresso, sem perder os dados já preenchidos.

**Cenário 2: Pausa e retomada do onboarding**
- Dado que Dona Márcia tocou em "Salvar e sair" no meio do onboarding,
- Quando ela abrir o app novamente,
- Então o sistema deve identificar que o cadastro está incompleto e oferecê-la a opção de retomar de onde parou, sem precisar recomeçar do zero.

**Cenário 3: Tentativa de avançar com campo vazio**
- Dado que Dona Márcia está em uma etapa do onboarding com campo obrigatório,
- Quando ela tocar em "Próximo" sem preencher o campo,
- Então o sistema deve exibir uma mensagem de erro amigável indicando o que está faltando, sem avançar para a próxima etapa.

---

### US-26 — Formulário de Cadastro do Salão

**História de Usuário**

- Como Dona Márcia Silva, que está preenchendo as informações básicas do seu salão,
- Eu quero preencher nome, endereço, telefone e foto do salão em um formulário simples, com campos claramente identificados,
- Para colocar meu salão no mapa digital pela primeira vez, sentindo que estou construindo algo importante para o meu negócio.

---

**Detalhes da Tela**

Formulário de cadastro básico do salão, dividido em etapas dentro do onboarding.

Estrutura Visual (top-down, mobile-first):

- **Campo: Nome do salão** — label "Nome do salão", placeholder "Ex.: Salão da Márcia".
- **Campo: Endereço** — com sugestão automática de endereço ao digitar (integração com API de CEP/mapas).
- **Campo: Telefone** — com máscara de formatação automática.
- **Campo: Foto do salão** — botão "Adicionar foto" que abre câmera ou galeria; preview da foto após seleção.
- **Campo: Descrição (opcional)** — campo de texto livre, limite de caracteres visível — "Conte um pouco sobre o seu salão (opcional)".

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Preenchimento do formulário básico**
- Dado que Dona Márcia está na etapa de informações básicas do onboarding,
- Quando ela preenche nome, endereço e telefone,
- E toca em "Próximo",
- Então o sistema deve validar os campos e avançar para a próxima etapa, sem exigir a foto como obrigatória.

**Cenário 2: Upload de foto do salão**
- Dado que Dona Márcia tocou em "Adicionar foto",
- Quando ela selecionar uma imagem da galeria,
- Então a foto deve aparecer como preview na tela antes de avançar, com opção de trocar antes de confirmar.

**Cenário 3: Validação de endereço**
- Dado que Dona Márcia começou a digitar o endereço,
- Quando ela digitar o CEP ou o nome da rua,
- Então o sistema deve sugerir o endereço completo automaticamente para facilitar o preenchimento.

---

### US-27 — Cadastro de Serviços e Preços

**História de Usuário**

- Como Dona Márcia Silva, que oferece diferentes serviços com preços variados,
- Eu quero cadastrar cada serviço que ofereço com nome, duração e preço em um formulário simples,
- Para organizar no sistema o que antes só existia na minha cabeça ou anotado no caderno, e garantir que as clientes vejam as opções corretas ao agendar.

---

**Detalhes da Tela**

Tela de cadastro de serviços com opção de adicionar múltiplos itens.

Estrutura Visual (top-down, mobile-first):

- **Lista de serviços cadastrados:** Cards de cada serviço já adicionado, com ícone de editar e excluir.
- **Botão "Adicionar serviço":** Em destaque, abre formulário inline ou modal com:
  - Campo: Nome do serviço (ex.: "Manicure")
  - Campo: Categoria (seleção — Cabelo, Unhas, Estética, Barba)
  - Campo: Duração estimada (seletor — ex.: 30 min, 45 min, 1h, 1h30)
  - Campo: Preço (campo numérico com prefixo R$)
- **Serviços sugeridos:** Chips de sugestão rápida — "Manicure", "Pedicure", "Corte", "Escova" — para adicionar com um toque e editar depois.
- **Botão "Próximo":** Ativo após adicionar pelo menos um serviço.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Adição de serviço**
- Dado que Dona Márcia está na etapa de cadastro de serviços,
- Quando ela preenche nome, duração e preço de um serviço e toca em "Salvar serviço",
- Então o serviço deve aparecer na lista de serviços cadastrados e o formulário deve limpar para adicionar o próximo.

**Cenário 2: Uso de sugestão rápida**
- Dado que Dona Márcia tocou em um chip de sugestão rápida (ex.: "Manicure"),
- Quando o sistema processar o toque,
- Então deve abrir o formulário de serviço já com o nome "Manicure" preenchido, para que ela só precise informar duração e preço.

**Cenário 3: Edição de serviço cadastrado**
- Dado que Dona Márcia percebeu um erro no preço de um serviço já cadastrado,
- Quando ela tocar no ícone de editar do card do serviço,
- Então o formulário de edição deve abrir com os dados atuais preenchidos, permitindo alterar somente o campo necessário.

---

### US-28 — Configuração de Agenda e Horários

**História de Usuário**

- Como Dona Márcia Silva, que tem horários de funcionamento definidos e dias de folga,
- Eu quero configurar os dias da semana em que atendo e os horários disponíveis em cada dia,
- Para garantir que as clientes só consigam agendar em horários que realmente estou disponível, evitando conflitos e surpresas.

---

**Detalhes da Tela**

Tela de configuração de horários de funcionamento e disponibilidade.

Estrutura Visual (top-down, mobile-first):

- **Seleção de dias da semana:** Toggle para cada dia (Seg, Ter, Qua, Qui, Sex, Sáb, Dom) — ativado em verde, desativado em cinza.
- **Horários por dia:** Para cada dia ativado, campos de "Abertura" e "Fechamento" com seletor de hora.
- **Intervalo (opcional):** Campo para configurar horário de almoço ou pausa — "Das [hora] às [hora]".
- **Copiar para outros dias:** Botão "Aplicar estes horários a todos os dias úteis" para agilizar a configuração.
- **Preview da agenda:** Visualização resumida dos dias e horários configurados antes de salvar.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Configuração de dias e horários**
- Dado que Dona Márcia está na etapa de configuração de agenda,
- Quando ela ativa os dias que atende e define horário de abertura e fechamento para cada um,
- E toca em "Salvar configuração",
- Então o sistema deve salvar os horários e exibir um preview da agenda configurada para confirmação visual.

**Cenário 2: Aplicar horários a múltiplos dias**
- Dado que Dona Márcia configurou o horário de segunda-feira,
- Quando ela tocar em "Aplicar a todos os dias úteis",
- Então o mesmo horário deve ser replicado para terça a sexta, mantendo sábado e domingo com configuração independente.

**Cenário 3: Validação de horários inconsistentes**
- Dado que Dona Márcia inseriu horário de fechamento antes do horário de abertura por engano,
- Quando o sistema validar os campos,
- Então deve exibir erro amigável — "O horário de fechamento deve ser depois do horário de abertura" — sem avançar.

---

### US-29 — Tela de Publicação e Confirmação do Perfil

**História de Usuário**

- Como Dona Márcia Silva, que concluiu o preenchimento de todas as informações do salão,
- Eu quero ver um resumo do que configurei antes de publicar e confirmar com um único toque que meu salão está disponível na plataforma,
- Para sentir orgulho de ter concluído o cadastro e animação por estar presente digitalmente pela primeira vez.

---

**Detalhes da Tela**

Tela de revisão final e publicação do perfil.

Estrutura Visual (top-down, mobile-first):

- **Título comemorativo:** "Seu salão está pronto para receber clientes! 🎉"
- **Preview do perfil público:** Miniatura de como o perfil vai aparecer para as clientes, com foto, nome, localização e um serviço em destaque.
- **Checklist de completude:** Itens concluídos com check verde — "✅ Informações básicas", "✅ Serviços cadastrados", "✅ Horários configurados".
- **Itens opcionais pendentes:** Indicação de itens que podem melhorar o perfil — "📷 Adicione mais fotos para atrair mais clientes."
- **Botão de publicação:** "Publicar meu salão" — largo, em destaque, em cor celebratória.
- **Ação secundária:** "Revisar antes de publicar" — link textual.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização do resumo antes de publicar**
- Dado que Dona Márcia concluiu todas as etapas obrigatórias do onboarding,
- Quando a tela de publicação carregar,
- Então deve ver o checklist com todos os itens obrigatórios marcados como concluídos e o preview do perfil público.

**Cenário 2: Publicação do perfil**
- Dado que Dona Márcia tocou em "Publicar meu salão",
- Quando o sistema processar a publicação,
- Então o perfil deve ficar visível na plataforma para buscas de clientes e Dona Márcia deve receber uma notificação confirmando que o salão está publicado.

**Cenário 3: Publicação com etapa obrigatória incompleta**
- Dado que Dona Márcia tentou publicar sem ter cadastrado nenhum serviço,
- Quando ela tocar em "Publicar meu salão",
- Então o sistema deve impedir a publicação e indicar claramente qual etapa obrigatória está pendente, com link direto para completá-la.

---

## Jornada 2 — Gestão de Agenda

---

### US-30 — Painel de Gestão / Dashboard da Agenda

**História de Usuário**

- Como Dona Márcia Silva, que começa cada dia querendo saber o que tem para trabalhar,
- Eu quero acessar um painel simples que mostre de imediato os agendamentos do dia e os alertas mais importantes,
- Para começar o dia organizada, diferente de antes quando precisava olhar várias anotações no caderno para montar a lista do dia.

---

**Detalhes da Tela**

Dashboard principal da área de gestão, otimizado para uso diário rápido.

Estrutura Visual (top-down, mobile-first):

- **Saudação personalizada:** "Bom dia, Márcia! Você tem X agendamentos hoje."
- **Cards de resumo do dia:**
  - Total de agendamentos do dia
  - Próximo agendamento (nome da cliente, serviço, horário)
  - Agendamentos pendentes de confirmação
- **Atalhos rápidos:** "Ver agenda completa", "Novo bloqueio de horário", "Ver notificações".
- **Alertas em destaque:** Card em amarelo para agendamentos sem confirmação próximos ao horário.
- **Navegação inferior fixa:** Ícones de "Hoje", "Agenda", "Perfil", "Notificações".

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização do resumo do dia**
- Dado que Dona Márcia abre o app no início do dia,
- Quando o dashboard carregar,
- Então deve ver o total de agendamentos do dia, o próximo agendamento e os alertas de confirmações pendentes, sem precisar navegar para outra tela.

**Cenário 2: Sem agendamentos no dia**
- Dado que não há agendamentos cadastrados para o dia atual,
- Quando o dashboard carregar,
- Então deve exibir mensagem amigável — "Nenhum agendamento para hoje." — sem exibir tela vazia sem contexto.

---

### US-31 — Tela de Agenda do Dia/Semana

**História de Usuário**

- Como Dona Márcia Silva, que precisa visualizar sua agenda de atendimentos de forma organizada,
- Eu quero ver todos os agendamentos do dia e da semana em formato de agenda, com nome da cliente, serviço e horário em cada bloco,
- Para ter a tranquilidade de enxergar tudo de uma vez e não esquecer nenhuma cliente ou criar conflitos de horário.

---

**Detalhes da Tela**

Tela de agenda em visualização diária e semanal.

Estrutura Visual (top-down, mobile-first):

- **Alternância de visualização:** Abas ou toggle — "Hoje" e "Semana".
- **Visualização diária:** Timeline vertical com blocos de horário; cada agendamento como um bloco colorido com nome da cliente, serviço e duração.
- **Visualização semanal:** Grade com os 7 dias; pontos ou badges indicando quantidade de agendamentos por dia.
- **Estado dos agendamentos:** Cores distintas — confirmado (verde), pendente (amarelo), cancelado (cinza).
- **Toque no agendamento:** Expande ou abre modal com detalhes completos — nome, serviço, telefone da cliente, status.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização dos agendamentos do dia**
- Dado que Dona Márcia está na tela de agenda na visualização "Hoje",
- Quando a tela carregar,
- Então deve ver todos os agendamentos do dia em ordem cronológica, com nome da cliente, serviço e horário visíveis em cada bloco.

**Cenário 2: Identificação de conflito de horário**
- Dado que dois agendamentos foram marcados para o mesmo horário por erro,
- Quando Dona Márcia visualizar a agenda do dia,
- Então o sistema deve destacar visualmente o conflito (ex.: sobreposição em vermelho) e exibir alerta para que ela resolva.

---

### US-32 — Notificação Push de Novo Agendamento

**História de Usuário**

- Como Dona Márcia Silva, que não fica com o celular na mão o tempo todo enquanto trabalha,
- Eu quero receber uma notificação imediata quando uma nova cliente fizer um agendamento pelo app,
- Para sentir que o sistema está trabalhando por mim mesmo quando estou ocupada atendendo, sem precisar ficar verificando o app manualmente.

---

**Detalhes da Tela**

Notificação push de novo agendamento recebido.

Estrutura da Notificação Push:

- **Título:** "Novo agendamento recebido! 📅"
- **Corpo:** "[Nome da cliente] agendou [Serviço] para [Data] às [Horário]."
- **Ação ao tocar:** Abre diretamente os detalhes do agendamento na agenda.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Recebimento de notificação de novo agendamento**
- Dado que uma cliente fez um agendamento no salão de Dona Márcia pelo app,
- Quando o sistema confirmar o agendamento,
- Então Dona Márcia deve receber uma notificação push em até 30 segundos com nome da cliente, serviço, data e horário.

**Cenário 2: Notificações desativadas**
- Dado que Dona Márcia não concedeu permissão para notificações push,
- Quando um novo agendamento for recebido,
- Então o agendamento deve aparecer no painel de gestão com badge de "Novo" ao próximo acesso ao app.

---

### US-33 — Status de Confirmação dos Agendamentos

**História de Usuário**

- Como Dona Márcia Silva, que precisa saber quais clientes realmente vão aparecer,
- Eu quero visualizar o status de confirmação de cada agendamento diretamente na tela de agenda,
- Para ter segurança de que os horários estão preenchidos por pessoas que vão aparecer, e me preparar adequadamente para o dia.

---

**Detalhes da Tela**

Indicadores de status de confirmação nos cards de agendamento da agenda.

Estrutura Visual (top-down, mobile-first):

- **Badge de status em cada agendamento:**
  - "✅ Confirmado" — cliente confirmou presença
  - "⏳ Aguardando" — lembrete enviado, sem resposta
  - "❌ Cancelado" — cliente cancelou
- **Filtro por status:** Na tela de agenda, opção de filtrar — "Ver apenas pendentes".
- **Ação rápida no card:** "Enviar lembrete manual" — botão discreto nos agendamentos com status "Aguardando".

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização de status**
- Dado que Dona Márcia está na tela de agenda do dia,
- Quando ela visualizar os agendamentos,
- Então cada agendamento deve exibir claramente seu status de confirmação com indicador visual (cor + ícone).

**Cenário 2: Filtro por pendentes**
- Dado que Dona Márcia quer focar nos agendamentos sem confirmação,
- Quando ela ativar o filtro "Ver apenas pendentes",
- Então a agenda deve exibir somente os agendamentos com status "Aguardando", ocultando os confirmados e cancelados.

---

### US-34 — Alerta de Agendamento Pendente de Confirmação / Lembrete Automático

**História de Usuário**

- Como Dona Márcia Silva, que antes mandava mensagem no WhatsApp para lembrar cada cliente,
- Eu quero que o sistema envie lembretes automáticos para as clientes que não confirmaram e me avise quando isso acontecer,
- Para ter alívio de não precisar fazer esse trabalho manualmente uma por uma, e ainda saber que as clientes foram avisadas.

---

**Detalhes da Tela**

Alerta no painel de gestão e notificação push para Dona Márcia sobre lembretes enviados.

Estrutura Visual — Alerta no Dashboard:

- **Card de alerta amarelo:** "3 clientes ainda não confirmaram o agendamento de amanhã. Lembretes automáticos foram enviados."
- **Link de ação:** "Ver detalhes" — abre a lista de agendamentos pendentes.

Notificação Push para Dona Márcia:

- **Título:** "Lembrete enviado para [Nome da cliente]"
- **Corpo:** "O lembrete automático de confirmação foi enviado para o agendamento de [Serviço] às [Horário]."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Envio automático de lembrete**
- Dado que uma cliente tem agendamento para o dia seguinte e não confirmou presença,
- Quando faltarem 24 horas para o agendamento,
- Então o sistema deve enviar automaticamente um lembrete para a cliente (push/e-mail) e atualizar o status do agendamento para "Lembrete enviado".

**Cenário 2: Alerta para Dona Márcia**
- Dado que o sistema enviou lembretes automáticos para clientes pendentes,
- Quando Dona Márcia acessar o dashboard,
- Então deve ver o card de alerta indicando quantas clientes receberam lembrete e quantas ainda não confirmaram.

---

## Jornada 3 — Visibilidade e Captação de Clientes Novos

---

### US-35 — Perfil Público do Salão (Dona Márcia)

**História de Usuário**

- Como Dona Márcia Silva, que quer saber como o salão está aparecendo para possíveis clientes,
- Eu quero acessar a visualização pública do meu perfil, exatamente como uma cliente veria,
- Para verificar se as informações estão corretas e se o perfil está atraente o suficiente para que novas clientes escolham meu salão.

---

**Detalhes da Tela**

Tela de preview do perfil público, acessível pelo painel de gestão.

Estrutura Visual (top-down, mobile-first):

- **Botão de acesso no painel:** "Ver como cliente vê" — ícone de olho ao lado do nome do salão no dashboard.
- **Visualização fiel ao perfil público:** Exibe exatamente o que a cliente enxerga — fotos, serviços, preços, avaliações, horários.
- **Banner de modo de visualização:** Faixa discreta no topo — "Você está visualizando como cliente. Toque para editar." — para Dona Márcia não se confundir com a área de gestão.
- **Botão de editar perfil:** Fixado no rodapé — "Editar perfil" — acessível durante a visualização.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Acesso ao perfil público**
- Dado que Dona Márcia está no painel de gestão,
- Quando ela tocar em "Ver como cliente vê",
- Então deve ser apresentada à visualização pública do perfil, idêntica ao que as clientes veem, com banner indicando o modo de visualização.

**Cenário 2: Edição a partir do perfil público**
- Dado que Dona Márcia está visualizando o perfil público e identificou uma informação desatualizada,
- Quando ela tocar em "Editar perfil",
- Então deve ser redirecionada para a área de edição do campo correspondente na área de gestão.

---

### US-36 — Resultado de Busca por Proximidade e Serviço

**História de Usuário**

- Como Dona Márcia Silva, que quer entender como o salão aparece nas buscas das clientes,
- Eu quero ver uma simulação de como o salão aparece nos resultados de busca por localização e tipo de serviço,
- Para sentir que está competindo de igual para igual com salões que antes pareciam mais avançados digitalmente.

---

**Detalhes da Tela**

Seção informativa no painel de gestão sobre visibilidade nas buscas.

Estrutura Visual (top-down, mobile-first):

- **Card de visibilidade:** No dashboard — "Seu salão aparece em buscas por: [lista de serviços cadastrados] na região [bairro/cidade]."
- **Dicas de melhoria:** "Adicione mais fotos para aparecer antes dos concorrentes." — sugestões acionáveis.
- **Indicador de completude do perfil:** Barra de progresso — "Perfil 70% completo. Complete para aumentar a visibilidade."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição das informações de visibilidade**
- Dado que Dona Márcia acessa o painel de gestão,
- Quando ela visualizar o card de visibilidade,
- Então deve ver claramente em quais buscas seu salão aparece, com base nos serviços e localização cadastrados.

**Cenário 2: Dicas de melhoria acionáveis**
- Dado que o perfil de Dona Márcia está incompleto,
- Quando ela visualizar as dicas de melhoria,
- Então cada dica deve ter um link direto para a seção do perfil que precisa ser completada, sem exigir navegação manual.

---

### US-37 — Notificação de Novo Agendamento / Painel de Gestão (Captação)

*(Touchpoint de captação — primeiro agendamento de cliente nova)*

**História de Usuário**

- Como Dona Márcia Silva, que acabou de receber o primeiro agendamento de uma cliente que não conhecia o salão antes,
- Eu quero ser notificada de forma especial quando um agendamento vier de uma cliente nova encontrada pela plataforma,
- Para sentir a validação de que o investimento digital está valendo a pena e que a plataforma está cumprindo sua promessa.

---

**Detalhes da Tela**

Notificação push e destaque no painel para agendamentos de clientes novas.

Estrutura da Notificação Push:

- **Título:** "Nova cliente encontrou seu salão! 🌟"
- **Corpo:** "[Nome] agendou [Serviço] para [Data]. Ela encontrou você pelo MeuSalão."

Destaque no Painel de Gestão:

- **Badge "Nova cliente":** Agendamentos de clientes que nunca foram ao salão antes recebem badge destacado na agenda.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Notificação de cliente nova**
- Dado que uma cliente nova (sem histórico no salão) faz o primeiro agendamento,
- Quando o sistema confirmar o agendamento,
- Então Dona Márcia deve receber notificação push com indicação de que é uma cliente nova encontrada pela plataforma.

**Cenário 2: Badge na agenda**
- Dado que Dona Márcia acessa a agenda após receber agendamento de cliente nova,
- Quando visualizar o agendamento na lista,
- Então deve ver o badge "Nova cliente" destacado no card do agendamento.

---

### US-38 — Seção de Avaliações no Perfil do Salão (Dona Márcia)

**História de Usuário**

- Como Dona Márcia Silva, que antes recebia elogios apenas pessoalmente ou pelo WhatsApp,
- Eu quero ver as avaliações que as clientes deixam no meu perfil público, consolidadas em um único lugar,
- Para sentir que o boca a boca agora tem um lugar fixo e visível para todo mundo, valorizando o trabalho que sempre fiz.

---

**Detalhes da Tela**

Seção de avaliações na área de gestão, com visualização das avaliações recebidas.

Estrutura Visual (top-down, mobile-first):

- **Resumo de avaliações:** Nota média em destaque, número total de avaliações.
- **Lista de avaliações recentes:** Cards com nome da cliente, serviço avaliado, nota e comentário.
- **Indicação de avaliação nova:** Badge "Nova avaliação" nas avaliações ainda não vistas pela proprietária.
- **Notificação push ao receber nova avaliação:** "Você recebeu uma nova avaliação ⭐ — [Nome da cliente] avaliou [Serviço]."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização das avaliações recebidas**
- Dado que Dona Márcia acessa a seção de avaliações no painel de gestão,
- Quando a tela carregar,
- Então deve ver a nota média e as avaliações recentes com nome da cliente, serviço e comentário.

**Cenário 2: Notificação de nova avaliação**
- Dado que uma cliente deixou uma avaliação no perfil do salão,
- Quando o sistema registrar a avaliação,
- Então Dona Márcia deve receber notificação push informando que recebeu uma nova avaliação, com a nota e o nome da cliente.

---

# Persona: Renata Duarte — Proprietária de Salão Médio-Grande

---

## Jornada 1 — Cadastro com Importação de Dados

---

### US-39 — Tela Inicial / Onboarding para Salões (Renata)

**História de Usuário**

- Como Renata Duarte, proprietária de um salão médio-grande que já tentou outras plataformas e se frustrou com o retrabalho de recadastrar tudo,
- Eu quero ver na tela de entrada do MeuSalão uma indicação clara de que a plataforma permite importar dados existentes,
- Para sentir que desta vez será diferente, e não ter que recomeçar do zero mais uma vez.

---

**Detalhes da Tela**

*(Base idêntica ao US-24, com diferencial de comunicar a importação de dados já na tela de entrada.)*

Adição específica para o perfil de Renata:

- **Destaque na tela de onboarding de salão:** Após selecionar "Tenho um salão", exibir bullet point em destaque — "✅ Importe sua base de clientes e catálogo de serviços sem recadastrar tudo."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização do diferencial de importação**
- Dado que Renata selecionou o perfil "Tenho um salão" na tela inicial,
- Quando a tela de onboarding para salões carregar,
- Então deve ver menção clara à funcionalidade de importação de dados, com linguagem que transmita que ela não precisará recadastrar sua base atual.

---

### US-40 — Tela de Importação de Dados via CSV

**História de Usuário**

- Como Renata Duarte, que mantém sua base de clientes e catálogo de serviços em planilhas,
- Eu quero encontrar uma opção clara de importar esses dados via arquivo CSV, com instruções simples de como preparar a planilha,
- Para migrar para a plataforma sem perder o que construí, sentindo surpresa positiva por não precisar recomeçar do zero.

---

**Detalhes da Tela**

Tela de importação de dados dentro do fluxo de onboarding para salões médio-grandes.

Estrutura Visual (top-down, mobile-first):

- **Título:** "Importe seus dados em segundos."
- **Subtítulo:** "Você pode importar sua lista de clientes e catálogo de serviços de uma planilha. Simples assim."
- **Dois tipos de importação:**
  - Card: "Importar base de clientes" — ícone de pessoas
  - Card: "Importar catálogo de serviços" — ícone de lista
- **Link de template:** "Baixar modelo de planilha" — disponibiliza o CSV modelo com os campos esperados.
- **Botão de upload:** "Selecionar arquivo CSV" — abre o gerenciador de arquivos do dispositivo.
- **Opção alternativa:** "Prefiro preencher manualmente" — link textual discreto para o fluxo padrão.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização da opção de importação**
- Dado que Renata está no fluxo de onboarding para salões,
- Quando chegar na etapa de cadastro de dados,
- Então deve ver a opção de importação via CSV em destaque, antes da opção de preenchimento manual.

**Cenário 2: Download do template**
- Dado que Renata tocou em "Baixar modelo de planilha",
- Quando o sistema processar a ação,
- Então deve disponibilizar o arquivo CSV modelo com os campos corretos nomeados e um exemplo de linha preenchida.

---

### US-41 — Upload e Processamento da Planilha CSV

**História de Usuário**

- Como Renata Duarte, que preparou a planilha com sua base de clientes e catálogo de serviços,
- Eu quero fazer o upload do arquivo e ver o sistema processar os dados com feedback visual de progresso,
- Para ter confiança de que o histórico que construí está sendo importado corretamente, sem perda de informações.

---

**Detalhes da Tela**

Tela de upload e processamento com feedback em tempo real.

Estrutura Visual (top-down, mobile-first):

- **Área de upload:** Zona de toque para selecionar arquivo — "Toque para selecionar o arquivo CSV" — com ícone de planilha.
- **Feedback de upload:** Barra de progresso do upload do arquivo.
- **Feedback de processamento:** Animação de carregamento com mensagem — "Estamos lendo sua planilha... Isso pode levar alguns segundos."
- **Resumo pré-revisão:** Após processamento — "Encontramos X clientes e Y serviços na sua planilha. Deseja revisar antes de importar?"
- **Botão de revisar:** "Revisar dados" — em destaque.
- **Tratamento de erro de formato:** Mensagem clara se o arquivo não for um CSV válido — "Arquivo não reconhecido. Certifique-se de usar o modelo disponibilizado."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Upload bem-sucedido**
- Dado que Renata selecionou um arquivo CSV válido,
- Quando o upload e o processamento forem concluídos,
- Então deve ver o resumo com quantidade de clientes e serviços encontrados, e o botão para revisar antes de confirmar a importação.

**Cenário 2: Arquivo com formato inválido**
- Dado que Renata tentou fazer upload de um arquivo que não é um CSV válido,
- Quando o sistema tentar processar o arquivo,
- Então deve exibir mensagem de erro clara indicando o problema e sugerindo baixar o template para referenciar o formato correto.

**Cenário 3: Planilha com dados inconsistentes**
- Dado que a planilha de Renata contém algumas linhas com campos incompletos,
- Quando o sistema processar o arquivo,
- Então deve importar os dados válidos e indicar claramente quais linhas apresentaram inconsistências, permitindo que Renata corrija antes de confirmar.

---

### US-42 — Tela de Revisão dos Dados Importados

**História de Usuário**

- Como Renata Duarte, que precisa garantir que os dados foram importados corretamente antes de publicar o perfil,
- Eu quero revisar os dados importados em uma tela organizada, com possibilidade de editar ou excluir itens com problemas,
- Para sentir controle sobre o processo e ter segurança de que o perfil publicado vai refletir fielmente a realidade do Studio Renata.

---

**Detalhes da Tela**

Tela de revisão pós-importação com listas editáveis.

Estrutura Visual (top-down, mobile-first):

- **Abas de revisão:** "Clientes (X)" e "Serviços (Y)" — Renata alterna entre as duas listas.
- **Lista de clientes importados:** Nome, telefone e e-mail de cada cliente — com ícone de editar ou excluir ao lado.
- **Lista de serviços importados:** Nome, categoria, duração e preço — com ícone de editar ou excluir.
- **Itens com inconsistência:** Destacados em amarelo com ícone de atenção — "Campo 'preço' ausente. Toque para corrigir."
- **Botão de confirmar importação:** "Confirmar e importar" — fixado no rodapé, ativo após revisão.
- **Indicador de progresso de revisão:** "X itens com atenção. Corrija antes de continuar."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Revisão dos dados importados**
- Dado que o sistema processou a planilha de Renata com sucesso,
- Quando a tela de revisão carregar,
- Então deve exibir as listas de clientes e serviços importados, com destaque para os itens que precisam de correção.

**Cenário 2: Edição de item com inconsistência**
- Dado que Renata identificou um serviço importado sem preço,
- Quando ela tocar no ícone de editar desse serviço,
- Então deve abrir o formulário de edição com os dados já preenchidos, permitindo adicionar apenas o campo ausente.

**Cenário 3: Confirmação da importação**
- Dado que Renata revisou os dados e corrigiu as inconsistências,
- Quando ela tocar em "Confirmar e importar",
- Então o sistema deve importar todos os dados validados e avançar para a tela de publicação do perfil, exibindo resumo final do que foi importado.

---

### US-43 — Tela de Publicação e Confirmação do Perfil (Renata)

*(Estrutura base idêntica ao US-29)*

**História de Usuário**

- Como Renata Duarte, que concluiu o cadastro importando seus dados existentes,
- Eu quero publicar o perfil do Studio Renata com a satisfação de ter feito tudo sem retrabalho,
- Para sentir que desta vez o processo foi diferente — eficiente e respeitoso com o que já construí.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Publicação após importação**
- Dado que Renata concluiu o processo de importação e revisão dos dados,
- Quando a tela de publicação carregar,
- Então deve ver no checklist a indicação de que dados foram importados com sucesso, além dos demais itens obrigatórios.

---

## Jornada 2 — Captação de Clientes Novos via Plataforma

---

### US-44 — Perfil Público do Salão (Renata)

*(Estrutura base idêntica ao US-35)*

**História de Usuário**

- Como Renata Duarte, que quer verificar se o Studio Renata está sendo apresentado de forma profissional na plataforma,
- Eu quero acessar a visualização pública do perfil e confirmar que as informações estão atualizadas e o perfil está competitivo,
- Para ter expectativa realista sobre a visibilidade que a plataforma vai gerar para o studio.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Verificação do perfil público**
- Dado que Renata acessa o painel de gestão do Studio Renata,
- Quando ela tocar em "Ver como cliente vê",
- Então deve ver o perfil exatamente como clientes potenciais enxergam, incluindo os dados importados, avaliações e galeria de fotos.

---

### US-45 — Resultado de Busca por Localização e Tipo de Serviço (Renata)

*(Estrutura base idêntica ao US-36)*

**História de Usuário**

- Como Renata Duarte, que investe na plataforma esperando aumento de visibilidade real,
- Eu quero ver dados concretos sobre como o Studio Renata está aparecendo nas buscas da região por tipo de serviço,
- Para validar que a plataforma está cumprindo a promessa de canal de captação além do Instagram.

---

**Detalhes da Tela**

Adição específica para Renata — métricas de visibilidade mais detalhadas:

- **Card de visibilidade expandido:** "Seu salão apareceu em X buscas esta semana." — dado simples de impressões.
- **Serviços mais buscados na região:** "Clientes próximos buscam muito: Coloração, Tratamento Capilar." — sugestão de serviços para destacar.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Exibição de métricas de visibilidade**
- Dado que Renata acessa o painel de gestão,
- Quando visualizar o card de visibilidade,
- Então deve ver o número de buscas em que o Studio Renata apareceu na semana atual, com indicação dos serviços mais buscados na região.

---

### US-46 — Notificação de Agendamento / Painel de Gestão (Renata)

*(Estrutura base idêntica ao US-37)*

**História de Usuário**

- Como Renata Duarte, que quer mensurar o retorno da plataforma como canal de captação,
- Eu quero ser notificada e ver no painel quando um agendamento vier de um cliente novo que encontrou o Studio Renata exclusivamente pela plataforma,
- Para sentir entusiasmo com um canal de captação que funciona além do Instagram, com dados que comprovem o resultado.

---

**Detalhes da Tela**

Adição específica para Renata — rastreamento de origem dos agendamentos:

- **Origem do agendamento no painel:** Tag visível no card do agendamento — "Via MeuSalão" ou "Via Instagram" — quando a origem for identificável.
- **Resumo semanal no dashboard:** "X novos clientes vieram pelo MeuSalão esta semana."

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Identificação da origem do agendamento**
- Dado que um cliente novo agendou diretamente pelo MeuSalão,
- Quando Renata visualizar o agendamento no painel,
- Então deve ver a tag "Via MeuSalão" indicando a origem do agendamento.

**Cenário 2: Resumo semanal de captação**
- Dado que Renata acessa o dashboard semanalmente,
- Quando visualizar o resumo da semana,
- Então deve ver a quantidade de novos clientes que vieram exclusivamente pela plataforma, separado dos clientes recorrentes.

---

### US-47 — Seção de Avaliações Consolidadas no Perfil (Renata)

**História de Usuário**

- Como Renata Duarte, que hoje tem avaliações espalhadas no Google, Instagram e boca a boca,
- Eu quero ver todas as avaliações dos clientes do Studio Renata consolidadas em um único lugar no perfil da plataforma,
- Para sentir que a reputação construída ao longo dos anos finalmente está centralizada e visível para novos clientes de forma organizada.

---

**Detalhes da Tela**

Seção de avaliações com destaque para volume e consistência.

Estrutura Visual (top-down, mobile-first):

- **Nota média em destaque:** Número grande com estrelas — visível no topo do perfil público.
- **Total de avaliações:** "X avaliações verificadas" — transmite credibilidade.
- **Avaliações recentes:** Cards com nome, serviço, nota e comentário.
- **Filtro por serviço:** Renata pode ver avaliações separadas por categoria de serviço.

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização das avaliações consolidadas**
- Dado que Renata acessa a seção de avaliações no painel de gestão,
- Quando a tela carregar,
- Então deve ver todas as avaliações recebidas pela plataforma com nota média, número total e lista de avaliações individuais com serviço e comentário.

**Cenário 2: Filtro por serviço**
- Dado que Renata quer analisar avaliações de um serviço específico,
- Quando ela aplicar o filtro por serviço (ex.: "Coloração"),
- Então a lista deve exibir apenas avaliações de clientes que realizaram esse serviço.

---

### US-48 — Painel de Gestão / Histórico de Agendamentos (Renata)

**História de Usuário**

- Como Renata Duarte, que quer acompanhar o crescimento do fluxo de novos clientes vindos pela plataforma,
- Eu quero acessar um histórico de agendamentos no painel com dados básicos de volume e origem dos clientes,
- Para sentir que o investimento na plataforma está gerando retorno mensurável, com dados concretos que diferenciam o MeuSalão dos anúncios do Instagram.

---

**Detalhes da Tela**

Painel de gestão com histórico e indicadores básicos de captação.

Estrutura Visual (top-down, mobile-first):

- **Resumo do período:** "Últimos 30 dias: X agendamentos | Y novos clientes."
- **Gráfico simples:** Barras semanais mostrando volume de agendamentos nas últimas 4 semanas.
- **Lista de agendamentos recentes:** Tabela compacta — cliente, serviço, data, origem (Via MeuSalão / Recorrente).
- **Filtro por período:** "Esta semana", "Este mês", "Últimos 3 meses".
- **Destaque de clientes novos:** Filtro rápido "Ver apenas clientes novos".

---

**Critérios de Aceitação (BDD)**

**Cenário 1: Visualização do histórico de agendamentos**
- Dado que Renata acessa a seção de histórico no painel,
- Quando a tela carregar com filtro padrão "Este mês",
- Então deve ver o total de agendamentos do período, quantidade de clientes novos e a lista dos agendamentos recentes com origem identificada.

**Cenário 2: Filtro por clientes novos**
- Dado que Renata quer ver apenas o impacto da plataforma em novos clientes,
- Quando ela ativar o filtro "Ver apenas clientes novos",
- Então a lista deve exibir apenas agendamentos de clientes sem histórico anterior no Studio Renata, com origem "Via MeuSalão" quando aplicável.

**Cenário 3: Alternância de período**
- Dado que Renata quer comparar o desempenho mensal,
- Quando ela selecionar "Últimos 3 meses" no filtro de período,
- Então o gráfico e os totais devem ser atualizados para refletir os dados do período selecionado.

---

## Referências

- [personas.md](personas.md) — Personas do projeto
- [jornadas.md](jornadas.md) — Jornadas de usuário essenciais do MVP
- [detalhamentojornadas.md](detalhamentojornadas.md) — Jornadas detalhadas com touchpoints
- [jobstobedone.md](jobstobedone.md) — Jobs to Be Done dos dois segmentos
- [roadmap.md](roadmap.md) — Roadmap Estratégico de Negócio