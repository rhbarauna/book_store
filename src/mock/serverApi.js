import {createServer} from 'miragejs'

const server = createServer({
  routes() {
    this.namespace = "api";

    this.get("/books", (schema) => {
      return schema.db.books;
    });

    this.delete("/book/:id", (schema, request) => {
      const {id} = request.params
      schema.db.students.update(id, {deleted:true});
      return schema.db.students.filter(student => student.deleted === false);
    });
  }
});

server.db.loadData({
  'books': [
    {
      "id": 123423,
      "title": "Bootstrap 4",
      "price": 90.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/bhaqv_w_K03vnwWTS9CjbLLnOI9Ifdq9TbEYpEowN30_large.jpg?v=1526668094",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 2345342,
      "title": "Turbine seu css",
      "price": 20.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/UtsjsksRzpBazwXpCYBVASxHRrhHeLxopPGZxoyExbw_large.jpg?v=1478227993",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 34323,
      "title": "Guia frontend",
      "price": 50.00,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/guia-frontend-featured_large.png?v=1430861593",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 11,
      "title": "Saas",
      "price": 290.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/8vHZ_JPjjeGbJlEQ7oOrMuqep7XWeLUhKOJ2KZW2wlw_large.jpg?v=1470340758",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 24331,
      "title": "Turbine seu css",
      "price": 20.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/UtsjsksRzpBazwXpCYBVASxHRrhHeLxopPGZxoyExbw_large.jpg?v=1478227993",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 31,
      "title": "API REST",
      "price": 40.00,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_b015df35-d58e-499e-833b-fb87331bb05f_large.png?v=1625775240",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 13,
      "title": "Saas",
      "price": 30.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/8vHZ_JPjjeGbJlEQ7oOrMuqep7XWeLUhKOJ2KZW2wlw_large.jpg?v=1470340758",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 23,
      "title": "Turbine seu css",
      "price": 20.70,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/UtsjsksRzpBazwXpCYBVASxHRrhHeLxopPGZxoyExbw_large.jpg?v=1478227993",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 33443,
      "title": "Guia frontend",
      "price": 46.00,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/guia-frontend-featured_large.png?v=1430861593",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 341,
      "title": "React Native",
      "price": 20.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/ReactNativeAmazon-80_large.jpg?v=1629497229",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 452,
      "title": "Introdução a Data Science",
      "price": 120.90,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/p_58e66a0e-f461-4e66-8756-044e141ffa72_large.jpg?v=1582913800",
      "description": "Estamos em uma era de transição na forma como as pessoas se comportam, interagem entre si e consomem produtos e informações. Quando combinamos produto e design, a experiência vem ganhando o centro do processo. Não se consomem mais apenas produtos, mas sim lugares, interações, relações e expectativas. E tudo isso independentemente do canal, tecnologia ou formato. É preciso mudar as lentes pelas quais enxergamos o mundo à nossa volta, atuando de maneira estratégica e sendo capazes de gerar valor para toda cadeia relacionada aos nossos produtos, serviços e, claro, experiências. Neste livro, Gabriel Pinheiro mostra que o valor real de uma experiência vai além da capacidade de obter um retorno rápido e fugaz, como muitos pensam. Ele consiste em possibilitar e sustentar um retorno incremental e capaz de proporcionar inovação. Ao trabalhar com um roadmap estratégico flexível e entender ecossistemas de produto, você poderá desenvolver um mapeamento generativo e integrado de processos e produtos. Com isso, terá ferramentas para criar dinâmicas de apoio às equipes na estruturação de visões de produto compartilhadas, no uso de métricas e na capacidade de adaptação, comprovando a importância de inserir o design em uma cultura ágil de produto."
    },
    {
      "id": 343,
      "title": "PHP E MySql",
      "price": 33.00,
      "image": "https://cdn.shopify.com/s/files/1/0155/7645/products/Amazon_large.jpg?v=1626472725"
    }
  ],
  "stock": [
    {
      "id": 343,
      "quantity": 3
    },
    {
      "id": 452,
      "quantity": 0
    },
    {
      "id": 341,
      "quantity": 1
    }
  ]
})