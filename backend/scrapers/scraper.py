from bs4 import BeautifulSoup
import requests
import json

CNN_BASE = "https://edition.cnn.com/world"
BBC_BASE = "https://www.bbc.com/news/world"
HACKERNEWS_BASE = "https://thehackernews.com"
AF_BASE = "https://m.allfootballapp.com/news"

def cnn_top():
    content = requests.get(CNN_BASE).text
    soup = BeautifulSoup(content, "html.parser") 
    top_news = soup.find("div", class_="zone__inner").find_all("div", class_="stack")

    news_list = []

    for news in top_news:
        news_item = dict() 
        x = news.find("a", class_="container__link")
        news_item["url"] = CNN_BASE.replace("/world", "") + x.attrs["href"]
        print(news_item)
        news_item["cover"] = x.find("source").attrs["srcset"]
        news_item["title"] = x.find("div", class_="container__headline").text.strip()
        news_list.append(news_item)

    return news_list

def bbc_top():
    content = requests.get(BBC_BASE).text
    soup = BeautifulSoup(content, "html.parser")
   
    top_news = soup.select_one("div.gel-layout.gel-layout--equal").select("div.gel-layout__item.nw-o-keyline")
    news_list = []


    for news in top_news:
        news_item = dict()

        try:    
            news_item["cover"] = news.find("img").attrs['data-src'].replace(f"{{width}}", news.find("img").attrs['data-widths'].split(",")[1])
        except:
            news_item["cover"] = news.find("img").attrs['src']

        news_item["title"] = news.find("h3").text.strip()
        news_item["url"] = BBC_BASE.replace("/news/world", "") + news.find("a").attrs["href"]
        news_list.append(news_item)

    
    return news_list


def hn_top():
    content = requests.get(HACKERNEWS_BASE).text
    soup = BeautifulSoup(content, "html.parser")
    top_news = soup.find("div",class_="blog-posts").find_all("a", class_="story-link")


    news_list = []

    for news in top_news:
        news_item = dict()
        news_item["url"] = news.attrs["href"]
        news_item["cover"] = news.find("img").attrs['data-src']
        news_item["title"] = news.find("h2").text.strip()
        news_list.append(news_item)
    
    return news_list

def af_top():
    content = requests.get(AF_BASE).text
    soup = BeautifulSoup(content, "html.parser")
    top_news = soup.find("div",class_="listwrap").find_all("a")

    news_list = []

    for news in top_news:
        news_item = dict()
        news_item["url"] = AF_BASE.replace("/news", "") + news.attrs["href"]
        news_item["cover"] = news.find("img").attrs["src"]
        news_item["title"] = news.find("p", class_="listTitle").text.strip()
        news_list.append(news_item)


    return news_list

