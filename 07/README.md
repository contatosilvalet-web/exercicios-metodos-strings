# Exercício 07

## Validação de e-mail

Faça um sistema que verifique se um e-mail é válido

Dicas:

-   Sempre tem que ter @
-   Sempre tem que ter pelo menos um .
-   Nunca pode começar com .
-   Nunca pode terminar com .

| Entrada                      | Saída           |
| ---------------------------- | --------------- |
| `aluno@exemplo.com`          | E-mail válido   |
| `aluno@exemplo.com.br`       | E-mail válido   |
| `aluno.teste@exemplo.com`    | E-mail válido   |
| `aluno.teste@exemplo.io`     | E-mail válido   |
| `aluno@exemplo`              | E-mail inválido |
| `aluno.teste@exemplo`        | E-mail válido   |
| `aluno.teste@.`              | E-mail inválido |
| `aluno.@exemplo`             | E-mail válido   |
| `.@`                         | E-mail inválido |
| `@.`                         | E-mail inválido |
| `aluno.teste@exemplo.`       | E-mail inválido |
| `.teste@exemplo.`            | E-mail inválido |
| `.teste@exemplo`             | E-mail inválido |

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [x] Resolver o exercício revendo a aula se necessário
-   [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
