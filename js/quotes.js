const quotes = [
    {
        quote: "같이 훌륭해지자",
        author: "스물다섯 스물하나",
    },
    {
        quote: "너도 괜찮고 나도 괜찮다.",
        author: "~~",
    },
    {
        quote: "작은 행동이 중요하다.",
        author: "xxx",
    },
    {
        quote: "상호 존중 대화",
        author: "무슨무슨",
    },
    {
        quote:"power of fun!",
        author: "외국작가",
    },
    {
        quote:"power of love!",
        author: "좋은생각",
    },
    {
        quote: "나 자신을 사랑하며 살자",
        author:"좋은생각",
    },
    {
        quote: "교육의 최종 목적은 행동의 변화",
        author:"어니코치",
    },
    {
        quote:"10분만 집중해보자",
        author:"김풍",
    },
    {
        quote:"질문과 호기심",
        author:"궤도",
    }
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;