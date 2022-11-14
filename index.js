function Ignore() {
  const allPosts = document.getElementsByClassName('_post_content');
  const ignoreIds = ["1111111"]; //вставить ID пользователей посты и коментарии которых не хотите видеть формат - "1231234", "232323434"

  const toDElete = [...allPosts].filter(el => {
    if (el.getElementsByClassName('author')[0]) {

      if (ignoreIds.includes(el.getElementsByClassName('author')[0].dataset.fromId)) return el

    }
  })
  toDElete.forEach(el => el.innerHTML = '');
}

setInterval(Ignore, 1000)