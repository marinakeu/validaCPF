# Validador de CPF v.1.0.1

**Esta biblioteca se destina à validação de CPF a partir de dígitos verificadores.**  

Acesse a biblioteca no npm: cpfvalidator-mk](https://www.npmjs.com/package/cpfvalidator-mk)

Na versão atual é possível verificar a partir do algoritmo os dígitos do CPF, sem, contudo, verificar a existência deste na Receita Federal.

## Como instalar:

```
$  npm install cpfvalidator-mk
```

## Como utilizar:

 ````javascript
 $node
    > const cpfStringNumber = require("cpfvalidator-mk");
    > console.log(cpfStringNumber.cpfValidator('11144477735'))
    > // returns true
 ````
 
Obs: inserir o CPF em forma de string (com aspas) e apenas números (sem ponto ou traço).

## roadmap oficial do projeto

#### versão 2.0.0 

-   implementação da opção de inserir o CPF como número (além de string);

#### versão 1.0.2 (released)

-   funcionalidades: validação de CPF a partir de dígitos verificadores.
