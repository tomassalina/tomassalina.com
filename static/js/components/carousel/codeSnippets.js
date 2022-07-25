export const slider = {
  htmlString:
    '&lt;div class=&quot;product&quot;&gt;\n  &lt;h3 class=&quot;product-title&quot;&gt;Jordan 1 Retro High&lt;/h3&gt;\n  &lt;p class=&quot;product-subtitle&quot;&gt;Pollen&lt;/p&gt;\n  &lt;ul class=&quot;product-tags&quot;&gt;\n    &lt;li&gt;100% Authentic&lt;/li&gt;\n    &lt;li&gt;Condition: new&lt;/li&gt;\n  &lt;/ul&gt;\n  &lt;div class=&quot;product-actions&quot;&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n    &lt;button type=&quot;button&quot;&gt;&lt;/button&gt;\n  &lt;/div&gt;\n  &lt;canvas class=&quot;product-picture&quot; id=&quot;canvas&quot;&gt;&lt;/canvas&gt;\n  &lt;input\n    class=&quot;product-slider&quot;\n    type=&quot;range&quot;\n    min=&quot;1&quot;\n    max=&quot;36&quot;\n    value=&quot;1&quot;\n    step=&quot;1&quot;\n    id=&quot;slider&quot;\n  /&gt;\n&lt;/div&gt;',
  cssString:
    '.product {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  font: var(--body-1);\n}\n.product-title {\n  color: var(--black);\n  font-size: 20px;\n  line-height: 26px;\n}\n.product-subtitle {\n  font-size: 16px;\n  line-height: 20px;\n  color: var(--black);\n}\n.product-tags {\n  display: flex;\n  gap: 10px;\n  list-style: none;\n}\n.product-tags li {\n  font: var(--body-2);\n  font-weight: 500;\n  padding: 0 6px;\n  color: var(--secondary-color);\n  border: 1px solid rgba(0, 0, 0, 0.15);\n  border-radius: 12px;\n}\n.product-picture {\n  height: 250px;\n}\n.product-slider {\n  width: 60%;\n  height: 2px;\n  align-self: center;\n  margin-bottom: 10px;\n}\n.product-actions {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 5px;\n}\n.product-actions button {\n  width: 32px;\n  height: 32px;\n  border: none;\n  background-color: transparent;\n  color: var(--black);\n  cursor: pointer;\n}',
  jsString:
    "const slider = document.querySelector('#productSlider');\nconst canvas = document.querySelector('#canvasSlider');\nconst ctx = canvas.getContext('2d');\nconst images = [];\n\nconst handleInputSlider = e => imageRendering(e.target.value);\n\nconst imageRendering = index =>\n  ctx.drawImage(images[index], 0, 0, canvas.width, canvas.height);\n\nconst pageLoaded = () => {\n  for (let i = 1; i <= 36; i++) {\n    const number = i.toString().padStart(2, '00');\n    const url = `https://images.stockx.com/360/Air-Jordan-1-Retro-High-Pollen/Images/Air-Jordan-1-Retro-High-Pollen/Lv2/img${number}.jpg?auto=compress&w=480&q=90&dpr=2&updated_at=1626802470&h=320&fm=avif`;\n\n    const image = new Image();\n    image.src = url;\n    image.addEventListener('load', () => {\n      images[i] = image;\n      if (i === 1) {\n        imageRendering(i);\n      }\n    });\n  }\n\n  slider.addEventListener('input', handleInputSlider);\n};\n\nwindow.addEventListener('load', pageLoaded);",
};

