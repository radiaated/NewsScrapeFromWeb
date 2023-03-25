from flask import Flask, render_template
from flask_restful import Resource, Api, fields, marshal_with, abort
from scrapers import scraper
from flask_cors import CORS


app = Flask(__name__, static_folder='dist', static_url_path='/')
app.config["CORS_ALLOW_HEADERS"] = "*"
api = Api(app)
CORS(app)


news_fields = {
    "title": fields.String,
    "cover": fields.String,
    "url": fields.String,
}

@app.route("/", methods=["GET"])
def index():
    return app.send_static_file("index.html")
    
class CNNNews(Resource):
    @marshal_with(news_fields)
    def get(self):
        try:
            news = scraper.cnn_top()
            return news, 200
        except:
            return abort(404, message="Unable to fetch news.")

class BBCNews(Resource):
    @marshal_with(news_fields)
    def get(self):
        try:
            news = scraper.bbc_top()
            return news, 200
        except:
            return abort(404, message="Unable to fetch news.")
        
class HNNews(Resource):
    @marshal_with(news_fields)
    def get(self):
        try:
            news = scraper.hn_top()
            return news, 200
        except:
            return abort(404, message="Unable to fetch news.")
        
class AFNews(Resource):
    @marshal_with(news_fields)
    def get(self):
        try:
            news = scraper.af_top()
            return news, 200
        except:
            return abort(404, message="Unable to fetch news.")


api.add_resource(CNNNews, "/top/cnn")
api.add_resource(BBCNews, "/top/bbc")
api.add_resource(HNNews, "/top/hn")
api.add_resource(AFNews, "/top/af")


if __name__ == "__main__":
    app.run(debug=True)