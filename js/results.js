import { results, mbtis } from './data.js'

// http://127.0.0.1:5500/results.html?mbti=isfj           사용자가 선택한 결과 페이지

// 주소 쿼리스트링에서 mbti 값을 가져오기!
const mbti = new URLSearchParams(location.search).get('mbti')
console.log(mbti)
const result = results[mbtis[mbti]]


// 결과를 출력할 각 요소를 찾아요!
const titleEl = document.querySelector('.page_title')
const characterEl = document.querySelector('.character')
const boxEls = document.querySelectorAll('.box')
const jobEls = document.querySelectorAll('.job')  // 직업


// 각 요소에 내용을 채워넣어요!
titleEl.innerHTML = result.title
characterEl.src = result.character
boxEls.forEach(function (boxEl, index) {
  boxEl.innerHTML = result.results[index]
})

// 직업
jobEls.forEach(function (jobEl, index) {
  jobEl.innerHTML = result.jobs[index]
})