export const devFinder = {
  htmlString:
    '&lt;div class=&quot;finder&quot;&gt;\n  &lt;h3 class=&quot;finder-logo&quot;&gt;devfinder&lt;/h3&gt;\n  &lt;form class=&quot;finder-search&quot; id=&quot;finderForm&quot;&gt;\n    &lt;input\n      autocomplete=&quot;given-name&quot;\n      type=&quot;text&quot;\n      name=&quot;search&quot;\n      id=&quot;finderSearch&quot;\n      placeholder=&quot;Search GitHub username...&quot;\n    /&gt;\n    &lt;button type=&quot;submit&quot;&gt;Search&lt;/button&gt;\n  &lt;/form&gt;\n  &lt;div class=&quot;finder-data&quot; id=&quot;finderContainer&quot;&gt;&lt;/div&gt;\n&lt;/div&gt;',
  cssString:
    '.finder {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 20px;\n}\n.finder-logo {\n  font: var(--headline-4);\n  font-size: 20px;\n  color: #e8ebef;\n}\n.finder-search {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  background-color: #1f2a48;\n  padding: 8px;\n  padding-left: 16px;\n  border-radius: 12px;\n}\n.finder-search input {\n  width: 100%;\n  background-color: transparent;\n  border: none;\n  outline: none;\n  color: white;\n  padding: 10px;\n}\n.finder-search input::placeholder {\n  color: #d9e3f7;\n}\n.finder-search button {\n  background-color: #0279fa;\n  padding-block: 8px;\n  padding-inline: 16px;\n  border: none;\n  border-radius: 5px;\n  color: white;\n  cursor: pointer;\n}\n.finder-search svg {\n  width: 30px;\n}\n\n.finder-data {\n  text-align: center;\n  background-color: #1f2a48;\n  padding: 25px 20px;\n  border-radius: 12px;\n  font: var(--body-2);\n}\n.finder-data h3 {\n  font: var(--body-1);\n  font-weight: 700;\n}\n.finder-data a {\n  font: var(--body-2);\n  color: #0279fa;\n  text-decoration: none;\n}\n.finder-avatar img {\n  width: 80px;\n  height: 80px;\n  margin-bottom: 4px;\n  border: 2px solid white;\n  border-radius: 50%;\n  object-fit: cover;\n}\n.finder-stats {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  border-top: 1px solid rgba(255, 255, 255, 0.6);\n  margin-top: 25px;\n  padding-top: 25px;\n}\n.finder-stats-item {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-weight: bold;\n}\n.finder-stats-item span {\n  font-weight: normal;\n  color: #d9e3f7;\n}',
  jsString:
    "const BASE_API = 'https://api.github.com';\n\nconst $userContainer = document.getElementById('finderContainer');\nconst $userForm = document.getElementById('finderForm');\nconst $search = document.getElementById('finderSearch');\n\nconst fetchUser = username =>\n  new Promise(async (resolve, reject) => {\n    try {\n      const res = await fetch(`${BASE_API}/users/${username}`);\n      if (!res.ok || res.status === 404) reject('User not found');\n\n      const data = await res.json();\n      resolve(data);\n    } catch (error) {\n      reject(error);\n    }\n  });\n\nconst userTemplate = user => {\n  return `\n          &lt;picture class=&quot;finder-avatar&quot;&gt;\n            &lt;img src=${user.avatar_url} loading=&quot;lazy&quot; /&gt;\n          &lt;/picture&gt;\n          &lt;h3&gt;${user.name}&lt;/h3&gt;\n          &lt;a href=${user.html_url} target=&quot;_blank&quot;&gt;@${user.login}&lt;/a&gt;\n          &lt;ul class=&quot;finder-stats&quot;&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Repos &lt;span&gt;${user.public_repos}&lt;/span&gt;&lt;/li&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Followers &lt;span&gt;${user.followers}&lt;/span&gt;&lt;/li&gt;\n            &lt;li class=&quot;finder-stats-item&quot;&gt;Following &lt;span&gt;${user.following}&lt;/span&gt;&lt;/li&gt;\n          &lt;/ul&gt;`\n};\n\nconst loadUser = async username => {\n  try {\n    const user = await fetchUser(username);\n    $userContainer.innerHTML = userTemplate(user);\n  } catch (error) {\n    alert(error);\n  }\n};\n\nconst searchUser = e => {\n  e.preventDefault();\n  const username = $search.value;\n  loadUser(username);\n  $search.value = '';\n};\n\nwindow.addEventListener('load', () => loadUser('salinatomass'));\n$userForm.addEventListener('submit', searchUser);",
};

export const comparison = {
  htmlString:
    '&lt;div class=&quot;comparison&quot;&gt;\n  &lt;div class=&quot;comparison__divider&quot; id=&quot;comparisonDivider&quot;&gt;&lt;/div&gt;\n  &lt;input\n    type=&quot;range&quot;\n    min=&quot;0&quot;\n    max=&quot;100&quot;\n    value=&quot;50&quot;\n    class=&quot;comparison__slider&quot;\n    id=&quot;comparisonSlider&quot;\n  /&gt;\n&lt;/div&gt;',
  cssString:
    ".comparison {\n  position: relative;\n\n  width: 100%;\n  height: 100%;\n\n  background-image: url('https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&w=600');\n  background-repeat: no-repeat;\n  background-position: top -50px left;\n  background-size: 384px;\n}\n\n.comparison__divider {\n  position: absolute;\n  top: 0;\n  left: 0;\n\n  width: 50%;\n  height: 100%;\n  border-right: 2px solid #ffffff;\n  box-shadow: 0 5px 10px -2px rgba(0, 0, 0, 0.5);\n\n  background-image: url('https://images.pexels.com/photos/804714/pexels-photo-804714.jpeg?auto=compress&cs=tinysrgb&w=600');\n  background-repeat: no-repeat;\n  background-position: top -50px left;\n  background-size: 384px;\n  filter: grayscale(90%);\n}\n\n.comparison__slider {\n  position: absolute;\n  outline: 0;\n  top: 0;\n  left: 0;\n  z-index: 1;\n\n  height: 100%;\n  width: 100%;\n  display: block;\n  background: transparent;\n  cursor: ew-resize;\n\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  -ms-appearance: none;\n}\n.comparison__slider::-ms-track {\n  color: transparent;\n  border-color: transparent;\n\n  -ms-appearance: none;\n}\n.comparison__slider::-moz-range-track {\n  -moz-appearance: none;\n}\n.comparison__slider::-webkit-slider-thumb {\n  width: 15px;\n  height: 15px;\n  margin-left: -3px;\n  background: #ffffff;\n  border-radius: 100%;\n  box-shadow: none;\n\n  -webkit-appearance: none;\n}\n.comparison__slider::-webkit-slider-runnable-track {\n  -webkit-appearance: none;\n}",
  jsString:
    "const divider = document.getElementById('comparisonDivider');\nconst slider = document.getElementById('comparisonSlider');\n\nslider.addEventListener('input', moveDivisor);\n\nfunction moveDivisor() {\n  divider.style.width = slider.value + '%';\n}",
};
