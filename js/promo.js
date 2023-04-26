;(() => {
  const urlParams = new URLSearchParams(window.location.search)
  const myParam = urlParams.get('userid')
  console.log(myParam)
  const signButton = document.querySelector('#signButton')
  if (myParam) {
    signButton.innerHTML = `<p 
    class="block py-2 pl-3 pr-4 text-gray-900 rounded"> Chào <span id='userid'>${myParam}</span> <a href="/promo.html" class='text-red-500  hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white
    md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent'>(Đăng xuất)</a></p>`
  }
})()
