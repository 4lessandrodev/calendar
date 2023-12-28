# Lib Calendário Configurável

[English Version](./README.md)

A **Lib Calendário Configurável** é uma biblioteca desenvolvida para facilitar a criação e manipulação de calendários personalizados. Com uma estrutura de árvore bem definida, permite uma navegação intuitiva e flexível, desde o nível de ano até o nível de slots de tempo.

## Estrutura de Árvore

A biblioteca opera em uma estrutura hierárquica de árvore da seguinte forma:

- **Ano**: Cada ano pode ser configurado e apontará para meses.
- **Mês**: Dentro de um ano, cada mês contém semanas.
- **Semana**: Cada semana possui dias.
- **Dia**: Cada dia é subdividido em horas.
- **Hora**: Dentro de um dia, cada hora possui slots de tempo.

Essa estrutura de árvore permite uma organização clara e eficiente de eventos e informações ao longo do tempo.

```mermaid
    graph TD
    A[Calendário Configurável] --> B[Ano]
    B --> C[Mês]
    C --> D[Semana]
    D --> E[Dia]
    E --> F[Hora]
    F --> G[Duração Slot]
    B --> H[...]
    C --> I[...]
    D --> J[...]
    E --> K[...]
    F --> L[...]
    G --> M[...]
```

## Funcionalidades Principais

### Criação de Calendário

Com a **Lib Calendário Configurável**, é possível criar calendários de diversas maneiras:

1. **Para Todos os Dias**: Defina a data de início, data fim, hora de início, hora de fim e a duração de cada slot para todos os dias.
2. **Para Dias Específicos**: Defina data de inicio, data fim, escolha dias da semana (segunda-feira, terça-feira, etc.) e configure a hora de início, hora de fim e duração do slot para cada um desses dias.
3. **Em Intervalos Específicos**: Configure o calendário para dias específicos (por exemplo, a cada 15 dias, 30 dias) a partir de uma data inicial, definindo a hora de início, hora de fim a duração do slot e a data fim.

#### Criar Configuração para todos os dias

O fluxo representa uma sequência estruturada para configurar um calendário personalizado. Começando pela seleção do ano e definindo as datas de início e fim, o processo avança para configurar o calendário para todos os dias. Posteriormente, os horários de início e término são especificados, culminando na definição da duração do slot. O fluxo conclui com uma revisão e confirmação das configurações, garantindo que todas as informações estejam corretas antes de finalizar a configuração do calendário.

```mermaid
graph TD
    A[Iniciar Configuração] --> B[Escolher Ano]
    B --> C[Selecionar Data de Início]
    C --> D[Selecionar Data de Fim]
    D --> E[Todos os Dias]
    E --> F1[Especificar Hora de Início]
    F1 --> F2[Especificar Hora de Término]
    F2 --> G[Especificar Duração do Slot]
    G --> H[Revisar e Confirmar]
    H --> I[Finalizar Configuração]
```

#### Para Dias Específicos

O fluxo delineia um processo estruturado adaptado para configurar um calendário com base em dias específicos da semana. Começando pela seleção de um ano e determinando as datas de início e fim, a configuração se concentra em escolher determinados dias da semana. Após isso, são definidos horários de início e término para cada dia selecionado. Posteriormente, a duração do slot para cada dia específico é especificada. O processo culmina com uma etapa de revisão e confirmação, garantindo configurações precisas antes de finalizar a configuração do calendário.

```mermaid
graph TD
    A[Iniciar Configuração] --> B[Escolher Ano]
    B --> C[Selecionar Data de Início]
    C --> D[Selecionar Data de Fim]
    D --> E[Escolher Dias da Semana]
    E --> F1[Especificar Hora de Início para cada dia]
    F1 --> F2[Especificar Hora de Término para cada dia]
    F2 --> G[Especificar Duração do Slot para cada]
    G --> H[Revisar e Confirmar]
    H --> I[Finalizar Configuração]
```

#### Em Intervalos Específicos

O diagrama de fluxo delineia um procedimento estruturado para configurar um calendário com base em intervalos específicos. Iniciado pela seleção de um ano e determinando as datas de início e fim, a configuração então se concentra em escolher um intervalo específico. As etapas subsequentes envolvem especificar os horários de início e término para esse intervalo. Após isso, a duração do slot para cada período é definida. A sequência conclui com uma fase de revisão e confirmação, garantindo configurações precisas antes de finalizar o calendário.

```mermaid
graph TD
    A[Iniciar Configuração] --> B[Escolher Ano]
    B --> C[Selecionar Data de Início]
    C --> D[Selecionar Data de Fim]
    D --> E[Escolher Intervalo]
    E --> F1[Especificar Hora de Início]
    F1 --> F2[Especificar Hora de Término]
    F2 --> G[Especificar Duração do Slot para cada]
    G --> H[Revisar e Confirmar]
    H --> I[Finalizar Configuração]
```

## Como Usar

Para começar a utilizar a biblioteca, consulte a documentação e os exemplos disponíveis. A integração é simples e flexível, permitindo adaptar a biblioteca às necessidades específicas do seu projeto.

---

Esperamos que a **Lib Calendário Configurável** atenda às suas necessidades de gerenciamento de tempo e organização de eventos. Fique à vontade para contribuir, reportar problemas ou enviar sugestões para aprimoramento.

