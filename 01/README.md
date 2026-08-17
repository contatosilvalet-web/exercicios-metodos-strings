# Exercício 01

## Sistema de filtro de comentários

Uma rede social precisa bloquear comentários que contenham palavras proibidas, como `golpe` ou `fraude`.

Faça um sistema que verifique o texto de um comentário e, caso exista qualquer uma das duas palavras citadas anteriormente, imprima: `Comentário bloqueado por conter palavras proibidas`; senão, imprima: `Comentário autorizado`.

Obs.: É necessário bloquear a palavra em qualquer formato (Maiúscula, Minúscula...).

Exemplo:

```javascript=
const comentario = "Esse anúncio parece uma fraude!";
```

Para o exemplo acima o sistema deverá imprimir:

```
Comentário bloqueado por conter palavras proibidas
```

Faça o teste com outros exemplos.

Faça commit do resultado.

---

Preencha a checklist para finalizar o exercício:

-   [x] Resolver o exercício revendo a aula se necessário
-   [x] Adicionar as mudanças aos commits (`git add .` para adicionar todos os arquivos, ou `git add nome_do_arquivo` para adicionar um arquivo específico)
-   [x] Commitar a cada mudança significativa ou na finalização do exercício (`git commit -m "Mensagem do commit"`)
-   [x] Pushar os commits na sua branch na origem (`git push origin nome-da-branch`)
