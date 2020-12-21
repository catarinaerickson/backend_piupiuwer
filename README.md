# API Piupiuwer

## Criar usuário

const response = await axios({
      url: 'localhost:3333/register',
      method: 'POST',
      data: {
          username,
          password,
          email
      }
   })

## Fazer Login

const response = await axios({
    url: 'localhost:3333/login',
    method: 'POST',
    data: {
        username,
        password
    }
})

## Editar Perfil

const response = await axios({
    url: 'localhost:3333/profile',
    method: 'POST',
    headers: {
          Authorization: `JWT ${token}`
      }
    data: {
        userId,
        first_name,
        last_name,
        bio,
        photo
    }
})

## Listar Usuários

const response = await axios({
      url: 'localhost:3333/users',
      method: 'GET',
      headers: {
          Authorization: `JWT ${token}`
      }
})

## Postar novo piu

const response = await axios({
      url: 'localhost:3333/pius',
      method: 'POST',
      headers: {
          Authorization: `JWT ${token}`
      },
      data: {
          userId,
          text
      }
})

## Listar pius

const response = await axios({
      url: 'localhost:3333/pius',
      method: 'GET',
      headers: {
          Authorization: `JWT ${token}`
      }
})

## Excluir piu

const response = await axios({
      url: `localhost:3333/pius/${piuId}`,
      method: 'DELETE',
      headers: {
          Authorization: `JWT ${token}`
      }
})

## Dar like ou dislike em um piu

 const response = await axios({
      url: 'localhost:3333/pius/like',
      method: 'POST',
      headers: {
          Authorization: `JWT ${token}`
      },
      data: {
          userId,
          piuId
      }
   })

