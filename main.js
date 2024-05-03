const api =  `https://newsapi.org/v2/everything?q=tesla&from=2024-04-02&sortBy=publishedAt&apiKey=ed42739d0cf84ee7905024d3b3a4a937`

const newscontent = document.querySelector(".content")

async function getnews(url){
    try{
        const news = await fetchNews(url)
        showNews(news)
    }
    catch(error){
        alert(error)
    }
}

async function fetchNews(url){
    const response = await fetch(url)
    if(!response.ok){
        throw new Error("Could Not fetch News Data")
    }
    const data = await response.json();
    return data.articles;
}

function showNews(news){
    let div =""
    news.forEach((news) =>{
        div += `
        <div class="card">
            <img src="${news.urlToImage}" alt="${news.title}">
            <h3>${news.title}</h3>
            <p>${news.description}</p>
        </div>
        `
    })
    newscontent.innerHTML = div
}

getnews(api)


